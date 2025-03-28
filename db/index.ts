import type { NextApiRequest, NextApiResponse } from "next";
import sql, { config as SqlConfig, ConnectionPool } from "mssql";

export const dbConfig: SqlConfig = {
  user: process.env.DB_USER as string,
  password: process.env.DB_PASS as string,
  database: process.env.DB_NAME as string,
  server: process.env.DB_SERVER as string,
  port: parseInt(process.env.DB_PORT ?? "1433", 10),
  options: {
    encrypt: true,
    trustServerCertificate: false,
  },
};

let pool: ConnectionPool | null = null;

export async function connectToDatabase(): Promise<ConnectionPool> {
  try {
    if (pool) {
      return pool;
    }
    pool = await sql.connect(dbConfig);
    return pool;
  } catch (error) {
    console.error("Error al conectar a la base de datos:", error);
    throw error;
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const pool = await connectToDatabase();
    res.status(200).json({ message: "Conectado correctamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al conectar a la base de datos" });
  }
}
