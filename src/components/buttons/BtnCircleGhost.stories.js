import { BtnCircleGhost } from './BtnCircleGhost';
import { PiCameraPlus } from 'react-icons/pi';
import { PiCameraPlusFill } from 'react-icons/pi';
import { BsBell } from 'react-icons/bs';
import { BsBellFill } from 'react-icons/bs';

export default {
  title: 'Components/Buttons/BtnCircleGhost',
  component: BtnCircleGhost,
};

export const Ghost = {
  args: {
    size: 'medium',
    icon: <PiCameraPlus />,
    activeIcon: <PiCameraPlusFill />,
    hasAlerts: false,
  },
};

export const Toggle = {
  args: {
    ...Ghost.args,
    isToggle: true,
  },
};

export const Alert = {
  args: {
    ...Ghost.args,
    icon: <BsBell />,
    activeIcon: <BsBellFill />,
    isToggle: true,
    ariaLabel: '알림',
    hasAlerts: true,
    alertNum: 5,
  },
};
