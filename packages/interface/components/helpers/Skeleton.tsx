import {
  Skeleton as ChakraSkeleton,
  SkeletonText as ChakraSkeletonText,
  SkeletonProps,
  SkeletonTextProps,
} from '@chakra-ui/skeleton';

// TODO: these skeletons use opacity animations rather than a scrolling gradient, and therefore
// suck for using on dark backgrounds

export function Skeleton(delegated: SkeletonProps) {
  return <ChakraSkeleton {...delegated} startColor="#fafafa" endColor="#eaeaea" />;
}

export function SkeletonText(delegated: SkeletonTextProps) {
  return <ChakraSkeletonText {...delegated} startColor="#fafafa" endColor="#eaeaea" />;
}
