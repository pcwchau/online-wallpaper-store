import { TOP_BAR_HEIGHT } from "@/config/constant";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="container py-4">
      <div className="bg-secondary" style={{ height: TOP_BAR_HEIGHT }} />
      {children}
    </div>
  );
}
