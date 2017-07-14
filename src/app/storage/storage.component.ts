import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';
import { MyUser } from './user.model';

@Component({
  selector: 'app-storage',
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.css']
})
export class StorageComponent implements OnInit {

  items: Array<MyUser> = [];

  constructor(private localStorageService: LocalStorageService) {
   }

  ngOnInit() {
    
  }

  getUserNameById(id:string) : string
  {
      return this.localStorageService.getItem(id);
  }

  add(name: string) {
    console.log('StorageComponent::add, name='+name);
    name = name.trim();
    if (!name) { return; }
    
    this.items.push(new MyUser(this.localStorageService.setItem(null,name),name));
  };
}
