import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ConfirmDialogModel } from 'src/app/Models/Common/confirm-dialog.model';
import { ResultTypeKind } from 'src/app/Models/Common/result-type.kind';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ConfirmDialogModel
  ) { }

  ngOnInit() {
  }

  public Yes() {
    this.dialogRef.close({ result: ResultTypeKind.Yes });
  }

  public No() {
    this.dialogRef.close({ result: ResultTypeKind.No });
  }

}
