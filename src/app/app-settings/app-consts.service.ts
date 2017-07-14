import { Injectable } from '@angular/core';

export class AppSettings {
   public appName :string;
   public appVersion : string;
   constructor(appName: string, appVersion : string)
   {
    this.appName = appName;
    this.appVersion = appVersion;
   }
}

const APP_NAME='My App';
const APP_VERSION='1.0.0.1';
//Создайте сервис, который будет возвращать объект констант, например { App: "TaskManager", Ver: "1.0" }
@Injectable()
export class AppConstsService {
  private appSettings  : AppSettings;

  constructor() {
      this.appSettings = new AppSettings(APP_NAME,APP_VERSION);
  }

  get() : AppSettings
  {
      return this.appSettings;
  }

}