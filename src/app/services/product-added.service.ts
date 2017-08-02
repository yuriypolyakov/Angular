import { Injectable } from '@angular/core';

@Injectable()
export class ProductAddedService {

  inform(message?: string) {
     new Promise<void>(resolve => {
      resolve(window.alert(message ));
    });
  };
}
