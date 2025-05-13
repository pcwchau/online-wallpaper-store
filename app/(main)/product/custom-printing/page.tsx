import ProductPage from "@/components/page/productPage";
import { customPrintingProducts } from "@/data/product";
import {
  BackingType,
  EnvironmentAndHealthType,
  FireSafetyType,
  MaintenanceType,
  MatchType,
  PrintTechnologyType,
  ProductCategoryType,
  QualityType,
} from "@/types/product";

export default function Page() {
  return (
    <ProductPage
      productCategory={ProductCategoryType.CustomPrintingWallFabric}
      products={customPrintingProducts}
      defaultPriceByQuality={[
        { quality: QualityType.PleaseContactUs, price: null },
      ]}
      defaultSpecification={{
        height: 9.5,
        thickness: 0.11,
        weight: 21.57,
        backing: BackingType.NonWovenPolyester,
        match: MatchType.Seamless,
        printTechnology: PrintTechnologyType.EcoUV,
        environmentAndHealth: EnvironmentAndHealthType.WHMIS2015,
        maintenance: MaintenanceType.WWMS,
        fireSafety: FireSafetyType.ClassA,
      }}
    />
  );
}
