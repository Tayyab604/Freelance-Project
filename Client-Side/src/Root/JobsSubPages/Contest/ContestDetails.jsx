import React from 'react'
import styled from 'styled-components'
import {  Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Flex, Icon, Image, Input, Stack, Tab, TabList, Tabs, Text } from '@chakra-ui/react'
import { CgProfile } from "react-icons/cg";
import HeaderLayout from '../../Components/HeaderLayout';
import { NavLink } from 'react-router-dom';


const ContestDetails = () => {
    
  return (
      <>
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
        <Stack px="30px" pt="30px"  >
        <Flex color="#812eaa" fontWeight="bold" fontSize="25px"  justifyContent="space-between" >  
          <Text>Contest Title</Text>
          <Text>500$</Text>
          </Flex>
          <Text  color="#812eaa" fontWeight="bold" fontSize="25px" >Contest Description</Text>
          <Text fontSize="20px" color="#812eaa" lineHeight="30px"  >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam accusamus neque nam ab labore facere, officia, ullam accusantium perferendis laboriosam itaque. Cumque quasi nemo ipsum rem atque odio? Iste, blanditiis.
            Cumque nam quibusdam facilis, aliquid quo, deleniti eaque perspiciatis magni ex provident molestiae doloremque labore, veniam numquam itaque dignissimos non quaerat? Magni consequatur quo sed, quibusdam laudantium ut vitae iure?
            Quidem facere adipisci, cum aperiam assumenda maxime mollitia! Obcaecati itaque voluptates minima, autem cupiditate cumque nam labore saepe rem? Nobis dicta recusandae molestiae aliquam quo corporis saepe commodi, modi doloribus.
            Id modi voluptatem velit laborum voluptate tempora ullam doloribus voluptates impedit temporibus, vero, quibusdam amet repudiandae incidunt odio corrupti! Quam eaque repudiandae in nihil possimus totam exercitationem voluptatum provident deserunt?
            Exercitationem voluptatibus maxime ipsum aliquam, veritatis totam sapiente obcaecati aliquid inventore minima pariatur doloremque iure aut officia cum asperiores numquam aperiam magnam a excepturi? Molestias recusandae consectetur sequi praesentium quasi!
            Numquam incidunt sunt non quidem natus ratione iure odio a cum facilis recusandae officia unde deleniti consectetur, laudantium ipsa soluta, accusamus quis modi debitis. Modi incidunt soluta ipsam tenetur doloremque?
            Pariatur harum reprehenderit, voluptatum nemo molestias libero consequatur quaerat perferendis voluptates. Tenetur dolorem rerum numquam voluptatem laudantium, eius praesentium incidunt fugit! Tempora voluptates earum eligendi debitis optio officiis odio! Praesentium.
           
          </Text>
          <Text  color="#812eaa" fontWeight="bold" fontSize="25px" >Attached Files</Text>
          <Flex gap="20px" mt="30px" justifyContent="space-between"  >
                        <NavLink to="/contestproposal" 
                        >
                            <Flex _hover={{
                              transition: "0.3s ease-out",
                              boxShadow:"0px 0px 50px #F082DA",
                              width:"283px",
                               height:"57px"
                               

                            }} background="linear-gradient(90deg,#F082DA, #F5B484)"  transition="0.3s ease-out"  boxShadow="0 0  10px #F082DA" justifyContent="center" alignItems="center" color="#812eaa" fontWeight="bold" borderRadius="10px" w="278px" h="52px"   >Send Context Proposal</Flex>
                        </NavLink>
                        <NavLink to="/saveproject" 
                        >
                            <Flex _hover={{
                              transition: "0.3s ease-out",
                              boxShadow:"0px 0px 50px #F082DA",
                              width:"283px",
                               height:"57px"
                               

                            }}  background="linear-gradient(90deg,#F082DA, #F5B484)" transition="0.3s ease-out"  boxShadow="0 0  10px #F082DA" justifyContent="center" alignItems="center" color="#812eaa" fontWeight="bold" borderRadius="10px" w="278px" h="52px"  >Save Job
                            </Flex>
                        </NavLink>
        </Flex>
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
      </>
 
  )
}

export default ContestDetails


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