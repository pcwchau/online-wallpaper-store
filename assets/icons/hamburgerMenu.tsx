import * as React from "react";
import { SVGProps } from "react";
const HamburgerMenu = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke={props.color || "currentColor"}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M20 7H4M20 12H4M20 17H4"
    />
  </svg>
);
export default HamburgerMenu;
