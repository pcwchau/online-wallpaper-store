import * as React from "react";
import { SVGProps } from "react";

const ArrowRightCircleIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width="1em"
    height="1em"
    viewBox="0 0 493.456 493.456"
    fill={props.color || "currentColor"}
    {...props}
  >
    <path d="M246.73 0C110.682 0 .002 110.68.002 246.736c0 136.036 110.68 246.72 246.728 246.72s246.724-110.684 246.724-246.72C493.454 110.68 382.778 0 246.73 0zm74.408 250.492L210.822 360.804c-2.004 2.008-5.548 2.008-7.556 0l-8.98-8.968c-2.076-2.084-2.072-5.48.004-7.564l94.952-94.94a3.891 3.891 0 0 0 0-5.452l-94.78-94.776c-1-1-1.56-2.344-1.56-3.792 0-1.42.556-2.772 1.556-3.764l8.968-8.976a5.332 5.332 0 0 1 3.78-1.556 5.276 5.276 0 0 1 3.776 1.556l110.156 110.152c1.02 1.016 1.572 2.372 1.552 3.936a5.258 5.258 0 0 1-1.552 3.832z" />
  </svg>
);
export default ArrowRightCircleIcon;
