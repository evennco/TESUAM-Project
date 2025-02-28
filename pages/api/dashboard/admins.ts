import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '@/db'; 
import { admins } from '../../../db/schema';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET as string;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);

        if (!decoded || (decoded as any).role !== 'admin') {
            return res.status(403).json({ message: 'Forbidden' });
        }

        const result = await db.select({
            id: admins.id,
            name: admins.username,
            email: admins.email
        }).from(admins).execute(); 

        return res.status(200).json(result);
    } catch (error) {
        console.error('Error fetching admins:', error);
        return res.status(500).json({ message: 'Error fetching admins' });
    }
}
