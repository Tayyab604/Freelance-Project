
import { Box, Flex, Icon, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { CgProfile } from "react-icons/cg";
import { RiMessage2Fill } from "react-icons/ri";
import { IoIosNotifications } from "react-icons/io";
import { MdOutlinePayment } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";
import { FaBookmark } from "react-icons/fa";
import useAuth from '../../../hooks/useAuth';


const BuyerHeaderLayout = () => {
  const {logout}=useAuth()
  return (

    <Container position="fixed" top="0" zIndex="1" w="100%">

      <Dabba>

        <Flex justifyContent="space-between" pl="50px" alignItems="center" h="100%" >
          <Flex gap="50px" alignItems="center">
            <Link to="/dashboard" cursor="pointer" >
            <Box>
              <img width="127px" height="86px" src="./Images/Logo.png" alt="" />
            </Box>
            </Link>
            <Flex gap="50px"  >
              <NavLink to="/dashboard"


              >
                <Box _hover={{
                  color: "#F082DA",
                  transition: "0.3s ease-out",
                }} fontSize="25px"  transition="0.3s ease-out" fontWeight="bold" color="#812eaa" cursor="pointer"  >Dashboard</Box>
              </NavLink>
              <NavLink to="/jobs"
              >

                <Box _hover={{
                  color: "#F082DA",
                  transition: "0.3s ease-out"
                }} fontSize="25px" transition="0.3s ease-out"  fontWeight="bold" color="#812eaa" cursor="pointer"  >Jobs</Box>
              </NavLink>
              <NavLink to="/proposal"
              >

                <Box _hover={{
                  color: "#F082DA",
                  transition: "0.3s ease-out"
                }} fontSize="25px" transition="0.3s ease-out" fontWeight="bold" color="#812eaa" cursor="pointer"  >Proposal</Box>
              </NavLink>
              <NavLink to="/report"
              >

                <Box _hover={{
                  color: "#F082DA",
                  transition: "0.3s ease-out"
                }} fontSize="25px" transition="0.3s ease-out" fontWeight="bold" color="#812eaa" cursor="pointer"  >Report</Box>
              </NavLink>
            </Flex>
          </Flex>
          <Flex mr="30px" alignItems="center" gap="20px" >
          <Link to="/saveproject" >
                <Icon _hover={{
                  transition:"0.3s ease-out",
              fontSize: "30px"
            }} transition="0.3s ease-out"  color="#812eaa" fontSize="25px" as={FaBookmark} /></Link>
                <Link to="/notification" >
                <Icon _hover={{
              fontSize: "35px",
              transition:"0.3s ease-out"
            }} transition="0.3s ease-out" color="#812eaa" fontSize="30px" as={IoIosNotifications} /></Link>
            <Link to="/messages">
            <Icon transition="0.3s ease-out" _hover={{
              transition:"0.3s ease-out",
              fontSize: "35px"
            }} color="#812eaa" fontSize="30px" as={RiMessage2Fill} /></Link>
            <Menu >
              <MenuButton  >
                <Icon color="#812eaa" fontSize="50px" as={CgProfile} />
              </MenuButton>
              <MenuList background="linear-gradient(90deg,#F082DA, white)" >
                <Link to="/profile" >
                <MenuItem _hover={{
                  background: "white"
                }} fontWeight="bold" color="#812eaa" fontSize="20px" background="linear-gradient(90deg,#F082DA, white)"  > <Icon color="#812eaa" fontSize="30px" as={CgProfile} mr="5px" />  Profile</MenuItem>
                </Link>
<Link to="/payment" >
<MenuItem _hover={{
                  background: "white"
                }} fontWeight="bold" color="#812eaa" background="linear-gradient(90deg,#F082DA, white)" fontSize="20px" > <Icon color="#812eaa" fontSize="30px" as={MdOutlinePayment} mr="5px" /> Payment</MenuItem>
</Link>
                <Link to="/setting" >
                <MenuItem _hover={{
                  background: "white"
                }} fontWeight="bold" color="#812eaa" background="linear-gradient(90deg,#F082DA, white)" fontSize="20px" > <Icon color="#812eaa" fontSize="30px" as={IoMdSettings} mr="5px" /> Setting</MenuItem>
                </Link>
                <MenuItem onClick={logout}  _hover={{
                  background: "white"
                }} fontWeight="bold" color="#812eaa" background="linear-gradient(90deg,#F082DA, white)" fontSize="20px" > <Icon color="#812eaa" fontSize="30px" as={IoIosLogOut} mr="5px" /> Logout</MenuItem>

              </MenuList>
            </Menu>
          </Flex>
        </Flex>

      </Dabba>
    </Container>

  )
}

export default BuyerHeaderLayout
const Dabba = styled.div`
box-shadow: 0 0px 5px #812eaa; 
width: 100%;
height: 100px;
background: linear-gradient(135deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4));
backdrop-filter: blur(10px);
-webkit-backdrop-filter: blur(10px);
border:1px solid rgba(255, 255, 255, 0.18);
border-end-end-radius: 15px;
border-end-start-radius : 15px;
font-family: "Poppins", sans-serif;

`
const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 5 ;
   background-image: url("./Images/bg.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-end-end-radius: 15px;
border-end-start-radius : 15px;
`


