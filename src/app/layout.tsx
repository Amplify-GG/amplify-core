"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import { ParallaxProvider } from "react-scroll-parallax";
import Header from "../components/Header";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ParallaxProvider>
          <Header />
          {children}
        </ParallaxProvider>
      </body>
    </html>
  );
}
