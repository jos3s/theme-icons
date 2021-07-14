import React from "react";
import P from "prop-types";

const FullMoon = ({
  color = "#fff",
  details = "#F3F3F3",
  size = 22,
  ...props
}) => {
  return (
    <svg
      width={size + 1}
      height={size}
      viewBox="0 0 23 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.6713 11C21.6713 16.7953 16.9356 21.5 11.0856 21.5C5.23569 21.5 0.5 16.7953 0.5 11C0.5 5.20466 5.23569 0.5 11.0856 0.5C16.9356 0.5 21.6713 5.20466 21.6713 11Z"
        fill={color}
        stroke={color}
      />
      <circle cx="16.5" cy="12.5" r="1.5" fill={details} />
      <circle cx="19" cy="16" r="1" fill={details} />
      <circle cx="14.5" cy="17.5" r="2.5" fill={details} />
      <circle cx="4.5" cy="4.5" r="0.5" fill={details} />
      <circle cx="3" cy="6" r="1" fill={details} />
    </svg>
  );
};

FullMoon.propTypes = {
  color: P.string,
  details: P.string,
  size: P.number,
};

export default FullMoon;
