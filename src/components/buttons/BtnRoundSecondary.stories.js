import { BtnRoundSecondary } from './BtnRoundSecondary';
import { PiHouseThin } from 'react-icons/pi';

export default {
  title: 'Components/Buttons/BtnRoundSecondary',
  component: BtnRoundSecondary,
};

export const Primary = {
  args: {
    hasIcon: true,
    icon: <PiHouseThin />,
    label: '홈',
  },
};
