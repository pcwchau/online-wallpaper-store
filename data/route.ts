import { ProductCategoryType, YarnDyedCollectionType } from "@/types/product";

export const topBarRoutes = [
  {
    name: "Product",
    href: null,
    subPages: [
      {
        name: ProductCategoryType.CustomPrintingWallFabric,
        href: "/product/custom-printing",
      },
      {
        name: ProductCategoryType.YarnDyedWallFabric,
        href: "/product/yarn-dyed-wall-fabric",
      },
      {
        name: ProductCategoryType.EmbroideredWallFabric,
        href: "/product/embroidered",
      },
      {
        name: ProductCategoryType.VinylBanners,
        href: "/product/vinyl-banner-and-signs",
      },
    ],
  },
  {
    name: "Gallery",
    href: null,
    subPages: [
      { name: "Project", href: "/project" },
      { name: "Inspiration", href: "/inspiration" },
    ],
  },
  {
    name: "Company",
    href: null,
    subPages: [
      { name: "About Us", href: "/about-us" },
      { name: "Qualification", href: "/qualification" },
      { name: "FAQs", href: "/faq" },
    ],
  },
  { name: "Partnership", href: "/partnership" },
];

export const yarnDyedCollectionRoutes = [
  {
    name: YarnDyedCollectionType.CaiMa,
    imageUrl: "/image/product/cai-ma/IMG_0334.jpg",
    redirectUrl:
      "/product/yarn-dyed-wall-fabric/" + YarnDyedCollectionType.CaiMa,
  },
  {
    name: "Collection 2",
    imageUrl: "/temp-image/1200x1200_1.jpg",
    redirectUrl: "/product/yarn-dyed-wall-fabric/collection-2",
  },
  {
    name: "Collection 3",
    imageUrl: "/temp-image/1200x1200_1.jpg",
    redirectUrl: "/product/yarn-dyed-wall-fabric/collection-3",
  },
  {
    name: "Collection 4",
    imageUrl: "/temp-image/1200x1200_1.jpg",
    redirectUrl: "/product/yarn-dyed-wall-fabric/collection-4",
  },
  {
    name: "Collection 5",
    imageUrl: "/temp-image/1200x1200_1.jpg",
    redirectUrl: "/product/yarn-dyed-wall-fabric/collection-5",
  },
];

export const projectCategoryRoutes = [
  {
    name: ProductCategoryType.CustomPrintingWallFabric,
    imageUrl: "/image/project/custom-printing/cover.jpg",
    redirectUrl: "/project/" + ProductCategoryType.CustomPrintingWallFabric,
  },
  {
    name: ProductCategoryType.YarnDyedWallFabric,
    imageUrl: "/image/project/yarn-dyed/cover.jpg",
    redirectUrl: "/project/" + ProductCategoryType.YarnDyedWallFabric,
  },
  {
    name: ProductCategoryType.EmbroideredWallFabric,
    imageUrl: "/image/project/embroidered/cover.jpg",
    redirectUrl: "/project/" + ProductCategoryType.EmbroideredWallFabric,
  },
  {
    name: ProductCategoryType.VinylBanners,
    imageUrl: "/image/project/vinyl-banners/cover.jpg",
    redirectUrl: "/project/" + ProductCategoryType.VinylBanners,
  },
];
