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
        
        {/* 🚀 Bootstrap JavaScript Scripts 🚀 */}
        
        {/* 1. Add Popper.js and Bootstrap JS bundle */}
        {/* The defer strategy is usually best for performance */}
        
        <Script
          src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
          integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"
          crossOrigin="anonymous"
          strategy="lazyOnload" // Load scripts after everything else
        />
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js"
          integrity="sha384-0pUGZvbkm6XF6gxjEnlOmo9UuJ9n401dSs0s1f/GaFq/A1Kj0J7m2J+Fqj5jY3kY"
          crossOrigin="anonymous"
          strategy="lazyOnload" // Load scripts after everything else
        />

        {/* Alternatively, if using local files and have installed the dependencies: 
          
          <Script 
            src="/path/to/popper.min.js" 
            strategy="lazyOnload" 
          />
          <Script 
            src="/path/to/bootstrap.min.js" 
            strategy="lazyOnload" 
          /> 
        */}
      </body>
    </html>
  );
}
