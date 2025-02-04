import React from "react";
import Link from "next/link";
import Image from "next/image";

const TopBar: React.FC = () => {
  return (
    <nav className="bg-gray-600 flex justify-between">
      <Link href="/" className="border-2 border-gray-500">
        <Image src="/company-icon.png" width={100} height={100} alt={""} />
      </Link>
      <div className="self-center">
        <Link href="/product">Product</Link>
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/inspiration">Inspiration</Link>
        <Link href="/company">Company</Link>
        <Link href="/partnership">Partnership</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default TopBar;
