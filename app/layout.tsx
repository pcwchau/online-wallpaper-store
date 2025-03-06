import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/navigation/topBar";
import { TOP_BAR_HEIGHT } from "@/config/constant";
import BottomContactBar from "@/components/navigation/bottomContactBar";
import BottomCopyrightBar from "@/components/navigation/bottomCopyrightBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-primary text-primary-text font-primary`}
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
