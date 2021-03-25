import { Box, BoxProps, StackProps } from '@chakra-ui/layout';

import { Row } from './RowColumn';

export function ScrollableRow({
  children,
  spacing,
  ...delegated
}: BoxProps & Pick<StackProps, 'spacing'>) {
  return (
    <Box
      {...delegated}
      overflowY="hidden"
      overflowX="auto"
      sx={{
        'scrollbar-width': 'none',
        '-ms-overflow-style': 'none',
        '&::-webkit-scrollbar': {
          display: 'none',
        },
      }}
    >
      <Row px={spacing} spacing={spacing} display="inline-flex" flexWrap="nowrap">
        {children}
      </Row>
    </Box>
  );
}
