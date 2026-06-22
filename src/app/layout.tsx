import type {Metadata} from 'next';
import './globals.css';
import Navigation from '@/components/Navigation';
import CustomCursor from '@/components/CustomCursor';

export const metadata: Metadata = {
  title: 'BALAJI | Portfolio',
  description: 'Premium Interaction Design & Creative Engineering.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background text-foreground overflow-x-hidden">
        <CustomCursor />
        <div className="mesh-gradient" />
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
