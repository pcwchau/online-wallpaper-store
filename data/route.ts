import { ProductCategoryType } from "@/types/product";

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
        name: ProductCategoryType.CommercialVinylAndSigns,
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
    name: ProductCategoryType.CommercialVinylAndSigns,
    imageUrl: "/image/project/vinyl-banners/cover.jpg",
    redirectUrl: "/project/" + ProductCategoryType.CommercialVinylAndSigns,
  },
];
