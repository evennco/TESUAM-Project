import type { NextApiRequest, NextApiResponse } from 'next';
import { dbConfig } from '@/db';
import bcrypt from 'bcrypt';
import { serialize } from 'cookie';
import { sign } from 'jsonwebtoken';
import { z } from 'zod';
import sql from 'mssql';

const getJwtSecret = (): string => {
    const secret = process.env.JWT_SECRET;
    if (!secret) {
        throw new Error('JWT_SECRET no está definido');
    }
    return secret;
};

const SECRET = getJwtSecret();

const loginSchema = z.object({
    username: z.string().min(1, "El nombre de usuario es obligatorio"),
    password: z.string().min(1, "La contraseña es obligatoria"),
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Método no permitido' });
    }

    try {
        const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
        const { username, password } = loginSchema.parse(body);

        const pool = await sql.connect(dbConfig); 

        // Buscar al administrador en la base de datos
        const result = await pool
            .request()
            .input('username', sql.NVarChar, username)
            .query('SELECT id, username, password FROM admins WHERE username = @username');

        if (result.recordset.length === 0) {
            return res.status(401).json({ message: 'Credenciales inválidas' });
        }

        const admin = result.recordset[0];

        // Verificar la contraseña con bcrypt
        const passwordMatch = await bcrypt.compare(password, admin.password);
        if (!passwordMatch) {
            return res.status(401).json({ message: 'Credenciales inválidas' });
        }

        // Generar el token JWT
        const token = sign({ username: admin.username, id: admin.id }, SECRET, {
            algorithm: 'HS256',
            expiresIn: '1h',
        });

        // Serializar la cookie
        const cookie = serialize('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 60 * 60, // 1 hora
            path: '/',
        });

        // Enviar la cookie en el header
        res.setHeader('Set-Cookie', cookie);
        res.status(200).json({ message: 'Inicio de sesión exitoso' });

    } catch (error) {
        console.error('❌ Error en el inicio de sesión:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
}
