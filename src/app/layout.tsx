import type {Metadata} from 'next';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: "Balaji S | Web Developer & UI/UX Designer",
  description: "Official portfolio of Balaji S showcasing web development, UI/UX design, and creative projects.",
  keywords: [
    "Balaji S",
    "Balaji Portfolio",
    "Web Developer",
    "UI UX Designer",
    "MCA Graduate",
    "Next.js Developer",
    "Frontend Developer",
    "Chennai"
  ],
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="google-site-verification" content="ltwGWi7ePYFuQYqurqeg-wI28mLXOiTkYW70wWUd_M4" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background text-foreground overflow-x-hidden">
        <div className="mesh-gradient" />
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
