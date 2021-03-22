import { identity } from 'lodash-es';

import { ComponentWithLayout } from '../lib/ComponentWithLayout';

function App({ Component, pageProps }) {
  // see: https://adamwathan.me/2019/10/17/persistent-layout-patterns-in-nextjs/
  const renderLayout = (Component as ComponentWithLayout).renderLayout ?? identity;

  return (
    <>
      {/* TODO: site manifest tags */}
      {/* TODO: external fonts */}
      {/* TODO: og meta tags */}
      {renderLayout(<Component {...pageProps} />, pageProps)}
    </>
  );
}

export default App;
