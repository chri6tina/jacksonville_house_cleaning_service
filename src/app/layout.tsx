import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PerformanceMonitor from "@/components/PerformanceMonitor";

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
  keywords: "Jacksonville cleaning service, house cleaning, office cleaning, deep cleaning, move-in move-out cleaning, eco-friendly cleaning, post-construction cleaning, recurring cleaning",
  authors: [{ name: "Jacksonville House Cleaning Service" }],
  creator: "Jacksonville House Cleaning Service",
  publisher: "Jacksonville House Cleaning Service",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Jacksonville House Cleaning Service - Professional Cleaning Services",
    description: "Professional cleaning services for homes and offices in Jacksonville, FL. Eco-friendly products, experienced staff, and guaranteed satisfaction.",
    type: "website",
    locale: "en_US",
    siteName: "Jacksonville House Cleaning Service",
    url: "https://jacksonvillehousecleaningservice.com",
    images: [
      {
        url: "/JHCSlogo.png",
        width: 400,
        height: 400,
        alt: "Jacksonville House Cleaning Service Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jacksonville House Cleaning Service - Professional Cleaning Services",
    description: "Professional cleaning services for homes and offices in Jacksonville, FL. Eco-friendly products, experienced staff, and guaranteed satisfaction.",
    images: ["/JHCSlogo.png"],
    creator: "@jacksonvillehousecleaningservice",
    site: "@jacksonvillehousecleaningservice",
  },
  alternates: {
    canonical: "https://jacksonvillehousecleaningservice.com",
  },
  verification: {
    google: "your-google-verification-code", // Replace with actual verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script 
          src="https://analytics.ahrefs.com/analytics.js" 
          data-key="SMECEsnHAn9OBCpmwyJBcA" 
          async
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PerformanceMonitor pageName="Root Layout" enableLogging={false} />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
