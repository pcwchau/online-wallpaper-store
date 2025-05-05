import GeneralPage from "@/components/page/generalPage";
import { yarnDyedCollectionRoutes } from "@/data/route";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <GeneralPage title="Yarn Dyed Collections">
      <div className="grid grid-cols-2 gap-x-8 gap-y-6 md:grid-cols-3 md:gap-x-16">
        {yarnDyedCollectionRoutes.map((item, index) => (
          <div key={index} className="space-y-2">
            <div className="aspect-square relative">
              <Link href={item.redirectUrl}>
                <Image
                  src={item.imageUrl}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover"
                />
              </Link>
            </div>
            <div className="text-center text-lg">{item.name}</div>
          </div>
        ))}
      </div>
    </GeneralPage>
  );
}
