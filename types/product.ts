export enum QualityType {
  FireRetardant = "Fire Retardant",
  FireRetardantAndWaterproof = "Fire Retardant and Waterproof",
  PleaseContactUs = "Please Contact Us",
}

export enum ProductCategoryType {
  YarnDyed,
  Customized,
  Embroidered,
  Vinyl,
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
