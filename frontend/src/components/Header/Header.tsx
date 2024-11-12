import React, { useState } from 'react';
import NotificationIcon from '../../icons/NotificationIcon';
import ShareRecapIcon from '../../icons/ShareRecapIcon';
import MediumIcon from '../../icons/MediumIcon';
import ArrowDownIcon from '../../icons/ArrowDownIcon';
import PlusButton from '../../icons/PlusButton';
import LogoIcon from '../../icons/LogoIcon';

import {
  HeaderContainer,
  HeaderRow,
  UserInfo,
  Avatar,
  IconsContainer,
  PlusButtonWrapper,
  TabsContainer,
  Tab,
} from './Header.styles';

const tabs = [
  { name: "FEED", id: "feed" },
  { name: "EXPLORE", id: "explore" },
  { name: "DISCUSSIONS", id: "discussions" },
];

const Header: React.FC = () => {
  const [activeTab, setActiveTab] = useState("feed");

  return (
    <HeaderContainer>
      {/* Row 1: Logo and User Section */}
      <HeaderRow>
        <LogoIcon/>
        <UserInfo>
          <span>Arthur Wood</span>
          <Avatar src="https://i.pravatar.cc/150?img=12" alt="User Avatar" />
          <ArrowDownIcon/>
          <IconsContainer>
            <NotificationIcon/>
            <ShareRecapIcon  />
            <MediumIcon/>
          </IconsContainer>
          <PlusButtonWrapper>
            <PlusButton />
          </PlusButtonWrapper>
        </UserInfo>
      </HeaderRow>

      {/* Row 2: Navigation */}
      <TabsContainer>
        {tabs.map((tab) => (
          <Tab
            key={tab.id}
            active={activeTab === tab.id}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.name}
          </Tab>
        ))}
      </TabsContainer>
    </HeaderContainer>
  );
};

export default Header;