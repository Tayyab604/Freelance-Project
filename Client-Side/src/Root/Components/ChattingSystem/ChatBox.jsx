import React, { useEffect, useRef, useState } from 'react'
import { useQuery } from 'react-query'
import { GetUserById } from '../../../Api/query/userQuery'
import { Box, Button, Flex, Grid, Img, Stack, Text } from '@chakra-ui/react'
import { FetchMessages, addMessages } from '../../../Api/query/Messages'
import { format } from 'timeago.js'
import InputEmoji from 'react-input-emoji'
const ChatBox = ({ chat, currentuser,setSendMessage,receivedMessage }) => {
    const [userData, setUserData] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
    

 
    const handleChange = (newMessage)=> {
        setNewMessage(newMessage)
      }
    // fetch header chat 
    useEffect(() => {
        const userId = chat?.members?.find((id) => id !== currentuser);
        const getUserData = async () => {
          try {
            const {UserById}  = await GetUserById(userId);
            setUserData(UserById);
          } catch (error) {
            console.log(error);
          }
        };
    
        if (chat !== null) getUserData();
      }, [chat, currentuser]);
    // fetching data of messages 
    useEffect(() => {
        const fetchMessages = async () => {
          try {
            const {result}  = await FetchMessages(chat._id);
            setMessages(result);
          } catch (error) {
            console.log(error);
          }
        };
    
        if (chat !== null) fetchMessages();
      }, [chat]);
    // Always scroll to last Message
    useEffect(() => {
        scroll.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages])
    // new message handler 
    const handleSend = async(e)=> {
        e.preventDefault()
        const message = {
          senderId : currentuser,
          text: newMessage,
          chatId: chat._id,
      }
      const receiverId = chat.members.find((id)=>id!==currentuser);
      // send message to socket server
      setSendMessage({...message, receiverId})
      // send message to database
      try {
        const {result}  = await addMessages(message);
        setMessages([...messages, result]);
        setNewMessage("");
      }
      catch
      {
        console.log("error")
      }
    }
    // receive message 
    useEffect(()=> {
      console.log("Message Arrived: ", receivedMessage)
      if (receivedMessage !== null && receivedMessage.chatId === chat._id) {
        setMessages([...messages, receivedMessage]);
      }
    
    },[receivedMessage])
    const scroll = useRef();
    // const imageRef = useRef();
    return (
        <>
            <Box display="grid" gridTemplateRows="14vh 60vh 13vh" >
                {chat ? (
                    <>
                        {/* chat-header */}
                        <Box display="flex" flexDir="column"  >
                            <Flex gap="20px" alignItems="center" px="30px" pt="10px"  >
                                <img src="./Images/profilepic.png" width="60px" height="60px" alt="" />
                                <Text color="#812eaa" fontSize="30px" fontWeight="bold" >{userData ? userData.username : ""}</Text>
                            </Flex>

                            <Box px="30px" >
                                <hr style={{ width: "100%", border: "0.1px solid #efacf6", marginTop: "10px" }} />
                            </Box>
                        </Box>
                        {/* chat-body */}
                        <div className="chat-body" >
                            {messages.map((message,i) => (
                                <>
                                    <div
                                        ref={scroll}
                                        key={i}
                                        className={
                                            message.senderId === currentuser
                                                ? "message own"
                                                : "message"
                                        }
                                    >
                                        <span>{message.text}</span>
                                        <span>{format(message.createdAt)}</span>
                                    </div>
                                </>
                            ))}
                        </div>
                        {/* chat-sender */}
                        <Stack h="100%" justifyContent="end" px="30px" >
                            <Flex alignItems="center" gap="5px"   >
                                <Grid  cursor="pointer" placeItems="center" h="40px" w="40px" background="#F082DA" borderRadius="10px" fontSize="25px" color="#812eaa" fontWeight="bold" >
                                    +
                                </Grid>
                                <InputEmoji  type="text" borderColor='#812eaa' value={newMessage} onChange={handleChange} />
                                {/* <input type="text" /> */}
                                {/* <input
                type="file"
                name=""
                id=""
                style={{ display: "none" }}
                ref={imageRef}
              />{" "} */}
                                <Flex cursor="pointer" onClick={handleSend} _hover={{
                                    transition: "0.3s ease-out",
                                    boxShadow: "0px 0px 50px #F082DA",
                                }} background="linear-gradient(90deg,#F082DA, #F5B484)" transition="0.3s ease-out" boxShadow="0 0  10px #F082DA" justifyContent="center" alignItems="center" color="#812eaa" fontWeight="bold" borderRadius="10px" w="128px" h="40px"  >Send</Flex>
                            </Flex>
                        </Stack>
                    </>
                ) : (
                    <Text color="#812eaa" textAlign="center" fontSize="30px" mt="40px" >Tap on a Chat to start Coversations...</Text>
                )}
            </Box>
        </>
    )
}

export default ChatBox