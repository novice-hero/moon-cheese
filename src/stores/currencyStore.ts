import { create } from 'zustand';
import type { CurrencyType } from '@/features/currency/queries/types';

interface CurrencyState {
  currency: CurrencyType;
  setCurrency: (currency: CurrencyType) => void;
}

export const useCurrencyStore = create<CurrencyState>(set => ({
  currency: 'USD',
  setCurrency: currency => set({ currency }),
}));
