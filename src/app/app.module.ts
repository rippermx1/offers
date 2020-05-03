import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OfferComponent } from './components/offer/offer.component';
import { OfferListComponent } from './components/offer-list/offer-list.component';

@NgModule({
  declarations: [
    AppComponent,
    OfferComponent,
    OfferListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
