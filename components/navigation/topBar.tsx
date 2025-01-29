import React from "react";
import Link from "next/link";
import Image from "next/image";

const TopBar: React.FC = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <Link href="/">
        <Image
          src="/company-icon.png"
          width={100}
          height={100}
          alt="Picture of the author"
        />
      </Link>
      <Link href="/product">Product</Link>
      <Link href="/portfolio">Portfolio</Link>
      <Link href="/company">Company</Link>
    </nav>
  );
};

export default TopBar;
