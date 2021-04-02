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
  PropsWithChildren<{
    prefix?: ReactElement;
    postfix?: ReactElement;
    secondary?: boolean;
    light?: boolean;
  }>,
  'button'
>(function Button(
  { prefix, postfix, children, secondary = false, light = false, ...delegated },
  ref,
) {
  const theme = useTheme();
  const styles = useMultiStyleConfig('Button', {
    size: secondary ? 'secondary' : 'primary',
    variant: light ? 'light' : 'dark',
  });

  const { hoverProps, isHovered } = useHover({ isDisabled: delegated.disabled });
  const { pressProps, isPressed } = usePress({
    isDisabled: delegated.disabled,
    preventFocusOnPress: true,
  });

  const offset = offsetForState(isHovered, isPressed);
  const color = theme.colors[styles.button.borderColor as string];
  styles.button.boxShadow = secondary ? 'none' : `${offset} ${offset} 0px 0px ${color}`;

  return (
    <Row
      ref={ref}
      as="button"
      alignItems="center"
      spacing={2}
      sx={styles.button}
      {...mergeProps(hoverProps, pressProps, delegated)}
    >
      {prefix && <Box sx={styles.icon}>{prefix}</Box>}
      <Box sx={styles.text}>{children}</Box>
      {postfix && <Box sx={styles.icon}>{postfix}</Box>}
    </Row>
  );
});
