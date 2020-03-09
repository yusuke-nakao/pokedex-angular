import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import { PokemonService } from './shared/Service/pokemon.service';
import { Pokemon, PokeResult } from './shared/Common/pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'pokedex-angular';
  pokeInfo:any
  pokedex:PokeResult[];

  constructor(private pokemonService:PokemonService){}

  ngOnInit(){
    this.pokemonService.getPokemonALL().subscribe((result:Pokemon) =>{
      this.pokedex = result.results;
    })
  }

}
