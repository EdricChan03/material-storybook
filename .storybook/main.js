module.exports = {
  stories: [
    '../projects/story-app/stories/**/*.stories.mdx',
    '../projects/story-app/stories/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-cssresources',
    '@storybook/addon-links',
    '@storybook/addon-storysource'
  ],
  core: {
    builder: 'webpack5'
  }
};
