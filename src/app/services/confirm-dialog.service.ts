import { Injectable } from '@angular/core';

@Injectable()
export class ConfirmDialogService {

  confirm(message?: string) {
    return new Promise<boolean>(resolve => {
      resolve(window.confirm(message));
    });
  };
}

