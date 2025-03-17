"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import HamburgerMenuIcon from "@/assets/icons/hamburgerMenuIcon";

const pages = [
  {
    name: "PRODUCTS",
    href: null,
    subPages: [
      {
        name: "YARN DYED WALL FABRIC",
        href: "/products/yarn-dyed-wall-fabric",
      },
      { name: "CUSTOMIZED PRINTING", href: "/products/customized-printing" },
      { name: "EMBROIDERED", href: "/products/embroidered" },
      {
        name: "VINYL BANNER AND SIGNS",
        href: "/products/vinyl-banner-and-signs",
      },
    ],
  },
  { name: "PORTFOLIO", href: "/portfolio" },
  { name: "INSPIRATION", href: "/inspiration" },
  { name: "COMPANY", href: "/company" },
  { name: "PARTNERSHIP", href: "/partnership" },
  { name: "CONTACT", href: "/contact" },
];

// Please update the constant TOP_BAR_HEIGHT if the height changes
const TopBar: React.FC = () => {
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);
  const [hoverMenuIndex, setHoverMenuIndex] = useState(-1);

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-secondary/80 text-secondary-text">
      <div className="container py-4 flex justify-between items-center">
        <Link href="/" onClick={() => setIsHamburgerMenuOpen(false)}>
          <div className="h-16">
            <Image
              src="/company-logo.png"
              alt="Be Shine Textile"
              width={624}
              height={400}
              className="h-full w-auto"
            />
          </div>
        </Link>
        {/* For screen width >= 1024px */}
        <div className="hidden lg:flex space-x-6">
          {pages.map((item, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => setHoverMenuIndex(index)}
              onMouseLeave={() => setHoverMenuIndex(-1)}
            >
              {/* Main item */}
              {item.href ? (
                <Link href={item.href}>{item.name}</Link>
              ) : (
                item.name
              )}

              {/* Drop down menu */}
              {hoverMenuIndex === index && item.subPages && (
                <div className="absolute left-[-1rem] pt-[3rem] px-[1rem] pb-[1rem] bg-secondary/80 flex flex-col space-y-3 w-[16rem]">
                  {item.subPages.map((subItem, subIndex) => (
                    <Link
                      href={subItem.href}
                      key={subIndex}
                      onClick={() => setHoverMenuIndex(-1)}
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        {/* For screen width < 1024px */}
        <div className="lg:hidden">
          <button onClick={() => setIsHamburgerMenuOpen(!isHamburgerMenuOpen)}>
            <HamburgerMenuIcon height="2em" width="2em" />
          </button>
        </div>
      </div>
      {isHamburgerMenuOpen && (
        <div className="lg:hidden container flex flex-col space-y-4 py-4">
          {pages.map((item, index) => (
            <div key={index} className="flex justify-between">
              {item.href ? (
                <Link
                  href={item.href}
                  key={index}
                  onClick={() => setIsHamburgerMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ) : (
                item.name
              )}
              {item.subPages && <div>vv</div>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TopBar;
