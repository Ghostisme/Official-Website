import type { StorybookConfig } from '@storybook/nextjs';
// import { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions'
  ],
  // staticDirs: [
  //   {
  //     from: '../src/*',
  //     to: 'src/*'
  //   }
  // ],
  framework: {
    name: '@storybook/nextjs',
    options: {}
  }
};
export default config;
