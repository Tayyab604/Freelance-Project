import React from 'react'
import styled from 'styled-components'
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Flex, Grid, GridItem, Icon, Image, Input, InputGroup, Stack, Tab, TabList, Tabs, Text, Textarea } from '@chakra-ui/react'
import { CgProfile } from "react-icons/cg";
import { NavLink } from 'react-router-dom';
import HeaderLayout from '../../Components/HeaderLayout';


const Entries = () => {
    const Data =[
        "Freelancer’s Entry will be shown here",
        "Freelancer’s Entry will be shown here",
        "Freelancer’s Entry will be shown here",
        "Freelancer’s Entry will be shown here",
        "Freelancer’s Entry will be shown here",
        "Freelancer’s Entry will be shown here",
        "Freelancer’s Entry will be shown here",
        "Freelancer’s Entry will be shown here",
        "Freelancer’s Entry will be shown here",
        "Freelancer’s Entry will be shown here",
        "Freelancer’s Entry will be shown here",
        "Freelancer’s Entry will be shown here",
        "Freelancer’s Entry will be shown here",
        "Freelancer’s Entry will be shown here",
        "Freelancer’s Entry will be shown here",
        "Freelancer’s Entry will be shown here",
        "Freelancer’s Entry will be shown here",
        "Freelancer’s Entry will be shown here",
        "Freelancer’s Entry will be shown here",
        "Freelancer’s Entry will be shown here",
     
    ]
    return (
        <>
            <HeaderLayout />
            <Breadcrumb pl="50px" pt="120px" >
                <BreadcrumbItem>
                    <NavLink to="/jobs" > <BreadcrumbLink fontSize="20px" color="#812eaa" fontWeight="bold" >Jobs</BreadcrumbLink> </NavLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <NavLink to="/project" > <BreadcrumbLink fontSize="20px" color="#812eaa" fontWeight="bold" >Projects</BreadcrumbLink> </NavLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <NavLink to="/projectdetails" > <BreadcrumbLink fontSize="20px" color="#812eaa" fontWeight="bold" >Projects Details</BreadcrumbLink> </NavLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <NavLink to="/contestpropsoal" > <BreadcrumbLink fontSize="20px" color="#812eaa" fontWeight="bold" >Contest Proposal</BreadcrumbLink> </NavLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <NavLink to="/entries" > <BreadcrumbLink fontSize="20px" color="#812eaa" fontWeight="bold" >Entries</BreadcrumbLink> </NavLink>
                </BreadcrumbItem>
            </Breadcrumb>

            <Flex justifyContent="center" mt="10px" gap="20px"  >
                <Dabba1  >
                    <Grid  px="50px" pt="50px" templateColumns='repeat(5, 1fr)' gap={6}>
                        {
                            Data.map((data)=>(
                               <>
                                <Stack>
                                <GridItem  w='237px' h='231px' borderRadius="20px" bg='#F2CFF5' boxShadow="5px 5px 20px #F082DA" ><Flex alignItems="center" h="100%" fontWeight="bold" color="#812eaa" fontSize="30px" pl="30px" >{data}</Flex>
                                </GridItem>
                                <Text ml="40px" fontWeight="bold" color="#812eaa" fontSize="20px" >
                                Freelancer Name
                                </Text>
                                </Stack>
                               </>
                                ))
                            }
                    </Grid>
                        
                </Dabba1>

            </Flex>
        </>
    )
}

export default Entries


const Dabba1 = styled.div`
    box-shadow: 0 0 5px #812eaa;
    width: 1400px;
    height: 1450px;
    background:linear-gradient(180deg,#F2CFF5, white);
    border-radius: 15px;
    font-family: "Poppins", sans-serif;
    
    `

