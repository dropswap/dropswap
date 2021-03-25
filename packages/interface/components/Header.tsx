import { Box, BoxProps, Center, Heading } from '@chakra-ui/layout';

import MenuIcon from '../icons/menu.svg';
import SwapIcon from '../icons/swap.svg';

import { FlatIconButton } from './core/FlatIconButton';
import { PillButton } from './core/PillButton';
import { Container } from './layout/Container';

export function Header(delegated: BoxProps) {
  return (
    <Box as="header" {...delegated} bg="darkglass" sx={{ backdropFilter: 'blur(2rem)' }}>
      <Container display="flex" flexDirection="row" wide>
        <FlatIconButton label="Open menu">
          <MenuIcon />
        </FlatIconButton>
        <Box flex="1" display="flex" flexDirection="column" justifyContent="center">
          <Heading as="h1" fontSize="2xl">
            <Box as="span">Drop</Box>
            <Box as="span">&nbsp;</Box>
            <Box as="span">Swap</Box>
          </Heading>
        </Box>
        <Center pr="3">
          <PillButton icon={<SwapIcon />}>Swap</PillButton>
        </Center>
      </Container>
    </Box>
  );
}
