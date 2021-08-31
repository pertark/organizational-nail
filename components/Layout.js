import { Box, Stack } from "@chakra-ui/react";

export default function Layout({ children }) {
  return (
    <Box>
      <Stack>
        {children}
      </Stack>
    </Box>
  )
}