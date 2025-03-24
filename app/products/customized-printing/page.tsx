"use client";
import { TOP_BAR_HEIGHT } from "@/config/constant";
import Image from "next/image";
import { useState } from "react";

const textureArr = [
  {
    url: "/temp-image/customized/alys_texture_ws-alabaster.jpg",
    name: "one",
    price: [15, 21],
  },
  {
    url: "/temp-image/customized/alys_texture_ws-breccia.jpg",
    name: "alys_texture_ws-breccia",
    price: [15, 21],
  },
  {
    url: "/temp-image/customized/alys_texture_ws-coral_reef.jpg",
    name: "alys_texture_ws-coral_reef",
    price: [15, 21],
  },
  {
    url: "/temp-image/customized/alys_texture_ws-coulee.jpg",
    name: "alys_texture_ws-coulee",
    price: [15, 21],
  },
  {
    url: "/temp-image/customized/alys_texture_ws-dark_lantern.jpg",
    name: "alys_texture_ws-dark_lantern",
    price: [15, 21],
  },
  {
    url: "/temp-image/customized/alys_texture_ws-dolomite.jpg",
    name: "alys_texture_ws-dolomite",
    price: [15, 21],
  },
  {
    url: "/temp-image/customized/alys_texture_ws-limestone.jpg",
    name: "alys_texture_ws-limestone",
    price: [15, 21],
  },
  {
    url: "/temp-image/customized/alys_texture_ws-sand_bar.jpg",
    name: "alys_texture_ws-sand_bar",
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
    <div className="flex flex-col lg:flex-row lg:items-start py-4 gap-4">
      {/* Square image */}
      <div
        className="relative aspect-square w-full lg:w-[50%]"
        style={{
          maxHeight: `calc(100vh - ${TOP_BAR_HEIGHT} - 2rem)`,
        }}
      >
        <Image
          src={
            currentTextureIndex !== null
              ? textureArr[currentTextureIndex].url
              : "/temp-image/customized/Custom-printing-scaled.jpg"
          }
          fill
          alt="Custom printing"
          className="object-contain"
        />
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
                  className="h-8 w-8"
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
                  className="border-primary-border-disabled border-2 rounded-lg p-1 text-primary-text-disabled"
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
