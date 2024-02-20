
import { Box, Button, Flex, Stack, Text } from '@chakra-ui/react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
const HeaderLayout = () => {
  return (

    <Box position="fixed" top="0" zIndex="1" w="100%">
      
      <Dabba>

        <Flex justifyContent="space-between" pl="50px" alignItems="center" h="100%" >
          <Flex gap="350px" alignItems="center">
            <Box>
              <img width="127px" height="86px" src="./Images/Logo.png" alt="" />
            </Box>
            <Flex gap="120px"  >
              <NavLink to="/home" style={({ isActive }) => {
                return isActive ? {
                  
                  background: "linear-gradient(180deg,#F082DA, white)",
                  padding : "0px 10px 0px 10px",
                  borderRadius : "10px"
                } : {};
              }}
              >
                <li>Home</li>
              </NavLink>
              <NavLink to="/jobs" style={({ isActive }) => {
                return isActive ? {
                  background: "linear-gradient(180deg,#F082DA, white)",
                  padding : "0px 10px 0px 10px",
                  borderRadius : "10px"
                } :{} ;
              }}
              >
                <li>Jobs</li>
              </NavLink>
              <NavLink to="/profile" style={({ isActive }) => {
                return isActive ? {
                  background: "linear-gradient(180deg,#F082DA, white)",
                  padding : "0px 10px 0px 10px",
                  borderRadius : "10px"
                } : {};
              }}
              >
                <li>Profile</li>
              </NavLink>
              <NavLink to="/setting" style={({ isActive }) => {
                return isActive ? {
                  background: "linear-gradient(180deg,#F082DA, white)",
                  padding : "0px 10px 0px 10px",
                  borderRadius : "10px"
                } : {};
              }}
              >
                <li>Setting</li>
              </NavLink>
            </Flex>
          </Flex>
        </Flex>

      </Dabba>
    </Box>

  )
}

export default HeaderLayout
const Dabba = styled.div`
box-shadow: 0 0 10px black;
width: 100%;
height: 120px;
background: linear-gradient(135deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4));
backdrop-filter: blur(10px);
-webkit-backdrop-filter: blur(10px);
border:1px solid rgba(255, 255, 255, 0.18);
border-end-end-radius: 15px;
border-end-start-radius : 15px;
li{
list-style-type: none;
font-size: 30px;
font-weight: bold;
color: #570880;
cursor: pointer;
}
font-family: "Poppins", sans-serif;

`
const Border =styled.div`
 border-image: linear-gradient(90deg,#019BD7, black) ;
    border-top: 5px;
    border-style: solid;
    border-image-slice: 1;
    width: 1250px;
    height: 700px;
`


