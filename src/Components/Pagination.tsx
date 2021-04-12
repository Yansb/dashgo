import { Button, Box, Stack } from "@chakra-ui/react";

export function Pagination(){
  return(
    <Stack
      direction="row"
      mt="8"
      spacing="6"
      justify="space-between"
      align="center"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack direction="row">
        <Button
          size="sm"
          fontSize="xs"
          width="4"
          colorScheme="pink"
          disabled
          _disabled={{
            bgColor: 'pink.500',
            cursor: 'default',
          }}
        >
          1
        </Button>
        <Button
          size="sm"
          fontSize="xs"
          width="4"
          bg="gray.700"
          _disabled={{
            bgColor: 'pink.500',
            cursor: 'default',
          }}
        >
          2
        </Button>
        <Button
          size="sm"
          fontSize="xs"
          width="4"
          bg="gray.700"
          _disabled={{
            bgColor: 'pink.500',
            cursor: 'default',
          }}
        >
          3
        </Button>
        <Button
          size="sm"
          fontSize="xs"
          width="4"
          bg="gray.700"
          _disabled={{
            bgColor: 'pink.500',
            cursor: 'default',
          }}
        >
          4
        </Button>
        <Button
          size="sm"
          fontSize="xs"
          width="4"
          bg="gray.700"
          _disabled={{
            bgColor: 'pink.500',
            cursor: 'default',
          }}
        >
          5
        </Button>
      </Stack>
    </Stack>
  );
}