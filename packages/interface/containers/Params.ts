import { SearchParams } from '@dropswap/dsdk';
import { isEmpty, pickBy } from 'lodash-es';
import { useRouter } from 'next/router';
import { useCallback, useMemo } from 'react';
import { createContainer } from 'unstated-next';

export type Params = Pick<SearchParams, 'query' | 'collection' | 'owner'>;

const filterFalsy = (obj: Record<string, any>) => pickBy(obj);
const makeSearch = (params: Record<string, any>) => {
  const cleanedParams = filterFalsy(params);
  if (isEmpty(cleanedParams)) return '';
  return `?${new URLSearchParams(cleanedParams)}`;
};

function useParams() {
  const router = useRouter();

  const params: Params = useMemo(
    () => ({
      query: (router.query.query as string) ?? null,
      collection: (router.query.collection as string) ?? null,
      owner: (router.query.owner as string) ?? null,
    }),
    [router],
  );

  const makeHref = useCallback((params: Partial<Params>) => `/${makeSearch(params)}`, []);

  const pushParams = useCallback(
    (param: Partial<Params>) =>
      router.push(makeHref({ ...params, ...param }), undefined, { shallow: true }),
    [makeHref, params, router],
  );

  const resetParams = useCallback(
    () => router.push(makeHref({}), undefined, { shallow: true }), //
    [makeHref, router],
  );

  return { params, pushParams, resetParams };
}

export const Params = createContainer(useParams);
