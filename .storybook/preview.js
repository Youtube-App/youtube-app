/** @type { import('@storybook/react').Preview } */
import { withRouter } from 'storybook-addon-react-router-v6';
// import { MemoryRouter } from 'react-router-dom';
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
    // reactRouter: {
    //   routePath: '/',
    // },
  },
  // decorators: [withRouter],
};

// export const decorators = [
//   (Story) => {
//     <MemoryRouter initialEntries={['/']}>
//       <Story />
//     </MemoryRouter>;
//   },
// ];

export default preview;
