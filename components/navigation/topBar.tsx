"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import HamburgerMenuIcon from "@/assets/icons/hamburgerMenuIcon";
import ArrowDownIcon from "@/assets/icons/arrowDownIcon";
import ArrowUpIcon from "@/assets/icons/arrowUpIcon";
import logoBlackImg from "@/assets/images/company-logo.png";
import logoWhiteImg from "@/assets/images/company-logo-w.png";
import logoWordImg from "@/assets/images/company-logo-word.png";

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
  // { name: "PROJECTS", href: "/projects" },
  { name: "INSPIRATION", href: "/inspiration" },
  { name: "ABOUT US", href: "/company" },
  { name: "PARTNERSHIP", href: "/partnership" },
  // { name: "CONTACT", href: "/contact" },
];

const TopBar: React.FC = () => {
  const [isMouseOnTopBar, setIsMouseOnTopBar] = useState<boolean>(false);
  const [hoverMenuIndex, setHoverMenuIndex] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [mobileMenuIndex, setMobileMenuIndex] = useState<number | null>(null);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const resetMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setMobileMenuIndex(null);
  };

  const toggleMobileMenuIndex = (index: number) => {
    if (mobileMenuIndex === index) {
      setMobileMenuIndex(null);
    } else {
      setMobileMenuIndex(index);
    }
  };

  // Minimize the height of the top bar when scrolling down
  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 ${
        isMouseOnTopBar && !isScrolled
          ? "bg-primary text-primary-text"
          : isScrolled
          ? "bg-primary text-primary-text text-sm"
          : "bg-gradient-to-b from-secondary to-transparent text-secondary-text"
      }`}
      onMouseEnter={() => setIsMouseOnTopBar(true)}
      onMouseLeave={() => setIsMouseOnTopBar(false)}
    >
      {/* Please update the constant TOP_BAR_HEIGHT if the height changes */}
      <div className="container py-4 flex justify-between items-center">
        <Link href="/" onClick={() => resetMobileMenu()}>
          {/* Logo */}
          {isScrolled ? (
            <Image
              src={logoWordImg}
              alt="Be Shine Logo"
              priority
              sizes="(max-width: 768px) 50vw, 25vw"
              className="h-6 w-auto"
            />
          ) : (
            <Image
              src={isMouseOnTopBar ? logoBlackImg : logoWhiteImg}
              alt="Be Shine Logo"
              priority
              sizes="(max-width: 768px) 50vw, 25vw"
              className="h-20 w-auto"
            />
          )}
        </Link>
        {/* Sub menu - screen width >= 1024px */}
        <div className="hidden lg:flex space-x-6">
          {pages.map((item, index) => (
            <div
              key={index}
              className="relative hover:text-primary-text-hover"
              onMouseEnter={() => setHoverMenuIndex(index)}
              onMouseLeave={() => setHoverMenuIndex(null)}
            >
              {/* Main item */}
              {item.href ? (
                <Link href={item.href}>{item.name}</Link>
              ) : (
                <div className="flex cursor-default items-center gap-1 text-primary-text-hover">
                  <div>{item.name}</div>
                  <ArrowDownIcon />
                </div>
              )}

              {/* Hover drop down menu */}
              {hoverMenuIndex === index && item.subPages && (
                <div className="absolute left-[-1rem] pt-12 px-4 pb-4 bg-primary/80 flex flex-col space-y-3 w-[16rem]">
                  {item.subPages.map((subItem, subIndex) => (
                    <Link
                      href={subItem.href}
                      key={subIndex}
                      onClick={() => setHoverMenuIndex(null)}
                      className="text-primary-text hover:text-primary-text-hover"
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
              setIsMobileMenuOpen(!isMobileMenuOpen);
              setMobileMenuIndex(null);
            }}
          >
            <HamburgerMenuIcon height="2em" width="2em" />
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="lg:hidden container flex flex-col space-y-4 py-4">
          {pages.map((item, index) => (
            <div key={index} className="flex flex-col space-y-4">
              <div className="flex justify-between">
                {item.href ? (
                  <Link href={item.href} onClick={() => resetMobileMenu()}>
                    {item.name}
                  </Link>
                ) : (
                  <button
                    onClick={() => toggleMobileMenuIndex(index)}
                    disabled={!item.subPages}
                  >
                    {item.name}
                  </button>
                )}
                {item.subPages && (
                  <button onClick={() => toggleMobileMenuIndex(index)}>
                    {mobileMenuIndex === index ? (
                      <ArrowUpIcon />
                    ) : (
                      <ArrowDownIcon />
                    )}
                  </button>
                )}
              </div>
              {item.subPages && mobileMenuIndex === index && (
                <div className="flex flex-col pl-8 space-y-2">
                  {item.subPages.map((subItem, subIndex) => (
                    <Link
                      href={subItem.href}
                      key={subIndex}
                      onClick={() => resetMobileMenu()}
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
