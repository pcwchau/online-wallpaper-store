import * as React from "react";
import { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="30px"
    height="30px"
    viewBox="0 0 0.9 0.9"
    fill="#FFFFFF"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M0.15 0.675h0.6"
      stroke="#000000"
      strokeWidth={0.075}
      strokeLinecap="round"
    />
    <path
      d="M0.15 0.45h0.6"
      stroke="#000000"
      strokeWidth={0.075}
      strokeLinecap="round"
    />
    <path
      d="M0.15 0.225h0.6"
      stroke="#000000"
      strokeWidth={0.075}
      strokeLinecap="round"
    />
  </svg>
);
export default SVGComponent;
