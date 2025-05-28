import GeneralPage from "@/components/page/generalPage";
import { yarnDyedProductCollections } from "@/data/product.data";
import { ProductCategoryType } from "@/types/product.type";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <GeneralPage title={ProductCategoryType.YarnDyedWallFabric}>
      <div className="grid grid-cols-2 gap-x-8 gap-y-6 md:grid-cols-3 md:gap-x-16">
        {yarnDyedProductCollections.map((item, index) => (
          <div key={index} className="space-y-2">
            <div className="aspect-square relative">
              <Link href={item.productPageUrl}>
                <Image
                  src={item.imageUrl}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover"
                />
              </Link>
            </div>
            <div className="text-center font-medium text-sm">{item.name}</div>
          </div>
        ))}
      </div>
    </GeneralPage>
  );
}
