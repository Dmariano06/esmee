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
import { TableauxInterfaceComponent } from './tableaux-interface/tableaux-interface.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TestComponent,
    CarouselComponent,
    PresentationComponent,
    TableauxComponent,
    TableauxInterfaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }