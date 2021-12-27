import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PokemonSpeciesService {
  constructor(private http: HttpClient) {}
  currentPokemonSpecies: any;

  async get(id: number) {
    try {
      let res: any = await this.http
        .get(`https://pokeapi.co/api/v2/pokemon-species/${id}/`)
        .toPromise();
      this.currentPokemonSpecies = res;
      console.log(this.currentPokemonSpecies);
    } catch (e) {
      console.log(e);
    }
  }
}
