import React from 'react'
import HeaderLayout from './Components/HeaderLayout'
import { styled } from 'styled-components'
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Flex, Icon, Stack, Text } from '@chakra-ui/react'
import { IoExitOutline } from "react-icons/io5";
import { Link, NavLink } from 'react-router-dom';

const Jobs = () => {
  return (
    // <Container>
      <>
      <HeaderLayout />
      <Breadcrumb pl="50px" pt="120px" >
        <BreadcrumbItem>
          <NavLink to="/jobs" > <BreadcrumbLink fontSize="20px" color="#812eaa" fontWeight="bold" >Jobs</BreadcrumbLink> </NavLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Flex justifyContent="center" alignItems="center"  >
        <Dabba>
          <Stack color="#812eaa" justifyContent="center" gap="30px" alignItems="center" h="100%" >
            <Link to="/project" >
              <Box  boxShadow="5px 5px 10px #F082DA"   background="linear-gradient(90deg,#F082DA, white)" h="110px" w="620px" borderRadius="10px"  >
                <Flex justifyContent="space-between" px="20px" alignItems="center" h="105px"  >
                  <Text fontSize="40px" fontWeight="bold" >
                    Projects
                  </Text>
                  <Icon color="#812eaa" as={IoExitOutline} fontSize="60px" />
                </Flex>
              </Box>
            </Link>
            <Link to="/contest" >
              <Box  boxShadow="5px 5px 10px #F082DA" background="linear-gradient(90deg,#F082DA, white)" h="110px" w="620px"  borderRadius="10px" >
                <Flex justifyContent="space-between" px="20px" alignItems="center" h="100%" >
                  <Text fontSize="40px" fontWeight="bold" >
                    Contest
                  </Text>
                  <Icon color="#812eaa" as={IoExitOutline} fontSize="60px" />
                </Flex>
              </Box>
            </Link>
            <Box boxShadow="5px 5px 10px #F082DA"  background="linear-gradient(90deg,#F082DA, white)" h="110px" w="620px"  borderRadius="10px" >
              <Flex justifyContent="space-between" px="20px" alignItems="center" h="100%" >
                <Text fontSize="40px" fontWeight="bold" >
                  Freelancers
                </Text>
                <Icon color="#812eaa" as={IoExitOutline} fontSize="60px" />
              </Flex>
            </Box>
          </Stack>

        </Dabba>
      </Flex>
      </>
    // </Container>
  )
}

export default Jobs


// const Container = styled.div`

//     margin: 0;
//     height:  100vh;
//     width: 100%;
//     background-image: url("./Images/bg.png");
//     background-position: center;
//     background-repeat: no-repeat;
//     background-size: cover;
//     `
const Dabba = styled.div`
    box-shadow: 0 0 5px #812eaa;
    width: 750px;
    height: 500px;
    /* background: linear-gradient(135deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4));
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px); */
    background:linear-gradient(180deg,#F2CFF5, white);
    border-radius: 15px;
    font-family: "Poppins", sans-serif;
    
    `