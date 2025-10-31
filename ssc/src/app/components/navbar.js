import Image from "next/image";
import Link from "next/link";

import "./navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-nav" id="nav">
      <div className="container-fluid">
        <Image
          src="https://i.postimg.cc/0NzsMw1f/logoupscale-removebg-preview.png"
          alt="Simply Spanish Centre logo"
          width={72}
          height={72}
          className="navbar-logo"
        />
        <Link className="navbar-brand" id="nav-link" href="/">
          Simply Spanish Centre
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" id="nav-link" href="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" id="nav-link" href="/About">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" id="nav-link" href="/pricing">
                Pricing
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" id="nav-link" href="/Resource">
                Resources
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
