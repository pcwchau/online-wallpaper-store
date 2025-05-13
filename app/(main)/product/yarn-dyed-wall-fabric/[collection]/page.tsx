import ProductPage from "@/components/page/productPage";
import { yarnDyedProductCollections } from "@/data/product";
import { ProductCategoryType } from "@/types/product";

export default async function Page({
  params,
}: {
  params: Promise<{ collection: string }>;
}) {
  const { collection } = await params;
  const productCollection = yarnDyedProductCollections.find(
    (col) => col.name === decodeURIComponent(collection)
  );

  return productCollection === undefined ? (
    <div></div>
  ) : (
    <div>
      <ProductPage
        productCategory={ProductCategoryType.YarnDyedWallFabric}
        products={productCollection.products}
      />
    </div>
  );
}
