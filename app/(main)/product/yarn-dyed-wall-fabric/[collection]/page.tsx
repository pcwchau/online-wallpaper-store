import ProductPage from "@/components/page/productPage";
import { yarnDyedProducts } from "@/data/product";
import { ProductCategoryType } from "@/types/product";

export default async function Page({
  params,
}: {
  params: Promise<{ collection: string }>;
}) {
  const { collection } = await params;

  return (
    <div>
      <h1>{collection}</h1>
      <ProductPage
        productCategory={ProductCategoryType.YarnDyedWallFabric}
        products={yarnDyedProducts}
      />
    </div>
  );
}
