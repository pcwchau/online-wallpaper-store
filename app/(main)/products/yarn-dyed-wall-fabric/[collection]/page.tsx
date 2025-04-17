import ProductPage from "@/components/page/productPage";

const textureArr = [
  {
    url: "/temp-image/1200x1200.jpg",
    name: "無紡布 English Name",
    price: [15, 21],
  },
  {
    url: "/temp-image/1200x1200_2.jpg",
    name: "豎條 English Name",
    price: [15, 21],
  },
  {
    url: "/temp-image/1200x1200_3.jpg",
    name: "紗線 English Name",
    price: [15, 21],
  },
  {
    url: "/temp-image/1200x1200_4.jpg",
    name: "科技皮 English Name",
    price: [15, 21],
  },
  {
    url: "/temp-image/1200x1200_5.jpg",
    name: "亮銀 English Name",
    price: [15, 21],
  },
  {
    url: "/temp-image/1200x1200_6.jpg",
    name: "亮銀2 English Name",
    price: [15, 21],
  },
  {
    url: "/temp-image/1200x1200_7.jpg",
    name: "亮金 English Name",
    price: [15, 21],
  },
  {
    url: "/temp-image/1200x1200_8.jpg",
    name: "冠銀 English Name",
    price: [15, 21],
  },
  {
    url: "/temp-image/1200x1200_9.jpg",
    name: "粗竹節 English Name",
    price: [15, 21],
  },
];

const qualityArr = ["Fire Retardant", "Fire Ratardant and Waterproof"];

export default async function Page({
  params,
}: {
  params: Promise<{ collection: string }>;
}) {
  const { collection } = await params;

  return (
    <div>
      <h1>{collection}</h1>
      <ProductPage textureArr={textureArr} qualityArr={qualityArr} />;
    </div>
  );
}
