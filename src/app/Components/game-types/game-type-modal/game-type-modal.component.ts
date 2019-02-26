import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { GameTypeModel } from 'src/app/Models/GameType/game-type.model';
import { GameTypeService } from 'src/app/Services/game-type.service';
import { GameTypeAddModel } from 'src/app/Models/GameType/game-type-add.model';

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
    var addGameTypeModel: GameTypeAddModel = {
      name: this.data.name,
      description: this.data.description
    };
    this.gameTypeService.AddGameType(addGameTypeModel).subscribe(gameType => {
      this.dialogRef.close(gameType);
    })
  }

  public cancel(): void {
    this.dialogRef.close(null);
  }

}
