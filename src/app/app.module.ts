import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CurrencyListComponent } from './currency-list/currency-list.component';
import { StoreModule } from '@ngrx/store';
import { appReducer} from './store/app.reducer'
import { EffectsModule } from '@ngrx/effects';
import { CurrencyEffect } from './currency-list/store/currency-list.effect';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    BrowserModule, 
    FormsModule, 
    CurrencyListComponent,
    HttpClientModule,
     StoreModule.forRoot(appReducer),
     EffectsModule.forRoot([CurrencyEffect])
    ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
