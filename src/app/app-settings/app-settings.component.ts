import { Component, OnInit, Host, Optional } from '@angular/core';
import { AppConstsService,AppSettings } from './app-consts.service';

@Component({
  selector: 'app-app-settings',
  templateUrl: './app-settings.component.html',
  styleUrls: ['./app-settings.component.css']
})
export class AppSettingsComponent implements OnInit {
  appSettings : AppSettings;
  
  constructor(@Optional() private appSettingsService: AppConstsService) { }

  ngOnInit() {
    this.appSettings = this.appSettingsService? this.appSettingsService.get() : new AppSettings("not found","not found");
  }

}
