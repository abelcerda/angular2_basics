import { Injectable } from '@angular/core';

@Injectable()
export class InfoService {

  constructor() { }

  public getDate(): any {
    return new Date();
  }

}
