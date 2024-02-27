import React from 'react'
import styled from 'styled-components'
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Flex, Icon, Image, Input, InputGroup, Stack, Tab, TabList, Tabs, Text, Textarea } from '@chakra-ui/react'
import { CgProfile } from "react-icons/cg";
import { NavLink } from 'react-router-dom';
import HeaderLayout from '../../Components/HeaderLayout';


const ContestProposal = () => {
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
            </Breadcrumb>

            <Flex justifyContent="center" mt="10px" gap="20px"  >
                <Dabba1  >
                    <Stack  px="100px" pt="30px" gap="30px" >
                        <Flex color="#812eaa" fontWeight="bold" fontSize="25px" justifyContent="space-between" >
                            <Text  >Contest Title</Text>
                            <Text>500$</Text>
                        </Flex>
                        <Text color="#812eaa" fontWeight="bold" fontSize="25px" >Contest Description</Text>
                        <Text fontSize="20px" color="#812eaa" lineHeight="30px"  >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam accusamus neque nam ab labore facere, officia, ullam accusantium perferendis laboriosam itaque. Cumque quasi nemo ipsum rem atque odio? Iste, blanditiis.
                            Cumque nam quibusdam facilis, aliquid quo, deleniti eaque perspiciatis magni ex provident molestiae doloremque labore, veniam numquam itaque dignissimos non quaerat? Magni consequatur quo sed, quibusdam laudantium ut vitae iure?
                            Quidem facere adipisci, cum aperiam assumenda maxime mollitia! Obcaecati itaque voluptates minima, autem cupiditate cumque nam labore saepe rem? Nobis dicta recusandae molestiae aliquam quo corporis saepe commodi, modi doloribus.
                            Id modi voluptatem velit laborum voluptate tempora ullam doloribus voluptates impedit temporibus, vero, quibusdam amet repudiandae incidunt odio corrupti! Quam eaque repudiandae in nihil possimus totam exercitationem voluptatum provident deserunt?
                            Exercitationem voluptatibus maxime ipsum aliquam, veritatis totam sapiente obcaecati aliquid inventore minima pariatur doloremque iure aut officia cum asperiores numquam aperiam magnam a excepturi? Molestias recusandae consectetur sequi praesentium quasi!
                            Numquam incidunt sunt non quidem natus ratione iure odio a cum facilis recusandae officia unde deleniti consectetur, laudantium ipsa soluta, accusamus quis modi debitis. Modi incidunt soluta ipsam tenetur doloremque?
                            Pariatur harum reprehenderit, voluptatum nemo molestias libero consequatur quaerat perferendis voluptates. Tenetur dolorem rerum numquam voluptatem laudantium, eius praesentium incidunt fugit! Tempora voluptates earum eligendi debitis optio officiis odio! Praesentium.

                        </Text>
                        <Text color="#812eaa" fontWeight="bold" fontSize="25px" >Attached Files</Text>
                        <Flex justifyContent="space-between" alignItems="center" >
                            <Text color="#812eaa" fontWeight="bold" fontSize="25px"  >Entry Title</Text>
                            <InputGroup px="20px" background="white" alignItems="center" w="611px" h="50px" boxShadow="0 0 5px #812eaa" borderRadius="15px"  >
                                <Input variant="unstyled" h="50px" color="#812eaa" fontSize="20px" placeholder="Title Here"   ></Input>

                            </InputGroup>
                        </Flex>
                        <Flex justifyContent="space-between" alignItems="center" >
                            <Text color="#812eaa" fontWeight="bold" fontSize="25px"  >Entry description</Text>
                            <InputGroup px="20px" background="white" w="611px" h="200px" boxShadow="0 0 5px #812eaa" borderRadius="15px"  >
                                <Textarea variant="unstyled" h="50px" color="#812eaa" fontSize="20px" placeholder="Description here "   ></Textarea>

                            </InputGroup>
                        </Flex>
                        
                        <Flex justifyContent="space-between" alignItems="center" >
                            <Text color="#812eaa" fontWeight="bold" fontSize="25px"  >Sell your entry</Text>
                           <Flex gap="200px" >
                           <Stack>
                          
                                <InputGroup px="20px" background="white" alignItems="center" w="611px" h="50px" boxShadow="0 0 5px #812eaa" borderRadius="15px"  >
                                <Input   variant="unstyled" h="50px" color="#812eaa" fontSize="20px" placeholder="500$"   ></Input>

                            </InputGroup>
                            </Stack>
                            
                           </Flex>
                            
                        </Flex>
                        <Flex   alignItems="center" justifyContent="space-between" >
                        <Text color="#812eaa" fontWeight="bold" fontSize="25px" >Attached Files</Text>
                        <Box><Input  background="none" border="none" type='file' /></Box>
                        
                        </Flex>
                        <Flex gap="20px" mt="30px"w="100%" justifyContent="center"  >
                            <NavLink to="/entries"
                            >
                                <Flex justifyContent="center" alignItems="center" color="#812eaa" fontWeight="bold" borderRadius="10px" w="278px" h="52px" boxShadow="0 0  10px #F082DA"  >Send propopsal</Flex>
                            </NavLink>

                        </Flex>
                    </Stack>
                </Dabba1>

            </Flex>
        </>
    )
}

export default ContestProposal


const Dabba1 = styled.div`
    box-shadow: 0 0 5px #812eaa;
    width: 1400px;
    height: 1450px;
    background:linear-gradient(180deg,#F2CFF5, white);
    border-radius: 15px;
    font-family: "Poppins", sans-serif;
    
    `

