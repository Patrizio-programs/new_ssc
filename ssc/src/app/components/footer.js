import React from "react";
import styles from "./footer.css";
import { FaFacebook, FaYoutube, FaLinkedin, FaInstagram } from 'react-icons/fa';


const socialLinks = [
  { 
    Icon: FaFacebook, 
    url: 'https://www.facebook.com/yourpage', 
    color: '#3b5998',
    label: 'Facebook'
  },
  { 
    Icon: FaYoutube, 
    url: 'https://www.youtube.com/yourchannel', 
    color: '#ff0000',
    label: 'YouTube'
  },
  { 
    Icon: FaLinkedin, 
    url: 'https://www.linkedin.com/in/yourprofile', 
    color: '#0077b5',
    label: 'LinkedIn'
  },
  { 
    Icon: FaInstagram, 
    url: 'https://www.instagram.com/yourprofile', 
    color: '#E1306C',
    label: 'Instagram'
  },
];

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.socialIcons}>
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
          onMouseOut={(e) => (e.currentTarget.style.color = linkStyle.color)}
        >
          <Icon />
        </a>
      ))}
    </div>
  
  
  </div>
          
        <p className={styles.text}>
          © 2025 Simply Language. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
