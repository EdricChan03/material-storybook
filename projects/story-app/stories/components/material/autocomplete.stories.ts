import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatAutocomplete, MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

export default {
  title: 'Components/Angular Material/Autocomplete',
  component: MatAutocomplete,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        BrowserAnimationsModule,
        FormsModule,
        MatAutocompleteModule,
        MatFormFieldModule,
        MatInputModule
      ]
    })
  ],
  args: {
    autoActiveFirstOption: false,
    class: '',
    disableRipple: false,
    panelWidth: '',
    autocompleteTriggerDisabled: false,
    autocompleteTriggerPosition: 'auto'
  },
  argTypes: {
    autoActiveFirstOption: {
      description: 'Whether the first option should be highlighted when the autocomplete panel is opened.',
      defaultValue: false
    },
    class: {
      description: 'Classes to be applied to the autocomplete panel inside of the overlay container.'
    },
    disableRipple: {
      description: 'Whether ripples are disabled.'
    },
    panelWidth: {
      description: 'Specifies the width of the autocomplete panel. (Can be any CSS sizing value)'
    },
    onClosed: {
      description: 'Event that is emitted when the autocomplete panel is closed.',
      action: 'onClosed'
    },
    onOpened: {
      description: 'Event that is emitted when the autocomplete panel is opened.',
      action: 'onOpened'
    },
    onOptionActivated: {
      description: 'Event that is emitted when an option is activated using the keyboard.',
      action: 'onOptionActivated'
    },
    onOptionSelected: {
      description: 'Event that is emitted when an option is selected.',
      action: 'onOptionSelected'
    },
    autocompleteTriggerDisabled: {
      description: 'Whether the autocomplete is disabled.',
      defaultValue: false
    },
    autocompleteTriggerPosition: {
      description: 'Position of the autocomplete panel relative to the trigger element.',
      options: [null, 'auto', 'above', 'below'],
      control: { type: 'select' }
    }
  },
  parameters: {
    controls: { expanded: true }
  }
} as Meta;

export const Default: Story<MatAutocomplete> = (args) => ({
  template: `
  <form>
    <mat-form-field>
      <mat-label>Pick a number</mat-label>
      <input type="text"
        matInput
        [matAutocomplete]="auto"
        [matAutocompleteDisabled]="autocompleteTriggerDisabled"
        [matAutocompletePosition]="autocompleteTriggerPosition">
      <mat-autocomplete #auto="matAutocomplete"
        [autoActiveFirstOption]="autoActiveFirstOption"
        [class]="class"
        [disableRipple]="disableRipple"
        [panelWidth]="panelWidth"
        (closed)="onClosed()"
        (opened)="onOpened()"
        (optionActivated)="onOptionActivated($event)"
        (optionSelected)="onOptionSelected($event)">
        <mat-option *ngFor="let option of options" [value]="option">
          {{option}}
        </mat-option>
      </mat-autocomplete>
    </mat-form-field>
  </form>
  `,
  props: {
    ...args,
    options: ['One', 'Two', 'Three', 'Four']
  }
});
