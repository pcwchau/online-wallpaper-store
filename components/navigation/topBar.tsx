"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import HamburgerMenuIcon from "@/assets/icons/hamburgerMenuIcon";

const pages = [
  { name: "Product", href: "/product" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Inspiration", href: "/inspiration" },
  { name: "Company", href: "/company" },
  { name: "Partnership", href: "/partnership" },
  { name: "Contact", href: "/contact" },
];

// Please update the constant TOP_BAR_HEIGHT if the height changes
const TopBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-primary">
      <div className="container py-4 flex justify-between items-center">
        <Link href="/">
          <div className="h-16">
            <Image
              src="/company-icon.png"
              alt="Be Shine Textile"
              width={624}
              height={400}
              className="h-full w-auto"
            />
          </div>
        </Link>
        <div className="hidden lg:flex">
          {pages.map((item) => (
            <Link href={item.href} className="m-4" key={item.name}>
              {item.name}
            </Link>
          ))}
        </div>
        <div className="lg:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <HamburgerMenuIcon height="2em" width="2em" />
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="flex flex-col items-center lg:hidden space-y-4 py-4">
          {pages.map((item, index) => (
            <Link
              href={item.href}
              key={index}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default TopBar;
