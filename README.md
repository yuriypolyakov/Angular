1. Проинсталировать Angular-CLI (https://github.com/angular/angular-cli)
	- Просмотреть CLI QuickStart https://angular.io/docs/ts/latest/cli-quickstart.html
	- Просмотреть Style Guide https://angular.io/docs/ts/latest/guide/style-guide.html
2. Создать проект (ng new shop)
3. Добавьте несколько простых свойств для корневого компонента AppComponent, выведите их в темплейт:
	- name: string
	- description: string
	- price: number
	- category: enum (Создайте enum с несколькими категориями)
	- isAvailable: boolean
4. Добавьте одно или несколько свойств в виде массива для корневого компонента AppComponent, выведите их в темплейт используя *ngFor: 
	- ingredients
	- equivalents
5. Добавьте кнопку Buy в темплей AppCompoenent. Реализуйте обработчик события клик onBuy(). Используйте *ngIf директиву для отображения корзины, если она не пустая.
6. Создайте сервис ProductsService, который будет возвращать продукты. Зарегистрируйте его в AppModule. Используйте даный сервис в AppComponent, отобразите данные на станице.
7. Создайте компонент (ng g c cart) и используйте его в AppComponent темплейте.
8. Опишите в ридми и реализуйте любую ункциональность по желанию.
9. Загрузите Ваш проект на github и отправьте мне ссылку (Vitaliy_Zhyrytskyy@epam.com)

Унивальная функциональность - добавление продукта в сервис, метод AppComponent.add

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
