import GeneralPage from "@/components/page/generalPage";
import { ProductCategoryType } from "@/types/product.type";
import Image from "next/image";
import img from "@/assets/images/vinyl.jpg";

export default function Page() {
  return (
    <GeneralPage
      title={ProductCategoryType.CommercialVinylAndSigns}
      isFullWidth={true}
    >
      <Image
        src={img}
        alt="vinyl"
        sizes="100vw"
        className="w-full rounded-xl"
      />
      <div className="text-center max-w-[60rem] mx-auto">
        We offer fast, custom solutions for commercial vinyl and signage using a
        wide range of materials, including matte, gloss, and textured finishes.
        Whether for branding, logos, or business signage, your ideal design is
        produced quickly and installed seamlessly to enhance your commercial
        environment with a professional touch.
      </div>
      <div className="flex justify-center pb-4">
        <div className="border-primary-text border-2 p-2 rounded-lg text-center">
          PLEASE CONTACT US
        </div>
      </div>
    </GeneralPage>
  );
}
