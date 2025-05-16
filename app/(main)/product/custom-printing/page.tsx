import ImagePage2x2 from "@/components/page/imagePage2x2";
import { customPrintingProductCollections } from "@/data/product";
import { ProductCategoryType } from "@/types/product";

export default function Page() {
  return (
    <ImagePage2x2
      title={ProductCategoryType.CustomPrintingWallFabric}
      images={customPrintingProductCollections.map((col) => ({
        name: col.name,
        imageUrl: col.imageUrl,
        redirectUrl: col.productPageUrl,
      }))}
    />
  );
}
