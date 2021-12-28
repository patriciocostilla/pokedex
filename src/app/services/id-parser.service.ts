import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class IdParserService {
  constructor() {}

  getId(url: any) {
    return url.split('/').at(-2);
  }

  parse(entity: any) {
    entity.id = this.getId(entity.url);
    return entity;
  }

  parseMany(entities: any[]) {
    return entities.map((entity: any) => {
      return this.parse(entity);
    });
  }
}
