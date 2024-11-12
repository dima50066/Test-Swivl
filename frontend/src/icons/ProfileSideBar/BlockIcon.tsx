import React from 'react';

const BlockIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ cursor: 'pointer' }}
  >
    <rect opacity="0.01" width="20" height="20" fill="#ECF1F8" />
    <mask
      id="mask0_0_313"
      style={{ maskType: 'luminance' }}
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="20"
      height="20"
    >
      <rect width="20" height="20" fill="white" />
    </mask>
    <g mask="url(#mask0_0_313)">
      {/* Circular outline */}
      <path
        d="M14.9497 14.9497C12.2161 17.6834 7.78392 17.6834 5.05025 14.9497C2.31658 12.2161 2.31658 7.78392 5.05025 5.05025C7.78392 2.31658 12.2161 2.31658 14.9497 5.05025C17.6834 7.78392 17.6834 12.2161 14.9497 14.9497Z"
        stroke="#3E4056"
        strokeWidth="2"
      />
      {/* X paths */}
      <path d="M7 13L13 7" stroke="#3E4056" strokeWidth="2" />
      <path d="M13 13L7 7" stroke="#3E4056" strokeWidth="2" />
    </g>
  </svg>
);

export default BlockIcon;
