import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* 
        Tip: Added a flex layout column wrapper so that if any of your pages 
        have very little content, the footer is automatically forced to stay 
        at the absolute bottom of the screen instead of riding up.
      */}
      <body className="flex min-h-screen flex-col bg-gray-50 text-gray-900">
        <Navbar />

        {/* Added flex-grow so this area fills all available space */}
        <main className="flex-grow pt-16">
          {children}
        </main>

        {/* FIXED: Footer is now safely inside the body tags */}
        <Footer />
      </body>
    </html>
  );
}