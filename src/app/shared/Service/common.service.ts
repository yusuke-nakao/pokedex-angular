import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  public zeroPadding(str:any, length:number){
    return ("0000000000" + str).slice(-length);
  }
}
