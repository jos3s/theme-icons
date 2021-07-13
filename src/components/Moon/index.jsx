import React from "react";
import P from "prop-types";

const Moon = ({ color = "#fff", size = "22", ...props }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 12.9369C20.4919 14.4573 18.394 15.4 16.0742 15.4C11.4824 15.4 7.75995 11.7064 7.75995 7.15001C7.75995 4.11325 9.41348 1.45971 11.8759 0.0275166C11.6149 0.00927502 11.3513 0 11.0856 0C4.96321 0 0 4.92487 0 11C0 17.0751 4.96321 22 11.0856 22C16.5421 22 21.0778 18.0883 22 12.9369Z"
        fill={color}
      />
    </svg>
  );
};

Moon.propTypes = {
  color: P.string,
  size: P.number,
};

export default Moon;
