import { Box, BoxProps, Center, Heading } from '@chakra-ui/layout';
import useToggle from '@rooks/use-toggle';

import MenuIcon from '../icons/menu.svg';
import SwapIcon from '../icons/swap.svg';

import { Button } from './core/Button';
import { FlatIconButton } from './core/FlatIconButton';

export function Header(delegated: BoxProps) {
  const [secondary, toggle] = useToggle(false);
  return (
    <Box as="header" {...delegated} bg="darkglass" sx={{ backdropFilter: 'blur(2rem)' }}>
      <Box display="flex" flexDirection="row">
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
          <Button icon={<SwapIcon />} onClick={toggle} secondary={secondary}>
            Swap
          </Button>
        </Center>
      </Box>
    </Box>
  );
}
