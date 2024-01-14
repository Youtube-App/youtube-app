import { VideoChannelName } from './VideoChannelName';

export default {
  title: 'Components/Buttons/VideoChannelName',
  component: VideoChannelName,
  parameters: {
    reactRouter: {
      routePath: '/channel/:channelId',
      routeParams: { channelId: 'df23' },
    },
  },
};

export const Primary = {
  parameters: {
    reactRouter: {
      routePath: '/channel/:channelId',
      routeParams: { channelId: '@channelId' },
    },
  },
};
