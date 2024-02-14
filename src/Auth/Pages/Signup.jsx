import { Box, Button, Flex, FormLabel, Image, Input, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Signup = () => {
  return (
    <Flex   w="100wh" h="100vh" >
      <BgImg   >
       <Flex h="100%" flexDir="column" justifyContent="center" alignItems="center" >
       <Text fontSize="64px" fontWeight="bold" color="#570880" >WELCOME TO</Text>
        <Image src='./Images/Logo.png'/>
       </Flex>
      </BgImg>
      <Box  flexGrow="1" >
        <Stack   justifyContent="center"  h="100%" alignItems="center" >
        <Stack  gap="30px"  >
        <Box>
        <Text  fontSize="32px" fontWeight="medium" >
        Create an account
        </Text>
        </Box>
        <Stack gap="20px" >
        <Box>
        <FormLabel color="#333333" >
        User name
        </FormLabel>
        <Input borderRadius="12px"   border="1px solid#333333" type='text' w="473px" />
        </Box>
        <Box>
        <FormLabel color="#333333" >
        Email address
        </FormLabel>
        <Input borderRadius="12px" border="1px solid#333333" type='email' w="473px" />
        </Box>
        <Box>
        <FormLabel color="#333333" >
        Password
        </FormLabel>
        <Input borderRadius="12px" border="1px solid#333333" type='password' w="473px" />
        </Box>
        </Stack>
        <Text color="#333333" >By creating an account, you agree to our <br /><Link to="termofuse" ><Box as={"span"} fontWeight="bold"cursor="pointer" color="#570880" >Terms of use</Box></Link> and <Link to="privacypolicy">
        <Box as={"span"} cursor="pointer" fontWeight="bold" color="#570880" >Privacy Policy</Box></Link>  </Text>
        <Stack>
        <Button _hover={{
          backgroundColor : "#69268a"
        }} w="270px" h="64px" fontSize="22px" borderRadius="32px" backgroundColor="#570880" color="white"  >Create an accrount</Button>
        <Text>Already have an ccount? <Link to="/login" ><Box as={"span"} fontWeight="bold" color="#570880" cursor="pointer" >Log in</Box></Link>  </Text>
        </Stack>
        </Stack>
        </Stack>
      </Box  >
    </Flex>
    
  )
}

export default Signup

const BgImg = styled.div`
background-image: url("./Images/Background Signup.png");
background-size: cover;
background-position: center;
flex-grow: 1;
`
