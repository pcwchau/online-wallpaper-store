import ProductPage from "@/components/page/productPage";
import { ProductType, QualityType } from "@/types/enum";

const optionArr = [
  {
    name: "無紡布",
    imageUrl: "/temp-image/1200x1200.jpg",
    priceByQualityArr: [
      { quality: QualityType.FireRetardant, price: 165 },
      { quality: QualityType.FireRetardantAndWaterproof, price: 231 },
    ],
  },
  {
    name: "紗線",
    imageUrl: "/temp-image/1200x1200_3.jpg",
    priceByQualityArr: [
      { quality: QualityType.FireRetardant, price: 165 },
      { quality: QualityType.FireRetardantAndWaterproof, price: 231 },
    ],
  },
  {
    name: "科技皮",
    imageUrl: "/temp-image/1200x1200_4.jpg",
    priceByQualityArr: [
      { quality: QualityType.FireRetardantAndWaterproof, price: 231 },
    ],
  },
  {
    name: "豎紋",
    imageUrl: "/temp-image/1200x1200_2.jpg",
    priceByQualityArr: [
      { quality: QualityType.FireRetardant, price: 165 },
      { quality: QualityType.FireRetardantAndWaterproof, price: 231 },
    ],
  },
  {
    name: "金銀",
    imageUrl: "/temp-image/1200x1200_5.jpg",
    priceByQualityArr: [
      { quality: QualityType.FireRetardantAndWaterproof, price: 330 },
    ],
  },
  {
    name: "粗竹節",
    imageUrl: "/temp-image/1200x1200_9.jpg",
    priceByQualityArr: [
      { quality: QualityType.FireRetardantAndWaterproof, price: 330 },
    ],
  },
  {
    name: "草纖維",
    imageUrl: "/temp-image/1200x1200_6.jpg",
    priceByQualityArr: [{ quality: QualityType.FireRetardant, price: 330 }],
  },
  {
    name: "軟羊絨",
    imageUrl: "/temp-image/1200x1200_8.jpg",
    priceByQualityArr: [{ quality: QualityType.FireRetardant, price: 165 }],
  },
];

export default function Page() {
  return (
    <ProductPage productType={ProductType.Customized} optionArr={optionArr} />
  );
}
