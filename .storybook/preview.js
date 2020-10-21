
import { setCompodocJson } from '@storybook/addon-docs/angular';
import { withCssResources } from '@storybook/addon-cssresources';
import docJson from '../documentation.json';
setCompodocJson(docJson);

export const decorators = [
  withCssResources
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  cssresources: [
    {
      id: 'indigo-pink',
      code: '<link rel="stylesheet" href="assets/themes/indigo-pink.css">',
      picked: true
    },
    {
      id: 'deeppurple-amber',
      code: '<link rel="stylesheet" href="assets/themes/deeppurple-amber.css">',
      picked: false
    },
    {
      id: 'pink-bluegrey',
      code: '<link rel="stylesheet" href="assets/themes/pink-bluegrey.css">',
      picked: false
    },
    {
      id: 'purple-green',
      code: '<link rel="stylesheet" href="assets/themes/purple-green.css">',
      picked: false
    }
  ]
};
