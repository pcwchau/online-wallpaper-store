import type { Metadata } from "next";
import { Spectral } from "next/font/google";
import "./globals.css";
import BottomContactBar from "@/components/navigation/bottomContactBar";
import BottomCopyrightBar from "@/components/navigation/bottomCopyrightBar";

const spectral = Spectral({
  weight: ["400", "500", "600", "700"], // default is 400 normal
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wall Fabric | Be Shine Textile Inc.",
  keywords: ["Wallcovering", "wallpaper", "wall fabric"],
  description: "Be Shine Textile Inc.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spectral.className} antialiased bg-primary text-primary-text`}
      >
        <main>{children}</main>
        <BottomContactBar />
        <BottomCopyrightBar />
      </body>
    </html>
  );
}
