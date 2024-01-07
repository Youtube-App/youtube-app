import { BtnCircleSecondary } from './BtnCircleSecondary';
import { PiCameraPlus } from 'react-icons/pi';
import { PiCameraPlusFill } from 'react-icons/pi';
import { BsBell } from 'react-icons/bs';
import { BsBellFill } from 'react-icons/bs';

export default {
  title: 'Components/Buttons/BtnCircleSecondary',
  component: BtnCircleSecondary,
};

export const Primary = {
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
    ...Primary.args,
    icon: <BsBell />,
    activeIcon: <BsBellFill />,
    isToggle: true,
    ariaLabel: '알림',
    alertNum: 5,
  },
};
