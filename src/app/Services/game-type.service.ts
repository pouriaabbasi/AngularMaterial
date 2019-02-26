import { Injectable } from '@angular/core';
import { GameTypeModel } from '../Models/GameType/game-type.model';
import { Observable, of } from 'rxjs';
import { GameTypeAddModel } from '../Models/GameType/game-type-add.model';

@Injectable({
  providedIn: 'root'
})
export class GameTypeService {

  constructor() { }

  public GetGameTypes(): Observable<GameTypeModel[]> {
    return of([]);
  }

  public AddGameType(model: GameTypeAddModel): Observable<GameTypeModel> {
    var temp: GameTypeModel = {
      id: localStorage.length + 1,
      name: model.name,
      description: model.description
    };
    return of(temp);
  }
}
