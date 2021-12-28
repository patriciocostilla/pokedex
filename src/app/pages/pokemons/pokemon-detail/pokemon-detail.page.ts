import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IdParserService } from 'src/app/services/id-parser.service';
import { PokemonSpeciesService } from 'src/app/services/pokemon-species.service';
import { PokemonsService } from 'src/app/services/pokemons.service';
import { TypesService } from 'src/app/services/types.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.page.html',
  styleUrls: ['./pokemon-detail.page.scss'],
})
export class PokemonDetailPage implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private pokemonsService: PokemonsService,
    private pokemonSpeciesService: PokemonSpeciesService,
    private idParser: IdParserService
  ) {}
  id: number;
  pokemon: any;
  pokemonSpecies: any;
  loading: boolean = true;
  loadingImg: boolean = true;

  async ngOnInit() {
    this.loading = true;

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
    this.loadingImg = false;
  }

  parseTypeId(type: any) {
    return type.url.split('/').at(-2);
  }

  getId(url: any) {
    return this.idParser.getId(url);
  }
}
