import React, { useState } from 'react';
import EditIcon from '../../icons/ProfileSideBar/EditIcon';
import OptionsIcon from '../../icons/ProfileSideBar/OptionsIcon';
import BlockIcon from '../../icons/ProfileSideBar/BlockIcon';
import ReportIcon from '../../icons/ProfileSideBar/ReportIcon';
import {
  ProfileContainer,
  ProfileHeader,
  ProfileAvatar,
  ProfileAvatarContainer,
  UserInfo,
  Username,
  Handle,
  EditProfileButton,
  StatsContainer,
  StatItem,
  Bio,
  OptionsButtonContainer,
  DropdownMenu,
  DropdownItem,
  StatItemSpan,
  StatItemP,
} from './ProfileSidebar.styles';

const ProfileSidebar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <ProfileContainer>
      {/* Profile Header */}
      <ProfileHeader>
        <ProfileAvatarContainer>
          <ProfileAvatar
            src="https://i.pravatar.cc/150?img=12"
            alt="User Avatar"
          />
        </ProfileAvatarContainer>
        <UserInfo>
          <Username>Benjamin Clementine</Username>
          <Handle>@benclementine</Handle>
          <EditProfileButton>
            <EditIcon color="#e63946" />
            Edit Profile
          </EditProfileButton>
        </UserInfo>
        <OptionsButtonContainer onClick={toggleDropdown}>
          <OptionsIcon />
          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <DropdownMenu>
              <DropdownItem>
                <ReportIcon />
                Report User
              </DropdownItem>
              <DropdownItem>
                <BlockIcon />
                Block User
              </DropdownItem>
            </DropdownMenu>
          )}
        </OptionsButtonContainer>
      </ProfileHeader>

      {/* Stats */}
      <StatsContainer>
        <StatItem>
          <StatItemSpan>45</StatItemSpan>
          <StatItemP>synth</StatItemP>
        </StatItem>
        <StatItem>
          <StatItemSpan>110</StatItemSpan>
          <StatItemP>followers</StatItemP>
        </StatItem>
        <StatItem>
          <StatItemSpan>332</StatItemSpan>
          <StatItemP>following</StatItemP>
        </StatItem>
      </StatsContainer>

      {/* Bio */}
      <Bio>
        Cryptocurrencies including Ethereum, Ripple, and Litecoin have all
        plunged between 20 to 30 percent each, according to CoinMarketCap. Here
        is the latest Ripple price news and live updates on XRP, bitcoin, and
        Ethereum.
      </Bio>
    </ProfileContainer>
  );
};

export default ProfileSidebar;
