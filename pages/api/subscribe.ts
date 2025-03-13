import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "@/db";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Método no permitido" });
    }

    try {
        const { email } = req.body;

        if (!email) {
            return res.status(400).json({ message: "El correo es obligatorio" });
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ message: "El formato del correo es inválido" });
        }

        const pool = await connectToDatabase();

        const existingEmail = await pool
            .request()
            .input("email", email)
            .query(`SELECT email FROM Subscribers WHERE email = @email`);

        if (existingEmail.recordset.length > 0) {
            return res.status(400).json({ message: "Ya te encuentras registrad@" });
        }

        await pool
            .request()
            .input("email", email)
            .query(`
                INSERT INTO Subscribers (email, created_at)
                VALUES (@email, GETDATE())
            `);

        return res.status(200).json({ message: "Suscripción exitosa" });
    } catch (error: any) {
        console.error("❌ Error al insertar en la base de datos:", error);
        return res.status(500).json({ message: "Error en el servidor" });
    }
}
