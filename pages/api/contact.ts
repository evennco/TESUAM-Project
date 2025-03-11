import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "@/db";
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Método no permitido" });
    }

    try {
        const { subject, name, email, message } = req.body;

        if (!subject || !name || !email || !message) {
            return res.status(400).json({ message: "Todos los campos son obligatorios" });
        }

        const pool = await connectToDatabase();

        const result = await pool
            .request()
            .input("subject", subject)
            .input("name", name)
            .input("email", email)
            .input("message", message)
            .query(`
                INSERT INTO ContactForm (subject, name, email, message, created_at)
                VALUES (@subject, @name, @email, @message, GETDATE())
            `);

        return res.status(200).json({ message: "Formulario enviado con éxito" });
    } catch (error) {
        console.error("❌ Error al insertar en la base de datos:", error);
        return res.status(500).json({ message: "Error en el servidor" });
    }
}
