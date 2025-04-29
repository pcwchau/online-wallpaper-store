import GeneralPage from "@/components/page/generalPage";
import Image from "next/image";
import Link from "next/link";

const collectionArr = [
  {
    name: "Collection 1",
    imageUrl: "/temp-image/1200x1200_1.jpg",
    redirectUrl: "/products/yarn-dyed-wall-fabric/collection-1",
  },
  {
    name: "Collection 2",
    imageUrl: "/temp-image/1200x1200_1.jpg",
    redirectUrl: "/products/yarn-dyed-wall-fabric/collection-2",
  },
  {
    name: "Collection 3",
    imageUrl: "/temp-image/1200x1200_1.jpg",
    redirectUrl: "/products/yarn-dyed-wall-fabric/collection-3",
  },
  {
    name: "Collection 4",
    imageUrl: "/temp-image/1200x1200_1.jpg",
    redirectUrl: "/products/yarn-dyed-wall-fabric/collection-4",
  },
  {
    name: "Collection 5",
    imageUrl: "/temp-image/1200x1200_1.jpg",
    redirectUrl: "/products/yarn-dyed-wall-fabric/collection-5",
  },
];

export default function Page() {
  return (
    <GeneralPage title="Yarn Dyed Collections">
      <div className="text-center text-sm">
        Robert Allen invites you to explore the newest additions to our notable
        and comprehensive fabric library that spans the spectrum of color,
        pattern, texture and durability for all of your design project needs.
        From Robert Allen to Beacon Hill, Robert Allen @ Home and Contract,
        you&apos;ll find coordinated collections of on-trend and timeless
        upholstery and multi-purpose fabrics.
      </div>
      <div className="grid grid-cols-2 gap-x-16 gap-y-6 md:grid-cols-3 lg:grid-cols-4">
        {collectionArr.map((item, index) => (
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
