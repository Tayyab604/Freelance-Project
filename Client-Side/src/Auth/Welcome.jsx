
import {  Box, Button, Flex,  Icon,  Text, useToast } from '@chakra-ui/react';
import {  useMutation, useQuery } from 'react-query';
import {  useNavigate, useParams } from 'react-router-dom';
import { VerifyUser } from '../Api/query/userQuery';
import { useEffect } from 'react';
import { MdVerified } from "react-icons/md";


function Welcome() {
  useEffect(()=>{
    document.title = "Canfree | Welcome"
  },[])
  const {token}=useParams()
  const navigate = useNavigate()
  const toast = useToast()
  const { mutate, isLoading } = useMutation({
    mutationKey: 'verify_user',
    mutationFn: ()=> VerifyUser({token}),
    onSuccess: (data) => {
      toast({
        title: "Successfully Verified",
        status: "success"
      })
        navigate(`/login`) 
    },
    onError: (error) => {
      toast({
        title: "Verification Error",
        description: error.message,
        status: "error"
      })
    }
  })
 
  return (
  
       <Flex  flexDir="column" justifyContent="center" alignItems="center"  w="100%" h="100vh" background="linear-gradient(180deg,#F082DA, #F5B484)" >
        <Box gap="20px" borderRadius="15px" flexDir="column"  display="flex" justifyContent="center" alignItems="center"  w={{
          lg : "500px",
          xl : "500px",
          base : "350px"
        }} h={{
          lg : "350px",
          xl : "350px",
          base : "324px"
        }} background="linear-gradient(135deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4))" backdropFilter="blur(10px)" >
          <Icon as={MdVerified} color="#570880" fontSize="60px"   />
           <Text color="#69268a" fontSize="40px" fontWeight="bold" >Verified Your Account</Text>
          <Button onClick={mutate} isLoading={isLoading}  _hover={{
                              transition: "0.3s ease-out",
                              boxShadow:"0px 0px 50px #69268a",
                             
                               

                            }}  background="linear-gradient(180deg,#F082DA, #F5B484)" transition="0.3s ease-out" color="#69268a"  >Go Back to Login</Button>
        </Box>
         
       </Flex>
   
  )
}

export default Welcome






