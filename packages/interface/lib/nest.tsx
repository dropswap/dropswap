import type { JSXElementConstructor, PropsWithChildren } from 'react';

export default function nest(components: JSXElementConstructor<PropsWithChildren<any>>[]) {
  return ({ children, ...extra }: PropsWithChildren<any>) =>
    components.reduceRight((child, Parent) => {
      return <Parent {...extra}>{child}</Parent>;
    }, children);
}
