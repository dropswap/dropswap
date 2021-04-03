import { Alert, BoxProps, Grid, GridItem } from '@chakra-ui/react';
import Observer from '@researchgate/react-intersection-observer';
import { times } from 'lodash-es';
import { useCallback } from 'react';

import { Params } from '../containers/Params';
import { useSearchResults } from '../lib/useSearchResults';

import { NiftyCard } from './card/NiftyCard';
import { SkeletonCard } from './card/SkeletonCard';

const PAGE_SIZE = 12;

export function ResultsForParams(delegated: BoxProps) {
  const { params } = Params.useContainer();
  const {
    documents,
    loading,
    error,
    loadMore,
    isHydrating,
    hasMore,
    isEmpty,
    totalCount,
  } = useSearchResults(params, PAGE_SIZE);

  const includeSkeletons = isHydrating || loading;

  const onIntersecting = useCallback(
    (intersecting) => {
      if (!intersecting) return;
      if (loading) return;
      if (!hasMore) return;
      loadMore();
    },
    [hasMore, loadMore, loading],
  );

  return (
    <Grid
      {...delegated}
      templateColumns={['repeat(2, 1fr)', 'repeat(4, 1fr)', 'repeat(6, 1fr)']}
      gridAutoRows="16rem"
      gap={1}
      p={1}
    >
      {documents.map((document) => (
        <NiftyCard key={document.id} id={document.id} />
      ))}
      {error && (
        <GridItem colSpan={[2, 4, 6]}>
          <Alert status="error">{error.message}</Alert>
        </GridItem>
      )}
      {includeSkeletons && times(PAGE_SIZE, (i) => <SkeletonCard key={i} />)}
      {/* sentiel */}
      <Observer
        onChange={({ isIntersecting }) => onIntersecting(isIntersecting)}
        disabled={!hasMore}
      >
        <div></div>
      </Observer>
    </Grid>
  );
}
