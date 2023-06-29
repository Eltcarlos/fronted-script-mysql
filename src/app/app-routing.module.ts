import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistorySectionComponent } from './history-section/history-section.component';
import { TopCustomersComponent } from './top-customers/top-customers.component';
import { HistoryClientComponent } from './history-client/history-client.component';

const routes: Routes = [
  {path: '', redirectTo: 'history-section', pathMatch: 'full'},
  {path: 'history-section', component: HistorySectionComponent},
 {path: 'history-client', component: HistoryClientComponent},
  {path: 'top-customers', component: TopCustomersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
