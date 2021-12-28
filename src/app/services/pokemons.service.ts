import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PokemonsService {
  constructor(private http: HttpClient) {}

  pokemons: any[];
  count: number;
  next: string;
  previous: string;

  currentPokemon: any;

  parseId(pokemons: any[]) {
    return pokemons.map((pokemon: any) => {
      pokemon.id = pokemon.url.split('/').at(-2);
      return pokemon;
    });
  }

  async getAll() {
    try {
      let res: any = await this.http.get('/pokemon/').toPromise();
      this.pokemons = this.parseId(res.results);
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
      this.pokemons.push(...this.parseId(res.results));
      this.count = this.count + res.count;
      this.next = res.next;
      this.previous = res.previous;
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  }

  async get(id: number) {
    try {
      let res: any = await this.http.get(`/pokemon/${id}/`).toPromise();
      this.currentPokemon = res;
      console.log(this.currentPokemon);
    } catch (e) {
      console.log(e);
    }
  }
}
