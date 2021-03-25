import { DarkMode, LightMode } from '@chakra-ui/color-mode';
import { Container, Heading } from '@chakra-ui/layout';
import { PropsWithChildren } from 'react';

import { PillButton } from '../components/core/PillButton';
import { Column, Row } from '../components/helpers/RowColumn';
import { Skeleton, SkeletonText } from '../components/helpers/Skeleton';
import SwapIcon from '../icons/swap.svg';

function ComponentSection({
  title,
  children,
  dark = false,
}: PropsWithChildren<{ title: string; dark?: boolean }>) {
  const Mode = dark ? DarkMode : LightMode;
  return (
    <Mode>
      <Column bg={dark && 'blackish'} p={4}>
        <Heading color={dark ? 'yang' : 'yin'}>{title}</Heading>
        <Row spacing={4}>{children}</Row>
      </Column>
    </Mode>
  );
}

export default function Components() {
  return (
    <Container py={4}>
      <Column spacing={4}>
        <ComponentSection title="Pill Buttons" dark>
          <PillButton icon={<SwapIcon />}>Swap</PillButton>
        </ComponentSection>

        <ComponentSection title="Secondary Pill Buttons" dark>
          <PillButton icon={<SwapIcon />} secondary>
            Swap
          </PillButton>
        </ComponentSection>

        <ComponentSection title="Headings" dark>
          <Column spacing={4}>
            <Heading as="h1" fontSize="xl" color="yang">
              Drop Swap
            </Heading>
          </Column>
        </ComponentSection>

        <ComponentSection title="Skeletons">
          <Column spacing={4} flex="1">
            <Skeleton w="full" h={4} />
            <SkeletonText noOfLines={4} />
          </Column>
        </ComponentSection>
      </Column>
    </Container>
  );
}
