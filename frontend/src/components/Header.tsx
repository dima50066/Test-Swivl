import React, { useState } from 'react';
import NotificationIcon from '../icons/NotificationIcon';
import ShareRecapIcon from '../icons/ShareRecapIcon';
import MediumIcon from '../icons/MediumIcon';
import ArrowDownIcon from '../icons/ArrowDownIcon';
import PlusButton from '../icons/PlusButton';

const tabs = [
  { name: "FEED", id: "feed" },
  { name: "EXPLORE", id: "explore" },
  { name: "DISCUSSIONS", id: "discussions" }
];

const Header: React.FC = () => {
  const [activeTab, setActiveTab] = useState("feed");

  return (
    <div className="bg-white border-b border-gray-300 py-4 px-8 relative">
      {/* Row 1: Logo and User Section */}
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold">Synth</div>
        <div className="flex items-center space-x-4">
          <span className="font-opensans text-sm-body">Arthur Wood</span>
          <img
            src="https://i.pravatar.cc/150?img=12"
            alt="User Avatar"
            className="w-10 h-10 rounded-full"
          />
          <div className="flex items-center space-x-4">
            <ArrowDownIcon className="cursor-pointer" />
            <NotificationIcon className="cursor-pointer" />
            <ShareRecapIcon className="cursor-pointer" />
            <MediumIcon className="cursor-pointer" />
          </div>
          <div className="absolute right-10 bottom-[-35px] cursor-pointer">
            <PlusButton />
          </div>
        </div>
      </div>

      {/* Row 2: Navigation */}
      <div className="flex space-x-8 mt-4">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`font-opensans text-tab-text font-semibold cursor-pointer ${
              activeTab === tab.id ? "text-primaryText" : "text-primaryText opacity-60"
            }`}
          >
            {tab.name}
            {activeTab === tab.id && (
              <div className="h-1 bg-gradient-to-r from-customPink to-customOrange rounded-t w-6 mx-auto mt-1"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
