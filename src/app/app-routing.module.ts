import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExtraHoursComponent } from './components/extra-hours/extra-hours.component';
import { ListUsersComponent } from './components/list-users/list-users.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full'
  }, {
    path: 'index',
    component: ExtraHoursComponent
  },{
    path: 'list',
    component: ListUsersComponent
  }]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
