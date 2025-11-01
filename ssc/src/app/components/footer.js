"use client";

import React from "react";
import styles from "./footer.css";
import { FaFacebook, FaYoutube, FaLinkedin, FaInstagram } from "react-icons/fa";

const socialLinks = [
  {
    Icon: FaFacebook,
    url: "https://www.facebook.com/people/Simply-Spanish-Centre/61556457779336/",
    color: "#3b5998",
    label: "Facebook",
  },
  {
    Icon: FaYoutube,
    url: "https://www.youtube.com/@SimplySpanishCentre",
    color: "#ff0000",
    label: "YouTube",
  },
  {
    Icon: FaLinkedin,
    url: "https://www.linkedin.com/company/simply-spanish-centre/",
    label: "LinkedIn",
  },
  {
    Icon: FaInstagram,
    url: "https://www.instagram.com/thesimplyspanishcentre/",
    color: "#E1306C",
    label: "Instagram",
  },
];

const Footer = () => {
  const linkStyle = {
    color: "#333",
    fontSize: "24px",
    margin: "0 10px",
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div>
          {socialLinks.map(({ Icon, url, color, label }) => (
            <a
              key={url}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
              aria-label={`Visit our ${label} page`}
              // Add a hover effect directly using an onMouseOver/onMouseOut (CSS is preferred)
              onMouseOver={(e) => (e.currentTarget.style.color = color)}
              onMouseOut={(e) =>
                (e.currentTarget.style.color = linkStyle.color)
              }
            >
              <Icon />
            </a>
          ))}
        </div>
        <p className={styles.text}>
          © 2025 Simply Language. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
