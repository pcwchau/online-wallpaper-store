import ProductPage from "@/components/page/productPage";
import { embroideredProducts } from "@/data/product";
import { ProductCategoryType } from "@/types/product";

export default function Page() {
  return (
    <ProductPage
      productCategory={ProductCategoryType.EmbroideredWallFabric}
      products={embroideredProducts}
    />
  );
}
