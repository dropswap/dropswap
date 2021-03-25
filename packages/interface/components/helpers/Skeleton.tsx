import {
  Skeleton as ChakraSkeleton,
  SkeletonText as ChakraSkeletonText,
  SkeletonProps,
  SkeletonTextProps,
} from '@chakra-ui/skeleton';

export function Skeleton(delegated: SkeletonProps) {
  return <ChakraSkeleton {...delegated} startColor="#fafafa" endColor="#eaeaea" />;
}

export function SkeletonText(delegated: SkeletonTextProps) {
  return <ChakraSkeletonText {...delegated} startColor="#fafafa" endColor="#eaeaea" />;
}
