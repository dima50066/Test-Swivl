import React from 'react';

const PlusButton: React.FC = () => (
  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-customOrange to-customPink">
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.9091 0H9.09091V9.09091H0V10.9091H9.09091V20H10.9091V10.9091H20V9.09091H10.9091V0Z"
        fill="white" 
      />
    </svg>
  </div>
);

export default PlusButton;
