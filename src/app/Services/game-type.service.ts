import { Injectable } from '@angular/core';
import { GameTypeModel } from '../Models/GameType/game-type.model';
import { Observable, of } from 'rxjs';
import { GameTypeAddModel } from '../Models/GameType/game-type-add.model';
import { GameTypeEditModel } from '../Models/GameType/game-type-edit.model';

@Injectable({
  providedIn: 'root'
})
export class GameTypeService {

  private localDataSet: GameTypeModel[] = [];

  constructor() { }

  public GetGameTypes(): Observable<GameTypeModel[]> {
    return of(this.localDataSet);
  }

  public GetGameType(id: number): Observable<GameTypeModel> {
    const gameType = this.localDataSet.find(x => x.id === id);
    return of(gameType);
  }

  public AddGameType(model: GameTypeAddModel): Observable<GameTypeModel> {
    const gameType: GameTypeModel = {
      id: localStorage.length + 1,
      name: model.name,
      description: model.description
    };
    this.localDataSet.push(gameType);
    return of(gameType);
  }

  public EditGameType(model: GameTypeEditModel): Observable<GameTypeModel> {
    const gameType = this.localDataSet.find(x => x.id === model.id);
    if (!model) {
      return of(null);
    }
    gameType.name = model.name;
    gameType.description = model.description;

    return of(gameType);
  }

  public DeleteGameType(id: number): Observable<boolean> {
    const gameTypeIndex = this.localDataSet.findIndex(x => x.id === id);
    if (gameTypeIndex === -1) {
      return of(false);
    }
    this.localDataSet.splice(gameTypeIndex, 1);
    return of(true);
  }
}
