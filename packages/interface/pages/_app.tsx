import { ChakraProvider } from '@chakra-ui/react';
import { identity } from 'lodash-es';

import { ExternalMeta } from '../components/meta/ExternalMeta';
import { ManifestMeta } from '../components/meta/ManifestMeta';
import { SeoMeta } from '../components/meta/SeoMeta';
import { ComponentWithLayout } from '../lib/ComponentWithLayout';
import { theme } from '../lib/theme';

function App({ Component, pageProps }) {
  // see: https://adamwathan.me/2019/10/17/persistent-layout-patterns-in-nextjs/
  const renderLayout = (Component as ComponentWithLayout).renderLayout ?? identity;

  return (
    <>
      <ExternalMeta />
      <ManifestMeta />
      <SeoMeta />

      <ChakraProvider theme={theme}>
        {renderLayout(<Component {...pageProps} />, pageProps)}
      </ChakraProvider>
    </>
  );
}

export default App;
