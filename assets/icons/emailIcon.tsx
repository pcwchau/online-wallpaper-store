import * as React from "react";
import { SVGProps } from "react";

const emailIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    {...props}
  >
    <g
      stroke={props.color || "currentColor"}
      strokeLinecap="round"
      strokeWidth={1.5}
    >
      <path
        strokeLinejoin="round"
        strokeMiterlimit={10}
        d="M17 20.5H7c-3 0-5-1.5-5-5v-7c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v7c0 3.5-2 5-5 5Z"
      />
      <path d="m18.77 7.769-5.547 4.286a2 2 0 0 1-2.446 0L5.23 7.77" />
    </g>
  </svg>
);
export default emailIcon;
