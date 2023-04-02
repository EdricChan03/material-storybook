import type { StorybookConfig } from '@storybook/angular';
import sass from 'sass';

export default {
  stories: [
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-links',
    '@storybook/addon-storysource',
    {
      name: '@storybook/addon-styling',
      options: {
        sass: { implementation: sass }
      }
    },
    '@storybook/addon-mdx-gfm'
  ],
  framework: {
    name: '@storybook/angular',
    options: {}
  },
  docs: {
    autodocs: true
  }
} satisfies StorybookConfig;
