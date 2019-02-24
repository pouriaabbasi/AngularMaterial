import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ConfirmDialogComponent } from 'src/app/Components/Common/confirm-dialog/confirm-dialog.component';
import { Observable } from 'rxjs';
import { ConfirmDialogResultModel } from 'src/app/Models/Common/confirm-dialog-result.model';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(
    private dialog: MatDialog
  ) { }

  public OpenConfirmDialog(): Observable<ConfirmDialogResultModel> {
    return this.dialog.open(ConfirmDialogComponent, {
      disableClose: true,
      data: {
        message: 'آیا از حذف اطمینان دارید؟'
      }
    }).afterClosed();
  }
}
