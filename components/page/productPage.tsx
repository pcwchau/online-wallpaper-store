"use client";
import QuestionCircleIcon from "@/assets/icons/questionCircleIcon";
import ZoomInSquareImage from "@/components/image/zoomInSquareImage";
import { TOP_BAR_HEIGHT } from "@/config/constant";
import { ProductCategoryType, Product } from "@/types/product";
import Image from "next/image";
import { memo, useState } from "react";
import { Tooltip } from "react-tooltip";

// eslint-disable-next-line react/display-name
const Title = memo(({ children }: { children: React.ReactNode }) => {
  return (
    <div className="border-b-2 border-b-primary-border font-bold text-xl">
      {children}
    </div>
  );
});

interface ProductPageProps {
  productCategory: ProductCategoryType;
  products: Product[];
}

export default function ProductPage(props: ProductPageProps) {
  const [currentOptionIndex, setCurrentOptionIndex] = useState<number | null>(
    null
  );
  const [currentQualityIndex, setCurrentQualityIndex] = useState<number | null>(
    null
  );
  const [length, setLength] = useState<number | "">("");

  const defaultMainImageUrl =
    props.productCategory === ProductCategoryType.Customized
      ? "/image/product/customized-printing.jpg"
      : props.productCategory === ProductCategoryType.YarnDyed
      ? "/image/product/customized-printing.jpg"
      : props.productCategory === ProductCategoryType.Embroidered
      ? "/image/product/embroidered.jpg"
      : "/image/product/vinyl.jpg";

  const handleOptionClick = (index: number) => {
    setCurrentOptionIndex(index);
    setCurrentQualityIndex(0);
  };

  const handleQualityClick = (index: number) => {
    setCurrentQualityIndex(index);
  };

  const handleLengthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setLength(value ? Number(value) : "");
  };

  const calculateTotalPrice = () => {
    return currentOptionIndex !== null &&
      currentQualityIndex !== null &&
      props.products[currentOptionIndex].priceByQualityArr[currentQualityIndex]
        .price !== null &&
      length &&
      length > 0
      ? Math.round(
          props.products[currentOptionIndex].priceByQualityArr[
            currentQualityIndex
          ].price * length
        )
      : "-";
  };

  return (
    <div className="flex flex-col lg:flex-row lg:items-start gap-8">
      <Tooltip id="my-tooltip" />

      {/* Main Image */}
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
              currentOptionIndex !== null
                ? props.products[currentOptionIndex].imageUrl
                : defaultMainImageUrl
            }
            alt={"Customized printing"}
            unoptimized
          />
        </div>
      </div>

      {/* Input and information */}
      <div className="flex flex-col w-full lg:w-[50%] space-y-4">
        <Title>Material Selection</Title>
        <div className="space-y-4">
          <div className="font-bold">
            Select a
            {props.productCategory === ProductCategoryType.Customized
              ? " texture"
              : " colour"}
          </div>
          <div className="flex flex-wrap gap-2">
            {props.products.map((item, index) => (
              <button
                key={index}
                className={`flex gap-x-2 items-center ${
                  currentOptionIndex === index
                    ? "border-primary-border-selected"
                    : "border-primary-border"
                } border-2 rounded-lg p-1`}
                onClick={() => handleOptionClick(index)}
              >
                {/* Options with image only */}
                {props.productCategory === ProductCategoryType.YarnDyed && (
                  <Image
                    src={item.imageUrl}
                    height={64}
                    width={64}
                    alt="Texture"
                    className="h-8 w-8 object-cover rounded-md"
                  />
                )}
                {/* Options with name only */}
                {(props.productCategory === ProductCategoryType.Customized ||
                  props.productCategory === ProductCategoryType.Embroidered ||
                  props.productCategory === ProductCategoryType.Vinyl) && (
                  <div className="text-sm">{item.name}</div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Quality */}
        <div className="space-y-4">
          <div className="font-bold">Select a quality</div>
          <div className="flex flex-wrap gap-2">
            {currentOptionIndex === null ? (
              <button
                className="border-primary-border-disabled border-2 rounded-lg p-1 text-primary-text-disabled text-sm"
                disabled
              >
                You need to select a
                {props.productCategory === ProductCategoryType.Customized
                  ? " texture "
                  : " colour "}
                first
              </button>
            ) : (
              props.products[currentOptionIndex].priceByQualityArr.map(
                (item, index) => (
                  <button
                    className={`${
                      currentQualityIndex === index
                        ? "border-primary-border-selected"
                        : "border-primary-border"
                    }  border-2 rounded-lg p-1 text-sm`}
                    onClick={() => handleQualityClick(index)}
                    key={index}
                  >
                    {item.quality}
                  </button>
                )
              )
            )}
          </div>
        </div>

        {/* Price */}
        <div className="text-lg">
          <span className="font-bold">{`$ ${
            currentOptionIndex !== null &&
            currentQualityIndex !== null &&
            props.products[currentOptionIndex].priceByQualityArr[
              currentQualityIndex
            ].price !== null
              ? props.products[currentOptionIndex].priceByQualityArr[
                  currentQualityIndex
                ].price
              : "-"
          }`}</span>
          <span> / Linear Foot</span>
        </div>

        <Title>Cost Estimation</Title>
        <div className="flex gap-2 items-center">
          <span className="font-bold">Length: </span>
          <input
            type="number"
            placeholder="Enter length"
            value={length}
            onChange={handleLengthChange}
            className="w-32 border border-primary-border-selected rounded p-1"
          />
          <span>feet</span>
        </div>

        {/* Total price */}
        <div className="flex gap-2 items-center">
          <span className="font-bold">Estimated price:</span>
          <span>{`$ ${calculateTotalPrice()}`}</span>
        </div>

        <Title>Specifications</Title>
        <div className="flex gap-2 items-center">
          <span className="font-bold">Roll length: </span>
          <span>
            {currentOptionIndex === null ||
            props.products[currentOptionIndex].specification.length ===
              undefined
              ? "-"
              : `${props.products[currentOptionIndex].specification.length} inches`}
          </span>
        </div>
        <div className="flex gap-2 items-center">
          <span className="font-bold">Roll width: </span>
          <span>
            {currentOptionIndex === null ||
            props.products[currentOptionIndex].specification.width === undefined
              ? "-"
              : `${props.products[currentOptionIndex].specification.width} inches`}
          </span>
          {currentOptionIndex !== null &&
            props.products[currentOptionIndex].specification.width !==
              undefined && (
              <a
                data-tooltip-id="my-tooltip"
                data-tooltip-content={`Please contact us if over ${props.products[currentOptionIndex].specification.width} inches`}
              >
                <QuestionCircleIcon width="1.5em" height="1.5em" />
              </a>
            )}
        </div>
        <div className="flex gap-2 items-center">
          <span className="font-bold">Thickness: </span>
          <span>
            {currentOptionIndex === null ||
            props.products[currentOptionIndex].specification.thickness ===
              undefined
              ? "-"
              : `${props.products[currentOptionIndex].specification.thickness} inches`}
          </span>
        </div>
        <div className="flex gap-2 items-center">
          <span className="font-bold">Substrate: </span>
          <span>
            {currentOptionIndex === null ||
            props.products[currentOptionIndex].specification.substrate ===
              undefined
              ? "-"
              : `${props.products[currentOptionIndex].specification.substrate}`}
          </span>
        </div>
        <div className="flex gap-2 items-center">
          <span className="font-bold">Weight: </span>
          <span>
            {currentOptionIndex === null ||
            props.products[currentOptionIndex].specification.weight ===
              undefined
              ? "-"
              : `${props.products[currentOptionIndex].specification.weight} g/sq.ft.`}
          </span>
        </div>
      </div>
    </div>
  );
}
