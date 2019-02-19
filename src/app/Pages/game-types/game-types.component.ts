import { Component, OnInit, EventEmitter } from '@angular/core';
import { TableActionModel } from 'src/app/Model/Common/table-action.model';
import { GameTypeModel } from 'src/app/Model/GameType/game.type.model';
import { TableColumnModel } from 'src/app/Model/Common/table-column.model';

@Component({
  selector: 'app-game-types',
  templateUrl: './game-types.component.html',
  styleUrls: ['./game-types.component.css']
})
export class GameTypesComponent implements OnInit {

  actions: TableActionModel[] = [
    { name: "Add", icon: "add_circle", action: new EventEmitter() },
    { name: "Edit", icon: "create", action: new EventEmitter<GameTypeModel>(), mustSelect: true },
    { name: "Delete", icon: "remove_circle", action: new EventEmitter<GameTypeModel>(), mustSelect: true, mustConfirm: true }
  ]
  columns: TableColumnModel[] = [
    { caption: "Name", dataMember: "name" },
    { caption: "Description", dataMember: "description" }
  ]
  gameTypes: GameTypeModel[] = [];

  constructor() { }

  ngOnInit() {
    this.fetchGameTypes();
  }

  private fetchGameTypes(): void {
    this.gameTypes = [
      { id: 1, name: 'Snooker', description: 'Snooker Game!' },
      { id: 2, name: '8 Ball', description: '8 Ball Game!' },
      { id: 3, name: '9 Ball', description: '9 Ball Game!' },
    ]
  }

}
