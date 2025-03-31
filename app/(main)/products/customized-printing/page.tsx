"use client";
import ZoomInSquareImage from "@/components/image/zoomInSquareImage";
import { TOP_BAR_HEIGHT } from "@/config/constant";
import Image from "next/image";
import { useState } from "react";

const textureArr = [
  {
    url: "/temp-image/1200x1200_1.jpg",
    name: "無紡布 English Name",
    price: [15, 21],
  },
  {
    url: "/temp-image/1200x1200.jpg",
    name: "豎條 English Name",
    price: [15, 21],
  },
  {
    url: "/temp-image/1200x1200.jpg",
    name: "紗線 English Name",
    price: [15, 21],
  },
  {
    url: "/temp-image/1200x1200.jpg",
    name: "科技皮 English Name",
    price: [15, 21],
  },
  {
    url: "/temp-image/1200x1200.jpg",
    name: "亮銀 English Name",
    price: [15, 21],
  },
  {
    url: "/temp-image/1200x1200.jpg",
    name: "亮金 English Name",
    price: [15, 21],
  },
  {
    url: "/temp-image/1200x1200.jpg",
    name: "冠銀 English Name",
    price: [15, 21],
  },
  {
    url: "/temp-image/1200x1200.jpg",
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
  const [height, setHeight] = useState<number | "">("");

  const handleTextureClick = (index: number) => {
    setCurrentTextureIndex(index);
    setCurrentQualityIndex(null);
  };

  const handleQualityClick = (index: number) => {
    setCurrentQualityIndex(index);
  };

  const handleHeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setHeight(value ? Number(value) : "");
  };

  const handleWidthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setWidth(value ? Number(value) : "");
  };

  const calculateTotalPrice = () => {
    return currentTextureIndex !== null &&
      currentQualityIndex !== null &&
      width &&
      width > 0 &&
      height &&
      height > 0
      ? textureArr[currentTextureIndex].price[currentQualityIndex] *
          (width / 12 + 2) *
          10
      : "-";
  };

  return (
    <div className="flex flex-col lg:flex-row lg:items-start gap-8">
      <div className="w-full lg:w-[50%] flex justify-end">
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
          />
        </div>
      </div>

      {/* Input and information */}
      <div className="flex flex-col w-full lg:w-[50%] space-y-4">
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

        {/* Unit price */}
        <div className="font-bold">
          Unit price:{" $ "}
          {currentTextureIndex !== null && currentQualityIndex !== null
            ? textureArr[currentTextureIndex].price[currentQualityIndex] +
              "/sq ft"
            : "-"}
        </div>

        {/* Input */}
        <div className="flex gap-2 items-center font-bold">
          Height:
          <input
            type="number"
            placeholder="Enter Height"
            value={height}
            onChange={handleHeightChange}
            className="w-32 border border-primary-border-selected rounded p-1 font-medium"
          />
          inches
        </div>
        <div className="flex gap-2 items-center font-bold">
          Width:
          <input
            type="number"
            placeholder="Enter Width"
            value={width}
            onChange={handleWidthChange}
            className="w-32 border border-primary-border-selected rounded p-1 font-medium"
          />
          inches
        </div>

        {/* Total price */}
        <div className="font-bold">
          Total price:{" $ "}
          {calculateTotalPrice()}
        </div>
      </div>
    </div>
  );
}
