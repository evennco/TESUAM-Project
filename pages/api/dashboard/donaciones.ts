import type { NextApiRequest, NextApiResponse } from 'next';
import { dbConfig } from '@/db';
import sql from 'mssql';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const pool = await sql.connect(dbConfig);

        if (req.method === 'GET') {
            const result = await pool.request().query(`
                SELECT id, donante_id, descripcion, 
                    CONVERT(VARCHAR, fecha_donacion, 23) AS fecha_donacion, 
                    CAST(valor_aproximado AS INT) AS valor_aproximado,  -- ✅ Se devuelve como número
                    recibida, categoria_id 
                FROM donaciones
            `);            
            return res.status(200).json(result.recordset);
        }

        if (req.method === 'POST') {
            const { donante_id, descripcion, fecha_donacion, valor_aproximado, recibida, categoria_id } = req.body;

            if (!donante_id || !descripcion || !fecha_donacion || !categoria_id) {
                return res.status(400).json({ message: 'Los campos Donante, Descripción, Fecha y Categoría son obligatorios' });
            }

            await pool.request()
                .input('donante_id', sql.Int, donante_id)
                .input('descripcion', sql.NVarChar, descripcion)
                .input('fecha_donacion', sql.Date, fecha_donacion)
                .input('valor_aproximado', sql.Int, valor_aproximado || null) 
                .input('recibida', sql.Bit, recibida ?? 0)
                .input('categoria_id', sql.Int, categoria_id)
                .query(`
                    INSERT INTO donaciones (donante_id, descripcion, fecha_donacion, valor_aproximado, recibida, categoria_id)
                    VALUES (@donante_id, @descripcion, @fecha_donacion, @valor_aproximado, @recibida, @categoria_id)
                `);

            return res.status(201).json({ message: 'Donación agregada exitosamente' });
        }

        if (req.method === 'PUT') {
            const { id, donante_id, descripcion, fecha_donacion, valor_aproximado, recibida, categoria_id } = req.body;

            if (!id || !donante_id || !descripcion || !fecha_donacion || !categoria_id) {
                return res.status(400).json({ message: 'ID, Donante, Descripción, Fecha y Categoría son obligatorios' });
            }

            const result = await pool.request()
                .input('id', sql.Int, id)
                .input('donante_id', sql.Int, donante_id)
                .input('descripcion', sql.NVarChar, descripcion)
                .input('fecha_donacion', sql.Date, fecha_donacion)
                .input('valor_aproximado', sql.Int, valor_aproximado || null)
                .input('recibida', sql.Bit, recibida ?? 0)
                .input('categoria_id', sql.Int, categoria_id)
                .query(`
                    UPDATE donaciones 
                    SET donante_id = @donante_id, 
                        descripcion = @descripcion, 
                        fecha_donacion = @fecha_donacion, 
                        valor_aproximado = @valor_aproximado, 
                        recibida = @recibida, 
                        categoria_id = @categoria_id
                    WHERE id = @id
                `);

            if (result.rowsAffected[0] === 0) {
                return res.status(404).json({ message: 'Donación no encontrada o no actualizada' });
            }

            return res.status(200).json({ message: 'Donación actualizada exitosamente' });
        }

        return res.status(405).json({ message: 'Método no permitido' });
    } catch (error) {
        console.error('Error en donaciones API:', error);
        return res.status(500).json({ message: 'Error en el servidor'});
    }
}
