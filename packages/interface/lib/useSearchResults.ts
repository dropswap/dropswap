import { search, SearchResponse } from '@dropswap/dsdk';
import { flatMap } from 'lodash-es';
import { useCallback, useMemo } from 'react';
import { useSWRInfinite } from 'swr';

import { Params } from '../containers/Params';

export function useSearchResults(params: Params, pageSize = 12) {
  const fetcher = useCallback(
    (params: Params, page: number) => search({ ...params, page, size: pageSize }),
    [pageSize],
  );

  const getKey = useCallback(
    (page: number, prev: SearchResponse) => {
      // if we have a previous but there were no results, then we've reached the end
      if (prev && prev.documents.length === 0) return null;
      return [params, page];
    },
    [params],
  );

  const { data, error, isValidating: loading, size, setSize } = useSWRInfinite<SearchResponse>(
    getKey,
    fetcher,
    {
      revalidateOnFocus: false,
    },
  );

  const documents = useMemo(() => flatMap((data ?? []).map((response) => response.documents)), [
    data,
  ]);

  const totalCount = data?.[0]?.totalCount ?? 0;
  const isEmpty = totalCount === 0;
  const hasMore = documents.length < totalCount;
  const loadMore = useCallback(() => setSize(size + 1), [setSize, size]);

  // via https://swr.vercel.app/advanced/performance#dependency-collection
  const isHydrating = data === undefined && error === undefined && loading === false;

  return { documents, loading, error, totalCount, isEmpty, hasMore, loadMore, isHydrating };
}
