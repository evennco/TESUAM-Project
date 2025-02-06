import { NextApiRequest, NextApiResponse } from "next";
import { parse } from "cookie";
import { verify } from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET as string;

export default function cookieCheck(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const cookies = req.headers.cookie ? parse(req.headers.cookie) : {};
    const token = cookies.token; // Asegúrate de que coincida con la cookie creada en login

    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    try {
      const decoded = verify(token, SECRET);
      return res.status(200).json({ message: "Authorized", user: decoded });
    } catch (error) {
      return res.status(401).json({ message: "Invalid Token" });
    }
  }

  return res.status(405).json({ message: "Method Not Allowed" });
}
