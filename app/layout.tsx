import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { ThemeToggle } from '@/components/theme-toggle';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mohammed Rizwan G - Portfolio',
  description: 'Final Year B.E. CSE Student | Full Stack Developer | Dhaanish Ahmed College of Engineering',
  keywords: ['Mohammed Rizwan G', 'Portfolio', 'Web Developer', 'React', 'Node.js', 'CSE Student'],
  authors: [{ name: 'Mohammed Rizwan G' }],
  openGraph: {
    title: 'Mohammed Rizwan G - Portfolio',
    description: 'Final Year B.E. CSE Student passionate about web development',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <ThemeToggle />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}