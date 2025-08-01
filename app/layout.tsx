import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ProjectProvider } from '@/contexts/ProjectContext';
import { ClerkProvider } from '@clerk/nextjs';
import { AuthLayout } from '@/components/AuthLayout';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TaskFlow - Project Management App',
  description: 'Organize your tasks and projects efficiently',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <ProjectProvider>
            <AuthLayout>
              {children}
            </AuthLayout>
          </ProjectProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
