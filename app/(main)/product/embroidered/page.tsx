import GeneralPage from "@/components/page/generalPage";
import { ProductCategoryType } from "@/types/product.type";
import Image from "next/image";
import img from "@/assets/images/embroidered.jpg";

export default function Page() {
  return (
    <GeneralPage
      title={ProductCategoryType.EmbroideredWallFabric}
      isFullWidth={true}
    >
      <Image
        src={img}
        alt="embroidered"
        sizes="100vw"
        className="w-full rounded-xl"
      />
      <div className="text-center max-w-[60rem] mx-auto">
        Elevate your space with our custom Embroidered Wall Fabric, featuring a
        seamless finish that enhances the elegance and flow of any room. We
        specialize in tailor-made embroidered patterns and graphics on your
        chosen fabric base, creating a luxurious and unique wallcovering found
        nowhere else in the world. Contact us to design your exclusive seamless
        Embroidered Wall Fabric.
      </div>
      <div className="flex justify-center pb-4">
        <div className="border-primary-text border-2 p-2 rounded-lg text-center">
          PLEASE CONTACT US
        </div>
      </div>
    </GeneralPage>
  );
}
