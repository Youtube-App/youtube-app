import { BtnRoundSquareGhost } from './BtnRoundSquareGhost';
import { PiHouseThin } from 'react-icons/pi';

export default {
  title: 'Components/Buttons/BtnRoundSquareGhost',
  component: BtnRoundSquareGhost,
};

export const RoundSquareGhost = {
  args: {
    size: 'medium',
    icon: <PiHouseThin />,
    label: '홈',
    alert: false,
  },
};
