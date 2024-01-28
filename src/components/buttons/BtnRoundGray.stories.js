import { BtnRoundGray } from './BtnRoundGray';
import { IoMdArrowDropdown } from 'react-icons/io';

export default {
  title: 'Components/Buttons/BtnRoundGray',
  component: BtnRoundGray,
};

export const RoundGray = {
  args: {
    size: 'medium',
    forClick: false,
    iconPrepend: <IoMdArrowDropdown />,
    label: '답글 7개',
  },
};
