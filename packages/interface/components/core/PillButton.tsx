import { Box } from '@chakra-ui/layout';
import { forwardRef, useMultiStyleConfig } from '@chakra-ui/system';
import { PropsWithChildren, ReactElement } from 'react';

import { Row } from '../helpers/Column';

export const PillButton = forwardRef<
  PropsWithChildren<{ icon?: ReactElement; secondary?: boolean }>,
  'button'
>(function PillButton({ icon, children, secondary = false, ...delegated }, ref) {
  const styles = useMultiStyleConfig('PillButton', {
    variant: secondary ? 'secondary' : 'default',
  });

  return (
    <Row ref={ref} as="button" alignItems="center" spacing={2} sx={styles.button} {...delegated}>
      {icon && <Box sx={styles.icon}>{icon}</Box>}
      <Box sx={styles.text}>{children}</Box>
    </Row>
  );
});
