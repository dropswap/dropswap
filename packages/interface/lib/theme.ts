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
    yin: '#000000',
    yang: '#FFFFFF',
    blackish: '#121212',
    grey: '#F6F6F6',
    smudge: '#E8E9F1',
    concrete: '#9C9CA5',
    // rainbow colors
    // TODO: why can't i put the rainbow gradient in the color map?
    rainbow1: '#F3FBFE',
    rainbow2: '#D2F3FF',
    rainbow3: '#E1EAFF',
    rainbow4: '#D6F7FF',
    rainbow5: '#F5FAFB',
  },
  radii: {
    pill: '0.75rem',
  },
  styles: {
    global: {
      html: {
        // TODO: height reset
      },
      body: {
        fontFamily: 'body',
        color: 'blackish',
        bg: 'grey',
        overflowX: 'hidden',
        lineHeight: 'normal',
      },
      '#__next': {
        // TODO: height reset
      },
    },
  },
  components: {
    PillButton: {
      parts: ['button', 'icon', 'text'],
      baseStyle: {
        button: {
          py: 1,
          px: 3,
          borderRadius: 'pill',
        },
        icon: {},
        text: {},
      },
      variants: {
        default: {
          button: {
            bgGradient: 'linear(to-br, rainbow1, rainbow2, rainbow3, rainbow4, rainbow5)',
          },
        },
        secondary: {
          button: {
            bgColor: 'yang',
          },
        },
      },
      defaultProps: { variant: 'default' },
    },
  },
};

export const theme = extendTheme(override);
