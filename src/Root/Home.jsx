import React from 'react'
import HeaderLayout from './Components/HeaderLayout'
import styled from 'styled-components'
import { Box, Flex, Icon, Image, Input, Stack, Tab, TabList, Tabs, Text } from '@chakra-ui/react'
import { CgProfile } from "react-icons/cg";


const Home = () => {
  return (
    <Container>
      <HeaderLayout />
      <Flex justifyContent="center" pt="150px" gap="20px" >
        <Dabba1  >

          <Stack  w="800px" h="920px"  borderRadius="10px" >
            < Tabs justifyContent="start" w="250px" px="20px" py="5px" mt="20px" ml="30px" borderRadius="10px" background="linear-gradient(180deg,#F082DA, #F5B484)" variant='soft-rounded'>
              <TabList  >
                {
                  ["D", "W", "M", "Y"].map((day) => (
                    <Tab _selected={{
                      bg: "white"
                    }} color="black" mx="3px" borderRadius="10px"  >{day}</Tab>
                  ))
                }
              </TabList>
            </Tabs>
                <Stack justifyContent="center" mt="50px"   alignItems="center" >
                <Box>
              <Text fontSize="25px" color="#570880" fontWeight="bold"  >
                Total Earning
              </Text>
              <Image w="500px" h="200px" borderRadius="10px" src="./Images/graph.jpg" />
            </Box>
            <Box>
              <Text fontSize="25px" color="#570880" fontWeight="bold"  >
                Projects
              </Text>
              <Image w="500px" h="200px" borderRadius="10px" src="./Images/graph.jpg" />
            </Box>
            <Box>
              <Text fontSize="25px" color="#570880" fontWeight="bold"  >
                Contest
              </Text>
              <Image w="500px" h="200px" borderRadius="10px" src="./Images/graph.jpg" />
            </Box>
                </Stack>
          </Stack>
        </Dabba1>
        <Dabba2>
          <Stack mt="70px" color="#570880" gap="30px" >
            <Stack alignItems="center" >
              <Icon fontSize="100px" as={CgProfile} />
              <Text fontSize="30px" fontWeight="bold" >Ali Tayyab</Text>
              <Text fontSize="30px" fontWeight="bold" >Web Developer</Text>
            </Stack>
            <Flex justifyContent="space-between" px="20px" fontSize="20px" fontWeight="bold" >
              <Text >Profile Completion</Text>
              <Text  >100%</Text>
            </Flex>
            <Input id='input' type='range' />
            <Stack gap="60px" >
              <Flex justifyContent="space-between" px="20px" fontSize="20px" fontWeight="bold" >
                <Text>Total Earning</Text>
                <Text>$ 2500</Text>
              </Flex>
              <Flex justifyContent="space-between" px="20px" fontSize="20px" fontWeight="bold" >
                <Text>Total Bids</Text>
                <Text>1000</Text>
              </Flex>
              <Flex justifyContent="space-between" px="20px" fontSize="20px" fontWeight="bold" >
                <Text>Bids Applied</Text>
                <Text>200</Text>
              </Flex>
              <Flex justifyContent="space-between" px="20px" fontSize="20px" fontWeight="bold" >
                <Text>Remaining Bids</Text>
                <Text>800</Text>
              </Flex>
              <Flex justifyContent="space-between" px="20px" fontSize="20px" fontWeight="bold" >
                <Text>Contest Applied</Text>
                <Text>50</Text>
              </Flex>
              <Flex justifyContent="space-between" px="20px" fontSize="20px" fontWeight="bold" >
                <Text>Overall Status</Text>
                <Text>Excellent</Text>
              </Flex>
            </Stack>
          </Stack>
        </Dabba2>
      </Flex>
    </Container>
  )
}

export default Home

const Container = styled.div`

    margin: 0;
    height:  100%;
    width: 100%;
    background-image: url("./Images/bg.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    `
const Dabba1 = styled.div`
    box-shadow: 0 0 10px black;
    width: 900px;
    height: 1000px;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4));
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border:1px solid rgba(255, 255, 255, 0.18);
    border-radius: 15px;
    font-family: "Poppins", sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    
    `
const Dabba2 = styled.div`
    box-shadow: 0 0 10px black;
    width: 500px;
    height: 1000px;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4));
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border:1px solid rgba(255, 255, 255, 0.18);
    border-radius: 15px;
    font-family: "Poppins", sans-serif;
    
    `