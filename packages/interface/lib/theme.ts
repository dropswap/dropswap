import { useTheme as defaultUseTheme, extendTheme, ThemeOverride } from '@chakra-ui/react';
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
    darkglass: 'rgba(0, 0, 0, 0.3)',
    blackish: '#121212',
  },
  radii: {
    pill: '2rem',
  },
  lineHeights: {},
  shadows: {},
  styles: {
    global: {
      body: {
        fontFamily: 'body',
        color: 'yang',
        bg: 'yin',
        overflowX: 'hidden',
        lineHeight: 'normal',
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
    Button: {
      parts: ['button', 'icon', 'text'],
      baseStyle: {
        button: {
          transition: 'all 0.3s linear',
          transitionProperty: 'color, background',
          h: 8,
          py: 1,
          px: 3,
          borderRadius: '4',
          border: '1px',
        },
        icon: {},
        text: {},
      },
      variants: {
        default: {
          button: {
            bgColor: 'yin',
            color: 'yang',
            borderColor: 'yang',
            boxShadow: '1px 1px 0px 0px #ffffff',
          },
        },
        secondary: {
          button: {
            bgColor: 'yang',
            color: 'yin',
            borderColor: 'yin',
          },
        },
      },
      defaultProps: { variant: 'default' },
    },
  },
};

export const theme = extendTheme(override);
export const useTheme = () => defaultUseTheme<typeof theme>();
