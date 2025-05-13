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

export const customizedProducts: Product[] = [
  {
    name: "紗線",
    imageUrl: "/temp-image/1200x1200_3.jpg",
    price: [
      { quality: QualityType.FireRetardant, price: 165 },
      { quality: QualityType.FireRetardantAndWaterproof, price: 231 },
    ],
    specification: {
      height: 9.5,
      thickness: 0.11,
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
    name: "科技皮",
    imageUrl: "/image/product/custom-printing/vinyl.jpg",
    price: [{ quality: QualityType.FireRetardantAndWaterproof, price: 231 }],
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
    price: [
      { quality: QualityType.FireRetardant, price: 165 },
      { quality: QualityType.FireRetardantAndWaterproof, price: 231 },
    ],
    specification: {
      height: 9.5,
      thickness: 0.11,
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
    name: "亮銀",
    imageUrl: "/temp-image/1200x1200_5.jpg",
    price: [{ quality: QualityType.FireRetardantAndWaterproof, price: 330 }],
    specification: {
      height: 9.5,
      thickness: 0.11,
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
    name: "亮金",
    imageUrl: "/temp-image/1200x1200_5.jpg",
    price: [{ quality: QualityType.FireRetardantAndWaterproof, price: 330 }],
    specification: {
      height: 9.5,
      thickness: 0.11,
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
    name: "粗竹節",
    imageUrl: "/temp-image/1200x1200_9.jpg",
    price: [{ quality: QualityType.FireRetardantAndWaterproof, price: 330 }],
    specification: {
      height: 9.5,
      thickness: 0.11,
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
    name: "草纖維",
    imageUrl: "/temp-image/1200x1200_6.jpg",
    price: [{ quality: QualityType.FireRetardant, price: 330 }],
    specification: {
      height: 9.5,
      thickness: 0.11,
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
    name: "軟羊絨",
    imageUrl: "/temp-image/1200x1200_8.jpg",
    price: [{ quality: QualityType.FireRetardant, price: 165 }],
    specification: {
      height: 9.5,
      thickness: 0.11,
      weight: 21.57,
      backing: BackingType.NonWovenPolyester,
      match: MatchType.Seamless,
      printTechnology: PrintTechnologyType.EcoUV,
      environmentAndHealth: EnvironmentAndHealthType.WHMIS2015,
      maintenance: MaintenanceType.WWMS,
      fireSafety: FireSafetyType.ClassA,
    },
  },
];

export const yarnDyedProductCollections: ProductCollection[] = [
  {
    name: YarnDyedCollectionType.CaiMa,
    imageUrl: "/image/product/cai-ma/cover.jpg",
    productPageUrl:
      "/product/yarn-dyed-wall-fabric/" + YarnDyedCollectionType.CaiMa,
    defaultPrice: [
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
        imageUrl: "/image/product/cai-ma/A01.jpg",
      },
      {
        name: "Cai Ma | A10 | Ash Grey",
        imageUrl: "/image/product/cai-ma/A10.jpg",
      },
      {
        name: "Cai Ma | B03 | Soft Birch",
        imageUrl: "/image/product/cai-ma/B03.jpg",
      },
      {
        name: "Cai Ma | B08 | Icy Blue",
        imageUrl: "/image/product/cai-ma/B08.jpg",
      },
      {
        name: "Cai Ma | BYM03 | Sage Grid",
        imageUrl: "/image/product/cai-ma/BYM03.jpg",
      },
      {
        name: "Cai Ma | BYM10 | Driftwood",
        imageUrl: "/image/product/cai-ma/BYM10.jpg",
      },
      {
        name: "Cai Ma | BYM18 | Morning Haze",
        imageUrl: "/image/product/cai-ma/BYM18.jpg",
      },
    ],
  },
  {
    name: YarnDyedCollectionType.MediumLinen,
    imageUrl: "/image/product/medium-linen/A08.jpg",
    productPageUrl:
      "/product/yarn-dyed-wall-fabric/" + YarnDyedCollectionType.MediumLinen,
    defaultPrice: [
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
        imageUrl: "/image/product/medium-linen/A08.jpg",
      },
      {
        name: "Medium Linen | A15",
        imageUrl: "/image/product/medium-linen/A15.jpg",
      },
      {
        name: "Medium Linen | A16",
        imageUrl: "/image/product/medium-linen/A16.jpg",
      },
      {
        name: "Medium Linen | A21",
        imageUrl: "/image/product/medium-linen/A21.jpg",
      },
      {
        name: "Medium Linen | A26",
        imageUrl: "/image/product/medium-linen/A26.jpg",
      },
      {
        name: "Medium Linen | A88",
        imageUrl: "/image/product/medium-linen/A88.jpg",
      },
      {
        name: "Medium Linen | W08",
        imageUrl: "/image/product/medium-linen/W08.jpg",
      },
      {
        name: "Medium Linen | Y11",
        imageUrl: "/image/product/medium-linen/Y11.jpg",
      },
    ],
  },
  {
    name: YarnDyedCollectionType.QC121,
    imageUrl: "/image/product/qc-121/02.jpg",
    productPageUrl:
      "/product/yarn-dyed-wall-fabric/" + YarnDyedCollectionType.QC121,
    defaultPrice: [
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
        imageUrl: "/image/product/qc-121/02.jpg",
      },
      {
        name: "QC 121 | 09",
        imageUrl: "/image/product/qc-121/09.jpg",
      },
      {
        name: "QC 121 | 18",
        imageUrl: "/image/product/qc-121/18.jpg",
      },
      {
        name: "QC 121 | 22",
        imageUrl: "/image/product/qc-121/22.jpg",
      },
      {
        name: "QC 121 | 24",
        imageUrl: "/image/product/qc-121/24.jpg",
      },
      {
        name: "QC 121 | 31",
        imageUrl: "/image/product/qc-121/31.jpg",
      },
    ],
  },
  {
    name: YarnDyedCollectionType.ZhuMa,
    imageUrl: "/image/product/zhu-ma/2088-01.jpg",
    productPageUrl:
      "/product/yarn-dyed-wall-fabric/" + YarnDyedCollectionType.ZhuMa,
    defaultPrice: [
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
        imageUrl: "/image/product/zhu-ma/2088-01.jpg",
      },
      {
        name: "Zhu Ma | 2088-09",
        imageUrl: "/image/product/zhu-ma/2088-09.jpg",
      },
      {
        name: "Zhu Ma | 2088-11",
        imageUrl: "/image/product/zhu-ma/2088-11.jpg",
      },
      {
        name: "Zhu Ma | 2088-14",
        imageUrl: "/image/product/zhu-ma/2088-14.jpg",
      },
      {
        name: "Zhu Ma | 2088-16",
        imageUrl: "/image/product/zhu-ma/2088-16.jpg",
      },
      {
        name: "Zhu Ma | 2088-23",
        imageUrl: "/image/product/zhu-ma/2088-23.jpg",
      },
    ],
  },
  {
    name: YarnDyedCollectionType.ZR,
    imageUrl: "/image/product/zr/ZR02.jpg",
    productPageUrl:
      "/product/yarn-dyed-wall-fabric/" + YarnDyedCollectionType.ZR,
    defaultPrice: [
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
        imageUrl: "/image/product/zr/ZR02.jpg",
      },
      {
        name: "ZR | 08",
        imageUrl: "/image/product/zr/ZR08.jpg",
      },
      {
        name: "ZR | 14",
        imageUrl: "/image/product/zr/ZR14.jpg",
      },
      {
        name: "ZR | 15",
        imageUrl: "/image/product/zr/ZR15.jpg",
      },
      {
        name: "ZR | 29",
        imageUrl: "/image/product/zr/ZR29.jpg",
      },
      {
        name: "ZR | 34",
        imageUrl: "/image/product/zr/ZR34.jpg",
      },
    ],
  },
];

export const embroideredProducts: Product[] = [
  {
    name: "Please Contact Us",
    imageUrl: "/image/product/embroidered.jpg",
    price: [{ quality: QualityType.PleaseContactUs, price: null }],
    specification: {},
  },
];

export const vinylProducts: Product[] = [
  {
    name: "Please Contact Us",
    imageUrl: "/image/product/vinyl.jpg",
    price: [{ quality: QualityType.PleaseContactUs, price: null }],
    specification: {},
  },
];
