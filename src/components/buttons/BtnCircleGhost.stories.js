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
    icon: <PiCameraPlus />,
    activeIcon: <PiCameraPlusFill />,
  },
};

export const Toggle = {
  args: {
    icon: <PiCameraPlus />,
    activeIcon: <PiCameraPlusFill />,
  },
};

export const Alert = {
  args: {
    ...Ghost.args,
    icon: <BsBell />,
    activeIcon: <BsBellFill />,
    isToggle: true,
    ariaLabel: '알림',
    alertNum: 5,
  },
};
