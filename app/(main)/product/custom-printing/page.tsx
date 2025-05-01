import ProductPage from "@/components/page/productPage";
import { customizedProducts } from "@/data/product";
import { ProductCategoryType } from "@/types/product";

export default function Page() {
  return (
    <ProductPage
      productCategory={ProductCategoryType.Customized}
      products={customizedProducts}
    />
  );
}
