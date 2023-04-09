import React, { SVGProps } from "react";

interface TyreProps extends SVGProps<SVGSVGElement> {
  compound?: number;
}

interface CompoundValues {
  type: string;
  color: string;
  x: string;
  y: string;
  fontSize: string;
}

export const Tyre = (props: TyreProps) => {
  let compoundValues: CompoundValues = {
    type: "S",
    color: "red",
    x: "20",
    y: "30.5",
    fontSize: "17",
  };
  switch (props.compound) {
    case 17:
    case 21:
      compoundValues = {
        type: "M",
        color: "yellow",
        x: "17.5",
        y: "29",
        fontSize: "15",
      };
      break;
    case 18:
    case 22:
      compoundValues = {
        type: "H",
        color: "white",
        x: "19",
        y: "30.5",
        fontSize: "17",
      };
      break;
    case 7:
      compoundValues = {
        type: "I",
        color: "#3AC82C",
        x: "23.5",
        y: "30.5",
        fontSize: "17",
      };
      break;
    case 8:
    case 15:
      compoundValues = {
        type: "W",
        color: "#4491D2",
        x: "17",
        y: "30.5",
        fontSize: "15",
      };
      break;
    default:
      break;
  }
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" {...props}>
      <path
        d="M124.63 316.175c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24Zm0 10c7.72 0 14 6.28 14 14s-6.28 14-14 14-14-6.28-14-14 6.28-14 14-14Z"
        style={{
          stroke: "none",
          strokeWidth: 1,
          strokeDasharray: "none",
          strokeLinecap: "butt",
          strokeDashoffset: 0,
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          fill: compoundValues.color,
          fillRule: "nonzero",
          opacity: 1,
        }}
        transform="translate(-99.63 -315.175)"
        vectorEffect="non-scaling-stroke"
      />
      <path
        strokeLinecap="round"
        d="M111.202 354.282c-7.456-7.456-7.456-19.544 0-27M138.13 327.282c7.456 7.456 7.456 19.544 0 27"
        style={{
          stroke: "#000",
          strokeWidth: 3,
          strokeDasharray: "none",
          strokeLinecap: "butt",
          strokeDashoffset: 0,
          strokeLinejoin: "miter",
          strokeMiterlimit: 10,
          fill: "none",
          fillRule: "nonzero",
          opacity: 1,
        }}
        transform="translate(-99.63 -315.175)"
        vectorEffect="non-scaling-stroke"
      />
      <text
        x={compoundValues.x}
        y={compoundValues.y}
        style={{
          fill: "#fff",
          fontFamily: "Formula1-Regular",
          fontSize: `${compoundValues.fontSize}px`,
          whiteSpace: "pre",
        }}
        transform="matrix(1.19535 0 0 1.17518 -6.447 -3.397)"
      >
        {compoundValues.type}
      </text>
    </svg>
  );
};
