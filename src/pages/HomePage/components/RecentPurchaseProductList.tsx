import { exchangeRateOptions } from '@/features/currency/queries/options';
import { exchangeCurrency, formatCurrency } from '@/features/currency/utils';
import { useCurrencyStore } from '@/stores/currencyStore';
import { Text } from '@/ui-lib';
import { useSuspenseQuery } from '@tanstack/react-query';
import { Flex, styled } from 'styled-system/jsx';
import { recentProductListOptions } from '../queries/queryOptions';

function RecentPurchaseProductList() {
  const { data: recentProductList } = useSuspenseQuery(recentProductListOptions());
  const { data: exchangeRate } = useSuspenseQuery(exchangeRateOptions());
  const currency = useCurrencyStore(state => state.currency);

  return (
    <Flex
      css={{
        bg: 'background.01_white',
        px: 5,
        py: 4,
        gap: 4,
        rounded: '2xl',
      }}
      direction={'column'}
    >
      {recentProductList?.map(product => (
        <Flex
          css={{
            gap: 4,
          }}
          key={product.id}
        >
          <styled.img
            src={product.thumbnail}
            alt="item"
            css={{
              w: '60px',
              h: '60px',
              objectFit: 'cover',
              rounded: 'xl',
            }}
          />
          <Flex flexDir="column" gap={1}>
            <Text variant="B2_Medium">{product.name}</Text>
            <Text variant="H1_Bold">
              {formatCurrency(currency, exchangeCurrency(currency, exchangeRate, product.price))}
            </Text>
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
}

export default RecentPurchaseProductList;
