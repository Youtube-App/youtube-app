import { BtnRoundGrayBorder } from './BtnRoundGrayBorder';
import { IoMdArrowDropdown } from 'react-icons/io';

export default {
  title: 'Components/Buttons/BtnRoundGrayBorder',
  component: BtnRoundGrayBorder,
};

export const RoundGrayBorder = {
  args: {
    forClick: false,
    iconPrepend: <IoMdArrowDropdown />,
    label: '답글 7개',
  },
};
