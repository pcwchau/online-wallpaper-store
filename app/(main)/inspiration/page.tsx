"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import ArrowLeftCircleIcon from "@/assets/icons/arrowLeftCircleIcon";
import ArrowRightCircleIcon from "@/assets/icons/arrowRightCircleIcon";
import CancelCircleIcon from "@/assets/icons/cancelCircleIcon";
import { getImagesFromS3 } from "@/api/api";
import { getFileNameFromUrl } from "@/utils/commonUtils";

export default function Page() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  const handleLightboxClose = () => setLightboxIndex(null);

  const handlePrevClick = () =>
    setLightboxIndex(
      (prev) => (prev! - 1 + imageUrls.length) % imageUrls.length
    );

  const handleNextClick = () =>
    setLightboxIndex((prev) => (prev! + 1) % imageUrls.length);

  useEffect(() => {
    const fetchImageUrls = async () => {
      setImageUrls(await getImagesFromS3("inspiration/ulipic/"));
    };

    fetchImageUrls();
  }, []);

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
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
        {imageUrls.map((item, index) => {
          return (
            <div key={index}>
              <div
                className="aspect-square relative cursor-pointer"
                onClick={() => setLightboxIndex(index)}
              >
                <Image
                  src={item}
                  alt={`item ${index}`}
                  fill
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8+vz1fwAJKAO48yd7dQAAAABJRU5ErkJggg=="
                />
              </div>
            </div>
          );
        })}
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
              src={imageUrls[lightboxIndex]}
              alt={imageUrls[lightboxIndex]}
              fill
              className="object-contain"
            />
          </div>

          <div className="mt-2 text-secondary-text text-center">
            {getFileNameFromUrl(imageUrls[lightboxIndex], false)}
          </div>
        </div>
      )}
    </div>
  );
}
