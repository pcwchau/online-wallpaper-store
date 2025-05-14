import ProductPage from "@/components/page/productPage";
import { embroideredProducts } from "@/data/product";
import { ProductCategoryType, QualityType } from "@/types/product";

export default function Page() {
  return (
    <ProductPage
      productCategory={ProductCategoryType.EmbroideredWallFabric}
      products={embroideredProducts}
      defaultPriceByQuality={[
        { quality: QualityType.PleaseContactUs, price: null },
      ]}
      defaultSpecification={{}}
    />
  );
}
