import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {

private storage: Storage;

  constructor() {
      this.storage = localStorage;
  }

private uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}  
    getItem(key: string): any {
        let value = "aaa";//this.storage.getItem(key);
        try {
            console.log('LocalStorageService::getItem, key='+key+", value="+value);
            return JSON.parse(value);
        } catch(e) {
            return value;
        }
    }

    setItem(key: string, value: any): string {
        console.log('LocalStorageService::setItem, key='+key+", value="+value);
        let guidKey = key;
        if (key == null)
        {
            guidKey = this.uuidv4();
        }
       
        let value2 =  typeof value === "string" ? value : JSON.stringify(value);
        this.storage.setItem(guidKey, value2);

        console.log('LocalStorageService::setItem, guidKey='+guidKey);
        return guidKey;
    }

    removeItem(key: string): void {
        this.storage.removeItem(key);
    }

    clear(): void {
        this.storage.clear();
}

}