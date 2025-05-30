import GeneralPage from "@/components/page/generalPage";
import { yarnDyedProductCollections } from "@/data/product.data";
import { ProductCategoryType } from "@/types/product.type";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <GeneralPage title={ProductCategoryType.YarnDyedWallFabric}>
      <div className="text-center max-w-[40rem] mx-auto">
        We offer a variety of standard patterns in solid-colour fabrics, making
        them ideal for contractors and building projects—especially in condo
        corridors and other high-traffic areas. With multiple fabric booklets
        and a wide selection of colours and textures, you can browse our images,
        request samples, and find the perfect match for your design needs.
        Contact us to explore more options and let us seamlessly transform your
        space with the right wall finish.
      </div>
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
