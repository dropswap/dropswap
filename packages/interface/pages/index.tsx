import { search, SearchResponse } from '@dropswap/dsdk';
import { useEffect, useState } from 'react';

import { UniversalLayout } from '../layouts/UniversalLayout';
import { ComponentWithLayout } from '../lib/ComponentWithLayout';

function Home() {
  const [data, setData] = useState<SearchResponse>(null);

  useEffect(() => {
    search({}).then(setData);
  }, []);

  return (
    <div>
      <code>{JSON.stringify(data)}</code>
    </div>
  );
}

// eslint-disable-next-line react/display-name
(Home as ComponentWithLayout).renderLayout = (children, pageProps) => {
  return <UniversalLayout pageProps={pageProps}>{children}</UniversalLayout>;
};

export default Home;
