import React from 'react'
import HeaderLayout from '../Components/HeaderLayout'
import styled from 'styled-components'
import { Box, Button, Flex, Icon, Image, Input, Stack, Tab, TabList, Tabs, Text } from '@chakra-ui/react'
import { CgProfile } from "react-icons/cg";
import { Link, NavLink } from 'react-router-dom';


const Contest = () => {
    return (
        <Container>
            <HeaderLayout />
            <Flex justifyContent="center" pt="150px" gap="20px" >
                <Dabba2>
                    <Flex gap="20px" justifyContent="center" mt="30px" >
                    <NavLink to="/project" style={({ isActive }) => {
                        return isActive ? {
                            background: "linear-gradient(90deg,#F082DA, #F5B484)",
                            zIndex : "1",
                            borderRadius: "10px",
                            width: "148px",
                            height : "52px"
                        } : {};
                    }}
                    >
                        <Flex justifyContent="center" alignItems="center" color="black" fontWeight="bold" borderRadius="10px" w="148px" h="52px" boxShadow="0 0 10px black" >Contest
                        </Flex>
                    </NavLink>
                    <NavLink to="/contest" style={({ isActive }) => {
                        return isActive ? {
                            background: "linear-gradient(90deg,#F082DA, #F5B484)",
                            zIndex : "1",
                            borderRadius: "10px",
                            width: "148px",
                            height : "52px"
                        } : {};
                    }}
                    >
                        <Flex  boxShadow="0 0 10px black" justifyContent="center" alignItems="center" color="black" fontWeight="bold" borderRadius="10px" w="148px" h="52px"  >Projects
                        </Flex>
                    </NavLink>
                    </Flex>
                    <Text fontWeight="bold" color="#570880" ml="40px" mt="10px" fontSize="20px" >Budget</Text>

                </Dabba2>
                <Dabba1  >
                </Dabba1>
            </Flex>
        </Container>
    )
}

export default Contest

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
    width: 1000px;
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
    width: 400px;
    height: 1000px;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4));
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border:1px solid rgba(255, 255, 255, 0.18);
    border-radius: 15px;
    font-family: "Poppins", sans-serif;
    
    `