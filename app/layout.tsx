import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/navigation/topBar";
import { TOP_BAR_HEIGHT } from "@/config/constant";
import BottomContactBar from "@/components/navigation/bottomContactBar";
import BottomCopyrightBar from "@/components/navigation/bottomCopyrightBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Online Wallpaper Store",
  description: "Online Wallpaper Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} antialiased bg-primary text-primary-text`}
      >
        <TopBar />
        <div className="bg-secondary" style={{ height: TOP_BAR_HEIGHT }} />
        <main>{children}</main>
        <BottomContactBar />
        <BottomCopyrightBar />
      </body>
    </html>
  );
}
