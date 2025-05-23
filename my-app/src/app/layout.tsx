import type { Metadata } from "next";
import { Poppins } from 'next/font/google'
import "./globals.css";


const poppins = Poppins({
  subsets: ['latin'],
  weight: [
    '100', '200', '300', '400', '500',
    '600', '700', '800', '900'
  ],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: "Vibrant Hub",
  description: "O Aplicativo De Treino Absoluto!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
