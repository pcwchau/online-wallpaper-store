import GeneralPage from "@/components/page/generalPage";
import { ProductCategoryType } from "@/types/product.type";
import Image from "next/image";

export default function Page() {
  return (
    <GeneralPage
      title={ProductCategoryType.EmbroideredWallFabric}
      isFullWidth={true}
    >
      <Image
        src="https://beshinegroup.s3.us-east-1.amazonaws.com/product/embroidered.jpg"
        alt="embroidered"
        width={0}
        height={0}
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
