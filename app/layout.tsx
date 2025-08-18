import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '@asynchrome',
  description: 'Next.js + React.js Developer Profile',
  icons: {
    icon: '/ava.png', // Основная favicon
    shortcut: '/ava.png', // Для ярлыков
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}