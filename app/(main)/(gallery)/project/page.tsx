import ImagePage2x2 from "@/components/page/imagePage2x2";
import { projectCategoryRoutes } from "@/data/route";

export default function Page() {
  return <ImagePage2x2 title={"Project"} images={projectCategoryRoutes} />;
}
