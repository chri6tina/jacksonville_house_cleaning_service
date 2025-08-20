import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jacksonville House Cleaning Service - Professional Cleaning Services",
  description: "Professional residential and commercial cleaning services in Jacksonville, FL. Eco-friendly products, experienced staff, and guaranteed satisfaction. Book your cleaning today!",
  keywords: "Jacksonville cleaning service, house cleaning, office cleaning, deep cleaning, move-in move-out cleaning, eco-friendly cleaning",
  authors: [{ name: "Jacksonville House Cleaning Service" }],
  openGraph: {
    title: "Jacksonville House Cleaning Service",
    description: "Professional cleaning services for homes and offices in Jacksonville, FL",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
