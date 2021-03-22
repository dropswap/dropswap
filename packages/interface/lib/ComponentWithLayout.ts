import type { PropsWithChildren, ReactNode } from 'react';

export type RenderLayout = (children: ReactNode, pageProps: Record<string, unknown>) => ReactNode;

export interface ComponentWithLayout {
  renderLayout?: RenderLayout;
}

export type LayoutProps<
  PageProps extends Record<string, unknown> = Record<string, unknown>
> = PropsWithChildren<{
  pageProps: PageProps;
}>;
