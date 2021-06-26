import { IGlobalState } from './state';

export const selectAllState = (state: IGlobalState) => state.currency;

export const selectCurrencies = (state: IGlobalState) => state.currency.currencies;

