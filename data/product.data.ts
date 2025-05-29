import {
  ProductCollection,
  QualityType,
  BackingType,
  YarnDyedCollectionType,
  MatchType,
  MaintenanceType,
  FireSafetyType,
  PrintTechnologyType,
  EnvironmentAndHealthType,
  CustomPrintingCollectionType,
} from "@/types/product.type";

export const customPrintingProductCollections: ProductCollection[] = [
  {
    name: CustomPrintingCollectionType.NonWovenFabric,
    imageUrl: "/image/custom-printing-collection/non-woven-fabric/cover.jpg",
    productPageUrl:
      "/product/custom-printing/" + CustomPrintingCollectionType.NonWovenFabric,
    defaultPriceByQuality: [{ quality: QualityType.FireRetardant, price: 165 }],
    defaultSpecification: {
      height: "9 ft 6 in",
      thickness: "0.11 cm",
      weight: "21.57 g/sq. ft",
      backing: BackingType.NonWovenPolyester,
      match: MatchType.Seamless,
      printTechnology: PrintTechnologyType.EcoUV,
      environmentAndHealth: EnvironmentAndHealthType.WHMIS2015,
      maintenance: MaintenanceType.WWMS,
      fireSafety: FireSafetyType.ClassA,
    },
    products: [
      {
        name: "Soft Cashmere",
        imageUrl:
          "/image/custom-printing-collection/non-woven-fabric/soft-cashmere.jpg",
      },
      {
        name: "Natural Grassclot",
        imageUrl:
          "/image/custom-printing-collection/non-woven-fabric/natural-grassclot.jpg",
        priceByQuality: [
          { quality: QualityType.FireRetardantAndWaterproof, price: 330 },
        ],
      },
    ],
  },
  {
    name: CustomPrintingCollectionType.Yarn,
    imageUrl: "/image/custom-printing-collection/yarn/cover.jpg",
    productPageUrl:
      "/product/custom-printing/" + CustomPrintingCollectionType.Yarn,
    defaultPriceByQuality: [
      { quality: QualityType.FireRetardant, price: 165 },
      { quality: QualityType.FireRetardantAndWaterproof, price: 231 },
    ],
    defaultSpecification: {
      height: "9 ft 6 in",
      thickness: "0.11 cm",
      weight: "21.57 g/sq. ft",
      backing: BackingType.NonWovenPolyester,
      match: MatchType.Seamless,
      printTechnology: PrintTechnologyType.EcoUV,
      environmentAndHealth: EnvironmentAndHealthType.WHMIS2015,
      maintenance: MaintenanceType.WWMS,
      fireSafety: FireSafetyType.ClassA,
    },
    products: [
      {
        name: "Yarn Texture",
        imageUrl: "/image/custom-printing-collection/yarn/yarn-texture.jpg",
      },
      {
        name: "Vertical Stripes",
        imageUrl: "/image/custom-printing-collection/yarn/vertical-stripes.jpg",
      },
    ],
  },
  {
    name: CustomPrintingCollectionType.FauxLeather,
    imageUrl: "/image/custom-printing-collection/faux-leather/cover.jpg",
    productPageUrl:
      "/product/custom-printing/" + CustomPrintingCollectionType.FauxLeather,
    defaultPriceByQuality: [
      { quality: QualityType.FireRetardantAndWaterproof, price: 231 },
    ],
    defaultSpecification: {
      height: "9 ft 6 in",
      thickness: "0.045 cm",
      weight: "21.57 g/sq. ft",
      backing: BackingType.NonWovenPolyester,
      match: MatchType.Seamless,
      printTechnology: PrintTechnologyType.EcoUV,
      environmentAndHealth: EnvironmentAndHealthType.WHMIS2015,
      maintenance: MaintenanceType.WWMS,
      fireSafety: FireSafetyType.ClassA,
    },
    products: [
      {
        name: "Faux Leather | A",
        imageUrl: "/image/custom-printing-collection/faux-leather/KJ-A.jpg",
      },
      {
        name: "Faux Leather | B",
        imageUrl: "/image/custom-printing-collection/faux-leather/KJ-B.jpg",
      },
      {
        name: "Faux Leather | C",
        imageUrl: "/image/custom-printing-collection/faux-leather/KJ-C.jpg",
      },
      {
        name: "Faux Leather | D",
        imageUrl: "/image/custom-printing-collection/faux-leather/KJ-D.jpg",
      },
      {
        name: "Faux Leather | E",
        imageUrl: "/image/custom-printing-collection/faux-leather/KJ-E.jpg",
      },
      {
        name: "Faux Leather | F",
        imageUrl: "/image/custom-printing-collection/faux-leather/KJ-F.jpg",
      },
      {
        name: "Faux Leather | G",
        imageUrl: "/image/custom-printing-collection/faux-leather/KJ-G.jpg",
      },
      {
        name: "Faux Leather | H",
        imageUrl: "/image/custom-printing-collection/faux-leather/KJ-H.jpg",
      },
      {
        name: "Faux Leather | I",
        imageUrl: "/image/custom-printing-collection/faux-leather/KJ-I.jpg",
      },
      {
        name: "Faux Leather | J",
        imageUrl: "/image/custom-printing-collection/faux-leather/KJ-J.jpg",
      },
      {
        name: "Faux Leather | K",
        imageUrl: "/image/custom-printing-collection/faux-leather/KJ-K.jpg",
      },
      {
        name: "Faux Leather | L",
        imageUrl: "/image/custom-printing-collection/faux-leather/KJ-L.jpg",
      },
    ],
  },
  {
    name: CustomPrintingCollectionType.Metallic,
    imageUrl: "/image/custom-printing-collection/metallic/cover.jpg",
    productPageUrl:
      "/product/custom-printing/" + CustomPrintingCollectionType.Metallic,
    defaultPriceByQuality: [
      { quality: QualityType.FireRetardantAndWaterproof, price: 330 },
    ],
    defaultSpecification: {
      height: "9 ft 6 in",
      thickness: "0.11 cm",
      weight: "21.57 g/sq. ft",
      backing: BackingType.NonWovenPolyester,
      match: MatchType.Seamless,
      printTechnology: PrintTechnologyType.EcoUV,
      environmentAndHealth: EnvironmentAndHealthType.WHMIS2015,
      maintenance: MaintenanceType.WWMS,
      fireSafety: FireSafetyType.ClassA,
    },
    products: [
      {
        name: "Silver",
        imageUrl: "/image/custom-printing-collection/metallic/silver.jpg",
      },
      {
        name: "Gold",
        imageUrl: "/image/custom-printing-collection/metallic/gold.jpg",
      },
      {
        name: "Coarse Bamboo Slub",
        imageUrl:
          "/image/custom-printing-collection/metallic/coarse-bamboo-slub.jpg",
      },
    ],
  },
];

