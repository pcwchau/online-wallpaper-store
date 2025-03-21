"use client";
import { TOP_BAR_HEIGHT } from "@/config/constant";
import Image from "next/image";
import { useState } from "react";

const textureArr = [
  {
    url: "/temp-image/customized/alys_texture_ws-alabaster.jpg",
    name: "alys_texture_ws-alabaster",
    price: [9, null],
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
      {/* The image should be a square */}
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
      <div className="flex flex-col w-full lg:w-[50%] lg:pl-8">
        <div className="pb-4">SELECT A TEXTURE</div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-2">
          {textureArr.map((item, index) => (
            <button
              key={index}
              className={`flex space-x-2 items-center ${
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
        <div className="py-4">SELECT A QUALITY</div>
        <div className="space-x-2">
          {qaulityArr.map((item, index) => (
            <span key={index}>
              {currentTextureIndex === null ||
              textureArr[currentTextureIndex].price[index] === null ? (
                <button
                  className="border-primary-border-disabled border-2 rounded-lg p-1 text-primary-text-disabled"
                  disabled
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
                >
                  {item}
                </button>
              )}
            </span>
          ))}
        </div>
        <div className="py-4">
          UNIT PRICE:{" $ "}
          {currentTextureIndex !== null && currentQualityIndex !== null
            ? textureArr[currentTextureIndex].price[currentQualityIndex] +
              " /SF"
            : "-"}
        </div>
        <div>
          ENTER HEIGHT
          <input />
        </div>
        <div>
          ENTER WIDTH
          <input />
        </div>
      </div>
    </div>
  );
}
