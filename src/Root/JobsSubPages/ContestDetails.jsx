import React from 'react'
import styled from 'styled-components'
import {  Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Flex, Icon, Image, Input, Stack, Tab, TabList, Tabs, Text } from '@chakra-ui/react'
import { CgProfile } from "react-icons/cg";
import HeaderLayout from '../Components/HeaderLayout';
import { NavLink } from 'react-router-dom';


const ContestDetails = () => {
    const Projects = [
        1,
        2,
        3,
        4,
        5
    ]
  return (
    <Container>
      <HeaderLayout />
      <Breadcrumb pl="50px" pt="120px" >
        <BreadcrumbItem>
        <NavLink to="/jobs" > <BreadcrumbLink fontSize="20px" color="#812eaa" fontWeight="bold" >Jobs</BreadcrumbLink> </NavLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
        <NavLink to="/contest" > <BreadcrumbLink fontSize="20px" color="#812eaa" fontWeight="bold" >Contest</BreadcrumbLink> </NavLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
        <NavLink to="/contestdetails" > <BreadcrumbLink fontSize="20px" color="#812eaa" fontWeight="bold" >Contest Details</BreadcrumbLink> </NavLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Flex justifyContent="center" mt="10px" gap="20px" >
        <Dabba1  >
        <Stack alignItems="center"  >
                            {
                                Projects.map((project) =>
                                    
                                    <Box py="10px" cursor="pointer" mt="20px" background="linear-gradient(135deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4))" color="#812eaa" fontWeight="bold" borderRadius="10px" w="850px" h="164px" boxShadow="0 0 10px #812eaa" >
                                        <Flex w="100%" justifyContent="space-between" px="30px" >
                                        <Flex gap="30px" >
                                        <Icon fontSize="50px" as={CgProfile} />
                                            <Text fontSize="30px">Contest Title</Text>
                                        </Flex>
                                            <Text fontSize="30px">100$</Text>
                                        </Flex>
                                        <Text px="100px" >Project Description:</Text>
                                        <Text px="100px"  >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae, corrupti? Autem ratione ipsum assumenda sint nam nostrum natus blanditiis temporibus consectetur dolorum provident laboriosam odit, fugiat nobis expedit </Text>
                                    </Box>
                                  
                                )
                            }
                        </Stack>
        </Dabba1>
        <Dabba2>
          <Stack mt="70px" color="#812eaa" gap="30px" >
            <Stack alignItems="center" >
              <Icon fontSize="100px" as={CgProfile} />
              <Text fontSize="30px" fontWeight="bold" >Client Name</Text>
              <Text fontSize="30px" fontWeight="bold" >Country with icon</Text>
            </Stack>
            <Flex justifyContent="space-between" px="20px" fontSize="20px" fontWeight="bold" >
              <Text >Profile Completion</Text>
              <Text  >100%</Text>
            </Flex>
            <Input id='input' type='range' />
            <Stack gap="60px" >
              <Flex justifyContent="space-between" px="20px" fontSize="20px" fontWeight="bold" >
                <Text>Payment method</Text>
                <Text>Verified</Text>
              </Flex>
              <Flex justifyContent="space-between" px="20px" fontSize="20px" fontWeight="bold" >
                <Text>Phone number</Text>
                <Text>Verified</Text>
              </Flex>
              <Flex justifyContent="space-between" px="20px" fontSize="20px" fontWeight="bold" >
                <Text>Project posted</Text>
                <Text>200</Text>
              </Flex>
              <Flex justifyContent="space-between" px="20px" fontSize="20px" fontWeight="bold" >
                <Text>Active Project</Text>
                <Text>800</Text>
              </Flex>
              <Flex justifyContent="space-between" px="20px" fontSize="20px" fontWeight="bold" >
                <Text>Total spend</Text>
                <Text>$ 1000</Text>
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

export default ContestDetails

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
    box-shadow: 0 0 10px #812eaa;
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
    box-shadow: 0 0 10px #812eaa;
    width: 500px;
    height: 1000px;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4));
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border:1px solid rgba(255, 255, 255, 0.18);
    border-radius: 15px;
    font-family: "Poppins", sans-serif;
    
    `