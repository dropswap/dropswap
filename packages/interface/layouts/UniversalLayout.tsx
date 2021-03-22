import { LayoutProps } from '../lib/ComponentWithLayout';
import nest from '../lib/nest';

function NoopLayout({ children }: LayoutProps) {
  return <>{children}</>;
}

export const UniversalLayout = nest([NoopLayout]);
