import { BtnCircleSecondary } from './BtnCircleSecondary';
import { PiCameraPlus } from 'react-icons/pi';
import { PiCameraPlusFill } from 'react-icons/pi';

export default {
  title: 'Components/Buttons/BtnCircleSecondary',
  component: BtnCircleSecondary,
};

export const Primary = {
  args: {
    state: '',
    icon: <PiCameraPlus />,
    activeIcon: <PiCameraPlusFill />,
  },
};
