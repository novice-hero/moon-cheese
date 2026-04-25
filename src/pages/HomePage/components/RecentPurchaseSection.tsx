import ErrorSection from '@/components/ErrorSection';
import LoadingSection from '@/components/LoadingSection';
import { Spacing, Text } from '@/ui-lib';
import { QueryErrorResetBoundary } from '@tanstack/react-query';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { styled } from 'styled-system/jsx';
import RecentPurchaseProductList from './RecentPurchaseProductList';

function RecentPurchaseSection() {
  return (
    <styled.section css={{ px: 5, pt: 4, pb: 8 }}>
      <Text variant="H1_Bold">최근 구매한 상품</Text>

      <Spacing size={4} />

      <QueryErrorResetBoundary>
        {({ reset }) => (
          <ErrorBoundary
            onReset={reset}
            fallbackRender={({ resetErrorBoundary }) => <ErrorSection onRetry={resetErrorBoundary} />}
          >
            <Suspense fallback={<LoadingSection />}>
              <RecentPurchaseProductList />
            </Suspense>
          </ErrorBoundary>
        )}
      </QueryErrorResetBoundary>
    </styled.section>
  );
}

export default RecentPurchaseSection;
