"use client";
import { TOP_BAR_HEIGHT } from "@/config/constant";
import Image from "next/image";
import { useState } from "react";

const textureArr = [
  {
    url: "/temp-image/customized/alys_texture_ws-alabaster.jpg",
    name: "one",
    price: [9, 15],
  },
  {
    url: "/temp-image/customized/alys_texture_ws-breccia.jpg",
    name: "alys_texture_ws-breccia",
    price: [10, 15],
  },
  {
    url: "/temp-image/customized/alys_texture_ws-coral_reef.jpg",
    name: "alys_texture_ws-coral_reef",
    price: [9, 9],
  },
  {
    url: "/temp-image/customized/alys_texture_ws-coulee.jpg",
    name: "alys_texture_ws-coulee",
    price: [9, 9],
  },
  {
    url: "/temp-image/customized/alys_texture_ws-dark_lantern.jpg",
    name: "alys_texture_ws-dark_lantern",
    price: [9, 9],
  },
  {
    url: "/temp-image/customized/alys_texture_ws-dolomite.jpg",
    name: "alys_texture_ws-dolomite",
    price: [9, 9],
  },
  {
    url: "/temp-image/customized/alys_texture_ws-limestone.jpg",
    name: "alys_texture_ws-limestone",
    price: [9, 9],
  },
  {
    url: "/temp-image/customized/alys_texture_ws-sand_bar.jpg",
    name: "alys_texture_ws-sand_bar",
    price: [9, 9],
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

  const handleTextureClick = (index: number) => {
    setCurrentTextureIndex(index);
    setCurrentQualityIndex(null);
  };

  const handleQualityClick = (index: number) => {
    setCurrentQualityIndex(index);
  };

  return (
    <div className="flex flex-col lg:flex-row lg:items-start py-4">
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
      <div className="flex flex-col w-full lg:w-[50%] lg:pl-8 space-y-4">
        {/* Texture */}
        <div className="space-y-4">
          <div>SELECT A TEXTURE</div>
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
                <div>{item.name}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Quality */}
        <div className="space-y-4">
          <div>SELECT A QUALITY</div>
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
                  }  border-2 rounded-lg p-1`}
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
        <div className="">
          UNIT PRICE:{" $ "}
          {currentTextureIndex !== null && currentQualityIndex !== null
            ? textureArr[currentTextureIndex].price[currentQualityIndex] +
              " /SF"
            : "-"}
        </div>

        {/* Input */}
        <div>
          ENTER HEIGHT
          <input />
        </div>
        <div>
          ENTER WIDTH
          <input />
        </div>

        {/* Total price */}
      </div>
    </div>
  );
}
