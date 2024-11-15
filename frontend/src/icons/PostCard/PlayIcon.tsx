import React from 'react';

const PlayIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect opacity="0.01" width="16" height="16" fill="#ECF1F8" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15 8C14.9929 8.70812 14.6514 9.37509 14.0711 9.81411L7.96 14.4957C7.22814 15.0496 6.23091 15.1563 5.38942 14.7708C4.54794 14.3853 4.00892 13.5748 4 12.6816V3.31842C4.00892 2.4252 4.54794 1.61471 5.38942 1.22921C6.23091 0.843723 7.22814 0.950443 7.96 1.50431L14.0711 6.18589C14.6514 6.62491 14.9929 7.29188 15 8Z"
      fill="#3E4056"
    />
    <mask
      id="mask0_0_437"
      style={{ maskType: 'luminance' }}
      maskUnits="userSpaceOnUse"
      x="4"
      y="1"
      width="11"
      height="14"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 8C14.9929 8.70812 14.6514 9.37509 14.0711 9.81411L7.96 14.4957C7.22814 15.0496 6.23091 15.1563 5.38942 14.7708C4.54794 14.3853 4.00892 13.5748 4 12.6816V3.31842C4.00892 2.4252 4.54794 1.61471 5.38942 1.22921C6.23091 0.843723 7.22814 0.950443 7.96 1.50431L14.0711 6.18589C14.6514 6.62491 14.9929 7.29188 15 8Z"
        fill="white"
      />
    </mask>
    <g mask="url(#mask0_0_437)">
      <rect width="16" height="16" fill="#3E4056" />
    </g>
  </svg>
);

export default PlayIcon;
