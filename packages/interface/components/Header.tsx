import { Box, BoxProps, Center, Heading } from '@chakra-ui/layout';
import useToggle from '@rooks/use-toggle';

import { PickState } from '../containers/PickState';
import MenuIcon from '../icons/menu.svg';
import SwapIcon from '../icons/swap.svg';

import { Button } from './core/Button';
import { FlatIconButton } from './core/FlatIconButton';
import { MotionBox } from './helpers/MotionBox';

export function Header(delegated: BoxProps) {
  const { onDrag } = PickState.useContainer();
  return (
    <Box as="header" {...delegated} bg="darkglass" sx={{ backdropFilter: 'blur(2rem)' }}>
      <Box display="flex" flexDirection="row">
        <FlatIconButton label="Open menu">
          <MenuIcon />
        </FlatIconButton>
        <Box flex="1" display="flex" flexDirection="column" justifyContent="center">
          <Heading as="h1" fontSize="2xl">
            <MotionBox as="span" layoutId="drop">
              Drop
            </MotionBox>
            <Box as="span">&nbsp;</Box>
            <MotionBox as="span" layoutId="swap">
              Swap
            </MotionBox>
          </Heading>
        </Box>
        <Center pr="3">
          <Button prefix={<SwapIcon />} onClick={onDrag}>
            Swap
          </Button>
        </Center>
      </Box>
    </Box>
  );
}
