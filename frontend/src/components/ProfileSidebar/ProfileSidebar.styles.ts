import styled from 'styled-components';
import {
  colors,
  fontSize,
  fontWeight,
  fonts,
  lineHeight,
  letterSpacing,
} from '../../styles/variables';

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  max-width: 350px;
  gap: 24px;
`;

export const ProfileHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 24px;
`;

export const ProfileAvatarContainer = styled.div`
  // margin-right: 15px;
`;

export const ProfileAvatar = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Username = styled.h2`
  font-family: ${fonts.montserrat};
  font-size: ${fontSize.lgTitle};
  line-height: ${lineHeight.tabText};
  font-weight: ${fontWeight.semibold};
  color: ${colors.secondaryText};
  margin: 0;
`;

export const Handle = styled.p`
  font-family: ${fonts.opensans};
  font-weight: ${fontWeight.normal};
  font-size: ${fontSize.tabText};
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
  margin-top: 5px;
  text-decoration: underline;
  font-size: ${fontSize.smBody};
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
  gap: 48px;
`;

export const StatItem = styled.div`
  text-align: center;

  span {
    font-family: ${fonts.opensans};
    font-weight: ${fontWeight.bold};
    font-size: ${fontSize.lgBody};
    line-height: ${lineHeight.xlTitle};
  }

  p {
    font-size: ${fontSize.smBody};
    font-weight: ${fontWeight.normal};
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
`;

export const DropdownMenu = styled.div`
  margin-top: 8px;
  background: white;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 8px 0;
  z-index: 100;
  min-width: 150px;
`;

export const DropdownItem = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 16px;
  color: #3e4056;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: #ecf1f8;
  }

  svg {
    margin-right: 8px;
  }
`;
