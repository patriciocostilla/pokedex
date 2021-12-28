import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AbilitiesService {
  constructor(private http: HttpClient) {}
  abilities: any[];
  count: number = 0;
  next: string;
  previous: string;

  currentAbility: any;

  parseId(abilities: any[]) {
    return abilities.map((ability: any) => {
      ability.id = ability.url.split('/').at(-2);
      return ability;
    });
  }

  async getAll() {
    try {
      let res: any = await this.http.get('/ability/').toPromise();
      this.abilities = this.parseId(res.results);
      this.count = res.count;
      this.next = res.next;
      this.previous = res.previous;
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  }

  async getNext() {
    try {
      let res: any = await this.http.get(this.next).toPromise();
      this.abilities.push(...this.parseId(res.results));
      this.count = res.count;
      this.next = res.next;
      this.previous = res.previous;
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  }

  async get(id: number) {
    try {
      let res: any = await this.http.get(`/ability/${id}/`).toPromise();
      this.currentAbility = res;
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  }
}
