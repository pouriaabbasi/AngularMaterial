import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueTypesComponent } from './league-types.component';

describe('LeagueTypesComponent', () => {
  let component: LeagueTypesComponent;
  let fixture: ComponentFixture<LeagueTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeagueTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeagueTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
