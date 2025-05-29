import ProductPage from "@/components/page/productPage";
import { ProductCategoryType, QualityType } from "@/types/product.type";

export default function Page() {
  return (
    <ProductPage
      productCategory={ProductCategoryType.EmbroideredWallFabric}
      products={[
        {
          name: ProductCategoryType.EmbroideredWallFabric,
          imageUrl: "/image/embroidered/embroidered.jpg",
        },
        {
          name: ProductCategoryType.EmbroideredWallFabric,
          imageUrl: "/image/embroidered/embroidered.jpg",
        },
      ]}
      defaultPriceByQuality={[
        { quality: QualityType.PleaseContactUs, price: null },
      ]}
      defaultSpecification={{}}
    />
  );
}
