function App({ Component, pageProps }) {
  // const renderLayout = (Component as ComponentWithLayout).renderLayout || identity;
  return <Component {...pageProps} />;
}

export default App;
