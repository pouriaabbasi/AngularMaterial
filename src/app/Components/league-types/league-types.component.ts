import { Component, OnInit, EventEmitter } from '@angular/core';
import { TableActionModel } from 'src/app/Models/Common/table-action.model';
import { TableColumnModel } from 'src/app/Models/Common/table-column.model';
import { LeagueTypeModel } from 'src/app/Models/LeagueType/league-type.model';
import { LeagueTypeService } from 'src/app/Services/league-type.service';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-league-types',
  templateUrl: './league-types.component.html',
  styleUrls: ['./league-types.component.css']
})
export class LeagueTypesComponent implements OnInit {

  actions: TableActionModel[] = [
    { name: 'جدید', icon: 'add_circle', action: new EventEmitter() },
    { name: 'ویرایش', icon: 'create', action: new EventEmitter<LeagueTypeModel>(), mustSelect: true },
    { name: 'حذف', icon: 'remove_circle', action: new EventEmitter<LeagueTypeModel>(), mustSelect: true, mustConfirm: true }
  ];

  columns: TableColumnModel[] = [
    { caption: 'نام نوع لیگ', dataMember: 'name' },
    { caption: 'نام نوع بازی', dataMember: 'gameTypeName' },
    { caption: 'توضیحات', dataMember: 'description' },
    { caption: 'تعداد بازی بازیکنان با هم', dataMember: 'p2PPlayCount' },
    { caption: 'بازی بازیکنان پشت سر هم است؟', dataMember: 'isContinuous' }
  ];

  leagueTypes: LeagueTypeModel[] = [];

  constructor(
    private dialog: MatDialog,
    private leagueTypeService: LeagueTypeService
  ) { }

  ngOnInit() {
    this.fetchData();

    this.actions[0].action.subscribe(() => {
      this.newLeagueType();
    });

    this.actions[1].action.subscribe(leagueType => {
      this.editLeagueType(leagueType);
    });
    this.actions[2].action.subscribe(leagueType => {
      this.deleteLeagueType(leagueType);
    });
  }

  private fetchData(): void {
    this.leagueTypeService.GetLeagueTypes().subscribe(leagueTypes => {
      this.leagueTypes = leagueTypes;
      this.leagueTypes = this.leagueTypes.slice();
    });
  }

  private newLeagueType(): void {

  }

  private editLeagueType(leagueType: LeagueTypeModel): void {

  }

  private deleteLeagueType(leagueType: LeagueTypeModel): void {
    this.leagueTypeService.DeleteLeagueType(leagueType.id).subscribe(result => {
      this.fetchData();
    });
  }

}
