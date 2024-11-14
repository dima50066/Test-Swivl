import React, { useState } from 'react';
import NotificationIcon from '../../icons/Header/notificationIcon';
import ShareRecapIcon from '../../icons/Header/shareRecapIcon';
import MediumIcon from '../../icons/Header/mediumIcon';
import ArrowDownIcon from '../../icons/Header/arrowDownIcon';
import PlusButton from '../../icons/Header/plusButton';
import LogoIcon from '../../icons/Header/logoIcon';

import {
  HeaderContainer,
  HeaderRow,
  UserInfo,
  Avatar,
  IconsContainer,
  PlusButtonWrapper,
  TabsContainer,
  Tab,
} from './header.styles';

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
