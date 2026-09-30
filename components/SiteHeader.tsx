"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import OrderButton from "./OrderButton";

export default function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let frame = 0;

    const updateHeader = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setIsScrolled(window.scrollY > 28));
    };

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateHeader);
    };
  }, []);

  return (
    <header className={`site-header${isScrolled ? " is-scrolled" : ""}`}>
      <div className="header-inner">
        <a aria-label="Catalina Pizza & Chicken home" className="brand-link" href="#home">
          <Image
            className="brand-logo"
            alt="Catalina Pizza & Chicken"
            height={201}
            priority
            src="/images/branding/catalina-logo.png"
            width={252}
          />
        </a>
        <nav aria-label="Primary navigation">
          <a href="#menu">Menu</a>
          <a href="#specials">Specials</a>
          <a href="#location">Location</a>
        </nav>
        <OrderButton className="header-order">See menu &amp; order</OrderButton>
      </div>
    </header>
  );
}
