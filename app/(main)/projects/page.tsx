"use client";

import { projects } from "@/data/projects.data";
import { ProjectType } from "@/types/projects.type";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Page() {
  const [projectTypeFilter, setProjectTypeFilter] = useState<ProjectType[]>([]);

  const toggleType = (type: ProjectType) => {
    setProjectTypeFilter((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  return (
    <div>
      <div className="text-6xl font-medium text-center my-8">Projects</div>
      <div className="flex gap-4 flex-wrap my-8">
        {Object.values(ProjectType).map((type) => {
          const isSelected = projectTypeFilter.includes(type);
          return (
            <button
              key={type}
              onClick={() => toggleType(type)}
              className={`px-4 py-2 rounded transition
              ${
                isSelected
                  ? "bg-secondary text-secondary-text"
                  : "bg-gray-200 text-primary-text hover:bg-gray-300"
              }
            `}
            >
              {type}
            </button>
          );
        })}
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {projects
          .filter(
            (project) =>
              projectTypeFilter.length === 0 ||
              projectTypeFilter.includes(project.type)
          )
          .map((item, index) => (
            <Link key={index} href={`/projects/${index}`}>
              <div className="group">
                <div
                  className="aspect-square relative overflow-hidden rounded-xl 
              transition-all duration-700 ease-out 
              group-hover:scale-[1.03] group-hover:shadow-xl"
                >
                  <Image
                    src={item.profileImageUrl}
                    alt={item.name}
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <div className="min-h-32">
                  <div className="pt-4">{item.type}</div>
                  <span className="pt-2 text-2xl font-bold">{item.name}</span>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}
