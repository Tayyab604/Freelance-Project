import React, { useEffect } from 'react'
import HeaderLayout from './Components/HeaderLayout'
import styled from 'styled-components'
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Flex, Icon, Image, Input, Stack, Tab, TabList, Tabs, Text } from '@chakra-ui/react'
import { CgProfile } from "react-icons/cg";
import { NavLink } from 'react-router-dom';
import useAuth from '../hooks/useAuth';


const Dashboard = () => {
  useEffect(()=>{
    document.title = "Canfree | Dashboard"
  },[])
  const { user } = useAuth()
  return (
      <>
      <HeaderLayout />
      <Breadcrumb pl="50px" pt="120px" >
        <BreadcrumbItem>
          <NavLink to="/dashboard" > <BreadcrumbLink fontSize="20px" color="#812eaa" fontWeight="bold" >Dashboard</BreadcrumbLink> </NavLink>
        </BreadcrumbItem>
      </Breadcrumb>

      <Flex mt="10px" justifyContent="center" gap="20px" >
        <Dabba1  >

          <Stack w="800px" h="920px" borderRadius="10px" >
            <Flex alignItems="center" >
              <Text fontSize="30px" fontWeight="bold" color="#812eaa"  >Welcome To Canfree,</Text>
              <Flex borderRadius="10px" justifyContent="center" alignItems="center" fontWeight="bold" fontSize="30px" px="10px" background="linear-gradient(180deg,#F082DA, #F5B484)" >
                <Text color="white" >{user.username}</Text>
              </Flex>
            </Flex>
            < Tabs justifyContent="start" w="250px" px="20px" py="5px" mt="20px" ml="30px" borderRadius="10px" background="linear-gradient(180deg,#F082DA, #F5B484)" variant='soft-rounded'>
              <TabList  >
                {
                  ["D", "W", "M", "Y"].map((day) => (
                    <Tab _selected={{
                      bg: "white"
                    }} color="#812eaa" mx="3px" borderRadius="10px"  >{day}</Tab>
                  ))
                }
              </TabList>
            </Tabs>
            <Stack gap="10px" mt="30px"  >
              <Box>
                <Text fontSize="25px" color="#812eaa" fontWeight="bold"  >
                  Total Earning
                </Text>
                <Image w="500px" h="200px" borderRadius="10px" src="./Images/graph.jpg" />
              </Box>
              <Box>
                <Text fontSize="25px" color="#812eaa" fontWeight="bold"  >
                  Projects
                </Text>
                <Image w="500px" h="200px" borderRadius="10px" src="./Images/graph.jpg" />
              </Box>
              <Box>
                <Text fontSize="25px" color="#812eaa" fontWeight="bold"  >
                  Contest
                </Text>
                <Image w="500px" h="200px" borderRadius="10px" src="./Images/graph.jpg" />
              </Box>
            </Stack>
          </Stack>
        </Dabba1>
        <Dabba2>
          <Stack mt="70px" color="#812eaa" gap="30px" >
            <Stack alignItems="center" >
            <img  width="80px" height="80px" src="./Images/profilepic.png" alt="" />
              <Text fontSize="30px" fontWeight="bold" >{user.username}</Text>
              <Text fontSize="30px" fontWeight="bold" >Web Developer</Text>
            </Stack>
            
            <Stack gap="60px" >
            <Flex justifyContent="space-between" px="20px" fontSize="20px" fontWeight="bold" >
              <Text >Profile Completion</Text>
              <Text  >100%</Text>
            </Flex>
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
      </>
  )
}

export default Dashboard

const Dabba1 = styled.div`
    box-shadow: 0 0 5px #812eaa;
    
    width: 900px;
    height: 1000px;
    background:linear-gradient(180deg,#F2CFF5, white);

    border:1px solid rgba(255, 255, 255, 0.18);
    border-radius: 15px;
    font-family: "Poppins", sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    
    `
const Dabba2 = styled.div`
  box-shadow: 0 0 5px #812eaa;

    width: 500px;
    height: 1000px;
 
    background:linear-gradient(180deg,#F2CFF5, white);
    border:1px solid rgba(255, 255, 255, 0.18);
    border-radius: 15px;
    font-family: "Poppins", sans-serif;
    
    `