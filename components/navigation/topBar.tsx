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
import useMediaQuery from "@/hook/useMediaQuery";
import { ProductCategoryType } from "@/types/product.type";

const topBarRoutes = [
  {
    name: "Product",
    href: null,
    subPages: [
      {
        name: ProductCategoryType.CustomPrintingWallFabric,
        href: "/product/custom-printing",
      },
      {
        name: ProductCategoryType.YarnDyedWallFabric,
        href: "/product/yarn-dyed-wall-fabric",
      },
      {
        name: ProductCategoryType.EmbroideredWallFabric,
        href: "/product/embroidered",
      },
      {
        name: ProductCategoryType.CommercialVinylAndSigns,
        href: "/product/vinyl-banner-and-signs",
      },
    ],
  },
  {
    name: "Gallery",
    href: null,
    subPages: [
      { name: "Projects", href: "/projects" },
      { name: "Inspiration", href: "/inspiration" },
    ],
  },
  {
    name: "Company",
    href: null,
    subPages: [
      { name: "About Us", href: "/about-us" },
      { name: "Qualification", href: "/qualification" },
      { name: "FAQs", href: "/faq" },
    ],
  },
  { name: "Partnership", href: "/partnership" },
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

  const isLargeScreen = useMediaQuery("(min-width: 1024px)");

  const topBarStyle = isScrolled
    ? "sm"
    : props.isHomePage
    ? isLargeScreen
      ? isMouseOnTopBar
        ? "lg"
        : "lg-transparent"
      : isMobileMenuOpen
      ? "lg"
      : "lg-transparent"
    : "lg";

  const handleMobileMenuClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setMobileMenuIndex(null);
  };

  const closeMobileMenu = () => {
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
      className={`fixed top-0 left-0 w-full z-50 font-bold ${
        topBarStyle === "lg" || topBarStyle === "sm"
          ? "bg-primary text-primary-text"
          : "bg-gradient-to-b from-secondary to-transparent text-secondary-text"
      }`}
      onMouseOver={() => setIsMouseOnTopBar(true)}
      onMouseLeave={() => setIsMouseOnTopBar(false)}
    >
      {/* Preload images */}
      <div className="hidden">
        <Image
          src={logoWordImg}
          priority
          alt="Preload Logo Word"
          sizes="(max-width: 768px) 50vw, 25vw"
        />
        <Image
          src={logoBlackImg}
          priority
          alt="Preload Logo Black"
          sizes="(max-width: 768px) 50vw, 25vw"
        />
        <Image
          src={logoWhiteImg}
          priority
          alt="Preload Logo White"
          sizes="(max-width: 768px) 50vw, 25vw"
        />
      </div>

      {/* Please update the constant TOP_BAR_HEIGHT if the height changes */}
      <div className="container py-3 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          onClick={() => {
            closeMobileMenu(); // for mobile screen
          }}
        >
          <Image
            src={
              topBarStyle === "lg"
                ? logoBlackImg
                : topBarStyle === "lg-transparent"
                ? logoWhiteImg
                : logoWordImg
            }
            alt="Be Shine Logo"
            priority
            sizes="(max-width: 768px) 50vw, 25vw"
            className={`${topBarStyle === "sm" ? "h-6" : "h-20"} w-auto`}
          />
        </Link>

        {/* Link to different pages - screen width >= 1024px */}
        <div className="hidden lg:flex space-x-6">
          {topBarRoutes.map((item, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => setHoverMenuIndex(index)}
              onMouseLeave={() => setHoverMenuIndex(null)}
            >
              {/* Products page has unique display */}
              {item.href ? (
                <Link href={item.href}>{item.name}</Link>
              ) : (
                <div
                  className={`flex cursor-default items-center gap-1 ${
                    item.name === "Product" && "text-primary-text-highlight"
                  }`}
                >
                  <div>{item.name}</div>
                  <ArrowDownIcon />
                </div>
              )}
              <div
                className={`border-b-2 transition-all duration-300 ${
                  hoverMenuIndex === index
                    ? item.name === "Products"
                      ? "border-primary-text-highlight w-full"
                      : "border-primary-border-selected w-full"
                    : "border-transparent w-0"
                }`}
              />

              {/* If hover and there are sub pages, show drop-down menu
               *  pointer-events-none: When the dropdown has opacity-0, it's still present in the DOM and can receive mouse events.
               */}
              {item.subPages && (
                <div
                  className={`absolute left-[-1rem] px-4 pt-4 pb-4
                    bg-primary flex flex-col space-y-3 w-[16rem]
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

        {/* Menu icon - screen width < 1024px */}
        <div className="lg:hidden flex items-center">
          <button onClick={handleMobileMenuClick}>
            <HamburgerMenuIcon height="2em" width="2em" />
          </button>
        </div>
      </div>

      {/* Links to different pages - screen width < 1024px */}
      {isMobileMenuOpen && (
        <div className="lg:hidden container flex flex-col space-y-4 py-4">
          {topBarRoutes.map((item, index) => (
            <div key={index} className="flex flex-col space-y-4">
              <div className="flex justify-between">
                {item.href ? (
                  <Link href={item.href} onClick={() => closeMobileMenu()}>
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
                      onClick={() => closeMobileMenu()}
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
