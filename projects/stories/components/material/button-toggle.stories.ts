import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { MatButtonToggle, MatButtonToggleGroup, MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';

export default {
  title: 'Components/Angular Material/Button Toggle',
  component: MatButtonToggle,
  subcomponents: { MatButtonToggleGroup },
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        BrowserAnimationsModule,
        MatButtonToggleModule,
        MatIconModule
      ]
    })
  ],
  args: {
    disabled: false
  },
  argTypes: {
    appearance: {
      description: 'The appearance style of the button.',
      defaultValue: 'standard',
      control: {
        type: 'select',
        options: [null, 'legacy', 'standard']
      }
    },
    disabled: {
      description: 'Whether the button is disabled.',
    }
  },
  parameters: {
    controls: { expanded: true }
  }
} as Meta;

const single: Story<MatButtonToggle> = (args) => ({
  template: `
  <mat-button-toggle
    [appearance]="appearance"
    [checked]="checked"
    [disabled]="disabled">
    Toggle me!
  </mat-button-toggle>
  `,
  props: args
});

export const Single = single.bind({});

Single.args = {
  checked: false
};

Single.argTypes = {
  checked: {
    description: 'Whether the button is checked.'
  }
};

const group: Story<MatButtonToggleGroup> = (args) => ({
  template: `
  <mat-button-toggle-group
    name="fontStyle"
    aria-label="Font Style"
    [vertical]="vertical"
    [appearance]="appearance"
    [disabled]="disabled"
    [multiple]="multiple"
    (change)="onChange($event)">
    <mat-button-toggle value="bold">Bold</mat-button-toggle>
    <mat-button-toggle value="italic">Italic</mat-button-toggle>
    <mat-button-toggle value="underline">Underline</mat-button-toggle>
  </mat-button-toggle-group>
  `,
  props: args
});

export const Group = group.bind({});

Group.args = {
  vertical: false,
  multiple: false,
  disabled: false
};

Group.argTypes = {
  vertical: {
    description: 'Whether the toggle group is vertical.'
  },
  multiple: {
    description: 'Whether multiple button toggles can be selected.'
  },
  disabled: {
    description: 'Whether the toggle group can be disabled.'
  },
  onChange: {
    action: 'onChange'
  }
};
