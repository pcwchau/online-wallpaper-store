import * as React from "react";
import { SVGProps } from "react";

const ArrowLeftCircleIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width="1em"
    height="1em"
    viewBox="0 0 493.468 493.468"
    fill={props.color || "currentColor"}
    {...props}
  >
    <path d="M246.736 0C110.688 0 .008 110.692.008 246.732c0 136.056 110.68 246.736 246.728 246.736S493.46 382.788 493.46 246.732C493.46 110.692 382.784 0 246.736 0zm-49.144 249.536 94.764 94.776a5.284 5.284 0 0 1 1.568 3.776c0 1.448-.556 2.784-1.568 3.772l-8.96 8.98c-2.004 2.004-5.568 2.012-7.568 0l-110.14-110.136c-1.008-1.016-1.556-2.38-1.54-3.932a5.35 5.35 0 0 1 1.536-3.852l110.312-110.304a5.296 5.296 0 0 1 3.776-1.56c1.424 0 2.788.556 3.78 1.56l8.968 8.98c2.1 2.06 2.1 5.468.004 7.548l-94.932 94.944a3.846 3.846 0 0 0 0 5.448z" />
  </svg>
);
export default ArrowLeftCircleIcon;
