import GeneralPage from "@/components/page/generalPage";
import { partnerships } from "@/data/partnership.data";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <GeneralPage title="Partnership">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8">
        {partnerships.map((partnership, index) => (
          <Link
            key={index}
            href={partnership.profileUrl}
            target="_blank"
            className="group"
          >
            <div
              className="aspect-square relative overflow-hidden rounded-xl 
              transition-all duration-700 ease-out 
              group-hover:scale-[1.03] group-hover:shadow-xl"
            >
              <Image
                src={partnership.imageUrl}
                alt={partnership.name}
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-contain"
              />
            </div>
            <div className="min-h-20">
              <div className="pt-4 text-xl font-bold">{partnership.name}</div>
            </div>
          </Link>
        ))}
      </div>
    </GeneralPage>
  );
}
