import { applicationConfig, Meta, moduleMetadata, Story } from '@storybook/angular';

import { CommonModule } from '@angular/common';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { provideAnimations } from '@angular/platform-browser/animations';

export default {
  title: 'Components/Angular Material/Button',
  component: MatButton,
  decorators: [
    applicationConfig({
      providers: [provideAnimations()]
    }),
    moduleMetadata({
      imports: [
        CommonModule,
        MatButtonModule
      ]
    })
  ],
  args: {
    label: 'Button',
    icon: 'favorite',
    color: '',
    disabled: false,
    disableRipple: false
  },
  argTypes: {
    color: {
      description: 'Theme color palette for the button.',
      options: [null, 'primary', 'accent', 'warn'],
      control: { type: 'select' }
    },
    disabled: {
      description: 'Whether the button is disabled.',
    },
    disableRipple: {
      description: 'Whether ripples are disabled.'
    },
    onClick: {
      action: 'onClick'
    }
  },
  parameters: {
    controls: { expanded: true }
  }
} as Meta;

export const Default: Story<MatButton> = (args) => ({
  template: `
  <button mat-button
    [color]="color"
    [disabled]="disabled"
    [disableRipple]="disableRipple"
    (click)="onClick($event)">{{ label }}</button>
  `,
  props: args
});

export const Raised: Story<MatButton> = (args) => ({
  template: `
  <button mat-raised-button
    [color]="color"
    [disabled]="disabled"
    [disableRipple]="disableRipple"
    (click)="onClick($event)">{{ label }}</button>
  `,
  props: args
});

export const Stroked: Story<MatButton> = (args) => ({
  template: `
  <button mat-stroked-button
    [color]="color"
    [disabled]="disabled"
    [disableRipple]="disableRipple"
    (click)="onClick($event)">{{ label }}</button>
  `,
  props: args
});

export const Flat: Story<MatButton> = (args) => ({
  template: `
  <button mat-flat-button
    [color]="color"
    [disabled]="disabled"
    [disableRipple]="disableRipple"
    (click)="onClick($event)">{{ label }}</button>
  `,
  props: args
});

export const Icon: Story<MatButton> = (args) => ({
  template: `
  <button mat-icon-button
    [color]="color"
    [disabled]="disabled"
    [disableRipple]="disableRipple"
    (click)="onClick($event)">
    <mat-icon>{{ icon }}</mat-icon>
  </button>
  `,
  moduleMetadata: {
    imports: [MatButtonModule, MatIconModule]
  },
  props: args
});

export const FAB: Story<MatButton> = (args) => ({
  template: `
  <button mat-fab
    [color]="color"
    [disabled]="disabled"
    [disableRipple]="disableRipple"
    (click)="onClick($event)">
    <mat-icon>{{ icon }}</mat-icon>
  </button>
  `,
  moduleMetadata: {
    imports: [MatButtonModule, MatIconModule]
  },
  props: args
});

export const MiniFAB: Story<MatButton> = (args) => ({
  template: `
  <button mat-mini-fab
    [color]="color"
    [disabled]="disabled"
    [disableRipple]="disableRipple"
    (click)="onClick($event)">
    <mat-icon>{{ icon }}</mat-icon>
  </button>
  `,
  moduleMetadata: {
    imports: [MatButtonModule, MatIconModule]
  },
  props: args
});

export const ExtendedFAB: Story<MatButton> = (args) => ({
  template: `
  <button mat-fab extended
    [color]="color"
    [disabled]="disabled"
    [disableRipple]="disableRipple"
    (click)="onClick($event)">
    <mat-icon>{{ icon }}</mat-icon>
    {{ label }}
  </button>
  `,
  moduleMetadata: {
    imports: [MatButtonModule, MatIconModule]
  },
  props: args
});
