import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

// Viewport тохиргоог тусад нь ингэж бичвэл Next.js-ийн шинэ хувилбарт илүү зөв ажилладаг
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover', // Энэ нь "Add to Home Screen" хийсэн үед дэлгэцийг дүүргэнэ
};

export const metadata: Metadata = {
  title: "Миний үнэмлэх",
  description: "ID Card application",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Миний үнэмлэх",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="mn">
      <head>
        {/* iOS-ийн статус барын өнгийг цагаан болгох (эсвэл чиний background-тай ижил) */}
        <link rel="apple-touch-icon" href="/apple-touch-icon.png">
        <link rel="icon" type="image/png" href="/favicon.png">
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
