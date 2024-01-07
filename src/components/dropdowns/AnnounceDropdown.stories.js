import { AnnounceDropdown } from './AnnounceDropdown.jsx';

export default {
  title: 'Components/Dropdowns/AnnounceDropdown',
  component: AnnounceDropdown,
};

export const Announce = {
  args: {
    size: 'xlarge',
    list: [
      {
        type: 'menu',
        name: '사용자',
        nickname: 'user-hb7xh8ho3c',
      },
      {
        type: 'bar',
      },
    ],
  },
};
