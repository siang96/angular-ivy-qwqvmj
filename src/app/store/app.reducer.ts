import { ActionReducerMap } from '@ngrx/store';
import * as fromCurrenyList from '../currency-list/store/currency-list.reducer';
export interface AppState {
  currencyList: fromCurrenyList.State;
}

export const appReducer: ActionReducerMap<AppState> = {
  currencyList: fromCurrenyList.reducer,
};
