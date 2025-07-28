import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ProjectProvider } from '@/contexts/ProjectContext';
import { Sidebar } from '@/components/Sidebar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TaskFlow - Project Management App',
  description: 'A modern project and task management application',
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
    <html lang="en">
      <body className={`${inter.className} font-sans`}>
        <ProjectProvider>
          <div className="flex min-h-screen bg-gray-50">
            <Sidebar />
            <main className="flex-1">
              {children}
            </main>
          </div>
        </ProjectProvider>
      </body>
    </html>
  );
}
