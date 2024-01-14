import { VideoItem } from 'pages/mainPage/components/VideoItem';
import { withRouter } from 'storybook-addon-react-router-v6';
// import { withRouter } from 'storybook-addon-react-router-v6';
// import { withRouter } from 'storybook-addon-react-router-v6';

export default {
  title: 'Pages/MainPage/Components/VideoItem',
  component: VideoItem,
  decorators: [withRouter],
  // parameters: {
  //   reactRouter: {
  //     routePath: '/channel/:channelId',
  //     routeParams: { channelId: 'df23' },
  //   },
  // },
};

export const Primary = {
  args: {},
  // parameters: {
  //   reactRouter: {
  //     routerPath: '/channel',
  //     routerState: { channelId: 'dfdf' },
  //   },
  // },
};
