import React from 'react';

const MediumIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ cursor: 'pointer' }}
  >
    <g opacity="0.98">
      <rect opacity="0.01" width="32" height="32" fill="#EFF3F6" />
      <path
        d="M9.89729 11.652C9.91717 11.451 9.84227 11.2523 9.69561 11.117L8.20168 9.27513V9H12.8403L16.4258 17.0476L19.578 9H24V9.27513L22.7227 10.5285C22.6126 10.6144 22.5579 10.7556 22.5808 10.8954V20.1046C22.5579 20.2444 22.6126 20.3856 22.7227 20.4715L23.9701 21.7249V22H17.6956V21.7249L18.9879 20.4409C19.1148 20.311 19.1148 20.2728 19.1148 20.0741V12.6302L15.5219 21.9694H15.0364L10.8534 12.6302V18.8895C10.8185 19.1526 10.9039 19.4176 11.085 19.6079L12.7656 21.6943V21.9694H8V21.6943L9.68067 19.6079C9.86039 19.4173 9.94081 19.1506 9.89729 18.8895V11.652Z"
        fill="#3E3F58"
      />
    </g>
  </svg>
);

export default MediumIcon;