import ProductPage from "@/components/page/productPage";
import {
  yarnDyedCaiMaProducts,
  yarnDyedMediumLinenProducts,
  yarnDyedProducts,
} from "@/data/product";
import { ProductCategoryType, YarnDyedCollectionType } from "@/types/product";

export default async function Page({
  params,
}: {
  params: Promise<{ collection: string }>;
}) {
  const { collection } = await params;
  const decodedCollection = decodeURIComponent(collection);

  return (
    <div>
      <ProductPage
        productCategory={ProductCategoryType.YarnDyedWallFabric}
        products={
          decodedCollection === YarnDyedCollectionType.CaiMa
            ? yarnDyedCaiMaProducts
            : decodedCollection === YarnDyedCollectionType.MediumLinen
            ? yarnDyedMediumLinenProducts
            : yarnDyedProducts
        }
      />
    </div>
  );
}
