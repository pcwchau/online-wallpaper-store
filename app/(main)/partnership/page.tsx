import GeneralPage from "@/components/page/generalPage";
import Image from "next/image";
import Link from "next/link";

const partnerArr = [
  {
    name: "David",
    role: "Designer",
    imageUrl: "/temp-image/225x225_profile-pic.jpeg",
    profileUrl: "https://teddesign.com/",
  },
  {
    name: "David",
    role: "Designer",
    imageUrl: "/temp-image/225x225_profile-pic.jpeg",
    profileUrl: "https://teddesign.com/",
  },
  {
    name: "David",
    role: "Designer",
    imageUrl: "/temp-image/225x225_profile-pic.jpeg",
    profileUrl: "https://teddesign.com/",
  },
  {
    name: "David",
    role: "Designer",
    imageUrl: "/temp-image/225x225_profile-pic.jpeg",
    profileUrl: "https://teddesign.com/",
  },
  {
    name: "David",
    role: "Designer",
    imageUrl: "/temp-image/225x225_profile-pic.jpeg",
    profileUrl: "https://teddesign.com/",
  },
];

export default function Page() {
  return (
    <GeneralPage title="Partnership">
      <div className="grid grid-cols-2 gap-x-8 gap-y-6 md:grid-cols-3 md:gap-x-16">
        {partnerArr.map((item, index) => (
          <div key={index}>
            <div className="aspect-square relative">
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
    </GeneralPage>
  );
}
