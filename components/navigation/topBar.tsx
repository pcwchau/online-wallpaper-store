"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import HamburgerMenu from "@/assets/icons/hamburgerMenu";

const pages = [
  { name: "Product", href: "/product" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Inspiration", href: "/inspiration" },
  { name: "Company", href: "/company" },
  { name: "Partnership", href: "/partnership" },
  { name: "Contact", href: "/contact" },
];

const TopBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-black">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <Link href="/">
          <Image
            src="/company-icon.png"
            width={100}
            height={100}
            alt={"company icon"}
          />
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
            <HamburgerMenu height="2em" width="2em" />
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="flex flex-col items-center lg:hidden">
          {pages.map((item) => (
            <Link
              href={item.href}
              className="m-4"
              key={item.name}
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
