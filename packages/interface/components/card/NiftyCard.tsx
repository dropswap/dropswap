import { Box, BoxProps, Text } from '@chakra-ui/layout';

import { useNifty } from '../../lib/useNifty';
import { Skeleton } from '../helpers/Skeleton';

import { Card } from './Card';
import { RenderNifty } from './RenderNifty';

export function NiftyCard({ id, ...delegated }: BoxProps & { id: string }) {
  // TODO: intersection observer with skip/revalidate
  const { data, error, loading } = useNifty(id);

  const renderPrimary = () => {
    if (error) {
      return <Text isTruncated>Error</Text>;
    }

    if (data) {
      return <Text isTruncated>{data.metadata.name}</Text>;
    }

    return <Skeleton w="50%" />;
  };

  const renderSecondary = () => {
    if (error) {
      return <Text isTruncated>{error.message}</Text>;
    }

    if (data) {
      return (
        <Text fontSize="sm" isTruncated>
          {data.metadata.description}
        </Text>
      );
    }

    return <Skeleton w="full" />;
  };

  const renderTertiary = () => {
    if (error) {
      return <Box />;
    }

    if (data) {
      return <Box />;
    }

    return <Skeleton w="8" />;
  };

  return (
    <Card
      {...delegated}
      bgColor="rgba(210, 206, 184, 0.12)"
      primary={renderPrimary()}
      secondary={renderSecondary()}
      tertiary={renderTertiary()}
    >
      {loading ? <Skeleton /> : data ? <RenderNifty render={data.render} /> : <Box />}
    </Card>
  );
}
