import { ChakraProvider } from '@chakra-ui/react';
import { Global } from '@emotion/react';
import { identity } from 'lodash-es';

import { ExternalMeta } from '../components/meta/ExternalMeta';
import { ManifestMeta } from '../components/meta/ManifestMeta';
import { SeoMeta } from '../components/meta/SeoMeta';
import { ComponentWithLayout } from '../lib/ComponentWithLayout';
import { theme } from '../lib/theme';

// TODO: refactor this to somewhere else
const fonts = `
  @font-face {
    font-family: 'DR RAYMOND';
    font-weight: 400;
    font-style: normal;
    font-display: swap;
    src: url(fonts/DR-RAYMOND-Display.woff) format('woff'),
      url(fonts/DR-RAYMOND-Display.otf) format('opentype');
  }
`;

function App({ Component, pageProps }) {
  // see: https://adamwathan.me/2019/10/17/persistent-layout-patterns-in-nextjs/
  const renderLayout = (Component as ComponentWithLayout).renderLayout ?? identity;

  return (
    <>
      <ExternalMeta />
      <ManifestMeta />
      <SeoMeta />
      <Global styles={fonts} />

      <ChakraProvider theme={theme}>
        {renderLayout(<Component {...pageProps} />, pageProps)}
      </ChakraProvider>
    </>
  );
}

export default App;
