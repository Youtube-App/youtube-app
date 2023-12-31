import { Dropdown } from './Dropdown.jsx';
import { IoFlagOutline } from 'react-icons/io5';
import { IoArrowUndoOutline } from 'react-icons/io5';
import { GoCircleSlash } from 'react-icons/go';
import { VscReport } from 'react-icons/vsc';

export default {
  title: 'Components/dropdowns/Dropdown',
  component: Dropdown,
};

export const DefaultDropdown = {
  args: {
    size: 'medium',
    list: [
      {
        type: 'menu',
        icon: <IoFlagOutline />,
        label: '신고',
      },
      {
        type: 'menu',
        icon: <IoArrowUndoOutline />,
        label: '공유',
      },
      {
        type: 'bar',
      },
      {
        type: 'menu',
        icon: <GoCircleSlash />,
        label: '관심 없음',
      },
      {
        type: 'menu',
        icon: <VscReport />,
        label: '의견 보내기',
      },
    ],
  },
};
