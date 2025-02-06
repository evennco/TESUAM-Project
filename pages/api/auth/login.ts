import type { NextApiRequest, NextApiResponse } from 'next';
import { db, admins } from '@/db';
import { eq } from 'drizzle-orm';
import bcrypt from 'bcrypt';
import { serialize } from 'cookie';
import { sign } from 'jsonwebtoken';
import { z } from 'zod';

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
        // Parsear el body correctamente
        const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
        const { username, password } = loginSchema.parse(body);

        // Buscar al administrador en la base de datos
        const admin = await db.select().from(admins).where(eq(admins.username, username)).get();
        if (!admin) {
            return res.status(401).json({ message: 'Credenciales inválidas' });
        }

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
        console.error('Error en el inicio de sesión:', error);
        const errorMessage = error instanceof Error ? error.message : 'Error desconocido en el servidor';
        res.status(400).json({ message: errorMessage });
    }
}
