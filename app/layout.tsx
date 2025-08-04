import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ProjectProvider } from '@/contexts/ProjectContext';
import { AuthLayout } from '@/components/AuthLayout';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TaskFlow - Project Management App',
  description: 'Organize your tasks and projects efficiently',
  icons: {
    icon: '/favico.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ProjectProvider>
          <AuthLayout>
            {children}
          </AuthLayout>
        </ProjectProvider>
      </body>
    </html>
  );
}
