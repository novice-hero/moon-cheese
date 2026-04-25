import type { CurrencyType, ExchangeRate } from '../queries/types';

export function exchangeCurrency(currency: CurrencyType, exchangeRate: ExchangeRate, targetPrice: number): number {
  switch (currency) {
    case 'KRW':
      return Math.round(targetPrice * exchangeRate.KRW);
    case 'USD':
      return targetPrice;
  }
}

export function formatCurrency(currency: CurrencyType, price: number): string {
  switch (currency) {
    case 'KRW':
      return price.toLocaleString('ko-KR', { style: 'currency', currency });
    case 'USD':
      return price.toLocaleString('en-US', { style: 'currency', currency });
  }
}
