import { extendTheme, ThemeOverride } from '@chakra-ui/react';

const override: ThemeOverride = {
  fonts: {
    // body: "'DM Sans', sans-serif",
    // heading: "'DM Sans', sans-serif",
    // mono: "'DM Mono', monospace",
  },
  fontSizes: {},
  fontWeights: {
    normal: 400,
    bold: 700,
  },
  colors: {
    // transparent: 'rgba(1, 1, 1, 0)',
    gesso: '#FFFFFF',
    drywall: '#F8F8F8',
    smudge: '#E8E9F1',
    concrete: '#9C9CA5',
    bruise: '#010024',
    blackout: '#000000',
  },
  styles: {
    global: {
      html: {
        // TODO: height reset
      },
      body: {
        fontFamily: 'body',
        color: 'bruise',
        bg: 'drywall',
        overflowX: 'hidden',
        lineHeight: 'normal',
      },
      '#__next': {
        // TODO: height reset
      },
    },
  },
  components: {},
};

export const theme = extendTheme(override);
