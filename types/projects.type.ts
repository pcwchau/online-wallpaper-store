export enum ProjectType {
  Restaurant = "Restaurant",
  Residential = "Residential",
}

export interface Project {
  name: string;
  address?: string;
  type: ProjectType;
  profileImageUrl: string;
  imageUrls: string[];
}
