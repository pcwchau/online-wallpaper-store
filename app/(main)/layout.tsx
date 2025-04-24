import TopBar from "@/components/navigation/topBar";
import { TOP_BAR_HEIGHT } from "@/config/constant";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="container py-4">
      <div style={{ height: TOP_BAR_HEIGHT }} />
      <TopBar isHomePage={false} />
      {children}
    </div>
  );
}
