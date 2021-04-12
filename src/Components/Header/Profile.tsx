import { Avatar } from "@chakra-ui/avatar"
import { Box, Flex, Text } from "@chakra-ui/layout"

interface ProfileProps{
  showProfileData?: boolean;
}

export function Profile({showProfileData}:ProfileProps){
  return(
    <Flex align="center">
      {showProfileData &&
      <Box mr="4" textAlign="right" >
        <Text>Yan Santana</Text>
        <Text color="gray.300" fontSize="small" >yansbarreiro@gmail.com</Text>
      </Box>
      }
      
      <Avatar size="md" name="Yan Santana" src="https://github.com/yansb.png" />
    </Flex>
  );
}