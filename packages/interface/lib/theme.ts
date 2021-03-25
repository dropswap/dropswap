import { extendTheme, ThemeOverride } from '@chakra-ui/react';
import defaultTheme from '@chakra-ui/theme';

const override: ThemeOverride = {
  fonts: {
    body: `'Titillium Web', ${defaultTheme.fonts.body}`,
    heading: `'DR RAYMOND', ${defaultTheme.fonts.heading}`,
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
    darkglass: 'rgba(0,0,0,0.3)',
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
    pill: '2rem',
  },
  lineHeights: {},
  styles: {
    global: {
      html: {
        // TODO: height reset
      },
      body: {
        fontFamily: 'body',
        color: 'yang',
        bg: 'yin',
        overflowX: 'hidden',
        lineHeight: 'normal',
      },
      '#__next': {
        // TODO: height reset
      },
    },
  },
  components: {
    Skeleton: {
      baseStyle: {
        borderRadius: 4,
        backgroundSize: '400% 100%',
        bgGradient: 'linear(to-l, #fafafa, #eaeaea, #eaeaea, #fafafa)',
      },
    },
    FlatIconButton: {
      baseStyle: {
        h: '14',
        w: '14',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
    },
    PillButton: {
      parts: ['button', 'icon', 'text'],
      baseStyle: {
        button: {
          h: 8,
          py: 1,
          px: 3,
          borderRadius: 'pill',
          color: 'yin',
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
