import { ProfileBtn } from './ProfileBtn';
import profileImg from '../../images/ex-img-profile.jpeg';
// import { withRouter } from 'storybook-addon-react-router-v6';

export default {
  title: 'Components/Buttons/ProfileBtn',
  component: ProfileBtn,
  // decorators: [withRouter],
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
    channelId: '123',
  },
  parameters: {
    reactRouter: {
      routerPath: '/channel',
      routerState: { channelId: 'dfdf' },
    },
  },
};
