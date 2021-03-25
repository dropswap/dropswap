import { Box } from '@chakra-ui/layout';
import { forwardRef, useStyleConfig } from '@chakra-ui/system';
import { PropsWithChildren } from 'react';

export const FlatIconButton = forwardRef<PropsWithChildren<{ label: string }>, 'div'>(
  function FlatIconButton({ label, children, ...delegated }, ref) {
    const styles = useStyleConfig('FlatIconButton');

    return (
      <Box ref={ref} as="button" sx={styles} {...delegated} aria-label={label}>
        {children}
      </Box>
    );
  },
);
