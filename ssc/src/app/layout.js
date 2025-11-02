import { Geist, Geist_Mono } from "next/font/google";
import { Playfair_Display, Lato } from "next/font/google";
import Script from "next/script"; // ⬅️ Already imported
import "bootstrap/dist/css/bootstrap.css"; // ⬅️ Bootstrap CSS already here
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

// ... (font declarations)

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar></Navbar>
        <main>{children}</main>
        <Footer></Footer>
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
