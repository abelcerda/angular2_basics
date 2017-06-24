import { Injectable } from '@angular/core';

@Injectable()
export class CommonLabelsService {
  private subtitle: string = 'I\'m a subtitle';

  constructor() { }

  public getSubtitle(): string {
    return this.subtitle;
  }

}
