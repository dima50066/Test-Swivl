import React from 'react';
import styled from 'styled-components';

const PlusIcon = styled.svg`
  width: 20px;
  height: 20px;
  fill: white;
  cursor: pointer;
`;

const PlusButton: React.FC = () => (
    <PlusIcon viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.9091 0H9.09091V9.09091H0V10.9091H9.09091V20H10.9091V10.9091H20V9.09091H10.9091V0Z"
      />
    </PlusIcon>
);

export default PlusButton;
