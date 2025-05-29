export enum ProjectType {
  Restaurant = "Restaurant",
  Residential = "Residential",
}

export interface Project {
  name: string;
  type: ProjectType;
  profileImageUrl: string;
  imageUrls: string[];
}
