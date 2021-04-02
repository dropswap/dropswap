import { AspectRatio, Box, Heading, HStack } from '@chakra-ui/layout';
import { Portal } from '@chakra-ui/portal';
import { AnimatePresence, Variants } from 'framer-motion';

import { PickState } from '../containers/PickState';
import GoIcon from '../icons/go.svg';
import SwapIcon from '../icons/swap.svg';

import { Drop, Swap } from './DropAndSwap';
import { Blob } from './blob/Blob';
import { Button } from './core/Button';
import { MotionBox } from './helpers/MotionBox';

const FooterVariants: Variants = {
  initial: { translateY: '100%' },
  animate: { translateY: '0%' },
  exit: { translateY: '100%' },
};

const CTAVariants: Variants = {
  initial: { translateY: '-100%', opacity: 0 },
  animate: { translateY: '0%', opacity: 1 },
  exit: { translateY: '-100%', opacity: 0 },
};

const SwapButtonVariants: Variants = {
  initial: { translateX: 'calc(100% + 1rem)' },
  animate: { translateX: 'calc(0% + 0rem)', transition: { delay: 0.5 } },
  exit: { translateX: 'calc(100% + 1rem)' },
};

export function PickLayer() {
  const { show, onCancel, onConfirm } = PickState.useContainer();

  return (
    <Portal>
      <AnimatePresence>
        {show && (
          <MotionBox
            position="fixed"
            top="0"
            left="0"
            right="0"
            bottom="0"
            zIndex="modal"
            //
            initial="initial"
            animate="animate"
            exit="exit"
            //
            display="flex"
            flexDirection="column"
          >
            <AspectRatio
              ratio={1}
              position="absolute"
              left="-20%"
              right="-20%"
              top="-35%"
              maxW="lg"
              mx="auto"
            >
              <Blob />
            </AspectRatio>
            <HStack
              h="14"
              position="fixed"
              top="0"
              left="0"
              right="0"
              px="3"
              justifyContent="space-between"
            >
              <Heading as="h1" fontSize="2xl" color="yin">
                <Drop />
                <MotionBox
                  display="inline-block"
                  variants={CTAVariants}
                  transition={{ ease: 'easeOut' }}
                >
                  &nbsp;it to&nbsp;
                </MotionBox>
                <Swap />
                <MotionBox
                  display="inline-block"
                  variants={CTAVariants}
                  transition={{ ease: 'easeOut' }}
                >
                  &nbsp;it
                </MotionBox>
              </Heading>
              <MotionBox variants={SwapButtonVariants}>
                <Button prefix={<SwapIcon />} light>
                  1
                </Button>
              </MotionBox>
            </HStack>
            <MotionBox
              position="absolute"
              left="0"
              right="0"
              bottom="0"
              h="14"
              bg="yin"
              px="3"
              //
              variants={FooterVariants}
              //
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
            >
              <Box>{/* whatever that market button is */}</Box>
              <HStack>
                <Button onClick={onCancel} secondary>
                  Cancel
                </Button>
                <Button postfix={<GoIcon />} onClick={onConfirm}>
                  Continue
                </Button>
              </HStack>
            </MotionBox>
          </MotionBox>
        )}
      </AnimatePresence>
    </Portal>
  );
}
