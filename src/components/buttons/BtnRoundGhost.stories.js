import { BtnRoundGhost } from './BtnRoundGhost.jsx';
import { PiShareFatLight } from 'react-icons/pi';

export default {
  title: 'Components/Buttons/BtnRoundGhost',
  component: BtnRoundGhost,
};

export const RoundGhost = {
  args: {
    forClick: false,
    icon: <PiShareFatLight />,
    label: '채널 공유',
  },
};
