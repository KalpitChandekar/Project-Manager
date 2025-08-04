'use client';

import React, { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Sidebar } from '@/components/Sidebar';

interface AuthLayoutProps {
  children: React.ReactNode;
}

interface User {
  id: string;
  email: string;
  name: string;
}

export function AuthLayout({ children }: AuthLayoutProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Public routes that don't require authentication
  const publicRoutes = ['/landing', '/sign-in', '/sign-up'];
  const isPublicRoute = publicRoutes.some(route => pathname.startsWith(route));

  useEffect(() => {
    async function checkAuth() {
      try {
        const response = await fetch('/api/auth/me');
        if (response.ok) {
          const data = await response.json();
          setUser(data.user);
          
          // If user is authenticated and on public route, redirect to projects
          if (isPublicRoute) {
            router.push('/projects');
          }
        } else {
          // User is not authenticated
          setUser(null);
          
          // If trying to access protected route, redirect to landing
          if (!isPublicRoute) {
            router.push('/landing');
          }
        }
      } catch (error) {
        console.error('Auth check error:', error);
        setUser(null);
        
        if (!isPublicRoute) {
          router.push('/landing');
        }
      } finally {
        setIsLoading(false);
      }
    }

    checkAuth();
  }, [isPublicRoute, router, pathname]);

  // Show loading spinner while checking authentication
  if (isLoading) {
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
        <Sidebar user={user} />
        <main className="flex-1 overflow-auto">
          {children}
        </main>
      </div>
    );
  }

  // Fallback - should not reach here due to redirects above
  return null;
} 
