import {
  Product,
  ProductCollection,
  QualityType,
  SubstrateType,
  YarnDyedCollectionType,
} from "@/types/product";

export const customizedProducts: Product[] = [
  {
    name: "紗線",
    imageUrl: "/temp-image/1200x1200_3.jpg",
    priceByQualityArr: [
      { quality: QualityType.FireRetardant, price: 165 },
      { quality: QualityType.FireRetardantAndWaterproof, price: 231 },
    ],
    specification: {
      length: 1968,
      width: 116,
      thickness: 0.043,
      substrate: SubstrateType.NonWovenPolyester,
      weight: 21.57,
    },
  },
  {
    name: "科技皮",
    imageUrl: "/image/product/custom-printing/vinyl.jpg",
    priceByQualityArr: [
      { quality: QualityType.FireRetardantAndWaterproof, price: 231 },
    ],
    specification: {
      length: 1968,
      width: 116,
      thickness: 0.018,
      substrate: SubstrateType.NonWovenPolyester,
      weight: 21.57,
    },
  },
  {
    name: "豎紋",
    imageUrl: "/temp-image/1200x1200_2.jpg",
    priceByQualityArr: [
      { quality: QualityType.FireRetardant, price: 165 },
      { quality: QualityType.FireRetardantAndWaterproof, price: 231 },
    ],
    specification: {
      length: 1968,
      width: 116,
      thickness: 0.043,
      substrate: SubstrateType.NonWovenPolyester,
      weight: 21.57,
    },
  },
  {
    name: "亮銀",
    imageUrl: "/temp-image/1200x1200_5.jpg",
    priceByQualityArr: [
      { quality: QualityType.FireRetardantAndWaterproof, price: 330 },
    ],
    specification: {
      length: 1968,
      width: 116,
      thickness: 0.043,
      substrate: SubstrateType.NonWovenPolyester,
      weight: 21.57,
    },
  },
  {
    name: "亮金",
    imageUrl: "/temp-image/1200x1200_5.jpg",
    priceByQualityArr: [
      { quality: QualityType.FireRetardantAndWaterproof, price: 330 },
    ],
    specification: {
      length: 1968,
      width: 116,
      thickness: 0.043,
      substrate: SubstrateType.NonWovenPolyester,
      weight: 21.57,
    },
  },
  {
    name: "粗竹節",
    imageUrl: "/temp-image/1200x1200_9.jpg",
    priceByQualityArr: [
      { quality: QualityType.FireRetardantAndWaterproof, price: 330 },
    ],
    specification: {
      length: 1968,
      width: 116,
      thickness: 0.043,
      substrate: SubstrateType.NonWovenPolyester,
      weight: 21.57,
    },
  },
  {
    name: "草纖維",
    imageUrl: "/temp-image/1200x1200_6.jpg",
    priceByQualityArr: [{ quality: QualityType.FireRetardant, price: 330 }],
    specification: {
      length: 1968,
      width: 116,
      thickness: 0.043,
      substrate: SubstrateType.NonWovenPolyester,
      weight: 21.57,
    },
  },
  {
    name: "軟羊絨",
    imageUrl: "/temp-image/1200x1200_8.jpg",
    priceByQualityArr: [{ quality: QualityType.FireRetardant, price: 165 }],
    specification: {
      length: 1968,
      width: 116,
      thickness: 0.043,
      substrate: SubstrateType.NonWovenPolyester,
      weight: 21.57,
    },
  },
];

export const yarnDyedProductCollections: ProductCollection[] = [
  {
    name: YarnDyedCollectionType.CaiMa,
    imageUrl: "/image/product/cai-ma/cover.jpg",
    productPageUrl:
      "/product/yarn-dyed-wall-fabric/" + YarnDyedCollectionType.CaiMa,
    generalPrice: [
      { quality: QualityType.FireRetardantAndWaterproof, price: 99 },
    ],
    generalSpecification: {
      length: 1968,
      width: 116,
      thickness: 0.043,
      substrate: SubstrateType.NonWovenPolyester,
      weight: 21.57,
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
    generalPrice: [
      { quality: QualityType.FireRetardantAndWaterproof, price: 99 },
    ],
    generalSpecification: {
      length: 1968,
      width: 116,
      thickness: 0.043,
      substrate: SubstrateType.NonWovenPolyester,
      weight: 21.57,
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
    generalPrice: [
      { quality: QualityType.FireRetardantAndWaterproof, price: 99 },
    ],
    generalSpecification: {
      length: 1968,
      width: 116,
      thickness: 0.043,
      substrate: SubstrateType.NonWovenPolyester,
      weight: 21.57,
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
    generalPrice: [
      { quality: QualityType.FireRetardantAndWaterproof, price: 99 },
    ],
    generalSpecification: {
      length: 1968,
      width: 116,
      thickness: 0.043,
      substrate: SubstrateType.NonWovenPolyester,
      weight: 21.57,
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
    generalPrice: [
      { quality: QualityType.FireRetardantAndWaterproof, price: 99 },
    ],
    generalSpecification: {
      length: 1968,
      width: 116,
      thickness: 0.043,
      substrate: SubstrateType.NonWovenPolyester,
      weight: 21.57,
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
    priceByQualityArr: [{ quality: QualityType.PleaseContactUs, price: null }],
    specification: {},
  },
];

export const vinylProducts: Product[] = [
  {
    name: "Please Contact Us",
    imageUrl: "/image/product/vinyl.jpg",
    priceByQualityArr: [{ quality: QualityType.PleaseContactUs, price: null }],
    specification: {},
  },
];
