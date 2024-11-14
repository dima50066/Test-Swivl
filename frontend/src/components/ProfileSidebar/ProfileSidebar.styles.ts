import styled from 'styled-components';
import {
  colors,
  fontSize,
  fontWeight,
  fonts,
  lineHeight,
  letterSpacing,
} from '../../styles/variables';
import { customDropShadow } from '../../styles/mixins';

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  max-width: 100%;
  gap: 16px;

  @media (min-width: 768px) {
    max-width: 350px;
    gap: 24px;
  }
`;

export const ProfileHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;

  @media (min-width: 768px) {
    gap: 24px;
  }
`;

export const ProfileAvatarContainer = styled.div`
  margin-right: 0;

  @media (min-width: 768px) {
    margin-right: 15px;
  }
`;

export const ProfileAvatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;

  @media (min-width: 768px) {
    width: 120px;
    height: 120px;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  @media (min-width: 768px) {
    gap: 8px;
  }
`;

export const Username = styled.h2`
  font-family: ${fonts.montserrat};
  font-size: ${fontSize.lgBody};
  line-height: ${lineHeight.normal};
  font-weight: ${fontWeight.semibold};
  color: ${colors.secondaryText};
  margin: 0;

  @media (min-width: 768px) {
    font-size: ${fontSize.lgTitle};
    line-height: ${lineHeight.tabText};
  }
`;

export const Handle = styled.p`
  font-family: ${fonts.opensans};
  font-weight: ${fontWeight.normal};
  font-size: ${fontSize.smBody};
  line-height: ${lineHeight.lgBody};
  letter-spacing: ${letterSpacing.wide};
  color: ${colors.secondaryText};
`;

export const EditProfileButton = styled.button`
  display: flex;
  align-items: center;
  color: ${colors.buttonEdit};
  background: none;
  border: none;
  cursor: pointer;
  text-decoration: underline;
  font-size: ${fontSize.smBody};
  padding: 0;

  svg {
    margin-right: 4px;
  }

  &:focus {
    outline: 2px solid ${colors.customPink};
  }

  @media (min-width: 768px) {
    font-size: ${fontSize.smBody};
    margin-top: 5px;
  }
`;

export const OptionsButtonContainer = styled.div`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  position: relative;
`;

export const StatsContainer = styled.div`
  display: flex;
  gap: 24px;
  justify-content: space-around;

  @media (min-width: 768px) {
    gap: 48px;
    justify-content: flex-start;
  }
`;

export const StatItem = styled.div`
  text-align: center;

  span {
    font-family: ${fonts.opensans};
    font-weight: ${fontWeight.bold};
    font-size: ${fontSize.smBody};
    line-height: ${lineHeight.normal};

    @media (min-width: 768px) {
      font-size: ${fontSize.lgBody};
      line-height: ${lineHeight.xlTitle};
    }
  }

  p {
    font-size: ${fontSize.smBody};
    font-weight: ${fontWeight.normal};

    @media (min-width: 768px) {
      font-size: ${fontSize.smBody};
    }
  }
`;

export const StatItemSpan = styled.span`
  color: ${colors.secondaryText};
`;

export const StatItemP = styled.p`
  color: ${colors.thirdText};
`;

export const Bio = styled.p`
  font-family: ${fonts.opensans};
  font-weight: ${fontWeight.normal};
  font-size: ${fontSize.smBody};
  color: ${colors.secondaryText};
  line-height: ${lineHeight.normal};

  @media (min-width: 768px) {
    font-size: ${fontSize.smBody};
  }
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 8px;
  background: white;
  ${customDropShadow};
  border-radius: 8px;
  padding: 8px 0;
  z-index: 100;
  min-width: 150px;

  @media (min-width: 768px) {
    min-width: 150px;
    right: -150px;
  }
`;

export const DropdownItem = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 16px;
  color: ${colors.primaryText};
  font-size: ${fontSize.smBody};
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: ${colors.hoverBackground || '#ecf1f8'};
  }

  svg {
    margin-right: 8px;
  }
`;
