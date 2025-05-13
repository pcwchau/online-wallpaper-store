"use client";
import Image from "next/image";
import { useRef, useState } from "react";

interface ZoomInImageProps {
  src: string;
  alt: string;
  sizes: string;
}

/*
IMPORTANT: The parent component must be relative positioned.


Two images - normal and enlarged images - are shown in this component.

Originally, CSS property backgroundImage and backgroundPosition are used for 
the enlarged image, which use the raw image file. To prevent the extra loading 
time when the zoom-in box shows up, raw image file is also used for the normal 
image. Therefore, both normal and enlarged image src use the same public URL. 
Since it does not provide any optimization, the initial loading time is quite 
long for large image files (maybe a few MBs).

To reduce the initial loading time and the extra loading time, both images 
adapts Next.js Image for optimization. Since the images may not have the same 
dimension (and hence the same src url), we need to ensure the enlarged image is 
preloaded before the zoom-in box shows up.
*/
export default function ZoomInImage(props: ZoomInImageProps) {
  const [zoomPosition, setZoomPosition] = useState({
    visible: false,
    x: 0,
    y: 0,
    bgX: 0,
    bgY: 0,
  });
  const imageRef = useRef<HTMLImageElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!imageRef.current) return;

    const { left, top, width, height } =
      imageRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    const bgX = (x / width) * 100;
    const bgY = (y / height) * 100;

    setZoomPosition({ visible: true, x, y, bgX, bgY });
  };

  const handleMouseLeave = () => {
    setZoomPosition((prev) => ({ ...prev, visible: false }));
  };

  return (
    <>
      {/* Preload images */}
      <div className="hidden">
        <Image src={props.src} alt="Preload enlarged image" priority fill />
      </div>
      <Image
        src={props.src}
        alt={props.alt}
        className="object-contain"
        fill
        sizes={props.sizes}
        ref={imageRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      />
      {zoomPosition.visible && (
        <div
          className="absolute w-40 h-40 border-2 border-primary-border shadow-lg pointer-events-none z-50 overflow-hidden"
          style={{
            top: `${zoomPosition.y}px`,
            left: `${zoomPosition.x}px`,
            transform: "translate(-50%, -50%)",
          }}
        >
          {/* Let the scale be n. The next translate is (n-1)/2*100%. The final translate is bg*(n-1) */}
          <Image
            src={props.src}
            alt="Enlarged image"
            fill
            style={{
              transform: `translate(-${zoomPosition.bgX * 9}%, -${
                zoomPosition.bgY * 9
              }%) translate(450%, 450%) scale(10)`,
            }}
          />
        </div>
      )}
    </>
  );
}
