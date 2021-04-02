import { Box, BoxProps, Text } from '@chakra-ui/layout';

// TODO: inset padding to account for the home bar on e2e ios devices
export function Footer(delegated: BoxProps) {
  return (
    <Box as="footer" {...delegated} bg="darkglass" sx={{ backdropFilter: 'blur(2rem)' }}>
      <Box>
        <Text>footer</Text>
      </Box>
    </Box>
  );
}
