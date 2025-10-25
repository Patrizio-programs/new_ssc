import Image from "next/image";
import "./mainctc.css";

export default function Mainctc() {
  return (
    <>
      <div className="hero">
        {/* LCP-optimized hero image: use next/image with fill + priority */}
        <Image
          src="https://i.postimg.cc/JnfvwjBm/sama.png"
          alt="Spanish immersion background"
          fill
          priority
          quality={75}
          className="hero-bg"
        />

        <div className="hero-content">
          <h1 className="playfair">Dive into Spanish with us</h1>
          <p>Engaging lessons for your immersion.</p>
          <a
            href="https://tally.so/r/wvdz0d"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Get Started
          </a>
        </div>
      </div>
    </>
  );
}
