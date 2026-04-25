export type CurrencyType = 'USD' | 'KRW';

export type ExchangeRate = {
  KRW: number;
  USD: number;
};

export interface ExchangeRateResponse {
  exchangeRate: ExchangeRate;
}
