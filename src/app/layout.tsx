"use client";

import "./globals.css";
import { ParallaxProvider } from "react-scroll-parallax";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          fontFamily: "'Igra Sans', sans-serif",
          margin: 0,
          padding: 0,
          backgroundColor: "#121416",
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <ParallaxProvider>
          {/* Верхнее меню */}
          <Header />

          {/* Основной контент */}
          <main style={{ flex: 1 }}>{children}</main>

          {/* Футер */}
          <Footer />
        </ParallaxProvider>
      </body>
    </html>
  );
}