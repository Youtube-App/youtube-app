import { BtnRoundPrimary } from './BtnRoundPrimary.jsx';
import { PiShareFatLight } from 'react-icons/pi';

export default {
  title: 'Components/Buttons/BtnRoundPrimary',
  component: BtnRoundPrimary,
};

export const Primary = {
  args: {
    forClick: false,
    hasIcon: true,
    icon: <PiShareFatLight />,
    label: '채널 공유',
  },
};
