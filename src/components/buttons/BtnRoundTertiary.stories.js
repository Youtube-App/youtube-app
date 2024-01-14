import { BtnRoundTertiary } from './BtnRoundTertiary';
import { IoMdArrowDropdown } from 'react-icons/io';

export default {
  title: 'Components/Buttons/BtnRoundTertiary',
  component: BtnRoundTertiary,
};

export const Tertiary = {
  args: {
    hasIcon: true,
    icon: <IoMdArrowDropdown />,
    label: '답글 7개',
  },
};
