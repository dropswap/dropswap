import { BoxProps } from '@chakra-ui/layout';

import { Skeleton } from '../helpers/Skeleton';

import { Card } from './Card';

export function SkeletonCard(delegated: BoxProps) {
  return (
    <Card
      {...delegated}
      bgColor="rgba(210, 206, 184, 0.12)"
      primary={<Skeleton w="50%" />}
      secondary={<Skeleton w="full" />}
      tertiary={<Skeleton w="8" />}
    >
      <Skeleton />
    </Card>
  );
}
