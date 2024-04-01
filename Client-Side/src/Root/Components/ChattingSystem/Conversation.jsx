import { Box, Flex, Image, Stack, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { GetUserById } from '../../../Api/query/userQuery'

const Conversation = ({ data, currentUserId,online }) => {

    const [userData, setuserData] = useState(null)
    useEffect(() => {
        const userId = data.members.find((id) => id !== currentUserId)
        const getUserData = async () => {
            try {
                const { UserById } = await GetUserById(userId)
                setuserData(UserById)

            }
            catch (error) {
                console.log(error)
            }
        }

        getUserData();
    }, [currentUserId])

    return (
        <>


            <Box cursor="pointer" w="100%" px="10px" h="80px" backgroundColor="#efacf6" transition="0.3s ease-out" _hover={{
                background: "#F082DA",
                transition: "0.3s ease-out"
            }} borderRadius="10px" >

                <Flex gap="20px" alignItems="center" h="100%"   >
                    <img src="./Images/profilepic.png" width="60px" height="60px" alt="" />
                    <Stack gap="0" >

                        <Text fontSize="20px" fontWeight="bold" >{userData && userData.username}</Text>
                        <Text fontWeight="100px" fontSize="12px" >{online ? "onlion" : "offline" }</Text>
                    </Stack>
                </Flex>
            </Box>
            <hr style={{ width: "100%", border: "0.1px solid #efacf6", marginTop: "10px" }} />

        </>
    )
}

export default Conversation
