import { Component, OnInit, Host, Optional, OpaqueToken, Inject, InjectionToken } from '@angular/core';
import { AppConstsService,AppSettings } from './app-consts.service';

const APPVERSION = new InjectionToken<string>('appversion');
const APPNAME = new InjectionToken<string>('appname');

@Component({
  selector: 'app-app-settings',
  templateUrl: './app-settings.component.html',
  styleUrls: ['./app-settings.component.css'],
   providers: [
    { provide: APPVERSION, useValue: '1.0.0.1'},
     {provide: APPNAME, useValue: 'My New app' }
  ]
})
export class AppSettingsComponent implements OnInit {
  appSettings : AppSettings;
  
  constructor(@Optional() private appSettingsService: AppConstsService,
             @Optional() @Inject(APPVERSION) private appVer: string,
             @Optional() @Inject(APPNAME) private appName: string)
 { }

  ngOnInit() {
    this.appSettings = this.appSettingsService? this.appSettingsService.get() : new AppSettings(this.appName,this.appVer);
  }

}
