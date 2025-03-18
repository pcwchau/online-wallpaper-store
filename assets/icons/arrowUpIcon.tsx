import * as React from "react";
import { SVGProps } from "react";

const ArrowUpIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      fill={props.color || "currentColor"}
      d="M18.293 15.29a1 1 0 0 0 0-1.415L13.4 8.988a2 2 0 0 0-2.828 0l-4.89 4.89a1 1 0 1 0 1.414 1.415l4.185-4.186a1 1 0 0 1 1.415 0l4.182 4.182a1 1 0 0 0 1.414 0Z"
    />
  </svg>
);
export default ArrowUpIcon;
