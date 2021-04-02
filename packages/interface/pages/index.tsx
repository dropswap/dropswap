import { Box, Heading, Text } from '@chakra-ui/layout';
import { search, SearchResponse } from '@dropswap/dsdk';
import { useEffect, useState } from 'react';

import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Column } from '../components/helpers/RowColumn';
import { ScrollableRow } from '../components/helpers/ScrollableRow';
import { Skeleton } from '../components/helpers/Skeleton';
import { UniversalLayout } from '../layouts/UniversalLayout';
import { ComponentWithLayout } from '../lib/ComponentWithLayout';

/* maximum width, minus any vertical scrollbar */
/* https://stackoverflow.com/questions/33606565/is-it-possible-to-calculate-the-viewport-width-vw-without-scrollbar */
const WIDTH_WITHOUT_SCROLLBAR = 'calc(100vw - (100vw - 100%))';

function Home() {
  const [data, setData] = useState<SearchResponse>(null);

  useEffect(() => {
    search({}).then(setData);
  }, []);

  return (
    <>
      <Header h="14" position="fixed" top="0" left="0" right="0" zIndex="sticky" />
      <Box as="main" w={WIDTH_WITHOUT_SCROLLBAR} overflowY="auto" py="14">
        <Column pt={4} spacing={4}>
          <Heading as="h2" px={4} fontSize="2xl" fontWeight="regular">
            <Box as="span" textDecoration="underline">
              All
            </Box>
            <Box as="span">&nbsp;</Box>
            <Box as="span">Assets</Box>
            <Box as="span">&nbsp;</Box>
            <Box as="span" textDecoration="underline">
              by Popularity
            </Box>
          </Heading>
          <ScrollableRow spacing={4}>
            <Skeleton h={8} w={24} />
            <Skeleton h={8} w={24} />
            <Skeleton h={8} w={24} />
            <Skeleton h={8} w={24} />
            <Skeleton h={8} w={24} />
            <Skeleton h={8} w={24} />
          </ScrollableRow>
        </Column>
      </Box>
      <Footer h="14" position="fixed" bottom="0" left="0" right="0" zIndex="sticky" />
    </>
  );
}

// eslint-disable-next-line react/display-name
(Home as ComponentWithLayout).renderLayout = (children, pageProps) => {
  return <UniversalLayout pageProps={pageProps}>{children}</UniversalLayout>;
};

export default Home;
