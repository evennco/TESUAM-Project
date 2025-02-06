import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.SECRET_KEY || 'your-secret-key';

export function middleware(request: NextRequest) {
    const token = request .cookies.get('token')?.value;
    if (!token) {
      return NextResponse.redirect(new URL('/login', request.url)); // Redirecciona a la página de login si no hay token
    }

    try {
      const decoded = jwt.verify(token, SECRET_KEY);
      console.log('Token válido:', decoded);
      return NextResponse.next(request); // si el token es valido
  } catch (error) {
      console.error('Token inválido o expirado:', error);
      return NextResponse.redirect(new URL('/login', request.url));
  }
}

export const config = {
    matcher: ['/profile/:path*', '/dashboard:path'], // Estoy revisando esto con el tema del redireccionamiento a un posible crud
}