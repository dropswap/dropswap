import useSWR from 'swr';

const fetcher = (id: string) =>
  fetch(`https://use.nifti.es/api/${id}`).then((response) => response.json());

export function useNifty(id: string, skip = false) {
  const { data, error, isValidating: loading } = useSWR(id, fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    revalidateOnMount: true,
    shouldRetryOnError: false,
    isPaused: () => skip,
  });

  return { data, error, loading };
}
