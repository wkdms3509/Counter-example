module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  // webpackFinal: async config => {
  //   config.module.rules.push({
  //     test: /\.(ts|tsx)$/,
  //     loader: require.resolve('babel-loader'),
  //     options: {
  //       presets: [['react-app', { flow: false, typescript: true }]],
  //     },
  //   });
  //   config.resolve.extensions.push('.ts', '.tsx');
  //   return config;
  // },
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  },
  // "typescript": {
  //   "reactDocgen": 'react-docgen-typescript',
  //   "reactDocgenTypescriptOptions": {
  //     "compilerOptions": {
  //       "allowSyntheticDefaultImports": false,
  //       "esModuleInterop": false,
  //     },
  //   }
  // }
}