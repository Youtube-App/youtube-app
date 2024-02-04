import { BtnRoundSquareGhostActive } from './BtnRoundSquareGhostActive';
import { PiHouseThin } from 'react-icons/pi';

export default {
  title: 'Components/Buttons/BtnRoundSquareGhostActive',
  component: BtnRoundSquareGhostActive,
};

export const RoundSquareGhostActiveBtn = {
  args: {
    size: 'medium',
    icon: <PiHouseThin />,
    activeIcon: <PiHouseThin />,
    label: '홈',
  },
};
