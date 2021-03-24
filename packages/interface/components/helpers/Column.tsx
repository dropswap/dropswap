import { Stack, StackProps } from '@chakra-ui/layout';
import { forwardRef } from '@chakra-ui/system';

// via https://github.com/chakra-ui/chakra-ui/blob/main/packages/layout/src/stack.tsx#L178

/**
 * A view that arranges its children in a horizontal line.
 */
export const Row = forwardRef<StackProps, 'div'>(function Row(props, ref) {
  return <Stack ref={ref} {...props} direction="row" />;
});

/**
 * A view that arranges its children in a vertical line.
 */
export const Column = forwardRef<StackProps, 'div'>(function Column(props, ref) {
  return <Stack ref={ref} {...props} direction="column" />;
});
