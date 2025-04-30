import ProductPage from "@/components/page/productPage";
import { ProductType, QualityType } from "@/types/enum";

const optionArr = [
  {
    name: "無紡布 English Name",
    imageUrl: "/temp-image/1200x1200.jpg",
    priceByQualityArr: [
      { quality: QualityType.FireRetardant, price: 165 },
      { quality: QualityType.FireRetardantAndWaterproof, price: 231 },
    ],
  },
  {
    name: "豎條 English Name",
    imageUrl: "/temp-image/1200x1200_2.jpg",
    priceByQualityArr: [
      { quality: QualityType.FireRetardant, price: 165 },
      { quality: QualityType.FireRetardantAndWaterproof, price: 231 },
    ],
  },
  {
    name: "紗線 English Name",
    imageUrl: "/temp-image/1200x1200_3.jpg",
    priceByQualityArr: [
      { quality: QualityType.FireRetardant, price: 165 },
      { quality: QualityType.FireRetardantAndWaterproof, price: 231 },
    ],
  },
  {
    name: "科技皮 English Name",
    imageUrl: "/temp-image/1200x1200_4.jpg",
    priceByQualityArr: [
      { quality: QualityType.FireRetardant, price: 165 },
      { quality: QualityType.FireRetardantAndWaterproof, price: 231 },
    ],
  },
  {
    name: "亮銀 English Name",
    imageUrl: "/temp-image/1200x1200_5.jpg",
    priceByQualityArr: [
      { quality: QualityType.FireRetardant, price: 165 },
      { quality: QualityType.FireRetardantAndWaterproof, price: 231 },
    ],
  },
  {
    name: "亮銀2 English Name",
    imageUrl: "/temp-image/1200x1200_6.jpg",
    priceByQualityArr: [
      { quality: QualityType.FireRetardant, price: 165 },
      { quality: QualityType.FireRetardantAndWaterproof, price: 231 },
    ],
  },
  {
    name: "亮金 English Name",
    imageUrl: "/temp-image/1200x1200_7.jpg",
    priceByQualityArr: [
      { quality: QualityType.FireRetardant, price: 165 },
      { quality: QualityType.FireRetardantAndWaterproof, price: 231 },
    ],
  },
  {
    name: "冠銀 English Name",
    imageUrl: "/temp-image/1200x1200_8.jpg",
    priceByQualityArr: [
      { quality: QualityType.FireRetardant, price: 165 },
      { quality: QualityType.FireRetardantAndWaterproof, price: 231 },
    ],
  },
  {
    name: "粗竹節 English Name",
    imageUrl: "/temp-image/1200x1200_9.jpg",
    priceByQualityArr: [
      { quality: QualityType.FireRetardant, price: 165 },
      { quality: QualityType.FireRetardantAndWaterproof, price: 231 },
    ],
  },
];

export default async function Page({
  params,
}: {
  params: Promise<{ collection: string }>;
}) {
  const { collection } = await params;

  return (
    <div>
      <h1>{collection}</h1>
      <ProductPage productType={ProductType.YarnDyed} optionArr={optionArr} />;
    </div>
  );
}
