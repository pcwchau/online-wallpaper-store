import ProductPage from "@/components/page/productPage";
import { vinylProducts } from "@/data/product";
import { ProductCategoryType } from "@/types/product";

export default function Page() {
  return (
    <ProductPage
      productCategory={ProductCategoryType.Vinyl}
      products={vinylProducts}
    />
  );
}
