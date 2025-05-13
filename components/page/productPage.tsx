"use client";
import QuestionCircleIcon from "@/assets/icons/questionCircleIcon";
import ZoomInSquareImage from "@/components/image/zoomInSquareImage";
import { TOP_BAR_HEIGHT } from "@/config/constant";
import {
  ProductCategoryType,
  Product,
  Specification,
  PriceByQuality,
  SpecificationTitleType,
} from "@/types/product";
import Image from "next/image";
import { memo, useState } from "react";
import { Tooltip } from "react-tooltip";

// eslint-disable-next-line react/display-name
const Title = memo(({ children }: { children: React.ReactNode }) => {
  return (
    <div className="border-b-2 border-b-primary-border font-bold text-xl">
      {children}
    </div>
  );
});

interface ProductPageProps {
  productCategory: ProductCategoryType;
  products: Product[];
  defaultPrice: PriceByQuality[];
  defaultSpecification: Specification;
}

export default function ProductPage(props: ProductPageProps) {
  const [currentOptionIndex, setCurrentOptionIndex] = useState<number>(0);
  const [currentQualityIndex, setCurrentQualityIndex] = useState<number>(0);
  const [length, setLength] = useState<number | "">("");

  const price =
    props.products[currentOptionIndex].price !== undefined
      ? props.products[currentOptionIndex].price[currentQualityIndex].price
      : props.defaultPrice[currentQualityIndex].price;

  const specification =
    props.products[currentOptionIndex].specification !== undefined
      ? props.products[currentOptionIndex].specification
      : props.defaultSpecification;

  const specificationArr = [
    {
      title: SpecificationTitleType.Height,
      content: specification.height,
    },
    {
      title: SpecificationTitleType.Thickness,
      content: specification.thickness,
    },
    {
      title: SpecificationTitleType.Weight,
      content: specification.weight,
    },
    { title: SpecificationTitleType.Backing, content: specification.backing },
    { title: SpecificationTitleType.Match, content: specification.match },
    {
      title: SpecificationTitleType.PrintTechnology,
      content: specification.printTechnology,
    },
    {
      title: SpecificationTitleType.EnvironmentAndHealth,
      content: specification.environmentAndHealth,
    },
    {
      title: SpecificationTitleType.Maintenance,
      content: specification.maintenance,
    },
    {
      title: SpecificationTitleType.FireSafety,
      content: specification.fireSafety,
    },
  ];

  const handleOptionClick = (index: number) => {
    setCurrentOptionIndex(index);
    setCurrentQualityIndex(0);
  };

  const handleQualityClick = (index: number) => {
    setCurrentQualityIndex(index);
  };

  const handleLengthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setLength(value ? Number(value) : "");
  };

  const calculateTotalPrice = () => {
    return price && length && length > 0 ? Math.round(price * length) : "-";
  };

  return (
    <div className="flex flex-col lg:flex-row lg:items-start gap-8">
      <Tooltip id="my-tooltip" />

      {/* Main Image */}
      <div className="w-full lg:w-[50%] flex justify-center">
        <div
          className="w-full aspect-square relative"
          style={{
            maxHeight: `calc(100vh - ${TOP_BAR_HEIGHT} - 2rem)`,
            maxWidth: `calc(100vh - ${TOP_BAR_HEIGHT} - 2rem)`,
          }}
        >
          <ZoomInSquareImage
            src={props.products[currentOptionIndex].imageUrl}
            alt={""}
            unoptimized
          />
        </div>
      </div>

      {/* Input and information */}
      <div className="flex flex-col w-full lg:w-[50%] space-y-4">
        <Title>{props.products[currentOptionIndex].name}</Title>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {props.products.map((item, index) => (
              <button
                key={index}
                className={`flex gap-x-2 items-center ${
                  currentOptionIndex === index
                    ? "border-primary-border-selected"
                    : "border-primary-border"
                } border-2 rounded-lg p-1`}
                onClick={() => handleOptionClick(index)}
              >
                {/* Options with image only */}
                {props.productCategory ===
                  ProductCategoryType.YarnDyedWallFabric && (
                  <Image
                    src={item.imageUrl}
                    height={64}
                    width={64}
                    alt="Texture"
                    className="h-8 w-8 object-cover rounded-md"
                  />
                )}
                {/* Options with name only */}
                {(props.productCategory ===
                  ProductCategoryType.CustomPrintingWallFabric ||
                  props.productCategory ===
                    ProductCategoryType.EmbroideredWallFabric ||
                  props.productCategory ===
                    ProductCategoryType.VinylBanners) && (
                  <div className="text-sm">{item.name}</div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Quality */}
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {(props.products[currentOptionIndex].price !== undefined
              ? props.products[currentOptionIndex].price
              : props.defaultPrice
            ).map((item, index) => (
              <button
                className={`${
                  currentQualityIndex === index
                    ? "border-primary-border-selected"
                    : "border-primary-border"
                }  border-2 rounded-lg p-1 text-sm`}
                onClick={() => handleQualityClick(index)}
                key={index}
              >
                {item.quality}
              </button>
            ))}
          </div>
        </div>

        {/* Price */}
        <div className="text-lg">
          <span className="font-bold">{`$ ${price}`}</span>
          <span> / Linear ft</span>
        </div>

        <Title>Cost Estimation</Title>
        <div className="flex gap-2 items-center">
          <span className="font-bold">Length: </span>
          <input
            type="number"
            placeholder="Enter length"
            value={length}
            onChange={handleLengthChange}
            className="w-32 border border-primary-border-selected rounded p-1"
          />
          <span>ft</span>
        </div>

        {/* Total price */}
        <div className="flex gap-2 items-center">
          <span className="font-bold">Estimated price:</span>
          <span>{`$ ${calculateTotalPrice()}`}</span>
        </div>

        <Title>Specifications</Title>
        {specificationArr.map(
          (specification, index) =>
            specification.content !== undefined && (
              <div className="flex gap-2 items-center" key={index}>
                <span className="font-bold">{`${specification.title}: `}</span>
                <span>{specification.content}</span>
                <span>
                  {specification.title === SpecificationTitleType.Height
                    ? "ft"
                    : specification.title === SpecificationTitleType.Thickness
                    ? "cm"
                    : specification.title === SpecificationTitleType.Weight
                    ? "g/sq. ft"
                    : ""}
                </span>
                {specification.title === SpecificationTitleType.Height && (
                  <a
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content={`Please contact us if over ${specification.content} ft`}
                  >
                    <QuestionCircleIcon width="1.5em" height="1.5em" />
                  </a>
                )}
              </div>
            )
        )}
      </div>
    </div>
  );
}
