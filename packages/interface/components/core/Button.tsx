import { Box } from '@chakra-ui/layout';
import { forwardRef, useMultiStyleConfig } from '@chakra-ui/system';
import { useHover, usePress } from '@react-aria/interactions';
import { mergeProps } from '@react-aria/utils';
import { PropsWithChildren, ReactElement } from 'react';

import { useTheme } from '../../lib/theme';
import { Row } from '../helpers/RowColumn';

const offsetForState = (hovered: boolean, pressed: boolean) =>
  pressed ? '-1px' : hovered ? '0px' : '1px';

export const Button = forwardRef<
  PropsWithChildren<{ icon?: ReactElement; secondary?: boolean }>,
  'button'
>(function Button({ icon, children, secondary = false, ...delegated }, ref) {
  const theme = useTheme();
  const styles = useMultiStyleConfig('Button', {
    variant: secondary ? 'secondary' : 'default',
  });

  const { hoverProps, isHovered } = useHover({ isDisabled: delegated.disabled });
  const { pressProps, isPressed } = usePress({
    isDisabled: delegated.disabled,
    preventFocusOnPress: true,
  });

  const offset = offsetForState(isHovered, isPressed);
  const color = theme.colors[styles.button.borderColor as string];
  styles.button.boxShadow = `${offset} ${offset} 0px 0px ${color}`;

  return (
    <Row
      ref={ref}
      as="button"
      alignItems="center"
      spacing={2}
      sx={styles.button}
      {...mergeProps(hoverProps, pressProps, delegated)}
    >
      {icon && <Box sx={styles.icon}>{icon}</Box>}
      <Box sx={styles.text}>{children}</Box>
    </Row>
  );
});
