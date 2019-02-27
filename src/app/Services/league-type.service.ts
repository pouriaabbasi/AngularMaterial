import { Injectable } from '@angular/core';
import { LeagueTypeModel } from '../Models/LeagueType/league-type.model';
import { Observable, of } from 'rxjs';
import { GameTypeService } from './game-type.service';
import { LeagueTypeAddModel } from '../Models/LeagueType/league-type-add.model';
import { LeagueTypeEditModel } from '../Models/LeagueType/league-Type-edit.model';

@Injectable({
  providedIn: 'root'
})
export class LeagueTypeService {

  private localDataSet: LeagueTypeModel[] = [];

  constructor(
    private gameTypeService: GameTypeService
  ) { }

  public GetLeagueTypes(): Observable<LeagueTypeModel[]> {
    return of(this.localDataSet);
  }

  public GetLeagueType(id: number): Observable<LeagueTypeModel> {
    const leagueType = this.localDataSet.find(x => x.id === id);
    return of(leagueType);
  }

  public AddLeagueType(model: LeagueTypeAddModel): Observable<LeagueTypeModel> {

    const leagueType: LeagueTypeModel = {
      id: this.localDataSet.length + 1,
      description: model.description,
      gameTypeId: model.gameTypeId,
      gameTypeName: model.gameTypeName,
      isContinuous: model.isContinuous,
      name: model.name,
      p2PPlayCount: model.p2PPlayCount
    };

    this.localDataSet.push(leagueType);

    return of(leagueType);
  }

  public EditLeagueType(model: LeagueTypeEditModel): Observable<LeagueTypeModel> {
    const leagueType = this.localDataSet.find(x => x.id === model.id);
    if (!leagueType) {
      return of(null);
    }
    leagueType.description = model.description;
    leagueType.gameTypeId = model.gameTypeId;
    leagueType.gameTypeName = model.gameTypeName;
    leagueType.isContinuous = model.isContinuous;
    leagueType.name = model.name;
    leagueType.p2PPlayCount = model.p2PPlayCount;
  }

  public DeleteLeagueType(id: number): Observable<boolean> {
    const leagueTypeIndex = this.localDataSet.findIndex(x => x.id === id);
    if (leagueTypeIndex === -1) {
      return of(false);
    }

    this.localDataSet.splice(leagueTypeIndex, 1);
    return of(true);
  }
}
