"use client";
import GeneralPage from "@/components/page/generalPage";
import { customPrintingProductCollections } from "@/data/product";
import useMediaQuery from "@/hook/useMediaQuery";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  const isLargeScreen = useMediaQuery("(min-width: 768px)");

  return (
    <GeneralPage title="Custom Printing">
      <div className="grid grid-cols-2 gap-4">
        {customPrintingProductCollections.map((item, index) => (
          <Link key={index} href={item.productPageUrl}>
            <div className="relative group">
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src={item.imageUrl}
                  alt={item.name}
                  fill
                  sizes="50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
              </div>
              {isLargeScreen ? (
                <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 text-center font-medium text-sm bg-primary">
                  <div className="px-6 py-2 transition-colors duration-300 hover:bg-secondary hover:text-secondary-text">
                    {item.name}
                  </div>
                </div>
              ) : (
                <div className="text-center font-medium text-sm py-2">
                  {item.name}
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>
    </GeneralPage>
  );
}
