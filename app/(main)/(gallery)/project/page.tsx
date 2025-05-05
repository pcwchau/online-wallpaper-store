import GeneralPage from "@/components/page/generalPage";
import { projectCategoryRoutes } from "@/data/route";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <GeneralPage title="Project">
      <div className="grid grid-cols-2 gap-x-8 gap-y-6 lg:grid-cols-4 lg:gap-x-4">
        {projectCategoryRoutes.map((item, index) => (
          <div key={index} className="space-y-2">
            <div className="aspect-square relative">
              <Link href={item.redirectUrl}>
                <Image
                  src={item.imageUrl}
                  alt={item.name}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </Link>
            </div>
            <div className="text-center">{item.name}</div>
          </div>
        ))}
      </div>
    </GeneralPage>
  );
}
