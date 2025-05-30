import { Project, ProjectType } from "@/types/projects.type";

export const projects: Project[] = [
  {
    name: "Yu Seafood, Toronto",
    type: ProjectType.Restaurant,
    profileImageUrl: "/image/project/yu-seafood/cover.png",
    imageUrls: [
      "/image/project/yu-seafood/1.jpg",
      "/image/project/yu-seafood/2.jpg",
      "/image/project/yu-seafood/3.png",
      "/image/project/yu-seafood/4.jpg",
      "/image/project/yu-seafood/5.jpg",
      "/image/project/yu-seafood/6.jpg",
    ],
  },
  {
    name: "Seafood Princess",
    type: ProjectType.Restaurant,
    profileImageUrl: "/image/project/temp-cover.jpg",
    imageUrls: [],
  },
];
