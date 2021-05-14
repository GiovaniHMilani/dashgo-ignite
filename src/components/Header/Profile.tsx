import {
  Flex,
  Box,
  Text,
  Avatar
} from '@chakra-ui/react'

export function Profile() {
  return(
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Giovani Milani</Text>
        <Text
          color="gray.300"
          fontSize="small"
        >
          giovanimilani11@gmail.com
        </Text>
      </Box>
      <Avatar size="md" name="Giovani Milani" />
    </Flex>
  );
}
