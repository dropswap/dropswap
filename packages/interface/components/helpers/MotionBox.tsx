import { Box } from '@chakra-ui/layout';
import { HTMLChakraProps } from '@chakra-ui/system';
import { HTMLMotionProps, motion } from 'framer-motion';

type Merge<P, T> = Omit<P, keyof T> & T;
type MotionBoxProps = Merge<HTMLChakraProps<'div'>, HTMLMotionProps<'div'>>;

export const MotionBox: React.FC<MotionBoxProps> = motion(Box);
