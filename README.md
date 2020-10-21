# Material Storybook

A [Storybook](https://storybook.js.org) for Angular Material.

Based on [amcdnl/material-storybook](https://github.com/amcdnl/material-storybook)
but reworked to the ground up (as Storybook for Angular now requires an existing
Angular project to be present) with Storybook v6 and Angular v10.

View the Storybook [here](https://edricchan03.github.io/material-storybook).

---

## Available Components

Name | Has [Stories](https://storybook.js.org/docs/angular/get-started/whats-a-story)? | Has Docs Examples Stories?
---|:---:|:---:
[Autocomplete][mat-autocomplete] | :white_check_mark: | ~ (Form-related examples not included)
[Badge][mat-badge] | :negative_squared_cross_mark: | :negative_squared_cross_mark:
[Bottom Sheet][mat-bottom-sheet] | :negative_squared_cross_mark: | :negative_squared_cross_mark:
[Button][mat-button] | :white_check_mark: | :white_check_mark:
[Button Toggle][mat-button-toggle] | :white_check_mark: | :white_check_mark:
[Card][mat-card] | :negative_squared_cross_mark: | :negative_squared_cross_mark:
[Checkbox][mat-checkbox] | :negative_squared_cross_mark: | :negative_squared_cross_mark:
[Chips][mat-chips] | :negative_squared_cross_mark: | :negative_squared_cross_mark:
[Datepicker][mat-datepicker] | :negative_squared_cross_mark: | :negative_squared_cross_mark:
[Dialog][mat-dialog] | :negative_squared_cross_mark: | :negative_squared_cross_mark:
[Divider][mat-divider] | :negative_squared_cross_mark: | :negative_squared_cross_mark:
[Expansion Panel][mat-expansion-panel] | :negative_squared_cross_mark: | :negative_squared_cross_mark:
[Form Field][mat-form-field] | :negative_squared_cross_mark: | :negative_squared_cross_mark:
[Grid List][mat-grid-list] | :negative_squared_cross_mark: | :negative_squared_cross_mark:
[Icon][mat-icon] | :negative_squared_cross_mark: | :negative_squared_cross_mark:
[Input][mat-input] | :negative_squared_cross_mark: | :negative_squared_cross_mark:
[List][mat-list] | :negative_squared_cross_mark: | :negative_squared_cross_mark:
[Menu][mat-menu] | :white_check_mark: | :white_check_mark:
[Paginator][mat-paginator] | :negative_squared_cross_mark: | :negative_squared_cross_mark:
[Progress Bar][mat-progress-bar] | :negative_squared_cross_mark: | :negative_squared_cross_mark:
[Progress Spinner][mat-progress-spinner] | :negative_squared_cross_mark: | :negative_squared_cross_mark:
[Radio Button][mat-radio-button] | :negative_squared_cross_mark: | :negative_squared_cross_mark:
[Ripples][mat-ripple] | :negative_squared_cross_mark: | :negative_squared_cross_mark:
[Select][mat-select] | :negative_squared_cross_mark: | :negative_squared_cross_mark:
[Sidenav][mat-sidenav] | :negative_squared_cross_mark: | :negative_squared_cross_mark:
[Slide Toggle][mat-slide-toggle] | :negative_squared_cross_mark: | :negative_squared_cross_mark:
[Slider][mat-slider] | :negative_squared_cross_mark: | :negative_squared_cross_mark:
[Snack Bar][mat-snack-bar] | :negative_squared_cross_mark: | :negative_squared_cross_mark:
[Sort Header][mat-sort-header] | :negative_squared_cross_mark: | :negative_squared_cross_mark:
[Stepper][mat-stepper] | :negative_squared_cross_mark: | :negative_squared_cross_mark:
[Table][mat-table] | :negative_squared_cross_mark: | :negative_squared_cross_mark:
[Tabs][mat-tabs] | :negative_squared_cross_mark: | :negative_squared_cross_mark:
[Toolbar][mat-toolbar] | :negative_squared_cross_mark: | :negative_squared_cross_mark:
[Tooltip][mat-tooltip] | :negative_squared_cross_mark: | :negative_squared_cross_mark:

---

## Dev setup

Clone the project locally using the typical `git clone` command.

### Run locally

1. Run `npm install` in the project's root to install the project's dependencies.
2. Run `npm run start-storybook` to generate the documentation (which currently
doesn't work) and to locally serve the Storybook.
3. Fire up your browser to `localhost:6006` if the Storybook CLI did not auto-open
the locally-served Storybook.

### Deploying the project

1. Run `npm run build-storybook` to build the Storybook.
2. The contents of the built Storybook can then be found in the generated `storybook-static` directory.

## Contributing

This project follows Angular's [commit guidelines](https://github.com/angular/angular/blob/master/CONTRIBUTING.md).

---

## License

This project is licensed with the [MIT license](./LICENSE).

<!-- Links -->

[mat-autocomplete]: https://material.angular.io/components/autocomplete
[mat-badge]: https://material.angular.io/components/badge
[mat-bottom-sheet]: https://material.angular.io/components/bottom-sheet
[mat-button]: https://material.angular.io/components/button
[mat-button-toggle]: https://material.angular.io/components/button-toggle
[mat-card]: https://material.angular.io/components/card
[mat-checkbox]: https://material.angular.io/components/checkbox
[mat-chips]: https://material.angular.io/components/chips
[mat-datepicker]: https://material.angular.io/components/datepicker
[mat-dialog]: https://material.angular.io/components/dialog
[mat-divider]: https://material.angular.io/components/divider
[mat-expansion-panel]: https://material.angular.io/components/expansion-panel
[mat-form-field]: https://material.angular.io/components/form-field
[mat-grid-list]: https://material.angular.io/components/grid-list
[mat-icon]: https://material.angular.io/components/icon
[mat-input]: https://material.angular.io/components/input
[mat-list]: https://material.angular.io/components/list
[mat-menu]: https://material.angular.io/components/menu
[mat-paginator]: https://material.angular.io/components/paginator
[mat-progress-bar]: https://material.angular.io/components/progress-bar
[mat-progress-spinner]: https://material.angular.io/components/progress-spinner
[mat-radio-button]: https://material.angular.io/components/radio
[mat-ripple]: https://material.angular.io/components/ripple
[mat-select]: https://material.angular.io/components/select
[mat-sidenav]: https://material.angular.io/components/sidenav
[mat-slide-toggle]: https://material.angular.io/components/slide-toggle
[mat-slider]: https://material.angular.io/components/slider
[mat-snack-bar]: https://material.angular.io/components/snack-bar
[mat-sort-header]: https://material.angular.io/components/sort
[mat-stepper]: https://material.angular.io/components/stepper
[mat-table]: https://material.angular.io/components/table
[mat-tabs]: https://material.angular.io/components/tabs
[mat-toolbar]: https://material.angular.io/components/toolbar
[mat-tooltip]: https://material.angular.io/components/tooltip
