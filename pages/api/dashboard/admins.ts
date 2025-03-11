import type { NextApiRequest, NextApiResponse } from 'next';
import { dbConfig } from '@/db';
import sql from 'mssql';
import jwt from 'jsonwebtoken';

const getJwtSecret = (): string => {
    const secret = process.env.JWT_SECRET;
    if (!secret) {
        throw new Error('JWT_SECRET no está definido');
    }
    return secret;
};

const JWT_SECRET = getJwtSecret();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const token = req.cookies?.token;
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        console.log("Token verificado:", decoded); 

        const pool = await sql.connect(dbConfig);
        const result = await pool.request().query(`
            SELECT id, username AS name, email FROM admins
        `);

        return res.status(200).json(result.recordset);
    } catch (error) {
        console.error('Error fetching admins:', error);
        return res.status(500).json({ message: 'Error en el servidor', error });
    }
}
