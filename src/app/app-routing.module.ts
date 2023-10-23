import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TableauxComponent } from './tableaux/tableaux.component';
import { CollectionsComponent } from './collections/collections.component';
import { LoginComponent } from './login/login.component';
import { RegsiterComponent } from './regsiter/regsiter.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  {path:"home", component: HomeComponent},
  {path:"tableaux", component: TableauxComponent},
  {path:"collections", component: CollectionsComponent},
  {path:"login", component: LoginComponent},
  {path:"register", component: RegsiterComponent},
  {path:"dashboard", component: DashboardComponent},
  {path: '', redirectTo:"home", pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
