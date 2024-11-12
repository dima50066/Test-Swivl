import React from 'react';

const NotificationIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <g opacity="0.98">
      <rect opacity="0.01" width="32" height="32" fill="#EFF3F6" />
      <g>
        <mask id="path-2-inside-1_0_42" fill="white">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.6471 22.4C17.6471 23.28 16.9059 24 16 24C15.0941 24 14.3529 23.28 14.3529 22.4H15.6471H16H16.3529H17.6471ZM16 11.512L15.2133 11.693C13.6977 12.0419 12.6471 13.336 12.6471 14.8V19.2V19.6H20.9644L21.3529 19.2L21.7647 19.6L23 20.8V21.6H22.2229H21H20.9532H11.0468H11H9.77714H9V20.8L10.2353 19.6L10.6471 19.2V14.8C10.6471 12.344 12.4012 10.288 14.7647 9.744V9.2C14.7647 8.536 15.3165 8 16 8C16.6835 8 17.2353 8.536 17.2353 9.2V9.744C19.5988 10.288 21.3529 12.344 21.3529 14.8V19.2H19.3529V14.8C19.3529 13.336 18.3023 12.0419 16.7867 11.693L16 11.512Z"
          />
        </mask>
        <path
          d="M17.6471 22.4H19.6471V20.4H17.6471V22.4ZM14.3529 22.4V20.4H12.3529V22.4H14.3529ZM15.2133 11.693L15.6619 13.6421H15.6619L15.2133 11.693ZM16 11.512L16.4486 9.56293L16 9.45968L15.5514 9.56293L16 11.512ZM12.6471 19.6H10.6471V21.6H12.6471V19.6ZM20.9644 19.6V21.6H21.8098L22.3989 20.9936L20.9644 19.6ZM21.7647 19.6L20.3711 21.0346L21.7647 19.6ZM23 20.8H25V19.9545L24.3936 19.3654L23 20.8ZM23 21.6V23.6H25V21.6H23ZM9 21.6H7V23.6H9V21.6ZM9 20.8L7.60643 19.3654L7 19.9545V20.8H9ZM10.2353 19.6L8.84172 18.1654H8.84172L10.2353 19.6ZM10.6471 19.2L12.0406 20.6346L12.6471 20.0455V19.2H10.6471ZM14.7647 9.744L15.2133 11.693L16.7647 11.336V9.744H14.7647ZM17.2353 9.744H15.2353V11.336L16.7867 11.693L17.2353 9.744ZM19.3529 19.2H17.3529V21.2H19.3529V19.2ZM16.7867 11.693L16.3381 13.6421H16.3381L16.7867 11.693ZM16 26C17.9554 26 19.6471 24.4388 19.6471 22.4H15.6471C15.6471 22.1212 15.8564 22 16 22V26ZM12.3529 22.4C12.3529 24.4388 14.0446 26 16 26V22C16.1436 22 16.3529 22.1212 16.3529 22.4H12.3529ZM15.6471 20.4H14.3529V24.4H15.6471V20.4ZM16 20.4H15.6471V24.4H16V20.4ZM16.3529 20.4H16V24.4H16.3529V20.4ZM17.6471 20.4H16.3529V24.4H17.6471V20.4ZM15.6619 13.6421L16.4486 13.461L15.5514 9.56293L14.7647 9.744L15.6619 13.6421ZM14.6471 14.8C14.6471 14.3205 15.0019 13.794 15.6619 13.6421L14.7647 9.744C12.3935 10.2898 10.6471 12.3515 10.6471 14.8H14.6471ZM14.6471 19.2V14.8H10.6471V19.2H14.6471ZM14.6471 19.6V19.2H10.6471V19.6H14.6471ZM20.9644 17.6H12.6471V21.6H20.9644V17.6ZM19.9184 17.8064L19.5298 18.2064L22.3989 20.9936L22.7875 20.5936L19.9184 17.8064ZM23.1583 18.1654L22.7465 17.7654L19.9594 20.6346L20.3711 21.0346L23.1583 18.1654ZM24.3936 19.3654L23.1583 18.1654L20.3711 21.0346L21.6064 22.2346L24.3936 19.3654ZM25 21.6V20.8H21V21.6H25ZM22.2229 23.6H23V19.6H22.2229V23.6ZM21 23.6H22.2229V19.6H21V23.6ZM20.9532 23.6H21V19.6H20.9532V23.6ZM11.0468 23.6H20.9532V19.6H11.0468V23.6ZM11 23.6H11.0468V19.6H11V23.6ZM9.77714 23.6H11V19.6H9.77714V23.6ZM9 23.6H9.77714V19.6H9V23.6ZM7 20.8V21.6H11V20.8H7ZM8.84172 18.1654L7.60643 19.3654L10.3936 22.2346L11.6289 21.0346L8.84172 18.1654ZM9.25349 17.7654L8.84172 18.1654L11.6289 21.0346L12.0406 20.6346L9.25349 17.7654ZM8.64706 14.8V19.2H12.6471V14.8H8.64706ZM14.3161 7.79496C11.1046 8.53413 8.64706 11.352 8.64706 14.8H12.6471C12.6471 13.336 13.6977 12.0419 15.2133 11.693L14.3161 7.79496ZM12.7647 9.2V9.744H16.7647V9.2H12.7647ZM16 6C14.2669 6 12.7647 7.37718 12.7647 9.2H16.7647C16.7647 9.69482 16.366 10 16 10V6ZM19.2353 9.2C19.2353 7.37718 17.7331 6 16 6V10C15.634 10 15.2353 9.69482 15.2353 9.2H19.2353ZM19.2353 9.744V9.2H15.2353V9.744H19.2353ZM23.3529 14.8C23.3529 11.352 20.8954 8.53413 17.6839 7.79496L16.7867 11.693C18.3023 12.0419 19.3529 13.336 19.3529 14.8H23.3529ZM23.3529 19.2V14.8H19.3529V19.2H23.3529ZM19.3529 21.2H21.3529V17.2H19.3529V21.2ZM17.3529 14.8V19.2H21.3529V14.8H17.3529ZM16.3381 13.6421C16.9981 13.794 17.3529 14.3205 17.3529 14.8H21.3529C21.3529 12.3515 19.6065 10.2898 17.2353 9.744L16.3381 13.6421ZM15.5514 13.461L16.3381 13.6421L17.2353 9.744L16.4486 9.56293L15.5514 13.461Z"
          fill="#3E4056"
          mask="url(#path-2-inside-1_0_42)"
        />
      </g>
    </g>
  </svg>
);

export default NotificationIcon;
