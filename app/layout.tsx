import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({
    variable: '--font-inter-sans',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Roofing Website Template Powered by Webexis',
    description:
        'Affordable Ready-made 3 page roofing website for your roofing business powered by Webexis.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className={`${inter.variable} antialiased relative`}>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
