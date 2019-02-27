import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { GameTypeModel } from 'src/app/Models/GameType/game-type.model';
import { GameTypeService } from 'src/app/Services/game-type.service';
import { GameTypeAddModel } from 'src/app/Models/GameType/game-type-add.model';
import { GameTypeEditModel } from 'src/app/Models/GameType/game-type-edit.model';

@Component({
  selector: 'app-game-type-modal',
  templateUrl: './game-type-modal.component.html',
  styleUrls: ['./game-type-modal.component.css']
})
export class GameTypeModalComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<GameTypeModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: GameTypeModel,
    private gameTypeService: GameTypeService
  ) { }

  ngOnInit() {
  }

  public submitData(): void {
    if (!this.data.id) {
      const addModel: GameTypeAddModel = {
        name: this.data.name,
        description: this.data.description
      };
      this.gameTypeService.AddGameType(addModel).subscribe(gameType => {
        this.dialogRef.close(gameType);
      });
    } else {
      const editModel: GameTypeEditModel = {
        id: this.data.id,
        name: this.data.name,
        description: this.data.description
      };
      this.gameTypeService.EditGameType(editModel).subscribe(gameType => {
        this.dialogRef.close(gameType);
      });
    }
  }

  public cancel(): void {
    this.dialogRef.close(null);
  }

}
