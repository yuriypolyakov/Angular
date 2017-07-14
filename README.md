
Angular 2.X: Services and DI

1. Создайте сервис, который позволит работать с localStorage (как класс). Он должен предоставлять методы для:
	- установки значения (setItem)
	- получения значения (getItem)
	- удаления значения (removeItem)
2. Создайте сервис, который будет хранить объект настроек, который  приходит ему на вход, например login, id, email.  
3. Создайте сервис, который будет возвращать объект констант, например { App: "TaskManager", Ver: "1.0" }
4. Создайте сервис, который будет генерировать случайную последовательность символов длины n из набора a-z, A-Z, 0-9 (n - здается при регистрации сервиса)
5. Внедрите перечисленные выше сервисы в компоненты. Используйте декоратор @Optional().
6. Напишите директиву, которая добавляет обработчик события click к хост элементу. Клик изменяет размер шрифта элемента или что-то другое на Ваше усмотрение. Добавьте @Input() для директивы. Используйте ElementRef.




1. Создать приложение Angular2, которое состоит из двух или более модулей (AppModule, CartModule, ProductsModule, OrdersModule, ...), используя Angular-CLI
2. Создать компонент (CartList), который отображает список купленных товаров
3. Создать модель этой сущности. Интерфейс + Класс. Использовать одно-два необязательных полей.
4. Создать компонент (СartItem), который отображает одну сущность из списка выше. Реализовать возможность изменить свойство сущности (quantity), удалить сущность. 
5. По возможности использовать декораторы: @Input(), @Output().
6. По возможности использовать два или более метода-хука жизненого цикла компонента
7. Использовать DOM событие (click, blur, ...).
8. Создать сервис (CartService) для предоставления данных компонентам, подсчета количества и суммы. Владельцем данных является приложение.
9. В качестве демо попробовать использовать #variable и @ViewChild и получить доступ к DOM элементу темплейта, методам(свойствам) дочернего компонента.
10. При наведении мышки или клике на пункт списка стилизировать его изменением фона. Использовать @HostBinding, @HostListener декораторы.
11. По возможности применить директиву ngClass или ngStyle
12. Описать (в ридми) и реализовать свою небольшую функциональность.
=========================================================================


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
