import { Container, Heading } from '@chakra-ui/layout';
import { PropsWithChildren } from 'react';

import { PillButton } from '../components/core/PillButton';
import { Column, Row } from '../components/helpers/Column';
import SwapIcon from '../icons/swap.svg';

function ComponentSection({
  title,
  children,
  dark = false,
}: PropsWithChildren<{ title: string; dark?: boolean }>) {
  return (
    <Column bg={dark && 'blackish'} p={4}>
      <Heading color={dark ? 'yang' : 'yin'}>{title}</Heading>
      <Row spacing={4}>{children}</Row>
    </Column>
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
      </Column>
    </Container>
  );
}
