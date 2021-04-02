import { chakra } from '@chakra-ui/system';
import { motion, Variants } from 'framer-motion';
import { ComponentPropsWithoutRef } from 'react';

import { useTheme } from '../../lib/theme';
import { MotionBox } from '../helpers/MotionBox';

const CALL_TO_ACTION = 'drop here to add to your swaps';
const FLAVOR_TEXTS = [
  // https://en.wikipedia.org/wiki/Stop,_drop_and_roll
  'drop swap and roll',
  // https://en.wikipedia.org/wiki/Turn_on,_tune_in,_drop_out
  'log on, drop in, swap out',
  // https://www.youtube.com/watch?v=hsm4poTWjMs
  "i'm talking swap, swap, swap",
  // https://www.youtube.com/watch?v=WEYMaSoXQUM
  'pop, drop, and swap it',
];

const SEPARATOR = ' • ';
const text =
  [
    CALL_TO_ACTION,
    FLAVOR_TEXTS.join(`${SEPARATOR}${CALL_TO_ACTION}${SEPARATOR}`),
    CALL_TO_ACTION,
  ].join(SEPARATOR) + SEPARATOR;

const makeCircleArc = (r: number, c: number) => `
M ${c}, ${c}
m -${r}, 0
a ${r}, ${r} 0 1,0 ${r * 2},0
a ${r}, ${r} 0 1,0 -${r * 2},0
`;

const EXTENT = 600;

const MotionText = motion(chakra('text'));
const MotionCircle = motion(chakra.circle);

const BlobVariants: Variants = {
  initial: { y: '-75%', rotate: -45 },
  animate: { y: '0%', rotate: 0 },
  exit: { y: '-75%', rotate: 45 },
};

const CIRCLE_MAX_SCALE = 1.02;

export function Blob(delegated: ComponentPropsWithoutRef<typeof MotionBox>) {
  const theme = useTheme();

  const center = EXTENT / 2;
  const circleRadius = EXTENT / 2 / CIRCLE_MAX_SCALE;
  const textRadius = circleRadius - 8;
  return (
    <MotionBox
      {...delegated}
      variants={BlobVariants}
      transition={{ type: 'spring', damping: 26, stiffness: 170 }}
    >
      <chakra.svg
        h="full"
        w="full"
        viewBox={`0 0 ${EXTENT} ${EXTENT}`}
        preserveAspectRatio="xMinYMin meet"
      >
        <defs>
          <linearGradient id="gradient" gradientTransform="rotate(45)">
            <stop offset="0%" stopColor={theme.colors.rainbow1 as string} />
            <stop offset="25%" stopColor={theme.colors.rainbow2 as string} />
            <stop offset="50%" stopColor={theme.colors.rainbow3 as string} />
            <stop offset="75%" stopColor={theme.colors.rainbow4 as string} />
            <stop offset="100%" stopColor={theme.colors.rainbow5 as string} />
          </linearGradient>

          <path id="circle" d={makeCircleArc(textRadius, center)} />
        </defs>
        <MotionCircle
          cx={center}
          cy={center}
          r={circleRadius}
          fill="url(#gradient)"
          //
          transformOrigin="center"
          animate={{ scale: [1, CIRCLE_MAX_SCALE, 1] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        />
        <MotionText
          fontFamily="body"
          textTransform="uppercase"
          lineHeight="none"
          letterSpacing="normal"
          fontSize="1rem"
          textAnchor="middle"
          fill="yin"
          textLength={2 * Math.PI * textRadius}
        >
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            from={`0 ${center} ${center}`}
            to={`360 ${center} ${center}`}
            dur="60s"
            repeatCount="indefinite"
          />
          <textPath xlinkHref="#circle" startOffset="50%" dominantBaseline="text-afters-edge">
            {text}
          </textPath>
        </MotionText>
      </chakra.svg>
    </MotionBox>
  );
}
