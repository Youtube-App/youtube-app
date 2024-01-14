import { DefaultComment } from './DefaultComment.jsx';

export default {
  title: 'Components/Comments/DefaultComment',
  component: DefaultComment,
};

export const Default = {
  args: {
    mode: '',
    userName: '구독자A',
    date: '10시간',
    comment: '잘 보고 갑니다.',
    likeNum: 3,
    replyNum: 7,
    hasCreatorReply: false,
  },
};

export const Reply = {
  args: {
    mode: 'reply',
    userName: '구독자B',
    date: '1시간',
    comment: '감사합니다.',
    likeNum: 3,
    replyNum: 7,
    hasCreatorReply: false,
  },
};
