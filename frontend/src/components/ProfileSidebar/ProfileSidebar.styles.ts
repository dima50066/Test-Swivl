import styled from 'styled-components';
import { colors, fontSize, fontWeight, fonts } from '../../styles/variables';

export const ProfileContainer = styled.div`
  border-radius: 8px;
`;

export const ProfileHeader = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 10px;
`;

export const ProfileAvatarContainer = styled.div`
  margin-right: 15px;
`;

export const ProfileAvatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Username = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
`;

export const Handle = styled.p`
  color: #555;
  margin: 5px 0;
`;

export const EditProfileButton = styled.button`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #e63946;
  background: none;
  border: none;
  cursor: pointer;
  margin-top: 5px;
  text-decoration: underline;
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
  margin: 15px 0;
`;

export const StatItem = styled.div`
  text-align: center;

  span {
    font-weight: bold;
    font-size: 16px;
  }

  p {
    font-size: 12px;
    color: #555;
  }
`;

export const StatItemSpan = styled.span`
  color: ${colors.secondaryText};
`;

export const StatItemP = styled.p`
  color: ${colors.thirdText};
`;

export const Bio = styled.p`
  display: flex;
  font-size: 14px;
  color: ${colors.secondaryText};
  margin-top: 10px;
  line-height: 1.4;
  position: relative;
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
