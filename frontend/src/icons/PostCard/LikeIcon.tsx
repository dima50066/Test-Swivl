import React from 'react';

const LikeIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 9.09328C7.17963 10.2545 5.90782 11 4.48 11C2.00576 11 0 8.76142 0 6C0 3.23858 2.00576 1 4.48 1C5.90782 1 7.17963 1.74548 8 2.90672C8.82038 1.74548 10.0922 1 11.52 1C13.9942 1 16 3.23858 16 6C16 8.76142 13.9942 11 11.52 11C10.0922 11 8.82038 10.2545 8 9.09328Z"
      fill="#FB5F8A"
    />
    <mask
      id="mask0_0_359"
      style={{ maskType: 'luminance' }}
      maskUnits="userSpaceOnUse"
      x="0"
      y="1"
      width="16"
      height="10"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 9.09328C7.17963 10.2545 5.90782 11 4.48 11C2.00576 11 0 8.76142 0 6C0 3.23858 2.00576 1 4.48 1C5.90782 1 7.17963 1.74548 8 2.90672C8.82038 1.74548 10.0922 1 11.52 1C13.9942 1 16 3.23858 16 6C16 8.76142 13.9942 11 11.52 11C10.0922 11 8.82038 10.2545 8 9.09328Z"
        fill="white"
      />
    </mask>
    <g mask="url(#mask0_0_359)">
      <rect y="1" width="16" height="16" fill="#FC719F" />
      <rect y="1" width="16" height="16" fill="#ED5267" />
    </g>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 15C10.7614 15 16 10 16 6C16 6 0 6 0 6C0 10 5.23858 15 8 15Z"
      fill="#FB5F8A"
    />
    <mask
      id="mask1_0_359"
      style={{ maskType: 'luminance' }}
      maskUnits="userSpaceOnUse"
      x="0"
      y="6"
      width="16"
      height="9"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 15C10.7614 15 16 10 16 6C16 6 0 6 0 6C0 10 5.23858 15 8 15Z"
        fill="white"
      />
    </mask>
    <g mask="url(#mask1_0_359)">
      <rect y="1" width="16" height="16" fill="#FC719F" />
      <rect y="1" width="16" height="16" fill="#ED5267" />
    </g>
  </svg>
);

export default LikeIcon;
