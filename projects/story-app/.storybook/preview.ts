
import { setCompodocJson } from '@storybook/addon-docs/angular';
import type { Preview } from '@storybook/angular';
import { withThemeByClassName } from '@storybook/addon-styling';

import docJson from '../../../documentation.json';
setCompodocJson(docJson);

import '../src/themes.scss';

const themeClasses = ['indigo-pink', 'deeppurple-amber', 'pink-bluegrey', 'purple-green'];

export default {
  decorators: [
    withThemeByClassName({
      themes: themeClasses.reduce((obj, value) => ({ ...obj, [value]: `${value} mat-app-background` }), {}),
      defaultTheme: themeClasses[0]
    })
  ],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" }
  }
} satisfies Preview;
