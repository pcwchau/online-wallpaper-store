import * as React from "react";
import { SVGProps } from "react";

const LocationIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    {...props}
  >
    <g stroke={props.color || "currentColor"} strokeWidth={1.5}>
      <path d="M9.179 20.311a83.329 83.329 0 0 0 .29.283m-.29-.283c-2.73-2.674-6.592-6.884-5.484-11.821 1.952-8.66 14.668-8.65 16.61.01 1.14 5.08-2.983 9.38-5.728 12.04-1.974 1.922-3.14 1.94-5.108.054m-.29-.283.29.283" />
      <circle cx={12} cy={9.5} r={2.5} />
    </g>
  </svg>
);
export default LocationIcon;
