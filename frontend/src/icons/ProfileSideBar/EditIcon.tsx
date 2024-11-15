import React from 'react';

const EditIcon: React.FC<{ className?: string; color?: string }> = ({
  className,
  color = '#3E4056',
}) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ cursor: 'pointer' }}
  >
    <g id="a/icon_edit">
      <g id="edit icon">
        <g id="delete copy">
          <rect
            id="Rectangle 3 Copy"
            opacity="0.01"
            x="2"
            y="2"
            width="20"
            height="20"
            fill="#C3CADF"
          />
          <path
            id="Combined Shape"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.8933 4.92764C13.6743 4.14659 14.9407 4.14659 15.7217 4.92764L18.5501 7.75607C19.3312 8.53712 19.3312 9.80345 18.5501 10.5845L11.6064 17.5282C11.5241 17.6105 11.4156 17.6615 11.2997 17.6724L7.58474 18.0219C6.32474 18.1405 5.27281 17.0737 5.40902 15.8155L5.80325 12.1739C5.81552 12.0605 5.86617 11.9548 5.94679 11.8741L12.8933 4.92764ZM13.6004 7.04896C13.9909 6.65844 14.6241 6.65844 15.0146 7.04896L16.4288 8.46318C16.8193 8.8537 16.8193 9.48686 16.4288 9.87739L15.7217 10.5845L12.8933 7.75607L13.6004 7.04896ZM11.4791 9.17028L7.94404 12.7053L7.53083 14.7702C7.39079 15.47 8.00782 16.087 8.70762 15.9469L10.7725 15.5337L14.3075 11.9987L11.4791 9.17028Z"
            fill={color}
          />
        </g>
      </g>
    </g>
  </svg>
);

export default EditIcon;
