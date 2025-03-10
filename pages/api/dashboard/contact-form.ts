import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "@/db";
import sql from "mssql";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "GET") {
        try {
            const pool = await connectToDatabase();
            const result = await pool.request().query("SELECT * FROM ContactForm ORDER BY created_at DESC");

            return res.status(200).json(result.recordset);
        } catch (error) {
            console.error("Error fetching contact form entries:", error);
            return res.status(500).json({ message: "Error en el servidor" });
        }
    }

    if (req.method === "DELETE") {
        try {
            const { id } = req.body;
            if (!id) {
                return res.status(400).json({ message: "ID requerido" });
            }

            const pool = await connectToDatabase();
            await pool.request().input("id", sql.Int, id).query("DELETE FROM ContactForm WHERE id = @id");

            return res.status(200).json({ message: "Mensaje eliminado con éxito" });
        } catch (error) {
            console.error("Error deleting contact form entry:", error);
            return res.status(500).json({ message: "Error en el servidor" });
        }
    }

    // ✅ Agregamos el método PUT para actualizar
    if (req.method === "PUT") {
        try {
            const { id, subject, name, email, message } = req.body;
            if (!id || !subject || !name || !email || !message) {
                return res.status(400).json({ message: "Todos los campos son obligatorios" });
            }

            const pool = await connectToDatabase();
            await pool.request()
                .input("id", sql.Int, id)
                .input("subject", sql.NVarChar, subject)
                .input("name", sql.NVarChar, name)
                .input("email", sql.NVarChar, email)
                .input("message", sql.NVarChar, message)
                .query(`
                    UPDATE ContactForm
                    SET subject = @subject, 
                        name = @name, 
                        email = @email, 
                        message = @message
                    WHERE id = @id
                `);

            return res.status(200).json({ message: "Mensaje actualizado con éxito" });
        } catch (error) {
            console.error("Error updating contact form entry:", error);
            return res.status(500).json({ message: "Error en el servidor" });
        }
    }

    return res.status(405).json({ message: "Método no permitido" });
}
