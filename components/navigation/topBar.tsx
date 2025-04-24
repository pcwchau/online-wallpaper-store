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
    name: "Products",
    href: null,
    subPages: [
      {
        name: "Yarn Dyed Wall Fabric",
        href: "/products/yarn-dyed-wall-fabric",
      },
      { name: "Customized Wall Fabric", href: "/products/customized-printing" },
      { name: "Embroidered Wall Fabric", href: "/products/embroidered" },
      {
        name: "Vinyl Banners & Signs",
        href: "/products/vinyl-banner-and-signs",
      },
    ],
  },
  // { name: "PROJECTS", href: "/projects" },
  { name: "Inspiration", href: "/inspiration" },
  { name: "About Us", href: "/company" },
  { name: "Partnership", href: "/partnership" },
  // { name: "CONTACT", href: "/contact" },
];

interface TopBarProps {
  isHomePage: boolean;
}

const TopBar = (props: TopBarProps) => {
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
        isScrolled
          ? "bg-primary text-primary-text"
          : props.isHomePage
          ? isMouseOnTopBar
            ? "bg-primary text-primary-text"
            : "bg-gradient-to-b from-secondary to-transparent text-secondary-text"
          : "bg-primary text-primary-text"
      }`}
      onMouseEnter={() => setIsMouseOnTopBar(true)}
      onMouseLeave={() => setIsMouseOnTopBar(false)}
    >
      {/* Please update the constant TOP_BAR_HEIGHT if the height changes */}
      <div className="container py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" onClick={() => resetMobileMenu()}>
          <Image
            src={
              isScrolled
                ? logoWordImg
                : props.isHomePage
                ? isMouseOnTopBar
                  ? logoBlackImg
                  : logoWhiteImg
                : logoBlackImg
            }
            alt="Be Shine Logo"
            priority
            sizes="(max-width: 768px) 50vw, 25vw"
            className={`${
              isScrolled
                ? "h-6"
                : props.isHomePage
                ? isMouseOnTopBar
                  ? "h-20"
                  : "h-20"
                : "h-20"
            } w-auto`}
          />
        </Link>

        {/* Pages menu - screen width >= 1024px */}
        <div className="hidden lg:flex space-x-6">
          {pages.map((item, index) => (
            <div
              key={index}
              className="relative hover:text-primary-text-hover"
              onMouseEnter={() => setHoverMenuIndex(index)}
              onMouseLeave={() => setHoverMenuIndex(null)}
            >
              {/* Link to different pages */}
              {item.href ? (
                <Link href={item.href}>{item.name}</Link>
              ) : (
                <div className="flex cursor-default items-center gap-1 text-primary-text-highlight">
                  <div>{item.name}</div>
                  <ArrowDownIcon />
                </div>
              )}

              {/* If hover and there are sub pages, show drop-down menu
               *  pointer-events-none: When the dropdown has opacity-0, it's still present in the DOM and can receive mouse events.
               */}
              {item.subPages && (
                <div
                  className={`absolute left-[-1rem] px-4 pt-10 pb-4 
                    bg-primary flex flex-col space-y-3 w-[14rem]
                    transition-all duration-300 ${
                      hoverMenuIndex === index
                        ? "opacity-100 pointer-events-auto"
                        : "opacity-0 pointer-events-none translate-y-8"
                    }`}
                >
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

        {/* Pages menu - screen width < 1024px */}
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
