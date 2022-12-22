import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

export default {
  title: 'Components/Angular Material/Button',
  component: MatButton,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        BrowserAnimationsModule,
        MatButtonModule
      ]
    })
  ],
  args: {
    label: 'Button',
    color: '',
    disabled: false,
    disableRipple: false
  },
  argTypes: {
    color: {
      description: 'Theme color palette for the button.',
      control: {
        type: 'select',
        options: [null, 'primary', 'accent', 'warn']
      }
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
    <mat-icon>favorite</mat-icon>
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
    <mat-icon>favorite</mat-icon>
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
    <mat-icon>favorite</mat-icon>
  </button>
  `,
  moduleMetadata: {
    imports: [MatButtonModule, MatIconModule]
  },
  props: args
});
