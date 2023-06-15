import { applicationConfig, Meta, moduleMetadata, Story } from '@storybook/angular';

import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenu, MatMenuModule } from '@angular/material/menu';
import { provideAnimations } from '@angular/platform-browser/animations';

export default {
  title: 'Components/Angular Material/Menu',
  component: MatMenu,
  decorators: [
    applicationConfig({
      providers: [provideAnimations()]
    }),
    moduleMetadata({
      imports: [
        CommonModule,
        MatButtonModule,
        MatIconModule,
        MatMenuModule
      ]
    })
  ],
  args: {
    backdropClass: '',
    overlapTrigger: false,
    hasBackdrop: true,
    class: ''
  },
  argTypes: {
    backdropClass: {
      description: 'Class to be added to the backdrop element.'
    },
    xPosition: {
      description: 'Position of the menu in the X-axis.',
      defaultValue: 'after',
      options: [null, 'before', 'after'],
      control: { type: 'select' }
    },
    yPosition: {
      description: 'Position of the menu in the Y-axis.',
      defaultValue: 'below',
      options: [null, 'above', 'below'],
      control: { type: 'select' }
    },
    overlapTrigger: {
      description: 'Whether the menu should overlap its trigger.',
      defaultValue: false
    },
    hasBackdrop: {
      description: 'Whether the menu has a backdrop.',
      defaultValue: true
    },
    class: {
      description: 'CSS class names to be applied to the menu\'s template.'
    },
    onClosed: {
      action: 'onClosed'
    },
    onTriggerMenuOpened: {
      action: 'onTriggerMenuOpened'
    },
    onTriggerMenuClosed: {
      action: 'onTriggerMenuClosed'
    }
  },
  parameters: {
    controls: { expanded: true }
  }
} as Meta;

export const Overview: Story<MatMenu> = (args) => ({
  template: `
  <button mat-button
    [matMenuTriggerFor]="menu"
    (menuOpened)="onTriggerMenuOpened($event)"
    (menuClosed)="onTriggerMenuClosed($event)">Menu</button>
  <mat-menu #menu="matMenu"
    [backdropClass]="backdropClass"
    [xPosition]="xPosition"
    [yPosition]="yPosition"
    [overlapTrigger]="overlapTrigger"
    [hasBackdrop]="hasBackdrop"
    [class]="class"
    (closed)="onClosed($event)">
    <button mat-menu-item>Item 1</button>
    <button mat-menu-item>Item 2</button>
  </mat-menu>
  `,
  props: args
});

export const Icons: Story<MatMenu> = (args) => ({
  template: `
  <button mat-icon-button
    aria-label="More actions"
    [matMenuTriggerFor]="actionsMenu"
    (menuOpened)="onTriggerMenuOpened($event)"
    (menuClosed)="onTriggerMenuClosed($event)">
    <mat-icon>more_vert</mat-icon>
  </button>
  <mat-menu #actionsMenu="matMenu"
    [backdropClass]="backdropClass"
    [xPosition]="xPosition"
    [yPosition]="yPosition"
    [overlapTrigger]="overlapTrigger"
    [hasBackdrop]="hasBackdrop"
    [class]="class"
    (closed)="onClosed($event)">
    <button mat-menu-item>
      <mat-icon aria-hidden="true">content_copy</mat-icon>
      <span>Copy</span>
    </button>
    <button mat-menu-item>
      <mat-icon aria-hidden="true">content_cut</mat-icon>
      <span>Cut</span>
    </button>
    <button mat-menu-item>
      <mat-icon aria-hidden="true">content_paste</mat-icon>
      <span>Paste</span>
    </button>
  </mat-menu>
  `
});

export const Nested: Story<MatMenu> = (args) => ({
  template: `
  <button mat-button
    [matMenuTriggerFor]="menu"
    (menuOpened)="onTriggerMenuOpened($event)"
    (menuClosed)="onTriggerMenuClosed($event)">Menu</button>
  <mat-menu #menu="matMenu"
    [backdropClass]="backdropClass"
    [xPosition]="xPosition"
    [yPosition]="yPosition"
    [overlapTrigger]="overlapTrigger"
    [hasBackdrop]="hasBackdrop"
    [class]="class"
    (closed)="onClosed($event)">
    <button mat-menu-item [matMenuTriggerFor]="subMenu">Item 1</button>
    <mat-menu #subMenu="matMenu">
      <button mat-menu-item>Sub-menu Item 1</button>
      <button mat-menu-item>Sub-menu Item 2</button>
      <button mat-menu-item>Sub-menu Item 3</button>
    </mat-menu>
    <button mat-menu-item>Item 2</button>
  </mat-menu>
  `,
  props: args
});
