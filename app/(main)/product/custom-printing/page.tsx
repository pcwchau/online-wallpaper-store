import ImageRowTwo from "@/components/image/imageRowTwo";
import GeneralPage from "@/components/page/generalPage";
import { customPrintingProductCollections } from "@/data/product.data";
import { ProductCategoryType } from "@/types/product.type";

const features = [
  {
    title: "Pattern Design",
    description:
      "Choose styles such as Chinese, ink painting, modern minimalist, European, nature-inspired, and more.",
  },
  {
    title: "Material Options",
    description:
      "Choose from the below materials like metallic, yarn, non-woven fabric, waterproof options, etc.",
  },
  {
    title: "Color Scheme",
    description:
      "Adjust the main and accent colors to match your interior style.",
  },
  {
    title: "Size & Cutting",
    description:
      "Precisely cut to fit your actual wall dimensions—no more, no less.",
  },
];

export default function Page() {
  return (
    <GeneralPage title={ProductCategoryType.CustomPrintingWallFabric}>
      <div className="text-center">
        Custom printing wall fabric is a wall decoration material that is
        specifically designed and printed based on the customer&apos;s wall
        dimensions, style preferences, and desired patterns. Unlike pre-made
        designs, it is a tailor-made and exclusive design created just for you.
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="border-2 border-primary-border rounded-md p-5 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="text-lg font-semibold mb-2">{feature.title}</div>
            <p className="text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
      <ImageRowTwo
        images={customPrintingProductCollections.map((col) => ({
          name: col.name,
          imageUrl: col.imageUrl,
          redirectUrl: col.productPageUrl,
        }))}
      />
    </GeneralPage>
  );
}
