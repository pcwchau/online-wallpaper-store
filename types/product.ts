export enum QualityType {
  FireRetardant = "Fire Retardant",
  FireRetardantAndWaterproof = "Fire Retardant and Waterproof",
  PleaseContactUs = "Please Contact Us",
}

export enum ProductCategoryType {
  CustomPrintingWallFabric = "Custom Printing Wall Fabric",
  YarnDyedWallFabric = "Yarn Dyed Wall Fabric",
  EmbroideredWallFabric = "Embroidered Wall Fabric",
  VinylBanners = "Vinyl Banners",
}

export enum YarnDyedCollectionType {
  CaiMa = "Cai Ma",
  MediumLinen = "Medium Linen",
  QC121 = "QC-121",
  ZhuMa = "Zhu Ma",
  ZR = "ZR",
}

export enum SubstrateType {
  NonWovenPolyester = "Non-woven polyester fabric",
}

export interface Specification {
  length?: number;
  width?: number;
  thickness?: number;
  weight?: number;
  substrate?: SubstrateType;
}

export interface Product {
  name: string;
  imageUrl: string;
  priceByQualityArr: { quality: QualityType; price: number | null }[];
  specification: Specification;
}

export interface ProductCollection {
  name: string;
  imageUrl: string;
  productPageUrl: string;
  products: Product[];
}
