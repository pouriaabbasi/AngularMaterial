import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { MatTableDataSource, MatSnackBar, MatDialog } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { BehaviorSubject } from 'rxjs';
import { TableActionModel } from 'src/app/Models/Common/table-action.model';
import { TableColumnModel } from 'src/app/Models/Common/table-column.model';
import { NotificationService } from 'src/app/Services/Common/notification.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, OnChanges {

  @Input() title: string;
  @Input() actions: TableActionModel[];
  @Input() columns: TableColumnModel[];
  @Input()
  set data(value: any) {
    this._data.next(value);
  }
  get data(): any {
    return this._data.getValue();
  }

  // tslint:disable-next-line:variable-name
  private _data = new BehaviorSubject<any>([]);
  // tslint:disable-next-line:variable-name
  private _displayedColumns: string[];
  get displayedColumns(): string[] {
    if (this._displayedColumns) {
      return this._displayedColumns;
    }
    this._displayedColumns = [];
    this._displayedColumns.push('select');
    this.columns.forEach(column => {
      this._displayedColumns.push(column.dataMember);
    });
  }
  dataSource = new MatTableDataSource(this.data);
  selection = new SelectionModel<any>(false, []);

  ngOnChanges(changes: SimpleChanges) {
    if (changes.data) {
      this.dataSource = new MatTableDataSource(this.data);
    }
  }

  constructor(
    private notificationService: NotificationService
  ) { }

  ngOnInit() {
    this._data.subscribe(x => {
      this.dataSource = new MatTableDataSource(this.data);
    });
  }

  private getValue(element: any, dataMember: string) {
    return element[dataMember];
  }

  private doAction(actionName: string) {
    const headerAction = this.actions.find(x => x.name === actionName);
    if (!headerAction || !headerAction.action) {
      return;
    }

    if (headerAction.mustSelect) {
      if (!this.selection.selected.length) {
        this.notificationService.ShowInfo(
          "ابتدا یک ردیف از جدول را انتخاب نمایید");
        return;
      }
    }

    // if (headerAction.mustConfirm) {
    //   this.dialog.open(ConfirmComponent, {
    //     disableClose: true,
    //   }).afterClosed().subscribe(result => {
    //     if (result)
    //       headerAction.action.next(headerAction.mustSelect ? this.selection.selected[0] : null);
    //   })
    // }
    // else
    headerAction.action.next(headerAction.mustSelect ? this.selection.selected[0] : null);
  }

  private applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
