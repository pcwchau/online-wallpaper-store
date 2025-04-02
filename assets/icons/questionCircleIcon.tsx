import * as React from "react";
import { SVGProps } from "react";

const QuestionCircleIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    {...props}
  >
    <circle
      cx={12}
      cy={12}
      r={10}
      stroke={props.color || "currentColor"}
      strokeWidth={1.5}
    />
    <path
      stroke={props.color || "currentColor"}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M10.125 8.875a1.875 1.875 0 1 1 2.828 1.615c-.475.281-.953.708-.953 1.26V13"
    />
    <circle cx={12} cy={16} r={1} fill={props.color || "currentColor"} />
  </svg>
);
export default QuestionCircleIcon;
