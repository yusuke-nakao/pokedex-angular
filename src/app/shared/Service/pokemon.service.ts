import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon } from '../Common/pokemon';
import { catchError, map, tap } from 'rxjs/operators';
import { CommonService } from '../Service/common.service';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private _url = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(
    private http:HttpClient,
    private commonService:CommonService,
  ) { }

  getPokemonALL():Observable<Pokemon>{
      return this.http.get<Pokemon>(this._url + '?offset=0&limit=807').pipe(
        map(poke =>{
          poke.results.forEach(element => {
            var id = parseInt(element.url.split('/').reverse()[1]);
            element.id = this.commonService.zeroPadding(id,3);
            element.imageUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + id + '.png';
          });
          return poke;
        })
      );
  }
}
