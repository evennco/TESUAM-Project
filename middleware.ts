import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
  if (process.env.NODE_ENV === 'production') {
    throw new Error('JWT_SECRET is not defined. The application cannot start without it.');
  } else {
    console.warn('Warning: JWT_SECRET is not defined. Using a default key for development.');
  }
}

export function middleware(request: NextRequest) {
    const token = request.cookies.get('token')?.value;

    if (!token) {
        console.warn('No token found, redirecting to login.');
        return NextResponse.redirect(new URL('/login', request.url)); // Redirecciona si no hay token
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET as string);
        console.log('Token válido:', decoded);
        return NextResponse.next(); // Permite continuar si el token es válido
    } catch (error) {
        console.error('Token inválido o expirado:', error);
        return NextResponse.redirect(new URL('/login', request.url)); // Redirige si el token es invalido
    }
}

export const config = {
    matcher: ['/profile/:path*', '/dashboard/:path*'], 
};
