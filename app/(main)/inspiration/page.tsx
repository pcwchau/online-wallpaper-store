"use client";

import Image from "next/image";
import { useState } from "react";

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
];

export default function Page() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const closeLightbox = () => setLightboxIndex(null);
  const showPrev = () =>
    setLightboxIndex((prev) => (prev! - 1 + imageArr.length) % imageArr.length);
  const showNext = () =>
    setLightboxIndex((prev) => (prev! + 1) % imageArr.length);

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
              />
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Viewer */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 bg-secondary/90 z-50 flex items-center justify-center">
          <button
            className="absolute top-4 right-4 text-secondary-text text-4xl"
            onClick={closeLightbox}
          >
            &times;
          </button>

          <button
            className="absolute left-4 text-secondary-text text-5xl select-none"
            onClick={showPrev}
          >
            &#10094;
          </button>

          <div className="relative w-[90vw] h-[90vh] max-w-5xl max-h-[90vh]">
            <Image
              src={imageArr[lightboxIndex].url}
              alt={imageArr[lightboxIndex].name}
              fill
              className="object-contain"
            />
          </div>

          <button
            className="absolute right-4 text-white text-5xl select-none"
            onClick={showNext}
          >
            &#10095;
          </button>
        </div>
      )}
    </div>
  );
}
