import { AnimateSharedLayout } from 'framer-motion';

import { Params } from '../containers/Params';
import { PickState } from '../containers/PickState';
import nest from '../lib/nest';

export const UniversalLayout = nest([PickState.Provider, Params.Provider, AnimateSharedLayout]);
