import type { NextApiRequest, NextApiResponse } from 'next';
import { dbConfig } from '@/db';
import sql from 'mssql';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    try {
        const pool = await sql.connect(dbConfig);
        const result = await pool.request().query(`
            SELECT id, donante_id, descripcion, fecha_donacion, valor_aproximado, recibida, categoria_id 
            FROM donaciones
        `);

        return res.status(200).json(result.recordset);
    } catch (error) {
        console.error('Error fetching donaciones:', error);
        return res.status(500).json({ message: 'Error fetching donaciones' });
    }
}
