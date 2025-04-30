import { Product, QualityType, SubstrateType } from "@/types/product";

export const customizedProducts: Product[] = [
  {
    name: "無紡布",
    imageUrl: "/temp-image/1200x1200.jpg",
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
    imageUrl: "/temp-image/1200x1200_4.jpg",
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
    name: "金銀",
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

export const yarnDyedProducts: Product[] = [
  {
    name: "無紡布 English Name",
    imageUrl: "/temp-image/1200x1200.jpg",
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
    name: "豎條 English Name",
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
    name: "紗線 English Name",
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
    name: "科技皮 English Name",
    imageUrl: "/temp-image/1200x1200_4.jpg",
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
    name: "亮銀 English Name",
    imageUrl: "/temp-image/1200x1200_5.jpg",
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
    name: "亮銀2 English Name",
    imageUrl: "/temp-image/1200x1200_6.jpg",
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
    name: "亮金 English Name",
    imageUrl: "/temp-image/1200x1200_7.jpg",
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
    name: "冠銀 English Name",
    imageUrl: "/temp-image/1200x1200_8.jpg",
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
    name: "粗竹節 English Name",
    imageUrl: "/temp-image/1200x1200_9.jpg",
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
];
