import { applicationConfig, Meta, moduleMetadata, Story } from '@storybook/angular';

import { CommonModule } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocomplete, MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { provideAnimations } from '@angular/platform-browser/animations';

export default {
  title: 'Components/Angular Material/Autocomplete/Docs Examples',
  component: MatAutocomplete,
  decorators: [
    applicationConfig({
      providers: [provideAnimations()]
    }),
    moduleMetadata({
      imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatAutocompleteModule,
        MatFormFieldModule,
        MatInputModule
      ]
    })
  ]
} as Meta;

export const Simple: Story<MatAutocomplete> = () => ({
  template: `
  <form class="example-form">
    <mat-form-field class="example-full-width">
      <input type="text"
             placeholder="Pick one"
             aria-label="Number"
             matInput
             [formControl]="myControl"
             [matAutocomplete]="auto">
      <mat-autocomplete #auto="matAutocomplete">
        <mat-option *ngFor="let option of options" [value]="option">
          {{option}}
        </mat-option>
      </mat-autocomplete>
    </mat-form-field>
  </form>
  `,
  props: {
    myControl: new FormControl(),
    options: ['One', 'Two', 'Three']
  }
});
