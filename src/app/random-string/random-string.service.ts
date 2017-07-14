import { Injectable } from '@angular/core';

@Injectable()
export class RandomStringService {

  constructor() { }

  getStringNSymbol(len : number) : string
  {
    let str = this.randomString(len, 'aA#');
    console.debug("getStringNSymbol str="+str);
    return str;
  }

  private randomString(length, chars) {
    var mask = '';
    if (chars.indexOf('a') > -1) mask += 'abcdefghijklmnopqrstuvwxyz';
    if (chars.indexOf('A') > -1) mask += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (chars.indexOf('#') > -1) mask += '0123456789';
    if (chars.indexOf('!') > -1) mask += '~`!@#$%^&*()_+-={}[]:";\'<>?,./|\\';
    var result = '';
    for (var i = length; i > 0; --i) result += mask[Math.floor(Math.random() * mask.length)];
    return result;
}


}
