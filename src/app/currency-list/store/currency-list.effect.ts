import { Injectable } from "@angular/core";
import { Actions,createEffect } from "@ngrx/effects";
import { CurrencyListService } from "../currency-list.service";

@Injectable()
export class CurrencyEffect{
  constructor(
    private action:Actions,
    private currencyListService:CurrencyListService
  ){    
  }
  loadCurrencyList=createEffect(()=>this.action.pipe(

  ))
}