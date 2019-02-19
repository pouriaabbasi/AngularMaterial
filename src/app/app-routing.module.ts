import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { GameTypesComponent } from './Components/game-types/game-types.component';
import { PlayersComponent } from './Components/players/players.component';
import { LeagueTypesComponent } from './Components/league-types/league-types.component';
import { LeaguesComponent } from './Components/leagues/leagues.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'game-types',
    component: GameTypesComponent
  },
  {
    path: 'players',
    component: PlayersComponent
  },
  {
    path: 'league-types',
    component: LeagueTypesComponent
  },
  {
    path: 'leagues',
    component: LeaguesComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
