import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TestComponent } from './test/test.component';
import { CarouselComponent } from './carousel/carousel.component';
import { PresentationComponent } from './presentation/presentation.component';
import { TableauxComponent } from './tableaux/tableaux.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CollectionsComponent } from './collections/collections.component';
import { LoginComponent } from './login/login.component';
import { RegsiterComponent } from './regsiter/regsiter.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClientsComponent } from './clients/clients.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TestComponent,
    CarouselComponent,
    PresentationComponent,
    TableauxComponent,
    CollectionsComponent,
    LoginComponent,
    RegsiterComponent,
    DashboardComponent,
    ClientsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule, 
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
