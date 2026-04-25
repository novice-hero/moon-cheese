import { http } from '@/utils/http';
import { queryOptions } from '@tanstack/react-query';
import type { ExchangeRateResponse } from './types';

export const exchangeRateOptions = () =>
  queryOptions({
    queryKey: ['exchange-rate'],
    queryFn: () => http.get<ExchangeRateResponse>('/api/exchange-rate'),
    select: res => {
      return res.exchangeRate;
    },
  });
