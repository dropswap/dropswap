import { ComponentPropsWithoutRef } from 'react';

import { MotionBox } from './helpers/MotionBox';

export function Drop(delegated: ComponentPropsWithoutRef<typeof MotionBox>) {
  return (
    <MotionBox display="inline-block" layoutId="drop" {...delegated}>
      Drop
    </MotionBox>
  );
}

export function Swap(delegated: ComponentPropsWithoutRef<typeof MotionBox>) {
  return (
    <MotionBox display="inline-block" layoutId="swap" {...delegated}>
      Swap
    </MotionBox>
  );
}
