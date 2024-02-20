import React from 'react'
import HeaderLayout from './Components/HeaderLayout'
import { styled } from 'styled-components'
import { Box, Flex, Icon, Stack, Text } from '@chakra-ui/react'
import { IoExitOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Jobs = () => {
  return (
    <Container>
      <HeaderLayout />
      <Flex pt="250px" justifyContent="center" alignItems="center" h="570px" >
        <Dabba>
          <Stack color="#570880" justifyContent="center" gap="30px" alignItems="center" h="100%" >
            <Link to="/project" >
              <Box _hover={{
                background: "linear-gradient(90deg,#F082DA, white)",
                border: "none",
                cursor: "pointer",
                color: "white"
              }} h="110px" w="620px" border="4px solid #570880" borderRadius="10px"  >
                <Flex justifyContent="space-between" px="20px" alignItems="center" h="105px"  >
                  <Text fontSize="40px" fontWeight="bold" >
                    Projects
                  </Text>
                  <Icon color="#570880" as={IoExitOutline} fontSize="60px" />
                </Flex>
              </Box>
            </Link>
            <Link to="/contest" >
            <Box _hover={{
              background: "linear-gradient(90deg,#F082DA, white)",
              border: "none",
              cursor: "pointer",
              color: "white"

            }} h="110px" w="620px" border="4px solid #570880" borderRadius="10px" >
              <Flex justifyContent="space-between" px="20px" alignItems="center" h="100%" >
                <Text fontSize="40px" fontWeight="bold" >
                  Contest
                </Text>
                <Icon color="#570880" as={IoExitOutline} fontSize="60px" />
              </Flex>
            </Box>
            </Link>
            <Box _hover={{
              background: "linear-gradient(90deg,#F082DA, white)",
              border: "none",
              cursor: "pointer",
              color: "white"

            }} h="110px" w="620px" border="4px solid #570880" borderRadius="10px" >
              <Flex justifyContent="space-between" px="20px" alignItems="center" h="100%" >
                <Text fontSize="40px" fontWeight="bold" >
                  Freelancers
                </Text>
                <Icon color="#570880" as={IoExitOutline} fontSize="60px" />
              </Flex>
            </Box>
          </Stack>

        </Dabba>
      </Flex>
    </Container>
  )
}

export default Jobs


const Container = styled.div`

    margin: 0;
    height:  100vh;
    width: 100%;
    background-image: url("./Images/bg.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    `
const Dabba = styled.div`
    box-shadow: 0 0 10px black;
    width: 750px;
    height: 500px;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4));
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border:1px solid rgba(255, 255, 255, 0.18);
    border-radius: 15px;
    font-family: "Poppins", sans-serif;
    
    `