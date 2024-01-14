/** @type { import('@storybook/react').Preview } */
import { withRouter } from 'storybook-addon-react-router-v6';
import '../src/styles/index.scss';
import React from 'react';

const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [withRouter],
};

export default preview;
