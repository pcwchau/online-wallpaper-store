import {
  Product,
  ProductCollection,
  QualityType,
  BackingType,
  YarnDyedCollectionType,
  MatchType,
  MaintenanceType,
  FireSafetyType,
  PrintTechnologyType,
  EnvironmentAndHealthType,
} from "@/types/product";

// For default specification, please refer to \app\(main)\product\custom-printing\page.tsx
export const customPrintingProducts: Product[] = [
  {
    name: "紗線",
    imageUrl: "/temp-image/1200x1200_3.jpg",
    priceByQuality: [
      { quality: QualityType.FireRetardant, price: 165 },
      { quality: QualityType.FireRetardantAndWaterproof, price: 231 },
    ],
  },
  {
    name: "科技皮",
    imageUrl: "/image/product/custom-printing/vinyl.jpg",
    priceByQuality: [
      { quality: QualityType.FireRetardantAndWaterproof, price: 231 },
    ],
    specification: {
      height: 9.5,
      thickness: 0.045,
      weight: 21.57,
      backing: BackingType.NonWovenPolyester,
      match: MatchType.Seamless,
      printTechnology: PrintTechnologyType.EcoUV,
      environmentAndHealth: EnvironmentAndHealthType.WHMIS2015,
      maintenance: MaintenanceType.WWMS,
      fireSafety: FireSafetyType.ClassA,
    },
  },
  {
    name: "豎紋",
    imageUrl: "/temp-image/1200x1200_2.jpg",
    priceByQuality: [
      { quality: QualityType.FireRetardant, price: 165 },
      { quality: QualityType.FireRetardantAndWaterproof, price: 231 },
    ],
  },
  {
    name: "亮銀",
    imageUrl: "/temp-image/1200x1200_5.jpg",
    priceByQuality: [
      { quality: QualityType.FireRetardantAndWaterproof, price: 330 },
    ],
  },
  {
    name: "亮金",
    imageUrl: "/temp-image/1200x1200_5.jpg",
    priceByQuality: [
      { quality: QualityType.FireRetardantAndWaterproof, price: 330 },
    ],
  },
  {
    name: "粗竹節",
    imageUrl: "/temp-image/1200x1200_9.jpg",
    priceByQuality: [
      { quality: QualityType.FireRetardantAndWaterproof, price: 330 },
    ],
  },
  {
    name: "草纖維",
    imageUrl: "/temp-image/1200x1200_6.jpg",
    priceByQuality: [{ quality: QualityType.FireRetardant, price: 330 }],
  },
  {
    name: "軟羊絨",
    imageUrl: "/temp-image/1200x1200_8.jpg",
    priceByQuality: [{ quality: QualityType.FireRetardant, price: 165 }],
  },
];

