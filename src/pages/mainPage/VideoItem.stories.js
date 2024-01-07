import { VideoItem } from 'pages/mainPage/components/VideoItem';
import {
  reactRouterParameters,
  withRouter,
} from 'storybook-addon-react-router-v6';

export default {
  title: 'Pages/MainPage/Components/VideoItem',
  component: VideoItem,
  decorators: [withRouter],
};

export const Primary = {
  args: {},
  parameters: {
    reactRouter: reactRouterParameters({
      location: {
        pathParams: { channelId: 42 },
        searchParams: { tab: 'activityLog' },
        state: { fromPage: 'homePage' },
      },
      routing: {
        path: '/users/:channelId',
        handle: 'Profile',
      },
    }),
  },
};
