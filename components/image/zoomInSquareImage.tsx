"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface ZoomInSquareImageProps {
  src: string;
  alt: string;
}

// The parent component must be relative positioned
export default function ZoomInSquareImage(props: ZoomInSquareImageProps) {
  const [isImageLoading, setIsImageLoading] = useState(true);
  const [zoomPosition, setZoomPosition] = useState({
    x: 0,
    y: 0,
    visible: false,
    bgX: 0,
    bgY: 0,
  });
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    setIsImageLoading(true);
  }, [props.src]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!imageRef.current) return;

    const { left, top, width, height } =
      imageRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    const bgX = (x / width) * 100;
    const bgY = (y / height) * 100;

    setZoomPosition({ x, y, visible: true, bgX, bgY });
  };

  const handleMouseLeave = () => {
    setZoomPosition((prev) => ({ ...prev, visible: false }));
  };

  return (
    <>
      <Image
        src={props.src}
        alt={props.alt}
        className="object-contain"
        fill
        // unoptimized // to prevent duplicate image loading of zoomed-in image
        ref={imageRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onLoad={() => setIsImageLoading(false)}
      />
      {zoomPosition.visible && (
        <div
          className="absolute w-40 h-40 border-2 border-primary-border shadow-lg pointer-events-none z-50"
          style={{
            top: `${zoomPosition.y}px`,
            left: `${zoomPosition.x}px`,
            transform: "translate(-50%, -50%)",
            backgroundImage: `url(${props.src})`,
            backgroundPosition: `${zoomPosition.bgX}% ${zoomPosition.bgY}%`,
          }}
        />
      )}
      {isImageLoading && (
        <div className="absolute inset-0 flex justify-center items-center z-40 bg-primary/50">
          Loading ...
        </div>
      )}
    </>
  );
}
