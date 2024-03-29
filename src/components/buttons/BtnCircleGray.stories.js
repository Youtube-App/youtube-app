import { BtnCircleGray } from './BtnCircleGray';
import { HiMiniMicrophone } from 'react-icons/hi2';

export default {
  title: 'Components/Buttons/BtnCircleGray',
  component: BtnCircleGray,
};

export const Gray = {
  args: {
    size: 'medium',
    icon: <HiMiniMicrophone />,
    disabled: false,
  },
};
