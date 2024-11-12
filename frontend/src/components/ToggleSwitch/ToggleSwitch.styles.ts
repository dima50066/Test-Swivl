import styled from 'styled-components';

export const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  font-size: 16px;
  color: #3e4056;
  margin-bottom: 62px;
`;

export const ToggleLabel = styled.span`
  font-weight: 500;
`;

export const Switch = styled.div<{ isActive: boolean }>`
  position: relative;
  width: 40px;
  height: 20px;
  background-color: ${({ isActive }) => (isActive ? '#ed5267' : '#ddd')};
  border-radius: 15px;
  cursor: pointer;
  transition: background-color 0.3s;
`;

export const SwitchToggle = styled.div<{ isActive: boolean }>`
  position: absolute;
  top: 2px;
  left: ${({ isActive }) => (isActive ? '20px' : '2px')};
  width: 16px;
  height: 16px;
  background-color: white;
  border-radius: 50%;
  transition: left 0.3s;
`;
