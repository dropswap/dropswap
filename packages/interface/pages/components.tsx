import { DarkMode, LightMode } from '@chakra-ui/color-mode';
import { Container, Heading } from '@chakra-ui/layout';
import { PropsWithChildren } from 'react';

import { Button } from '../components/core/Button';
import { Column, Row } from '../components/helpers/RowColumn';
import { Skeleton, SkeletonText } from '../components/helpers/Skeleton';
import SwapIcon from '../icons/swap.svg';

function ComponentSection({
  title,
  children,
  light = false,
}: PropsWithChildren<{ title: string; light?: boolean }>) {
  const Mode = light ? LightMode : DarkMode;
  return (
    <Mode>
      <Column bg={light ? 'yang' : 'blackish'} p={4}>
        <Heading color={light ? 'yin' : 'yang'}>{title}</Heading>
        <Row spacing={4}>{children}</Row>
      </Column>
    </Mode>
  );
}

export default function Components() {
  return (
    <Container py={4}>
      <Column spacing={4}>
        <ComponentSection title="Pill Buttons">
          <Button icon={<SwapIcon />}>Swap</Button>
        </ComponentSection>

        <ComponentSection title="Secondary Pill Buttons" light>
          <Button icon={<SwapIcon />} secondary>
            Swap
          </Button>
        </ComponentSection>

        <ComponentSection title="Headings">
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

        <ComponentSection title="Skeleton (Light)" light>
          <Column spacing={4} flex="1">
            <Skeleton w="full" h={4} />
            <SkeletonText noOfLines={4} />
          </Column>
        </ComponentSection>
      </Column>
    </Container>
  );
}
