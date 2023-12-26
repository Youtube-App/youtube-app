// /** @type { import('@storybook/react-webpack5').StorybookConfig } */
// const config = {
//   stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
//   addons: [
//     "@storybook/addon-links",
//     "@storybook/addon-essentials",
//     "@storybook/preset-create-react-app",
//     "@storybook/addon-onboarding",
//     "@storybook/addon-interactions",
//   ],
//   framework: {
//     name: "@storybook/react-webpack5",
//     options: {
//       builder: {
//         useSWC: true,
//       },
//     },
//   },
//   docs: {
//     autodocs: "tag",
//   },
//   staticDirs: ["../public"],
// };
// export default config;

const path = require('path');

module.exports = {
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });

    // Return the altered config
    return config;
  },
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
    'storybook-addon-jsx',
    '@storybook/addon-knobs',
    '@storybook/addon-viewport',
    '@storybook/addon-a11y',
  ],
};
