import React, { useState } from 'react';

import {
  ToggleContainer,
  ToggleLabel,
  Switch,
  SwitchToggle,
} from './ToggleSwitch.styles';

const ToggleSwitch: React.FC = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleSwitch = () => {
    setIsActive(!isActive);
  };

  return (
    <ToggleContainer>
      <ToggleLabel>Public</ToggleLabel>
      <Switch $isActive={isActive} onClick={toggleSwitch}>
        <SwitchToggle $isActive={isActive} />
      </Switch>
      <ToggleLabel>Private</ToggleLabel>
    </ToggleContainer>
  );
};

export default ToggleSwitch;
