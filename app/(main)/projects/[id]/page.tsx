import { projects } from "@/data/projects.data";
import Image from "next/image";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = parseInt((await params).id);

  return Number.isNaN(id) || projects[id] === undefined ? (
    <div>This page could not be found.</div>
  ) : (
    <div>
      <div className="text-4xl font-semibold text-center my-8">
        {projects[id].name}
      </div>
      {[projects[id].profileImageUrl, ...projects[id].imageUrls].map(
        (imageUrl, index) => (
          <div key={index} className="relative my-12">
            <Image
              src={imageUrl}
              alt={projects[id].name}
              width={0}
              height={0}
              sizes="100vw"
              className="w-full rounded-xl"
              priority={index === 0}
            />
          </div>
        )
      )}
    </div>
  );
}
