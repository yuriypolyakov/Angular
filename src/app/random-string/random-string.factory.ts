import { OpaqueToken, InjectionToken } from '@angular/core';
import { RandomStringService } from './random-string.service';

export const RandomLengthString = new InjectionToken<string>('RandomString');

export function RandomLengthStringNFactory(take: number) {

  return function(data: RandomStringService): string {
    return data.getStringNSymbol(take);
  };

}
