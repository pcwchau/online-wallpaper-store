import TwoByTwoImageSection from "@/components/image/twoByTwoImageSection";
import GeneralPage from "@/components/page/generalPage";
import { customPrintingProductCollections } from "@/data/product";
import { ProductCategoryType } from "@/types/product";

export default function Page() {
  return (
    <GeneralPage title={ProductCategoryType.CustomPrintingWallFabric}>
      <TwoByTwoImageSection
        images={customPrintingProductCollections.map((col) => ({
          name: col.name,
          imageUrl: col.imageUrl,
          redirectUrl: col.productPageUrl,
        }))}
      />
    </GeneralPage>
  );
}
