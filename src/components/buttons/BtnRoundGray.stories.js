import { BtnRoundGray } from './BtnRoundGray';
import { IoMdArrowDropdown } from 'react-icons/io';

export default {
  title: 'Components/Buttons/BtnRoundgray',
  component: BtnRoundGray,
};

export const Roundgrey = {
  args: {
    forClick: false,
    iconPrepend: <IoMdArrowDropdown />,
    label: '답글 7개',
  },
};
