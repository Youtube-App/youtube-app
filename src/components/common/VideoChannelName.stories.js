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
  isLink: true,
  videoChannelName: '태계일주 베이스캠프',
  parameters: {
    reactRouter: {
      routePath: '/channel/:channelId',
      routeParams: { channelId: '@channelId' },
    },
  },
};
