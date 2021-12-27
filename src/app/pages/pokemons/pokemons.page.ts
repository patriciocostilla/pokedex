import { Component, OnInit } from '@angular/core';
import { PokemonsService } from 'src/app/services/pokemons.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.page.html',
  styleUrls: ['./pokemons.page.scss'],
})
export class PokemonsPage implements OnInit {
  constructor(private pokemonsService: PokemonsService) {}

  pokemons: any[];

  ngOnInit() {
    this.getAll();
  }

  async getAll() {
    await this.pokemonsService.getAll();
    this.pokemons = this.pokemonsService.pokemons;
  }

  async getNext(event) {
    console.log('Fetching', this.pokemonsService.next);
    await this.pokemonsService.getNext();
    this.pokemons = this.pokemonsService.pokemons;
    event.target.complete();
    if (this.pokemonsService.next === null) {
      event.target.disable;
    }
  }
}
