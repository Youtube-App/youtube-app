import { SearchViewMore } from './SearchViewMore';

export default {
  title: 'Components/Buttons/SearchViewMore',
  component: SearchViewMore,
  parameters: {
    reactRouter: {
      routePath: '/channel/:channelId',
      routeParams: { channelId: 'df23' },
    },
  },
};

export const Default = {
  num: 8,
};
