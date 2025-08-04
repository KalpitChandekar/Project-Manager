import { NextRequest, NextResponse } from 'next/server';
import { verify } from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'simple-secret-key';

const publicRoutes = ['/landing', '/sign-in', '/sign-up', '/api/auth'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Allow public routes
  if (publicRoutes.some(route => pathname.startsWith(route))) {
    return NextResponse.next();
  }
  
  // Allow root path to handle its own redirects
  if (pathname === '/') {
    return NextResponse.next();
  }
  
  // Check for auth token
  const token = request.cookies.get('auth-token')?.value;
  
  if (!token) {
    // Redirect to sign-in if no token
    return NextResponse.redirect(new URL('/sign-in', request.url));
  }
  
  try {
    // Verify token
    verify(token, JWT_SECRET);
    return NextResponse.next();
  } catch (error) {
    // Invalid token, redirect to sign-in
    const response = NextResponse.redirect(new URL('/sign-in', request.url));
    response.cookies.delete('auth-token');
    return response;
  }
}

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
}
