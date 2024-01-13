import { AnnounceDropdown } from './AnnounceDropdown.jsx';
import { BtnCirclePrimary } from 'components/buttons/BtnCirclePrimary';

export default {
  title: 'Components/Dropdowns/AnnounceDropdown',
  component: AnnounceDropdown,
};

export const DefaultAnnounce = {
  args: {
    size: 'xlarge',
    list: [
      {
        announce: '다른 사용자가 다음 댓글에 좋아요 표시를 했습니다.',
        comment: '내가 단 댓글의 내용',
        time: '3주',
      },
    ],
    children: <BtnCirclePrimary />,
  },
};

export const NodataAnnounce = {
  args: {
    size: 'xlarge',
    list: [],
    children: <BtnCirclePrimary />,
  },
};
