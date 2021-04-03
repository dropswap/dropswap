import { BoxProps } from '@chakra-ui/layout';
import { mergeProps } from '@react-aria/utils';
import { cloneElement, ReactElement } from 'react';

import { ObjectContain } from '../helpers/ObjectContain';
import { Column } from '../helpers/RowColumn';

export function Card({
  children,
  primary,
  secondary,
  tertiary,
  ...delegated
}: BoxProps & {
  children: ReactElement;
  primary: ReactElement;
  secondary: ReactElement;
  tertiary: ReactElement;
}) {
  return (
    <Column {...delegated} p="3" spacing="3" overflow="hidden">
      <ObjectContain ratio={1} flex="1">
        {children}
      </ObjectContain>
      <Column spacing="1">
        {cloneElement(tertiary, mergeProps(tertiary.props, { h: 4, lineHeight: 'none' }))}
        {cloneElement(primary, mergeProps(primary.props, { h: 4, lineHeight: 'none' }))}
        {cloneElement(secondary, mergeProps(secondary.props, { h: 4, lineHeight: 'none' }))}
      </Column>
    </Column>
  );
}
