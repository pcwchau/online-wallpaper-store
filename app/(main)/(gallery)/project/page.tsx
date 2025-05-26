import TwoByTwoImageSection from "@/components/image/twoByTwoImageSection";
import GeneralPage from "@/components/page/generalPage";
import { projectCategoryRoutes } from "@/data/route";

export default function Page() {
  return (
    <GeneralPage title={"Project"}>
      <TwoByTwoImageSection images={projectCategoryRoutes} />;
    </GeneralPage>
  );
}
