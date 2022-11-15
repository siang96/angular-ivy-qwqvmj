import { Currency } from "../currency-list.model";
import {Action, on,createReducer} from "@ngrx/store";
import * as currencyListAction from './currency-list.action';

export const currencyListFeatureKey='currencyList';
export interface State{
  currency:Map<number,Currency>;
  isLoading:boolean;
}
const initialState:State={
  currency:new Map(),
  isLoading:true
}
const currencyReducer=createReducer(
  initialState,
  on(currencyListAction.loadCurrencyListSuccess,(state,{payload})=>{
    let newCurrencyList:Map<number,Currency>=new Map();
    for(let [index,value] of payload.entries()){
      newCurrencyList.set(index+1,value)
    }
    return ({
      currency:newCurrencyList,
      isLoading:false
    })
  }) 
)

export function reducer(state:State|undefined,action:Action){
  return currencyReducer(state,action)
}