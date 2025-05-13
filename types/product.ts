export enum ProductCategoryType {
  CustomPrintingWallFabric = "Custom Printing Wall Fabric",
  YarnDyedWallFabric = "Yarn Dyed Wall Fabric",
  EmbroideredWallFabric = "Embroidered Wall Fabric",
  VinylBanners = "Vinyl Banners",
}

export enum YarnDyedCollectionType {
  CaiMa = "Cai Ma",
  MediumLinen = "Medium Linen",
  QC121 = "QC 121",
  ZhuMa = "Zhu Ma",
  ZR = "ZR",
}

export enum QualityType {
  FireRetardant = "Fire Retardant",
  FireRetardantAndWaterproof = "Fire Retardant and Waterproof",
  PleaseContactUs = "Please Contact Us",
}

export enum SpecificationTitleType {
  Height = "Height",
  Thickness = "Thickness",
  Weight = "Weight",
  Backing = "Backing",
  Match = "Match",
  PrintTechnology = "Print Technologies",
  EnvironmentAndHealth = "Environment & Health",
  Maintenance = "Maintenance",
  FireSafety = "Fire Safety",
}

export enum BackingType {
  NonWovenPolyester = "Non-woven polyester fabric",
}

export enum MatchType {
  Seamless = "Seamless",
}

export enum PrintTechnologyType {
  EcoUV = "(Eco) Solvent Latex UV-cure",
}

export enum EnvironmentAndHealthType {
  WHMIS2015 = "Complies with the Hazardous Products Regulations (WHMIS 2015)",
}

export enum MaintenanceType {
  WWMS = "Warm water, mild soap",
}

export enum FireSafetyType {
  ClassA = "ASTM F925-13 (Class “A” fire rated)",
}

export interface PriceByQuality {
  quality: QualityType;
  price: number | null;
}

export interface Specification {
  height?: number;
  thickness?: number;
  weight?: number;
  backing?: BackingType;
  match?: MatchType;
  printTechnology?: PrintTechnologyType;
  environmentAndHealth?: EnvironmentAndHealthType;
  maintenance?: MaintenanceType;
  fireSafety?: FireSafetyType;
}

// A product may have default price and specification from its collection.
export interface Product {
  name: string;
  imageUrl: string;
  price?: PriceByQuality[];
  specification?: Specification;
}

// For example, yarn dyed wall fabric has a few collections.
// All products in one collection have the same price/quality and specification.
export interface ProductCollection {
  name: string;
  imageUrl: string;
  productPageUrl: string;
  defaultPrice: PriceByQuality[];
  defaultSpecification: Specification;
  products: Product[];
}
