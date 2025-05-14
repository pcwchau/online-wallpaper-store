import ProductPage from "@/components/page/productPage";
import { vinylProducts } from "@/data/product";
import { ProductCategoryType, QualityType } from "@/types/product";

export default function Page() {
  return (
    <ProductPage
      productCategory={ProductCategoryType.CommercialVinylAndSigns}
      products={vinylProducts}
      defaultPriceByQuality={[
        { quality: QualityType.PleaseContactUs, price: null },
      ]}
      defaultSpecification={{}}
    />
  );
}
