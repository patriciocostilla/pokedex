import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonSpeciesService } from 'src/app/services/pokemon-species.service';
import { PokemonsService } from 'src/app/services/pokemons.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.page.html',
  styleUrls: ['./pokemon-detail.page.scss'],
})
export class PokemonDetailPage implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private pokemonsService: PokemonsService,
    private pokemonSpeciesService: PokemonSpeciesService
  ) {}
  id: number;
  pokemon: any;
  pokemonSpecies: any;
  loading: boolean = true;

  async ngOnInit() {
    this.id = Number(this.activatedRoute.snapshot.paramMap.getAll('id')[0]);
    await this.pokemonsService.get(this.id);
    this.pokemon = this.pokemonsService.currentPokemon;

    let speciesId = this.pokemon.species.url.split('/').at(-2);
    await this.pokemonSpeciesService.get(speciesId);
    this.pokemonSpecies = this.pokemonSpeciesService.currentPokemonSpecies;

    this.loading = false;
  }

  imgLoad() {
    console.log('Image Loaded!');
  }
}
