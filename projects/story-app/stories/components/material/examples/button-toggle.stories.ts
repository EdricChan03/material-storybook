import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { MatButtonToggle, MatButtonToggleGroup, MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';

export default {
  title: 'Components/Angular Material/Button Toggle/Docs Examples',
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
  ]
} as Meta;

export const Overview: Story<MatButtonToggleGroup> = () => ({
  template: `
  <mat-button-toggle-group name="fontStyle" aria-label="Font Style">
    <mat-button-toggle value="bold">Bold</mat-button-toggle>
    <mat-button-toggle value="italic">Italic</mat-button-toggle>
    <mat-button-toggle value="underline">Underline</mat-button-toggle>
  </mat-button-toggle-group>
  `
});

export const Appearance: Story<MatButtonToggleGroup> = () => ({
  template: `
  <p>
    Default appearance:
    <mat-button-toggle-group name="fontStyle" aria-label="Font Style">
      <mat-button-toggle value="bold">Bold</mat-button-toggle>
      <mat-button-toggle value="italic">Italic</mat-button-toggle>
      <mat-button-toggle value="underline">Underline</mat-button-toggle>
    </mat-button-toggle-group>
  </p>

  <p>
    Legacy appearance:
    <mat-button-toggle-group appearance="legacy" name="fontStyle" aria-label="Font Style">
      <mat-button-toggle value="bold">Bold</mat-button-toggle>
      <mat-button-toggle value="italic">Italic</mat-button-toggle>
      <mat-button-toggle value="underline">Underline</mat-button-toggle>
    </mat-button-toggle-group>
  </p>
  `,
  styles: [`
  mat-button-toggle-group {
    margin-left: 12px;
  }
  `]
});

export const Exclusive: Story<MatButtonToggleGroup> = () => ({
  template: `
  <mat-button-toggle-group #group="matButtonToggleGroup">
    <mat-button-toggle value="left" aria-label="Text align left">
      <mat-icon>format_align_left</mat-icon>
    </mat-button-toggle>
    <mat-button-toggle value="center" aria-label="Text align center">
      <mat-icon>format_align_center</mat-icon>
    </mat-button-toggle>
    <mat-button-toggle value="right" aria-label="Text align right">
      <mat-icon>format_align_right</mat-icon>
    </mat-button-toggle>
    <mat-button-toggle value="justify" disabled aria-label="Text align justify">
      <mat-icon>format_align_justify</mat-icon>
    </mat-button-toggle>
  </mat-button-toggle-group>
  <div class="example-selected-value">Selected value: {{group.value}}</div>
  `,
  styles: [`
  .example-selected-value {
    margin: 15px 0;
  }
  `]
});
