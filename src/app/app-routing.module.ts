import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TableauxComponent } from './tableaux/tableaux.component';
import { CollectionsComponent } from './collections/collections.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {path:"home", component: HomeComponent},
  {path:"tableaux", component: TableauxComponent},
  {path:"collections", component: CollectionsComponent},
  {path: '', redirectTo:"home", pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
