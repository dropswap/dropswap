import { Box, BoxProps } from '@chakra-ui/layout';

export function Container({ wide = false, ...delegated }: BoxProps & { wide?: boolean }) {
  return <Box mx="auto" w="full" maxW={wide ? '80ch' : '60ch'} {...delegated} />;
}
