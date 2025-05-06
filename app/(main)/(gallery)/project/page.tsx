"use client";
import GeneralPage from "@/components/page/generalPage";
import { projectCategoryRoutes } from "@/data/route";
import useMediaQuery from "@/hook/useMediaQuery";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  const isLargeScreen = useMediaQuery("(min-width: 640px)");

  return (
    <GeneralPage title="Project">
      <div className="grid grid-cols-2 gap-4">
        {projectCategoryRoutes.map((item, index) => (
          <Link key={index} href={item.redirectUrl}>
            <div className="relative group">
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src={item.imageUrl}
                  alt={item.name}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
              </div>
              {isLargeScreen ? (
                <div
                  className="absolute bottom-[10%] left-1/2 -translate-x-1/2 px-8 py-2 
                  text-center font-bold text-sm bg-primary rounded-md 
                hover:bg-secondary hover:text-secondary-text"
                >
                  {item.name}
                </div>
              ) : (
                <div className="text-center font-bold text-sm py-2">
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
