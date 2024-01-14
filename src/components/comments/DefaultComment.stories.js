// import { withRouter } from 'storybook-addon-react-router-v6';
import { DefaultComment } from './DefaultComment.jsx';

export default {
  title: 'Components/Comments/DefaultComment',
  component: DefaultComment,
  // decorators: [withRouter],
};

export const Default = {
  args: {
    userName: '구독자A',
    date: '10시간',
    comment: '잘 보고 갑니다.',
    replyNum: 7,
  },
};

export const Reply = {
  args: {
    userName: '구독자B',
    date: '1시간',
    comment: '감사합니다.',
    replyNum: 7,
  },
};
