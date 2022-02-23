# BackbaseWeather

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Solution description

Project created to show modularity architecture with Facade layer. 
This problem might be too easy to show the full power of Facade pattern but the general
purpose is to separate app logic from UI. 

Observables handled in HTML files with Async Pipe helps to show the pros of this solution in simple cases like this.

To save the time for creating boilerplate code - ng-mocks package is uded to mock dependencies in tests.
unit tests in components show the overall approach to testing and test coverage of the most important things.

Due to the limited amount of time, not all components have been tested.

Some of the components could be moved to Shared module to be more reusable in the bigger application. 
Due to the limited functionality of the application, it was decided to create components in the application within the Weather module.

Error handling was not included. But should be created to handle bad requests.

UI was created to be as simple as possible. Bootstrap Library was used to achieve this.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
