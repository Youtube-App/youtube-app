import { VideoChannelName } from './VideoChannelName';

export default {
  title: 'Components/Buttons/VideoChannelName',
  component: VideoChannelName,
  parameters: {
    reactRouter: {
      routePath: '/channel2/:channelId',
      routeParams: { channelId: 'df23' },
    },
  },
};

export const Primary = {
  args: {
    channelId: '@vidChannelName',
  },
  parameters: {
    reactRouter: {
      routerPath: '/channel2',
      routerState: { channelId: 'dfdf' },
    },
  },
};
