import ProductPage from "@/components/page/productPage";
import { ProductCategoryType, QualityType } from "@/types/product.type";

export default function Page() {
  return (
    <ProductPage
      productCategory={ProductCategoryType.CommercialVinylAndSigns}
      products={[
        {
          name: ProductCategoryType.CommercialVinylAndSigns,
          imageUrl: "/image/vinyl/vinyl.jpg",
        },
        {
          name: ProductCategoryType.CommercialVinylAndSigns,
          imageUrl: "/image/vinyl/vinyl.jpg",
        },
      ]}
      defaultPriceByQuality={[
        { quality: QualityType.PleaseContactUs, price: null },
      ]}
      defaultSpecification={{}}
    />
  );
}
