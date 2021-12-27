import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TypesService {
  constructor(private http: HttpClient) {}

  types: any[];
  currentType: any;

  parseId(types: any[]) {
    return types.map((type: any) => {
      type.id = type.url.split('/').at(-2);
      return type;
    });
  }

  async getAll() {
    try {
      let res: any = await this.http.get('/type/').toPromise();
      this.types = this.parseId(res.results);
      console.log(this.types);
    } catch (e) {
      console.log(e);
    }
  }

  async get(id: number) {
    try {
      let res: any = await this.http.get(`/type/${id}/`).toPromise();
      this.currentType = res;
      console.log(this.currentType);
    } catch (e) {
      console.log(e);
    }
  }
}