export const yarnDyedProductCollections: ProductCollection[] = [
  {
    name: YarnDyedCollectionType.CaiMa,
    imageUrl: "/image/yarn-dyed-collection/cai-ma/A10-min.jpg",
    productPageUrl:
      "/product/yarn-dyed-wall-fabric/" + YarnDyedCollectionType.CaiMa,
    defaultPriceByQuality: [
      { quality: QualityType.FireRetardantAndWaterproof, price: 99 },
    ],
    defaultSpecification: {
      height: "9 ft 6 in",
      thickness: "0.11 cm",
      weight: "21.57 g/sq. ft",
      backing: BackingType.NonWovenPolyester,
      match: MatchType.Seamless,
      maintenance: MaintenanceType.WWMS,
      fireSafety: FireSafetyType.ClassA,
    },
    products: [
      {
        name: "Cai Ma | A01 | Oat Mist",
        imageUrl: "/image/yarn-dyed-collection/cai-ma/A01-min.jpg",
      },
      {
        name: "Cai Ma | A10 | Ash Grey",
        imageUrl: "/image/yarn-dyed-collection/cai-ma/A10-min.jpg",
      },
      {
        name: "Cai Ma | B03 | Soft Birch",
        imageUrl: "/image/yarn-dyed-collection/cai-ma/B03-min.jpg",
      },
      {
        name: "Cai Ma | B08 | Icy Blue",
        imageUrl: "/image/yarn-dyed-collection/cai-ma/B08-min.jpg",
      },
      {
        name: "Cai Ma | BYM03 | Sage Grid",
        imageUrl: "/image/yarn-dyed-collection/cai-ma/BYM03-min.jpg",
      },
      {
        name: "Cai Ma | BYM10 | Driftwood",
        imageUrl: "/image/yarn-dyed-collection/cai-ma/BYM10-min.jpg",
      },
      {
        name: "Cai Ma | BYM18 | Morning Haze",
        imageUrl: "/image/yarn-dyed-collection/cai-ma/BYM18-min.jpg",
      },
    ],
  },
  {
    name: YarnDyedCollectionType.MediumLinen,
    imageUrl: "/image/yarn-dyed-collection/medium-linen/A26-min.jpg",
    productPageUrl:
      "/product/yarn-dyed-wall-fabric/" + YarnDyedCollectionType.MediumLinen,
    defaultPriceByQuality: [
      { quality: QualityType.FireRetardantAndWaterproof, price: 99 },
    ],
    defaultSpecification: {
      height: "9 ft 6 in",
      thickness: "0.11 cm",
      weight: "21.57 g/sq. ft",
      backing: BackingType.NonWovenPolyester,
      match: MatchType.Seamless,
      maintenance: MaintenanceType.WWMS,
      fireSafety: FireSafetyType.ClassA,
    },
    products: [
      {
        name: "Medium Linen | A08",
        imageUrl: "/image/yarn-dyed-collection/medium-linen/A08-min.jpg",
      },
      {
        name: "Medium Linen | A15",
        imageUrl: "/image/yarn-dyed-collection/medium-linen/A15-min.jpg",
      },
      {
        name: "Medium Linen | A16",
        imageUrl: "/image/yarn-dyed-collection/medium-linen/A16-min.jpg",
      },
      {
        name: "Medium Linen | A21",
        imageUrl: "/image/yarn-dyed-collection/medium-linen/A21-min.jpg",
      },
      {
        name: "Medium Linen | A26",
        imageUrl: "/image/yarn-dyed-collection/medium-linen/A26-min.jpg",
      },
      {
        name: "Medium Linen | A88",
        imageUrl: "/image/yarn-dyed-collection/medium-linen/A88-min.jpg",
      },
      {
        name: "Medium Linen | W08",
        imageUrl: "/image/yarn-dyed-collection/medium-linen/W08-min.jpg",
      },
      {
        name: "Medium Linen | Y11",
        imageUrl: "/image/yarn-dyed-collection/medium-linen/Y11-min.jpg",
      },
    ],
  },
  {
    name: YarnDyedCollectionType.QC121,
    imageUrl: "/image/yarn-dyed-collection/qc-121/18-min.jpg",
    productPageUrl:
      "/product/yarn-dyed-wall-fabric/" + YarnDyedCollectionType.QC121,
    defaultPriceByQuality: [
      { quality: QualityType.FireRetardantAndWaterproof, price: 99 },
    ],
    defaultSpecification: {
      height: "9 ft 6 in",
      thickness: "0.11 cm",
      weight: "21.57 g/sq. ft",
      backing: BackingType.NonWovenPolyester,
      match: MatchType.Seamless,
      maintenance: MaintenanceType.WWMS,
      fireSafety: FireSafetyType.ClassA,
    },
    products: [
      {
        name: "QC 121 | 02",
        imageUrl: "/image/yarn-dyed-collection/qc-121/02-min.jpg",
      },
      {
        name: "QC 121 | 09",
        imageUrl: "/image/yarn-dyed-collection/qc-121/09-min.jpg",
      },
      {
        name: "QC 121 | 18",
        imageUrl: "/image/yarn-dyed-collection/qc-121/18-min.jpg",
      },
      {
        name: "QC 121 | 22",
        imageUrl: "/image/yarn-dyed-collection/qc-121/22-min.jpg",
      },
      {
        name: "QC 121 | 24",
        imageUrl: "/image/yarn-dyed-collection/qc-121/24-min.jpg",
      },
      {
        name: "QC 121 | 31",
        imageUrl: "/image/yarn-dyed-collection/qc-121/31-min.jpg",
      },
    ],
  },
  {
    name: YarnDyedCollectionType.ZhuMa,
    imageUrl: "/image/yarn-dyed-collection/zhu-ma/2088-16-min.jpg",
    productPageUrl:
      "/product/yarn-dyed-wall-fabric/" + YarnDyedCollectionType.ZhuMa,
    defaultPriceByQuality: [
      { quality: QualityType.FireRetardantAndWaterproof, price: 99 },
    ],
    defaultSpecification: {
      height: "9 ft 6 in",
      thickness: "0.11 cm",
      weight: "21.57 g/sq. ft",
      backing: BackingType.NonWovenPolyester,
      match: MatchType.Seamless,
      maintenance: MaintenanceType.WWMS,
      fireSafety: FireSafetyType.ClassA,
    },
    products: [
      {
        name: "Zhu Ma | 2088-01",
        imageUrl: "/image/yarn-dyed-collection/zhu-ma/2088-01-min.jpg",
      },
      {
        name: "Zhu Ma | 2088-09",
        imageUrl: "/image/yarn-dyed-collection/zhu-ma/2088-09-min.jpg",
      },
      {
        name: "Zhu Ma | 2088-11",
        imageUrl: "/image/yarn-dyed-collection/zhu-ma/2088-11-min.jpg",
      },
      {
        name: "Zhu Ma | 2088-14",
        imageUrl: "/image/yarn-dyed-collection/zhu-ma/2088-14-min.jpg",
      },
      {
        name: "Zhu Ma | 2088-16",
        imageUrl: "/image/yarn-dyed-collection/zhu-ma/2088-16-min.jpg",
      },
      {
        name: "Zhu Ma | 2088-23",
        imageUrl: "/image/yarn-dyed-collection/zhu-ma/2088-23-min.jpg",
      },
    ],
  },
  {
    name: YarnDyedCollectionType.ZR,
    imageUrl: "/image/yarn-dyed-collection/zr/ZR02-min.jpg",
    productPageUrl:
      "/product/yarn-dyed-wall-fabric/" + YarnDyedCollectionType.ZR,
    defaultPriceByQuality: [
      { quality: QualityType.FireRetardantAndWaterproof, price: 99 },
    ],
    defaultSpecification: {
      height: "9 ft 6 in",
      thickness: "0.11 cm",
      weight: "21.57 g/sq. ft",
      backing: BackingType.NonWovenPolyester,
      match: MatchType.Seamless,
      maintenance: MaintenanceType.WWMS,
      fireSafety: FireSafetyType.ClassA,
    },
    products: [
      {
        name: "ZR | 02",
        imageUrl: "/image/yarn-dyed-collection/zr/ZR02-min.jpg",
      },
      {
        name: "ZR | 08",
        imageUrl: "/image/yarn-dyed-collection/zr/ZR08-min.jpg",
      },
      {
        name: "ZR | 14",
        imageUrl: "/image/yarn-dyed-collection/zr/ZR14-min.jpg",
      },
      {
        name: "ZR | 15",
        imageUrl: "/image/yarn-dyed-collection/zr/ZR15-min.jpg",
      },
      {
        name: "ZR | 29",
        imageUrl: "/image/yarn-dyed-collection/zr/ZR29-min.jpg",
      },
      {
        name: "ZR | 34",
        imageUrl: "/image/yarn-dyed-collection/zr/ZR34-min.jpg",
      },
    ],
  },
];
