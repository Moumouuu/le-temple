import React from "react";

interface ArrowProps {
  big?: boolean;
}

const Arrow = ({ big }: ArrowProps) => {
  return (
    <div>
      <svg
        width={big ? "300" : "80"}
        height="15"
        viewBox="0 0 309 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.339844 8.99998L9.0001 17.6603L17.6604 8.99998L9.0001 0.339722L0.339844 8.99998ZM309 8.99998L294 0.339722V17.6603L309 8.99998ZM9.0001 10.5H295.5V7.49998H9.0001V10.5Z"
          fill="#1E1E1E"
        />
      </svg>
    </div>
  );
};

export default Arrow;
