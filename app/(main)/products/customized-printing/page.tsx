"use client";
import QuestionCircleIcon from "@/assets/icons/questionCircleIcon";
import ZoomInSquareImage from "@/components/image/zoomInSquareImage";
import { TOP_BAR_HEIGHT } from "@/config/constant";
import Image from "next/image";
import { useState } from "react";
import { Tooltip } from "react-tooltip";

const textureArr = [
  {
    url: "/temp-image/1200x1200.jpg",
    name: "無紡布 English Name",
    price: [15, 21],
  },
  {
    url: "/temp-image/1200x1200_2.jpg",
    name: "豎條 English Name",
    price: [15, 21],
  },
  {
    url: "/temp-image/1200x1200_3.jpg",
    name: "紗線 English Name",
    price: [15, 21],
  },
  {
    url: "/temp-image/1200x1200_4.jpg",
    name: "科技皮 English Name",
    price: [15, 21],
  },
  {
    url: "/temp-image/1200x1200_5.jpg",
    name: "亮銀 English Name",
    price: [15, 21],
  },
  {
    url: "/temp-image/1200x1200_6.jpg",
    name: "亮銀2 English Name",
    price: [15, 21],
  },
  {
    url: "/temp-image/1200x1200_7.jpg",
    name: "亮金 English Name",
    price: [15, 21],
  },
  {
    url: "/temp-image/1200x1200_8.jpg",
    name: "冠銀 English Name",
    price: [15, 21],
  },
  {
    url: "/temp-image/1200x1200_9.jpg",
    name: "粗竹節 English Name",
    price: [15, 21],
  },
];

const qaulityArr = ["Fire Retardant", "Fire Ratardant and Waterproof"];

export default function Page() {
  const [currentTextureIndex, setCurrentTextureIndex] = useState<number | null>(
    null
  );
  const [currentQualityIndex, setCurrentQualityIndex] = useState<number | null>(
    null
  );
  const [width, setWidth] = useState<number | "">("");

  const handleTextureClick = (index: number) => {
    setCurrentTextureIndex(index);
    setCurrentQualityIndex(null);
  };

  const handleQualityClick = (index: number) => {
    setCurrentQualityIndex(index);
  };

  const handleWidthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setWidth(value ? Number(value) : "");
  };

  const calculateTotalPrice = () => {
    return currentTextureIndex !== null &&
      currentQualityIndex !== null &&
      width &&
      width > 0
      ? Math.round(
          textureArr[currentTextureIndex].price[currentQualityIndex] *
            width *
            1.1
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
              currentTextureIndex !== null
                ? textureArr[currentTextureIndex].url
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
        {/* Texture */}
        <div className="space-y-4">
          <div className="font-bold">Select a texture</div>
          <div className="flex flex-wrap gap-2">
            {textureArr.map((item, index) => (
              <button
                key={index}
                className={`flex gap-x-2 items-center ${
                  currentTextureIndex === index
                    ? "border-primary-border-selected"
                    : "border-primary-border"
                } border-2 rounded-lg p-1`}
                onClick={() => handleTextureClick(index)}
              >
                <Image
                  src={item.url}
                  height={64}
                  width={64}
                  alt="Texture"
                  className="h-8 w-8 object-cover rounded-md"
                />
                <div className="text-sm">{item.name}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Quality */}
        <div className="space-y-4">
          <div className="font-bold">Select a quality</div>
          <div className="flex flex-wrap gap-2">
            {qaulityArr.map((item, index) =>
              currentTextureIndex === null ||
              textureArr[currentTextureIndex].price[index] === null ? (
                <button
                  className="border-primary-border-disabled border-2 rounded-lg p-1 text-primary-text-disabled text-sm"
                  disabled
                  key={index}
                >
                  {item}
                </button>
              ) : (
                <button
                  className={`${
                    currentQualityIndex === index
                      ? "border-primary-border-selected"
                      : "border-primary-border"
                  }  border-2 rounded-lg p-1 text-sm`}
                  onClick={() => handleQualityClick(index)}
                  key={index}
                >
                  {item}
                </button>
              )
            )}
          </div>
        </div>

        {/* Price */}
        <div className="font-bold text-lg">
          {`$ ${
            currentTextureIndex !== null && currentQualityIndex !== null
              ? textureArr[currentTextureIndex].price[currentQualityIndex]
              : "-"
          } CAD / in`}
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
          in
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
