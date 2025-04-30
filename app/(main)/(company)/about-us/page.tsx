import GeneralPage from "@/components/page/generalPage";
import { memo } from "react";

// eslint-disable-next-line react/display-name
const Title = memo(({ children }: { children: React.ReactNode }) => {
  return <div className="font-bold text-xl py-4">{children}</div>;
});

const points = [
  {
    topic: "Seamless Finish",
    content:
      "Our premium seamless wall fabrics provide a luxurious, continuous finish that covers entire walls up to 10 feet in height, eliminating gaps and visual imbalances.",
  },
  {
    topic: "Environmentally Friendly",
    content:
      "Our seamless wall coverings are made from non-toxic, eco-friendly materials that are safe for human health. Unlike wall paint, they emit no volatile gases such as formaldehyde and benzene, meeting national interior renovation regulations for immediate accommodation after construction.",
  },
  {
    topic: "Breathable, Mildew-Proof, and Anti-Corrosive",
    content:
      "Made from fiber fabric, our seamless wall coverings offer excellent air permeability and anti-mildew properties. They are qualified for waterproof, anti-fouling, and oil-proof, preventing mold and ensuring durability by allowing moisture to escape through tiny pores.",
  },
  {
    topic: "Wear-Resistant Walls",
    content:
      "Applying our wall coverings is like adding a soft steel mesh to your walls, enhancing the surface to prevent cracks and ensure a smooth, leveled finish.",
  },
  {
    topic: "Easy to Maintain",
    content:
      "Proven to be oil-proof, anti-fouling, and waterproof, our seamless wall fabrics can be easily cleaned with a wet towel, keeping your walls bright and tidy.",
  },
  {
    topic: "Rich Colors",
    content:
      "Our wall fabrics adhere to high standards of washability and sunlight resistance, ensuring colors remain vibrant without fading under normal conditions.",
  },
  {
    topic: "Good Sound Absorption and Insulation",
    content:
      "The texture of our seamless wall fabrics diffuses and softly reflects sound waves, providing excellent sound absorption and insulation with reduced echoes.",
  },
  {
    topic: "Versatile Applications",
    content:
      "Suitable for high-end hotels, restaurants, bars, office buildings, and various public spaces, as well as home villas and ordinary residential decorations. Our products offer versatility and strong durability.",
  },
  {
    topic: "Simple Installation",
    content:
      "Seamless wall fabrics are easy to install. It offers faster application than traditional wallpaper which is ideal for wall renovations. They can be applied directly on latex paint surfaces, avoiding dust and the hassle of moving furniture, saving you time and effort.",
  },
];

export default function Page() {
  return (
    <GeneralPage title="About Us">
      <div>
        <Title>
          Your Vision, Our Expertise: Perfect Wallcoverings Every Time
        </Title>
        <div>
          Be Shine Textile provides customized solutions for clients, inspiring
          them with stylish ideas and professionalism. Whether for commercial or
          residential purposes, we transform spaces with unique custom
          wallcoverings. Our artistic design and installation services bring
          your creative visions to life. With our professional team, we ensure
          that every project is executed efficiently and with the highest level
          of craftsmanship, transforming your spaces swiftly and specifically
          for both corporate and cozy environments.
        </div>
        <Title>What is wallcovering?</Title>
        <div>
          Wallcovering is a type of fabric applied to walls similarly to
          traditional wallpaper. It uses polyester fiber as the base material,
          which is then printed, embossed, or woven with large jacquard
          patterns. The designs typically feature geometric shapes and floral
          motifs.
        </div>
        <Title>Why Choose Be Shine Textile?</Title>
        <ol className="list-decimal space-y-4 pl-4">
          {points.map((point, index) => (
            <li key={index} className="space-x-2">
              <span className="font-semibold">{point.topic}</span>
              <span>{point.content}</span>
            </li>
          ))}
        </ol>
      </div>
    </GeneralPage>
  );
}
