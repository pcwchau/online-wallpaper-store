"use client";
import QuestionCircleIcon from "@/assets/icons/questionCircleIcon";
import ZoomInSquareImage from "@/components/image/zoomInSquareImage";
import { TOP_BAR_HEIGHT } from "@/config/constant";
import { QualityType } from "@/types/enum";
import Image from "next/image";
import { useState } from "react";
import { Tooltip } from "react-tooltip";

// optionType: "colour" - Thumbnail images will be shown in the option section
// optionType: "texture" - Thumbnail images will not be shown in the option section
interface ProductPageProps {
  optionType: "colour" | "texture";
  optionArr: {
    name: string;
    imageUrl: string;
    priceByQualityArr: { quality: QualityType; price: number }[];
  }[];
}

export default function ProductPage(props: ProductPageProps) {
  const [currentOptionIndex, setCurrentOptionIndex] = useState<number | null>(
    null
  );
  const [currentQualityIndex, setCurrentQualityIndex] = useState<number | null>(
    null
  );
  const [width, setWidth] = useState<number | "">("");

  const handleOptionClick = (index: number) => {
    setCurrentOptionIndex(index);
    setCurrentQualityIndex(0);
  };

  const handleQualityClick = (index: number) => {
    setCurrentQualityIndex(index);
  };

  const handleWidthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setWidth(value ? Number(value) : "");
  };

  const calculateTotalPrice = () => {
    return currentOptionIndex !== null &&
      currentQualityIndex !== null &&
      width &&
      width > 0
      ? Math.round(
          props.optionArr[currentOptionIndex].priceByQualityArr[
            currentQualityIndex
          ].price * width
        )
      : "-";
  };

  return (
    <div className="flex flex-col lg:flex-row lg:items-start gap-8">
      <Tooltip id="my-tooltip" />
      <div className="w-full lg:w-[50%] flex justify-center">
        <div
          className="w-full aspect-square relative"
          style={{
            maxHeight: `calc(100vh - ${TOP_BAR_HEIGHT} - 2rem)`,
            maxWidth: `calc(100vh - ${TOP_BAR_HEIGHT} - 2rem)`,
          }}
        >
          <ZoomInSquareImage
            src={
              currentOptionIndex !== null
                ? props.optionArr[currentOptionIndex].imageUrl
                : "/image/products/customized-printing.jpg"
            }
            alt={"Customized printing"}
            unoptimized
          />
        </div>
      </div>

      {/* Input and information */}
      <div className="flex flex-col w-full lg:w-[50%] space-y-4">
        <div className="border-b-2 border-b-primary-border font-bold text-xl">
          Material Selection
        </div>
        {/* Options */}
        <div className="space-y-4">
          <div className="font-bold">Select a {props.optionType}</div>
          <div className="flex flex-wrap gap-2">
            {props.optionArr.map((item, index) => (
              <button
                key={index}
                className={`flex gap-x-2 items-center ${
                  currentOptionIndex === index
                    ? "border-primary-border-selected"
                    : "border-primary-border"
                } border-2 rounded-lg p-1`}
                onClick={() => handleOptionClick(index)}
              >
                {props.optionType === "colour" && (
                  <Image
                    src={item.imageUrl}
                    height={64}
                    width={64}
                    alt="Texture"
                    className="h-8 w-8 object-cover rounded-md"
                  />
                )}
                <div className="text-sm">{item.name}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Quality */}
        <div className="space-y-4">
          <div className="font-bold">Select a quality</div>
          <div className="flex flex-wrap gap-2">
            {currentOptionIndex === null ? (
              <button
                className="border-primary-border-disabled border-2 rounded-lg p-1 text-primary-text-disabled text-sm"
                disabled
              >
                You need to select a {props.optionType} first
              </button>
            ) : (
              props.optionArr[currentOptionIndex].priceByQualityArr.map(
                (item, index) => (
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
                )
              )
            )}
          </div>
        </div>

        {/* Price */}
        <div className="font-bold text-lg">
          {`$ ${
            currentOptionIndex !== null && currentQualityIndex !== null
              ? props.optionArr[currentOptionIndex].priceByQualityArr[
                  currentQualityIndex
                ].price
              : "-"
          } CAD / ft`}
        </div>

        <div className="border-b-2 border-b-primary-border font-bold text-xl pt-4">
          Cost Estimation
        </div>

        {/* Input */}
        <div className="flex gap-2 items-center font-bold">
          Height: 116 in (Please contact us if over 116 in)
        </div>
        <div className="flex gap-2 items-center font-bold">
          Width:
          <input
            type="number"
            placeholder="Enter width"
            value={width}
            onChange={handleWidthChange}
            className="w-32 border border-primary-border-selected rounded p-1 font-medium"
          />
          ft
          <a
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Hello to you too haha!"
          >
            <QuestionCircleIcon width="1.5em" height="1.5em" />
          </a>
        </div>

        {/* Total price */}
        <div className="flex gap-2 items-center font-bold">
          {`Estimated price: $ ${calculateTotalPrice()} CAD`}
          <a
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Hello to you too!"
          >
            <QuestionCircleIcon width="1.5em" height="1.5em" />
          </a>
        </div>
      </div>
    </div>
  );
}
