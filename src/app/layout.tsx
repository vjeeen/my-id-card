import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Зөвхөн Inter фонтыг ашиглана (Энэ нь Next.js-ийн бүх хувилбарт ажилладаг)
const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "Миний үнэмлэх",
  description: "ID Card application",
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="mn">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
