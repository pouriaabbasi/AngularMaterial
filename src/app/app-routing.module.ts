import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { GameTypesComponent } from './Pages/game-types/game-types.component';
import { PlayersComponent } from './Pages/players/players.component';
import { LeagueTypesComponent } from './Pages/league-types/league-types.component';
import { LeaguesComponent } from './Pages/leagues/leagues.component';

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
