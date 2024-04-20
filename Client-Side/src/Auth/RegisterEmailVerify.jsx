
import { Box, Button, FormControl, FormLabel, Icon, Input, Stack, Text, useToast } from '@chakra-ui/react';
import { Form, Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { MdEmail } from "react-icons/md";
import { Field, Formik } from 'formik';
import { useMutation } from 'react-query';
import { ResendVerifyMail } from '../Api/query/userQuery';
import { useEffect } from 'react';




function RegisterEmailVerify() {
  useEffect(()=>{
    document.title = "Canfree | Email Verification"
  },[])
  const{email} =useParams()
  const navigate = useNavigate()
  const toast = useToast()
  const { mutate ,isLoading } = useMutation({
    mutationKey: 'ResendVerifiyMail',
    mutationFn: ()=>ResendVerifyMail({email}),
    onSuccess: (data) => {
      toast({
        title: "Successfully Send Mail",
        status: "success"
      })
    },
    onError: (error) => {
      toast({
        title: "Verfication Error",
        description: error.message,
        status: "error"
      })
      
    }
  })
  useEffect(()=>{
    mutate
  },[])
  
  return (
    
      <Stack background="linear-gradient(180deg,#F082DA, #F5B484)" justifyContent="center" alignItems="center" h="100vh" 
      w={{
        base: "45wh",
        // sm: "25wh",
        md: "200wh",
        lg: "220wh",
      }}
      >
         
       <Stack gap="10px"  alignItems="center" background="linear-gradient(135deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4))" backdropFilter="blur(10px)" borderRadius='15px'
       w={{
         base : "250px",
         sm : "350px",
          lg : "500px",
          xl : "500px",
        }} p="20px">
       <Icon as={MdEmail} color="#570880" fontSize={{
        base: "40px",
        md: "60px",
       }}   />
       <Text fontWeight="bold" color="#570880" fontSize={{
        base: '15px',
        md: '30px',
       }}>Email Verification</Text>
       <Text textAlign="center" color="#570880" >We have send you an email for verification on<strong> {email}</strong><br />if you didn't receive it, click the button below.</Text>
        <Button onClick={()=>mutate({
          email : email
        })} isLoading={isLoading} type="submit"   
        _hover={{
          transition: "0.3s ease-out",
          boxShadow:"0px 0px 50px #69268a",
          }}  background="linear-gradient(180deg,#F082DA, #F5B484)" transition="0.3s ease-out" color="#69268a"  >Resend Mail
        </Button>
       </Stack>
      </Stack>
  
  )
}

export default RegisterEmailVerify




