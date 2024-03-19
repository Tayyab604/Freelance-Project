import React, { useEffect, useState } from 'react'
import HeaderLayout from './Components/HeaderLayout'
import styled from 'styled-components'
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Flex, Icon, InputGroup, Text } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import { Input } from 'postcss'
import { CiSearch } from "react-icons/ci";
import { UserChats } from '../Api/query/ChatQuery'
import useAuth from '../hooks/useAuth'
import { useQuery } from 'react-query'

const Messages = () => {
  const [chats, setchats] = useState("")
  const { user,token,username,userId,role, } = useAuth()
  useEffect(()=>{
    const getChats = async()=>{
      try {
        await UserChats({userId})
        // setchats(data)
        // console.log(data)
      } catch (error) {
        console.log(error)
      }
    } 
    getChats()
  },[userId])
  // console.log(chats)
  return (
    <>
      <HeaderLayout />
      <Breadcrumb pl="50px" pt="120px" >
        <BreadcrumbItem>
          <NavLink to="/messages" > <BreadcrumbLink fontSize="20px" color="#812eaa" fontWeight="bold" >Messages</BreadcrumbLink> </NavLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Flex>
        <Box flexGrow="0.25" h="100vh" background="linear-gradient(180deg,#F2CFF5, white)" borderRadius="15px" py="20px" px="10px">
          <InputGroup px="20px" background="white" alignItems="center" h="50px" boxShadow="0 0 2px #812eaa" borderRadius="15px"  >

            <Icon color="#812eaa" as={CiSearch} fontSize="30px" />
          </InputGroup>
          <Text fontSize="25px" color="#812eaa" fontWeight="bold"  >Chats</Text>
          <Text color="#812eaa" fontWeight="bold"  >Conversations</Text>
        </Box>
        <Box flexGrow="1" background="brown" h="100vh" >
          <Text>RightChat</Text>
        </Box>
      </Flex>
    </>
  )
}

export default Messages
