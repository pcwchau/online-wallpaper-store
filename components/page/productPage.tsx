"use client";
import QuestionCircleIcon from "@/assets/icons/questionCircleIcon";
import ZoomInImage from "@/components/image/zoomInImage";
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
  return <div className="font-bold text-2xl">{children}</div>;
});

interface ProductPageProps {
  productCategory: ProductCategoryType;
  products: Product[];
  defaultPriceByQuality: PriceByQuality[];
  defaultSpecification: Specification;
}

export default function ProductPage(props: ProductPageProps) {
  const [currentOptionIndex, setCurrentOptionIndex] = useState<number>(0);
  const [currentQualityIndex, setCurrentQualityIndex] = useState<number>(0);
  const [length, setLength] = useState<number | "">("");

  const price =
    props.products[currentOptionIndex].priceByQuality !== undefined
      ? props.products[currentOptionIndex].priceByQuality[currentQualityIndex]
          .price
      : props.defaultPriceByQuality[currentQualityIndex].price;

  const specification =
    props.products[currentOptionIndex].specification !== undefined
      ? props.products[currentOptionIndex].specification
      : props.defaultSpecification;

  // Not include height
  const specificationArr = [
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
    const value = e.target.value; // It must be a number or empty string
    if (value) {
      setLength(Number(value) >= 1 ? Number(value) : 1);
    } else {
      setLength("");
    }
  };

  const calculateTotalPrice = () => {
    if (price && length && length > 0) {
      if (
        props.productCategory === ProductCategoryType.CustomPrintingWallFabric
      ) {
        return Math.round(price * Math.max(length, 2));
      } else {
        return Math.round(price * length);
      }
    } else {
      return "-";
    }
  };

  return (
    <div className="flex flex-col lg:flex-row lg:items-start gap-8">
      <Tooltip id="my-tooltip" />
      {/* Main Image */}
      <div className="w-full lg:w-[50%] flex justify-center">
        <div
          className="w-full aspect-square relative border-primary-border border-2"
          style={{
            maxHeight: `calc(100vh - ${TOP_BAR_HEIGHT} - 2rem)`,
            maxWidth: `calc(100vh - ${TOP_BAR_HEIGHT} - 2rem)`,
          }}
        >
          <ZoomInImage
            src={props.products[currentOptionIndex].imageUrl}
            alt={"product image"}
            sizes="(max-width: 1024px) 100vw, 50vw"
            unoptimized={true}
          />
        </div>
      </div>

      {/* Select and Information Panel */}
      <div className="flex flex-col w-full lg:w-[50%] space-y-4">
        <Title>{props.products[currentOptionIndex].name}</Title>
        <div className="space-y-2 pb-4">
          {/* Options are shown with thumbnail image */}
          {(props.productCategory === ProductCategoryType.YarnDyedWallFabric ||
            props.productCategory ===
              ProductCategoryType.CustomPrintingWallFabric) && (
            <div className="flex flex-wrap gap-2 items-center">
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
                  <Image
                    src={item.imageUrl}
                    height={64}
                    width={64}
                    alt="Texture"
                    className="h-8 w-8 object-cover rounded-md"
                  />
                </button>
              ))}
              {props.productCategory ===
                ProductCategoryType.YarnDyedWallFabric && (
                <a
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content={`Please contact us to get more colours.`}
                  className="px-2"
                >
                  <QuestionCircleIcon width="1.5em" height="1.5em" />
                </a>
              )}
            </div>
          )}

          {/* Quality */}
          <div className="flex flex-wrap gap-2">
            {(props.products[currentOptionIndex].priceByQuality !== undefined
              ? props.products[currentOptionIndex].priceByQuality
              : props.defaultPriceByQuality
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

          {/* Price */}
          <div>
            <span className="text-lg font-bold">{`$ ${price ?? "-"}`}</span>
            <span className="text-sm"> / Linear ft </span>
            {props.productCategory ===
              ProductCategoryType.CustomPrintingWallFabric && (
              <span className="text-sm font-bold">| Minumum order of 2 ft</span>
            )}
          </div>
        </div>

        <Title>Cost Estimation</Title>
        <div className="space-y-2 pb-4">
          <div className="flex items-center">
            <div className="min-w-[10rem] sm:min-w-[33%] whitespace-nowrap">
              Height
            </div>
            <div className="pl-1">{specification.height}</div>
            <a
              data-tooltip-id="my-tooltip"
              data-tooltip-content={`Please contact us if over ${specification.height}.`}
              className="px-2"
            >
              <QuestionCircleIcon width="1.5em" height="1.5em" />
            </a>
          </div>
          <div className="flex items-center">
            <div className="min-w-[10rem] sm:min-w-[33%] whitespace-nowrap">
              Length
            </div>
            <input
              type="number"
              placeholder="Enter length"
              value={length}
              onChange={handleLengthChange}
              className="w-28 border border-primary-border rounded p-1 text-sm"
            />
            <div className="pl-1">ft</div>
          </div>

          <div className="flex items-center font-bold">
            <div className="min-w-[10rem] sm:min-w-[33%] whitespace-nowrap">
              Estimated budget
            </div>
            <div className="pl-1">{`$ ${calculateTotalPrice()}`}</div>
          </div>

          <div className="text-sm">⦿ Please contact us to get a quote.</div>
        </div>

        <Title>Specification</Title>
        <div className="divide-y-[0.05rem] divide-primary-border">
          {specificationArr.map(
            (specification, index) =>
              specification.content !== undefined && (
                <div
                  className="flex items-center space-x-1 text-sm py-2"
                  key={index}
                >
                  <div className="min-w-[10rem] sm:min-w-[33%] whitespace-nowrap">{`${specification.title} `}</div>
                  <div>{specification.content}</div>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
}
