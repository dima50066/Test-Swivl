import React, { useState } from 'react';
import NotificationIcon from '../../icons/Header/NotificationIcon';
import ShareRecapIcon from '../../icons/Header/ShareRecapIcon';
import MediumIcon from '../../icons/Header/MediumIcon';
import ArrowDownIcon from '../../icons/Header/ArrowDownIcon';
import PlusButton from '../../icons/Header/PlusButton';
import LogoIcon from '../../icons/Header/LogoIcon';

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
  { name: 'FEED', id: 'feed' },
  { name: 'EXPLORE', id: 'explore' },
  { name: 'DISCUSSIONS', id: 'discussions' },
];

const Header: React.FC = () => {
  const [activeTab, setActiveTab] = useState('feed');

  return (
    <HeaderContainer>
      <HeaderRow>
        <LogoIcon />
        <UserInfo>
          <span>Arthur Wood</span>
          <Avatar src="https://i.pravatar.cc/150?img=12" alt="User Avatar" />
          <ArrowDownIcon />
          <IconsContainer>
            <NotificationIcon />
            <ShareRecapIcon />
            <MediumIcon />
          </IconsContainer>
          <PlusButtonWrapper>
            <PlusButton />
          </PlusButtonWrapper>
        </UserInfo>
      </HeaderRow>

      <nav aria-label="Primary Navigation">
        <TabsContainer>
          {tabs.map((tab) => (
            <Tab
              key={tab.id}
              role="button"
              aria-pressed={activeTab === tab.id}
              $active={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.name}
            </Tab>
          ))}
        </TabsContainer>
      </nav>
    </HeaderContainer>
  );
};

export default Header;
