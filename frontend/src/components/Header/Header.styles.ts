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
  background-color: ${colors.background || 'white'};
  border-bottom: 1px solid #d1d5db;
  padding: 10px 16px;
  position: relative;
  ${customDropShadow};

  @media (min-width: 768px) {
    padding: 10px 32px;
    padding-inline: 80px;
  }

  @media (min-width: 1024px) {
    padding-inline: 135px;
  }
`;

export const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: ${fonts.opensans};
  font-size: ${fontSize.smBody};
  color: ${colors.primaryText};

  @media (min-width: 768px) {
    gap: 16px;

    span {
      display: inline;
    }
  }
`;

export const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;

  @media (min-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media (min-width: 768px) {
    gap: 12px;
  }
`;

export const PlusButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(
    to right,
    ${colors.customOrange},
    ${colors.customPink}
  );
  position: absolute;
  right: 16px;
  top: 40px;
  filter: drop-shadow(0px 2px 4px #4b53a9);

  &:focus {
    outline: 2px solid ${colors.customPink};
  }

  @media (min-width: 768px) {
    width: 55px;
    height: 55px;
    right: 85px;
    top: 80px;
  }

  @media (min-width: 1024px) {
    width: 64px;
    height: 64px;
    right: 135px;
    top: 75px;
  }
`;

export const TabsContainer = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    gap: 24px;
    margin-top: 16px;
  }

  @media (min-width: 1024px) {
    gap: 32px;
  }
`;

export const Tab = styled.div<{ $active: boolean }>`
  font-family: ${fonts.opensans};
  font-size: ${fontSize.tabText};
  font-weight: ${fontWeight.semibold};
  cursor: pointer;
  color: ${colors.primaryText};
  opacity: ${({ $active }) => ($active ? '1' : opacity[60])};
  padding-bottom: 8px;

  &:hover,
  &:focus {
    color: ${colors.primaryText};
    opacity: 1;
  }

  &::after {
    content: '';
    display: ${({ $active }) => ($active ? 'block' : 'none')};
    height: 4px;
    width: 100%;
    background: linear-gradient(to right, #ff974f, #e32c75);
    position: relative;
    bottom: -19px;
  }
`;
