import type { NextApiRequest, NextApiResponse } from 'next';
import { dbConfig } from '@/db';
import sql from 'mssql';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const pool = await sql.connect(dbConfig);

        if (req.method === 'GET') {
            const result = await pool.request().query(`
                SELECT id, nombre, telefono, email, direccion FROM donantes
            `);
            return res.status(200).json(result.recordset);
        }

        if (req.method === 'POST') {
            const { nombre, telefono, email, direccion } = req.body;
            if (!nombre || !email) {
                return res.status(400).json({ message: 'Nombre y Email son obligatorios' });
            }

            await pool.request()
                .input('nombre', sql.NVarChar, nombre)
                .input('telefono', sql.NVarChar, telefono)
                .input('email', sql.NVarChar, email)
                .input('direccion', sql.NVarChar, direccion)
                .query(`
                    INSERT INTO donantes (nombre, telefono, email, direccion)
                    VALUES (@nombre, @telefono, @email, @direccion)
                `);

            return res.status(201).json({ message: 'Donante agregado exitosamente' });
        }

        if (req.method === 'PUT') {
            const { id, nombre, telefono, email, direccion } = req.body;
            if (!id || !nombre || !email) {
                return res.status(400).json({ message: 'ID, Nombre y Email son obligatorios' });
            }

            await pool.request()
                .input('id', sql.Int, id)
                .input('nombre', sql.NVarChar, nombre)
                .input('telefono', sql.NVarChar, telefono)
                .input('email', sql.NVarChar, email)
                .input('direccion', sql.NVarChar, direccion)
                .query(`
                    UPDATE donantes SET nombre=@nombre, telefono=@telefono, email=@email, direccion=@direccion
                    WHERE id=@id
                `);

            return res.status(200).json({ message: 'Donante actualizado exitosamente' });
        }

        if (req.method === 'DELETE') {
            const { id } = req.body;
            if (!id) {
                return res.status(400).json({ message: 'ID es obligatorio' });
            }

            await pool.request().input('id', sql.Int, id).query(`
                DELETE FROM donantes WHERE id=@id
            `);

            return res.status(200).json({ message: 'Donante eliminado exitosamente' });
        }

        return res.status(405).json({ message: 'Método no permitido' });
    } catch (error) {
        console.error('Error en donantes API:', error);
        return res.status(500).json({ message: 'Error en el servidor' });
    }
}
