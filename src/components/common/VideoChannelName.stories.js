import { VideoChannelName } from './VideoChannelName';
// import { withRouter } from 'storybook-addon-react-router-v6';

export default {
  title: 'Components/Buttons/VideoChannelName',
  component: VideoChannelName,
  // decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: '/channel2/:channelId',
      routeParams: { channelId: 'df23' },
    },
  },
};

export const Primary = {
  args: {
    channelId: '123',
  },
  parameters: {
    reactRouter: {
      routerPath: '/channel2',
      routerState: { channelId: 'dfdf' },
    },
  },
};
