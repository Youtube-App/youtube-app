import { DefaultComment } from './DefaultComment.jsx';

export default {
  title: 'Components/Comments/DefaultComment',
  component: DefaultComment,
};

export const Default = {
  args: {
    isOpen: true,
    activeAnswer: true,
    userName: '구독자A',
    date: '10시간',
    comment: '잘 보고 갑니다.',
    likeNum: 3,
    replyNum: 7,
    hasCreatorReply: false,
  },
};
