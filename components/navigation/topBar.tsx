"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import HamburgerIcon from "@/assets/icons/hamburger";

const TopBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/">
          <Image src="/company-icon.png" width={100} height={100} alt={""} />
        </Link>
        <div className="hidden lg:flex">
          {[
            { name: "Product", href: "/product" },
            { name: "Portfolio", href: "/portfolio" },
            { name: "Inspiration", href: "/inspiration" },
            { name: "Company", href: "/company" },
            { name: "Partnership", href: "/partnership" },
            { name: "Contact", href: "/contact" },
          ].map((item) => (
            <Link href={item.href} className="m-4" key={item.name}>
              {item.name}
            </Link>
          ))}
          {/* <HamburgerIcon /> */}
        </div>
        <div className="lg:hidden">
          <HamburgerIcon />
        </div>
      </div>
    </nav>
  );
};

export default TopBar;
