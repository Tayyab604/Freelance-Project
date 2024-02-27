import React from 'react'
import HeaderLayout from '../../Components/HeaderLayout'
import styled from 'styled-components'
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Checkbox, Flex, Icon, Image, Input, InputGroup, RangeSlider, RangeSliderFilledTrack, RangeSliderThumb, RangeSliderTrack, Stack, Tab, TabList, Tabs, Text } from '@chakra-ui/react'

import { Link, NavLink } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";


const Projects = () => {
    const Projects = [
        1,
        2,
        3,
        4
    ]
    const Skill = [
        "Graphics & Designer",
        "Programming & Tech",
        "Digital Marketing",
        "Video & Animation",
        "Writing & Translation",
        "Data",
        "AI Services"
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
      </Breadcrumb>
            <Flex justifyContent="center" mt="10px" mb="10px" gap="20px" >
                <Dabba2>
                    <Flex gap="20px" mt="30px" justifyContent="center"  >
                        <NavLink to="/project" style={({ isActive }) => {
                            return isActive ? {
                                background: "linear-gradient(90deg,#F082DA, #F5B484)",
                                zIndex: "1",
                                borderRadius: "10px",
                                width: "148px",
                                height: "52px"
                            } : {};
                        }}
                        >
                            <Flex justifyContent="center" alignItems="center" color="#812eaa" fontWeight="bold" borderRadius="10px" w="148px" h="52px" boxShadow="5px 5px 10px #F082DA"  >Projects
                            </Flex>
                        </NavLink>
                        <NavLink to="/contest" style={({ isActive }) => {
                            return isActive ? {
                                background: "linear-gradient(90deg,#F082DA, #F5B484)",
                                zIndex: "1",
                                borderRadius: "10px",
                                width: "148px",
                                height: "52px"
                            } : {};
                        }}
                        >
                            <Flex boxShadow="5px 5px 10px #F082DA" justifyContent="center" alignItems="center" color="#812eaa" fontWeight="bold" borderRadius="10px" w="148px" h="52px"  >Contest
                            </Flex>
                        </NavLink>
                    </Flex>
                    <Text mt="20px" ml="40px" fontWeight="bold" color="#812eaa" fontSize="30px" >Budget</Text>
                    <RangeSlider
                        mt="20px" ml="40px"
                        w="300px"
                        aria-label={['min', 'max']}
                        colorScheme='#812eaa'
                        defaultValue={[10, 30]}
                    >
                        <RangeSliderTrack backgroundColor="#812eaa" >
                            <RangeSliderFilledTrack />
                        </RangeSliderTrack>
                        <RangeSliderThumb backgroundColor="#812eaa" index={0} />
                        <RangeSliderThumb index={1} backgroundColor="#812eaa" />
                    </RangeSlider>
                    <Text mt="20px" ml="40px" fontWeight="bold" color="#812eaa" fontSize="30px" >Skills</Text>
                    <Stack mt="20px" ml="40px" >
                        {Skill.map((skill) => (
                            <Checkbox mt="10px"
                                _checked={{
                                    "& .chakra-checkbox__control": {
                                        background: "#812eaa",
                                        borderColor: "#812eaa",
                                        hover: "none"
                                    }
                                }}

                                iconColor="white"
                                borderColor="#812eaa"
                                size="lg"
                            >
                                <Text fontWeight="bold" color="#812eaa" fontSize="20px">{skill}</Text>
                            </Checkbox>
                        ))

                        }
                    </Stack>
                    <Text mt="20px" ml="40px" fontWeight="bold" color="#812eaa" fontSize="30px" >Minimum Bids</Text>
                    <Flex color="#812eaa" mt="20px" ml="40px" justifyContent="center" alignItems="center" fontWeight="bold" borderRadius="10px" w="278px" h="52px" boxShadow="5px 5px 10px #F082DA" >Bids
                    </Flex>

                    <Text mt="20px" ml="40px" fontWeight="bold" color="#812eaa" fontSize="30px" >Client Reviews</Text>

                </Dabba2>
                <Stack>
                    <InputGroup px="20px" background="white" alignItems="center" w="1000px" h="50px" boxShadow="0 0 5px #812eaa" borderRadius="15px"  >
                        <Input variant="unstyled" h="50px" color="#812eaa" fontSize="20px" placeholder="Search"   ></Input>
                        <Icon  color="#812eaa" as={CiSearch} fontSize="30px" />
                    </InputGroup>
                    <Dabba1  >
                        <Flex mt="20px" justifyContent="space-between" px="20px" >
                        <Text fontSize="30px" fontWeight="bold" color="#812eaa"  >Progamming & Tech </Text>
                        <Flex gap="10px" ><Text fontSize="30px" fontWeight="bold" color="#812eaa"  >Projects </Text><Flex borderRadius="10px" justifyContent="center" alignItems="center" fontWeight="bold" fontSize="30px" px="10px" background="linear-gradient(180deg,#F082DA, #F5B484)" >
                <Text color="white" >100</Text>
              </Flex></Flex>
                        </Flex>
                        <Stack   alignItems="center"  >
                            {
                                Projects.map((project) =>
                                        <Link to="/projectdetails" >
                                    <Box  boxShadow="5px 5px 10px #F082DA"   background="linear-gradient(90deg,#F082DA, white)" py="10px"  cursor="pointer" mt="20px" color="#812eaa" fontWeight="bold" borderRadius="10px" w="900px" h="164px"  >
                                        <Flex w="100%" justifyContent="space-between" px="30px" >
                                            <Text fontSize="30px">Projects Title</Text>
                                            <Text fontSize="30px">100$</Text>
                                        </Flex>
                                        <Text px="30px" >Project Description:</Text>
                                        <Text px="30px" >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae, corrupti? Autem ratione ipsum assumenda sint nam nostrum natus blanditiis temporibus consectetur dolorum provident laboriosam odit, fugiat nobis expedita maiores suscipit.
                                             </Text>
                                    </Box>
                        </Link>
                                )
                            }
                        </Stack>
                    </Dabba1>
                </Stack>
            </Flex>
            </>

    )
}

export default Projects


const Dabba1 = styled.div`
    box-shadow: 0 0 5px #812eaa;
    width: 1000px;
    height: 1000px;
   
    background:linear-gradient(180deg,#F2CFF5, white);
    border-radius: 15px;
    font-family: "Poppins", sans-serif;
     
 
    
    `
const Dabba2 = styled.div`
    box-shadow: 0 0 5px #812eaa;
    width: 400px;
    height: 1060px;
   
    background:linear-gradient(180deg,#F2CFF5, white);
    border-radius: 15px;
    font-family: "Poppins", sans-serif;
    
    `