"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import ArrowLeftCircleIcon from "@/assets/icons/arrowLeftCircleIcon";
import ArrowRightCircleIcon from "@/assets/icons/arrowRightCircleIcon";
import CancelCircleIcon from "@/assets/icons/cancelCircleIcon";

const imageArr = [
  { url: "/temp-image/1200x1200.jpg", name: "無紡布 English Name" },
  { url: "/temp-image/1920x1080.jpg", name: "無紡布 English Name" },
  { url: "/temp-image/1080x1920.jpg", name: "1080x1920" },
  { url: "/temp-image/1200x1200_2.jpg", name: "豎條 English Name" },
  { url: "/temp-image/1200x1200_3.jpg", name: "紗線 English Name" },
  { url: "/temp-image/1200x1200_4.jpg", name: "科技皮 English Name" },
  { url: "/temp-image/1200x1200_5.jpg", name: "亮銀 English Name" },
  { url: "/temp-image/1200x1200_6.jpg", name: "亮銀2 English Name" },
  { url: "/temp-image/1200x1200_7.jpg", name: "亮金 English Name" },
  { url: "/temp-image/1200x1200_8.jpg", name: "冠銀 English Name" },
  { url: "/temp-image/1200x1200_9.jpg", name: "粗竹節 English Name" },
  { url: "/temp-image/1500x2000.avif", name: "粗竹節 English Name" },
];

export default function Page() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const handleLightboxClose = () => setLightboxIndex(null);

  const handlePrevClick = () =>
    setLightboxIndex((prev) => (prev! - 1 + imageArr.length) % imageArr.length);

  const handleNextClick = () =>
    setLightboxIndex((prev) => (prev! + 1) % imageArr.length);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "ArrowRight") handleNextClick();
      if (e.key === "ArrowLeft") handlePrevClick();
      if (e.key === "Escape") handleLightboxClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex]);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNextClick,
    onSwipedRight: handlePrevClick,
  });

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {imageArr.map((item, index) => (
          <div key={index}>
            <div
              className="aspect-square relative cursor-pointer"
              onClick={() => setLightboxIndex(index)}
            >
              <Image
                src={item.url}
                alt={item.name}
                fill
                className="object-cover rounded-lg"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8+vz1fwAJKAO48yd7dQAAAABJRU5ErkJggg=="
              />
            </div>
          </div>
        ))}
      </div>

      {lightboxIndex !== null && (
        <div
          {...swipeHandlers}
          className="fixed inset-0 bg-secondary/90 z-50 flex flex-col items-center p-2"
        >
          <button
            className="absolute top-4 right-4 text-secondary-text select-none z-50"
            onClick={handleLightboxClose}
          >
            <CancelCircleIcon width="1.5em" height="1.5em" opacity={0.6} />
          </button>

          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary-text select-none z-50"
            onClick={handlePrevClick}
          >
            <ArrowLeftCircleIcon width="2em" height="2em" opacity={0.6} />
          </button>

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-secondary-text select-none z-50"
            onClick={handleNextClick}
          >
            <ArrowRightCircleIcon width="2em" height="2em" opacity={0.6} />
          </button>

          <div className="relative w-full h-full">
            <Image
              src={imageArr[lightboxIndex].url}
              alt={imageArr[lightboxIndex].name}
              fill
              className="object-contain"
            />
          </div>

          <div className="mt-2 text-secondary-text text-center">
            {imageArr[lightboxIndex].name}
          </div>
        </div>
      )}
    </div>
  );
}
