import styled from 'styled-components';
import { fonts, colors, fontSize, fontWeight } from '../../styles/variables';

export const ToggleContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  gap: 30px;
`;

export const ToggleLabel = styled.span`
  font-family: ${fonts.opensans};
  font-weight: ${fontWeight.semibold};
  font-size: ${fontSize.smBody};
  color: ${colors.primaryText};
`;

export const Switch = styled.div<{ isActive: boolean }>`
  position: relative;
  width: 40px;
  height: 24px;
  background-color: ${({ isActive }) => (isActive ? '#ed5267' : '#ddd')};
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s;
`;

export const SwitchToggle = styled.div<{ isActive: boolean }>`
  position: absolute;
  top: 4px;
  left: ${({ isActive }) => (isActive ? '20px' : '2px')};
  width: 16px;
  height: 16px;
  background-color: white;
  border-radius: 50%;
  transition: left 0.3s;
`;