export const yarnDyedProductCollections: ProductCollection[] = [
  {
    name: YarnDyedCollectionType.CaiMa,
    imageUrl: "/image/product/cai-ma/cover-min.jpg",
    productPageUrl:
      "/product/yarn-dyed-wall-fabric/" + YarnDyedCollectionType.CaiMa,
    defaultPriceByQuality: [
      { quality: QualityType.FireRetardantAndWaterproof, price: 99 },
    ],
    defaultSpecification: {
      height: 9.5,
      thickness: 0.11,
      weight: 21.57,
      backing: BackingType.NonWovenPolyester,
      match: MatchType.Seamless,
      maintenance: MaintenanceType.WWMS,
      fireSafety: FireSafetyType.ClassA,
    },
    products: [
      {
        name: "Cai Ma | A01 | Oat Mist",
        imageUrl: "/image/product/cai-ma/A01-min.jpg",
      },
      {
        name: "Cai Ma | A10 | Ash Grey",
        imageUrl: "/image/product/cai-ma/A10-min.jpg",
      },
      {
        name: "Cai Ma | B03 | Soft Birch",
        imageUrl: "/image/product/cai-ma/B03-min.jpg",
      },
      {
        name: "Cai Ma | B08 | Icy Blue",
        imageUrl: "/image/product/cai-ma/B08-min.jpg",
      },
      {
        name: "Cai Ma | BYM03 | Sage Grid",
        imageUrl: "/image/product/cai-ma/BYM03-min.jpg",
      },
      {
        name: "Cai Ma | BYM10 | Driftwood",
        imageUrl: "/image/product/cai-ma/BYM10-min.jpg",
      },
      {
        name: "Cai Ma | BYM18 | Morning Haze",
        imageUrl: "/image/product/cai-ma/BYM18-min.jpg",
      },
    ],
  },
  {
    name: YarnDyedCollectionType.MediumLinen,
    imageUrl: "/image/product/medium-linen/A08.jpg",
    productPageUrl:
      "/product/yarn-dyed-wall-fabric/" + YarnDyedCollectionType.MediumLinen,
    defaultPriceByQuality: [
      { quality: QualityType.FireRetardantAndWaterproof, price: 99 },
    ],
    defaultSpecification: {
      height: 9.5,
      thickness: 0.11,
      weight: 21.57,
      backing: BackingType.NonWovenPolyester,
      match: MatchType.Seamless,
      maintenance: MaintenanceType.WWMS,
      fireSafety: FireSafetyType.ClassA,
    },
    products: [
      {
        name: "Medium Linen | A08",
        imageUrl: "/image/product/medium-linen/A08-min.jpg",
      },
      {
        name: "Medium Linen | A15",
        imageUrl: "/image/product/medium-linen/A15-min.jpg",
      },
      {
        name: "Medium Linen | A16",
        imageUrl: "/image/product/medium-linen/A16-min.jpg",
      },
      {
        name: "Medium Linen | A21",
        imageUrl: "/image/product/medium-linen/A21-min.jpg",
      },
      {
        name: "Medium Linen | A26",
        imageUrl: "/image/product/medium-linen/A26-min.jpg",
      },
      {
        name: "Medium Linen | A88",
        imageUrl: "/image/product/medium-linen/A88-min.jpg",
      },
      {
        name: "Medium Linen | W08",
        imageUrl: "/image/product/medium-linen/W08-min.jpg",
      },
      {
        name: "Medium Linen | Y11",
        imageUrl: "/image/product/medium-linen/Y11-min.jpg",
      },
    ],
  },
  {
    name: YarnDyedCollectionType.QC121,
    imageUrl: "/image/product/qc-121/02.jpg",
    productPageUrl:
      "/product/yarn-dyed-wall-fabric/" + YarnDyedCollectionType.QC121,
    defaultPriceByQuality: [
      { quality: QualityType.FireRetardantAndWaterproof, price: 99 },
    ],
    defaultSpecification: {
      height: 9.5,
      thickness: 0.11,
      weight: 21.57,
      backing: BackingType.NonWovenPolyester,
      match: MatchType.Seamless,
      maintenance: MaintenanceType.WWMS,
      fireSafety: FireSafetyType.ClassA,
    },
    products: [
      {
        name: "QC 121 | 02",
        imageUrl: "/image/product/qc-121/02-min.jpg",
      },
      {
        name: "QC 121 | 09",
        imageUrl: "/image/product/qc-121/09-min.jpg",
      },
      {
        name: "QC 121 | 18",
        imageUrl: "/image/product/qc-121/18-min.jpg",
      },
      {
        name: "QC 121 | 22",
        imageUrl: "/image/product/qc-121/22-min.jpg",
      },
      {
        name: "QC 121 | 24",
        imageUrl: "/image/product/qc-121/24-min.jpg",
      },
      {
        name: "QC 121 | 31",
        imageUrl: "/image/product/qc-121/31-min.jpg",
      },
    ],
  },
  {
    name: YarnDyedCollectionType.ZhuMa,
    imageUrl: "/image/product/zhu-ma/2088-01.jpg",
    productPageUrl:
      "/product/yarn-dyed-wall-fabric/" + YarnDyedCollectionType.ZhuMa,
    defaultPriceByQuality: [
      { quality: QualityType.FireRetardantAndWaterproof, price: 99 },
    ],
    defaultSpecification: {
      height: 9.5,
      thickness: 0.11,
      weight: 21.57,
      backing: BackingType.NonWovenPolyester,
      match: MatchType.Seamless,
      maintenance: MaintenanceType.WWMS,
      fireSafety: FireSafetyType.ClassA,
    },
    products: [
      {
        name: "Zhu Ma | 2088-01",
        imageUrl: "/image/product/zhu-ma/2088-01-min.jpg",
      },
      {
        name: "Zhu Ma | 2088-09",
        imageUrl: "/image/product/zhu-ma/2088-09-min.jpg",
      },
      {
        name: "Zhu Ma | 2088-11",
        imageUrl: "/image/product/zhu-ma/2088-11-min.jpg",
      },
      {
        name: "Zhu Ma | 2088-14",
        imageUrl: "/image/product/zhu-ma/2088-14-min.jpg",
      },
      {
        name: "Zhu Ma | 2088-16",
        imageUrl: "/image/product/zhu-ma/2088-16-min.jpg",
      },
      {
        name: "Zhu Ma | 2088-23",
        imageUrl: "/image/product/zhu-ma/2088-23-min.jpg",
      },
    ],
  },
  {
    name: YarnDyedCollectionType.ZR,
    imageUrl: "/image/product/zr/ZR02.jpg",
    productPageUrl:
      "/product/yarn-dyed-wall-fabric/" + YarnDyedCollectionType.ZR,
    defaultPriceByQuality: [
      { quality: QualityType.FireRetardantAndWaterproof, price: 99 },
    ],
    defaultSpecification: {
      height: 9.5,
      thickness: 0.11,
      weight: 21.57,
      backing: BackingType.NonWovenPolyester,
      match: MatchType.Seamless,
      maintenance: MaintenanceType.WWMS,
      fireSafety: FireSafetyType.ClassA,
    },
    products: [
      {
        name: "ZR | 02",
        imageUrl: "/image/product/zr/ZR02-min.jpg",
      },
      {
        name: "ZR | 08",
        imageUrl: "/image/product/zr/ZR08-min.jpg",
      },
      {
        name: "ZR | 14",
        imageUrl: "/image/product/zr/ZR14-min.jpg",
      },
      {
        name: "ZR | 15",
        imageUrl: "/image/product/zr/ZR15-min.jpg",
      },
      {
        name: "ZR | 29",
        imageUrl: "/image/product/zr/ZR29-min.jpg",
      },
      {
        name: "ZR | 34",
        imageUrl: "/image/product/zr/ZR34-min.jpg",
      },
    ],
  },
];

export const embroideredProducts: Product[] = [
  {
    name: "Please Contact Us",
    imageUrl: "/image/product/embroidered.jpg",
    priceByQuality: [{ quality: QualityType.PleaseContactUs, price: null }],
    specification: {},
  },
];

export const vinylProducts: Product[] = [
  {
    name: "Please Contact Us",
    imageUrl: "/image/product/vinyl.jpg",
    priceByQuality: [{ quality: QualityType.PleaseContactUs, price: null }],
    specification: {},
  },
];
