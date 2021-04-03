import { Box, BoxProps } from '@chakra-ui/layout';
import { mergeProps } from '@react-aria/utils';
import useSize from '@react-hook/size';
import { cloneElement, ReactElement, useRef } from 'react';

export function ObjectContain({
  ratio,
  children,
  ...delegated
}: BoxProps & { ratio: number; children: ReactElement }) {
  const ref = useRef<HTMLDivElement>(null);
  const [maxWidth, maxHeight] = useSize(ref);

  if (!ratio) return <>{children}</>;

  const width = maxHeight / ratio;
  const height = maxWidth * ratio;

  const constrainHeight = height > maxHeight;
  const constrainWidth = width > maxWidth;

  const fittedHeight = constrainHeight ? maxHeight : height;
  const fittedWidth = constrainWidth ? maxWidth : width;

  return (
    <Box ref={ref} {...delegated}>
      {cloneElement(
        children,
        mergeProps(children.props, {
          width: fittedWidth || '100%',
          height: fittedHeight || '100%',
          m: 'auto',
        }),
      )}
    </Box>
  );
}
