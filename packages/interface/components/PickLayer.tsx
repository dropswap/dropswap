import { AspectRatio, Box, HStack } from '@chakra-ui/layout';
import { Portal } from '@chakra-ui/portal';
import { AnimatePresence, Variants } from 'framer-motion';

import { PickState } from '../containers/PickState';
import GoIcon from '../icons/go.svg';

import { Blob } from './blob/Blob';
import { Button } from './core/Button';
import { MotionBox } from './helpers/MotionBox';

const FooterVariants: Variants = {
  initial: { translateY: '100%' },
  animate: { translateY: '0%' },
  exit: { translateY: '100%' },
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
              left="-15%"
              right="-15%"
              top="-35%"
              maxW="md"
              mx="auto"
            >
              <Blob />
            </AspectRatio>
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
