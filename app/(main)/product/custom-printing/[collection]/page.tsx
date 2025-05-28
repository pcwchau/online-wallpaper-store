import ProductPage from "@/components/page/productPage";
import { customPrintingProductCollections } from "@/data/product.data";
import { ProductCategoryType } from "@/types/product.type";

export default async function Page({
  params,
}: {
  params: Promise<{ collection: string }>;
}) {
  const { collection } = await params;
  const productCollection = customPrintingProductCollections.find(
    (col) => col.name === decodeURIComponent(collection)
  );

  return productCollection === undefined ||
    productCollection.products.length === 0 ? (
    <div>This page could not be found.</div>
  ) : (
    <div>
      <ProductPage
        productCategory={ProductCategoryType.CustomPrintingWallFabric}
        products={productCollection.products}
        defaultPriceByQuality={productCollection.defaultPriceByQuality}
        defaultSpecification={productCollection.defaultSpecification}
      />
    </div>
  );
}
