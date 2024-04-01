import React, { useEffect, useRef, useState } from 'react'
import HeaderLayout from './Components/HeaderLayout'
import styled from 'styled-components'
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Flex, Icon, InputGroup, Text } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import { Input } from 'postcss'
import { CiSearch } from "react-icons/ci";
import { UserChats } from '../Api/query/ChatQuery'
import useAuth from '../hooks/useAuth'
import { useMutation, useQuery } from 'react-query'
import Conversation from './Components/ChattingSystem/Conversation'
import ChatBox from './Components/ChattingSystem/ChatBox'
import { io } from 'socket.io-client'
const Messages = () => {
  const [chats, setchats] = useState([])
  const [currentChat, setcurrentChat] = useState(null)
  const [onlionUsers, setonlionUser] = useState([])
  const [sendMessage, setSendMessage] = useState(null)
  const [receivedMessage, setReceivedMessage] = useState(null)
  const { user } = useAuth()
  const { userId } = user
  const socket = useRef()
  // get user chats by id 
  useEffect(() => {
    const getChats = async () => {
      try {
        const { chat } = await UserChats(userId)
        setchats(chat)

      } catch (error) {
        console.log(error)
      }
    }
    getChats()
  }, [userId])
   // check user is onlion and create
   useEffect(() => {
    socket.current = io("http://localhost:8800")
    socket.current.emit('new-user-add', userId)
    socket.current.on('get-users', (users) => {
      setonlionUser(users)
    })
  }, [user])
  // send message to socket server 
  useEffect(() => {
    if (sendMessage !== null) {
      socket.current.emit('send-message', sendMessage)
    }
  }, [sendMessage])
  // receive message 
  useEffect(() => {
    socket.current.on("recieve-message", (data) => {
      console.log(data)
      setReceivedMessage(data);
    }

    );
  }, []);
  // check user is onlion 
  const checkOnlineStatus = (chat) => {
    const chatMember = chat.members.find((member) => member !== userId);
    const online = onlionUsers.find((user) => user.userId === chatMember);
    return online ? true : false;
  };

  return (
    <>
      <HeaderLayout />
      <Breadcrumb pl="50px" pt="120px" >
        <BreadcrumbItem>
          <NavLink to="/messages" > <BreadcrumbLink fontSize="20px" color="#812eaa" fontWeight="bold" >Messages</BreadcrumbLink> </NavLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Flex gap="20px" px="20px" >
        <Box boxShadow="0 0 5px #812eaa" h="670px" background="linear-gradient(180deg,#F2CFF5, white)" borderRadius="15px" py="20px" px="10px">
          <InputGroup px="20px" background="white" alignItems="center" h="50px" boxShadow="0 0 2px #812eaa" borderRadius="15px"  >
            <Icon color="#812eaa" as={CiSearch} fontSize="30px" />
          </InputGroup>
          <Text fontSize="25px" color="#812eaa" fontWeight="bold"  >Chats</Text>
          <Text color="#812eaa" fontWeight="bold"  >
            <Box display="grid" gridTemplateRows="70vh 0vh 0vh" >
              <div className='chat-body'  >
                {
                  chats.map((chat, i) => (
                    <>
                      <Box mt="10px" onClick={() => { setcurrentChat(chat) }} px="20px" key={i} >
                        <Conversation data={chat} currentUserId={userId} online={checkOnlineStatus(chat)} />
                      </Box>

                    </>
                  ))
                }
              </div>
            </Box>
          </Text>
        </Box>
        <Box boxShadow="0 0 5px #812eaa" background="linear-gradient(180deg,#F2CFF5, white)" borderRadius="15px" flexGrow="1" h="670px" >
          <ChatBox chat={currentChat} currentuser={userId} setSendMessage={setSendMessage} receivedMessage={receivedMessage}   />
        </Box>
      </Flex>
    </>
  )
}

export default Messages
