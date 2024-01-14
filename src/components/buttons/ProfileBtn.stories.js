import { ProfileBtn } from './ProfileBtn';
import profileImg from '../../images/ex-img-profile.jpeg';

export default {
  title: 'Components/Buttons/ProfileBtn',
  component: ProfileBtn,
  parameters: {
    reactRouter: {
      routePath: '/channel/:channelId',
      routeParams: { channelId: 'df23' },
    },
  },
};

export const Primary = {
  args: {
    profileImg,
    channelId: '@vidChannelId',
  },
  parameters: {
    reactRouter: {
      routerPath: '/channel',
      routerState: { channelId: 'dfdf' },
    },
  },
};
