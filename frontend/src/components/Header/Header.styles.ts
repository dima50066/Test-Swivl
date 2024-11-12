import styled from 'styled-components';
import {
  colors,
  fonts,
  fontSize,
  fontWeight,
  opacity,
} from '../../styles/variables';
import { customDropShadow } from '../../styles/mixins';

export const HeaderContainer = styled.div`
  background-color: white;
  border-bottom: 1px solid #d1d5db;
  padding: 10px 32px;
  position: relative;
  ${customDropShadow};
`;

export const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  font-family: ${fonts.opensans};
  font-size: ${fontSize.smBody};
  color: ${colors.primaryText};
`;

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

export const IconsContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const PlusButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: linear-gradient(
    to right,
    ${colors.customOrange},
    ${colors.customPink}
  );
  position: absolute;
  right: 40px;
  bottom: -35px;
  filter: drop-shadow(0px 2px 4px #4b53a9);
`;

export const TabsContainer = styled.div`
  display: flex;
  gap: 32px;
  margin-top: 16px;
`;

export const Tab = styled.div<{ active: boolean }>`
  font-family: ${fonts.opensans};
  font-size: ${fontSize.tabText};
  font-weight: ${fontWeight.semibold};
  cursor: pointer;
  color: ${colors.primaryText};
  opacity: ${({ active }) => (active ? '1' : opacity[60])};
  padding-bottom: 8px; /* Додатковий відступ під текстом */

  &:hover {
    color: ${colors.primaryText};
    opacity: 1;
  }

  /* Підкреслення для активного табу */
  &::after {
    content: '';
    display: ${({ active }) => (active ? 'block' : 'none')};
    height: 4px;
    width: 100%;
    background: linear-gradient(to right, #ff974f, #e32c75);
    position: relative;
    bottom: -19px;
  }
`;
