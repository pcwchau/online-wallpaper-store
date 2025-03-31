import Image from "next/image";
import Link from "next/link";

const partnerArr = [
  {
    name: "David",
    role: "Designer",
    imageUrl: "/temp-image/1200x1200_1.jpg",
    profileUrl: "https://teddesign.com/",
  },
  {
    name: "David",
    role: "Designer",
    imageUrl: "/temp-image/1200x1200_1.jpg",
    profileUrl: "https://teddesign.com/",
  },
  {
    name: "David",
    role: "Designer",
    imageUrl: "/temp-image/1200x1200_1.jpg",
    profileUrl: "https://teddesign.com/",
  },
  {
    name: "David",
    role: "Designer",
    imageUrl: "/temp-image/1200x1200_1.jpg",
    profileUrl: "https://teddesign.com/",
  },
  {
    name: "David",
    role: "Designer",
    imageUrl: "/temp-image/1200x1200_1.jpg",
    profileUrl: "https://teddesign.com/",
  },
];

export default function Page() {
  return (
    <div className="space-y-8">
      <div className="text-center text-2xl">MEET OUR DESIGNER</div>
      <div className="text-center text-4xl">OUR PROFESSIONAL</div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-8">
        {partnerArr.map((item, index) => (
          <div key={index}>
            <div className="border border-black aspect-square relative">
              <Link href={item.profileUrl} target="_blank">
                <Image
                  src={item.imageUrl}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover"
                />
              </Link>
            </div>
            <div className="text-center text-xl">{item.name}</div>
            <div className="text-center text-sm">{item.role}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
