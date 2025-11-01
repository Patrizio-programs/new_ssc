import { Geist, Geist_Mono } from "next/font/google";
import { Playfair_Display, Lato } from "next/font/google";
import Script from "next/script";
import "bootstrap/dist/css/bootstrap.css";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const playfair = Playfair_Display({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const lato = Lato({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const geistSans = Geist({
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar></Navbar>
        <main>{children}</main>

        <Footer></Footer>
      </body>
    </html>
  );
}
