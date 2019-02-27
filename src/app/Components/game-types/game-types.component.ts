import { Component, OnInit, EventEmitter } from '@angular/core';
import { TableActionModel } from 'src/app/Models/Common/table-action.model';
import { GameTypeModel } from 'src/app/Models/GameType/game-type.model';
import { TableColumnModel } from 'src/app/Models/Common/table-column.model';
import { GameTypeService } from 'src/app/Services/game-type.service';
import { MatDialog } from '@angular/material';
import { GameTypeModalComponent } from './game-type-modal/game-type-modal.component';

@Component({
  selector: 'app-game-types',
  templateUrl: './game-types.component.html',
  styleUrls: ['./game-types.component.css']
})
export class GameTypesComponent implements OnInit {

  actions: TableActionModel[] = [
    { name: 'جدید', icon: 'add_circle', action: new EventEmitter() },
    { name: 'ویرایش', icon: 'create', action: new EventEmitter<GameTypeModel>(), mustSelect: true },
    { name: 'حذف', icon: 'remove_circle', action: new EventEmitter<GameTypeModel>(), mustSelect: true, mustConfirm: true }
  ];

  columns: TableColumnModel[] = [
    { caption: 'نام بازی', dataMember: 'name' },
    { caption: 'توضیحات', dataMember: 'description' }
  ];
  gameTypes: GameTypeModel[] = [];

  constructor(
    private dialog: MatDialog,
    private gameTypeService: GameTypeService,
  ) { }

  ngOnInit() {
    this.fetchGameTypes();

    this.actions[0].action.subscribe(() => {
      this.newGameType();
    });

    this.actions[1].action.subscribe(gameType => {
      this.editGameType(gameType);
    });
    this.actions[2].action.subscribe(gameType => {
      this.deleteGameType(gameType);
    });
  }

  private fetchGameTypes(): void {
    this.gameTypeService.GetGameTypes().subscribe(gameTypes => {
      this.gameTypes = gameTypes.slice();
    });
  }

  private newGameType(): void {
    this.dialog.open(GameTypeModalComponent, {
      data: new GameTypeModel()
    }).afterClosed().subscribe(result => {
      if (result) {
        this.fetchGameTypes();
        // this.gameTypes.push(result);
        // this.gameTypes = this.gameTypes.slice();
      }
    });
  }

  private editGameType(gameType: GameTypeModel): void {
    this.dialog.open(GameTypeModalComponent, {
      data: gameType
    }).afterClosed().subscribe(result => {
      if (result) {
        this.fetchGameTypes();
        // this.gameTypes.push(result);
        // this.gameTypes = this.gameTypes.slice();
      }
    });
  }

  private deleteGameType(gameType: GameTypeModel): void {
    this.gameTypeService.DeleteGameType(gameType.id).subscribe(result => {
      if (result) {
        this.fetchGameTypes();
      }
    });
  }

}
