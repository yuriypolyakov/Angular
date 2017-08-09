
В .angular-cli.json указан бутстреп, а в зависимостях его нет, ругается при компиляции

https://stackoverflow.com/questions/37649164/how-to-add-bootstrap-to-an-angular-cli-project

VZhyrytskiy commented 11 hours ago
Когда много импортов, я бы рекомендовал разбивать их на секции по типам, а дальше, возможно, даже сортировал бы по алфавиту. Так проще и быстрее просмотреть их.


json-server --watch db.json

Please open About page!
===================================


1. Реализуйте бекэнд для Вашего проекта, используя, например, json-server
2. Создайте сервис для работы с Http.
3. Реализуйте часть методов по схеме Promise, а часть по схеме Observable.

# MyApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
