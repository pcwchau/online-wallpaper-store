"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import HamburgerMenuIcon from "@/assets/icons/hamburgerMenuIcon";
import ArrowDownIcon from "@/assets/icons/arrowDownIcon";
import ArrowUpIcon from "@/assets/icons/arrowUpIcon";
import logoPic from "@/assets/images/company-logo.png";

const pages = [
  {
    name: "PRODUCTS",
    href: null,
    subPages: [
      {
        name: "YARN DYED WALL FABRIC",
        href: "/products/yarn-dyed-wall-fabric",
      },
      { name: "CUSTOMIZED WALL FABRIC", href: "/products/customized-printing" },
      { name: "EMBROIDERED", href: "/products/embroidered" },
      {
        name: "VINYL BANNER AND SIGNS",
        href: "/products/vinyl-banner-and-signs",
      },
    ],
  },
  { name: "PROJECTS", href: "/projects" },
  { name: "INSPIRATION", href: "/inspiration" },
  { name: "COMPANY", href: "/company" },
  { name: "PARTNERSHIP", href: "/partnership" },
  { name: "CONTACT", href: "/contact" },
];

// Please update the constant TOP_BAR_HEIGHT if the height changes
const TopBar: React.FC = () => {
  const [hoverMenuIndex, setHoverMenuIndex] = useState(-1);
  const [isSmallScreenMenuOpen, setIsSmallScreenMenuOpen] = useState(false);
  const [smallScreenMenuExpandIndex, setSmallScreenMenuExpandIndex] =
    useState(-1);

  const resetSmallScreenMenu = () => {
    setIsSmallScreenMenuOpen(false);
    setSmallScreenMenuExpandIndex(-1);
  };

  const toggleSmallScreenMenuExpandIndex = (index: number) => {
    if (smallScreenMenuExpandIndex === index) {
      setSmallScreenMenuExpandIndex(-1);
    } else {
      setSmallScreenMenuExpandIndex(index);
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-secondary/80 text-secondary-text">
      <div className="container py-4 flex justify-between items-center">
        <Link
          href="/"
          onClick={() => resetSmallScreenMenu()}
          title="Be Shine Textile Home"
        >
          <div className="h-16">
            <Image
              src={logoPic}
              alt="Be Shine Textile Logo"
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
                <div className="absolute left-[-1rem] pt-12 px-4 pb-4 bg-secondary/80 flex flex-col space-y-3 w-[16rem]">
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
          <button
            onClick={() => {
              setIsSmallScreenMenuOpen(!isSmallScreenMenuOpen);
              setSmallScreenMenuExpandIndex(-1);
            }}
          >
            <HamburgerMenuIcon height="2em" width="2em" />
          </button>
        </div>
      </div>
      {isSmallScreenMenuOpen && (
        <div className="lg:hidden container flex flex-col space-y-4 py-4">
          {pages.map((item, index) => (
            <div key={index} className="flex flex-col space-y-4">
              <div className="flex justify-between">
                {item.href ? (
                  <Link href={item.href} onClick={() => resetSmallScreenMenu()}>
                    {item.name}
                  </Link>
                ) : (
                  item.name
                )}
                {item.subPages && (
                  <button
                    onClick={() => toggleSmallScreenMenuExpandIndex(index)}
                  >
                    {smallScreenMenuExpandIndex === index ? (
                      <ArrowUpIcon />
                    ) : (
                      <ArrowDownIcon />
                    )}
                  </button>
                )}
              </div>
              {item.subPages && smallScreenMenuExpandIndex === index && (
                <div className="flex flex-col pl-8 space-y-2">
                  {item.subPages.map((subItem, subIndex) => (
                    <Link
                      href={subItem.href}
                      key={subIndex}
                      onClick={() => resetSmallScreenMenu()}
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TopBar;
