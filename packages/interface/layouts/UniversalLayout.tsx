import { AnimateSharedLayout } from 'framer-motion';

import { PickState } from '../containers/PickState';
import nest from '../lib/nest';

export const UniversalLayout = nest([PickState.Provider, AnimateSharedLayout]);
