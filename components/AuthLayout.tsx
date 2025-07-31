'use client';

import React, { useEffect } from 'react';
import { useUser } from '@clerk/nextjs';
import { useRouter, usePathname } from 'next/navigation';
import { Sidebar } from '@/components/Sidebar';

interface AuthLayoutProps {
  children: React.ReactNode;
}

export function AuthLayout({ children }: AuthLayoutProps) {
  const { user, isLoaded } = useUser();
  const router = useRouter();
  const pathname = usePathname();

  // Public routes that don't require authentication
  const publicRoutes = ['/landing', '/sign-in', '/sign-up'];
  const isPublicRoute = publicRoutes.some(route => pathname.startsWith(route));

  useEffect(() => {
    if (isLoaded) {
      if (!user && !isPublicRoute) {
        // Redirect to landing page if user is not authenticated and trying to access protected route
        router.push('/landing');
      } else if (user && isPublicRoute) {
        // Redirect to projects if user is authenticated and on public route
        router.push('/projects');
      }
    }
  }, [isLoaded, user, isPublicRoute, router, pathname]);

  // Show loading spinner while checking authentication
  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-600"></div>
      </div>
    );
  }

  // For public routes (landing, sign-in, sign-up), don't show sidebar
  if (isPublicRoute) {
    return <>{children}</>;
  }

  // For authenticated users, show sidebar layout
  if (user) {
    return (
      <div className="flex h-screen">
        <Sidebar />
        <main className="flex-1 overflow-auto">
          {children}
        </main>
      </div>
    );
  }

  // Fallback - should not reach here due to redirects above
  return null;
} 
