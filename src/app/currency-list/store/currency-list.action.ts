import { createAction, props } from '@ngrx/store';
import { Currency } from '../currency-list.model';

const componentName = 'currency list';
export const loadCurrencyList = createAction(
  '[' + componentName + ']' + ' Load ' + componentName
);

export const loadCurrencyListSuccess = createAction(
  '[' + componentName + ']' + ' Load ' + componentName + ' success',
  props<{ payload: Currency[] }>()
);

// TODO add some other actions for other CURD operations
