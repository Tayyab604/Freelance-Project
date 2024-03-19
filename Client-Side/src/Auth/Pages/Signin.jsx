import { Box, Button, Flex, FormControl, FormErrorMessage, FormLabel, Image, Input, Stack, Text, useToast } from '@chakra-ui/react'
import { Field, Form, Formik } from 'formik'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { signinFormValidation } from '../Validation/Validationj'
import { SigninUser } from '../../Api/query/userQuery'
import { useMutation } from 'react-query'
import useAuth from '../../hooks/useAuth'
import { useEffect } from 'react';



const Signin = () => {
  useEffect(()=>{
    document.title = "Canfree | Login"
  },[])
  const navigate = useNavigate()
  const {  login , setloginUserData  } = useAuth()
  const toast = useToast()
  const { mutate, isLoading } = useMutation({
    mutationKey: 'signin',
    mutationFn: SigninUser,
    onSuccess: (data) => {
      const {username,email,userId,token,role} = data
      if(role=="seller"){
        if(token||role){
          login(username,email,userId,token,role)
          // setloginUserData(data)
          navigate(`/dashboard`) 
          toast({
            title: "Successfully Login",
            status: "success"
          })
        }
      }else if(role=="buyer"){
        if(token||role){
          login(token,role)
          navigate(`/buyerdashboard`) 
          toast({
            title: "Successfully Login",
            status: "success"
          })
        }
      }
        
    },
    onError: (error,data) => {
      toast({
        title: "Signup Error",
        description: error.message,
        status: "error"
      })
      if(error.message=="User Does Not Verified"){
        navigate(`/register-email-verify/${data.email}`)
      }
    }
  })
  return (
    <Flex w="100wh" h="100vh" >
      <Box justifyContent="center" display={{
        xl: "flex",
        lg: "flex",
        base: "none"
      }} backgroundImage="url('./Images/Background Signup.png')" flexGrow="1" bgSize="cover" backgroundPosition="center"  >
        <Flex h="100%" flexDir="column" justifyContent="center" alignItems="center" >
          <Text fontSize="64px"

            fontWeight="bold" color="#570880" >WELCOME TO</Text>
          <Image w="300px"
            src='./Images/Logo.png' />
        </Flex>
      </Box>
      <Box flexGrow="1" >
      <Stack justifyContent="center" h="100%" alignItems="center">
      <Box display={{
          xl: "none",
          lg: "none",
          base: "block"
        }}  >
          <Image mt="50px" w="200px"
            src='./Images/Logo.png' />
        </Box>
        <Formik
        
        initialValues={{
          email: "",
            password: ""
        }}
        onSubmit={(values) => {
          mutate({
            email: values.email,
            password: values.password
          })
         


          

        }}
     validationSchema={signinFormValidation}
      >
        <Stack justifyContent="center" h="100%" alignItems="center" >
            <Stack gap="30px"  >
              <Box>
                <Text fontSize="32px" fontWeight="bold"   >
                  LOGIN TO ACCOUNT
                </Text>
              </Box>
              <Form>
                <Stack gap="20px" >
                  <Field name='email' >
                    {({ field, meta }) =>
                      <FormControl isInvalid={!!(meta.error)} >
                        <FormLabel color="#333333" htmlFor="email"   >Email</FormLabel>
                        <Input borderRadius="12px" border="1px solid#333333" type='email' maxW="473px" {...field} name='email' />
                        <FormErrorMessage>{meta.error}</FormErrorMessage>
                      </FormControl>
                    }
                  </Field>
                  <Box>
                  <Field name='password' >
                    {({ field, meta }) =>
                      <FormControl isInvalid={!!(meta.error)} >
                        <FormLabel color="#333333" htmlFor="password"   >Password</FormLabel>
                        <Input borderRadius="12px" border="1px solid#333333" type='password' maxW="473px" {...field} name='password' />
                        <FormErrorMessage>{meta.error}</FormErrorMessage>
                      </FormControl>
                    }
                  </Field>
                  <Link to="/forgetpassword" ><Box as={"span"} fontWeight="bold" cursor="pointer" color="#570880" >Forget password?</Box></Link>
                  </Box>
                    
                </Stack>
                <Stack mt="20px" gap="20px" >
                  <Text color="#333333" >By creating an account, you agree to our <br /><Link to="termofuse" ><Box as={"span"} fontWeight="bold" cursor="pointer" color="#570880" >Terms of use</Box></Link> and <Link to="privacypolicy">
                    <Box as={"span"} cursor="pointer" fontWeight="bold" color="#570880" >Privacy Policy</Box></Link>  </Text>
                  <Stack>
                    
                    <Button  isLoading={isLoading} type="submit" _hover={{
                      backgroundColor: "#69268a"
                    }} w="270px" h="64px" fontSize="22px" borderRadius="32px" backgroundColor="#570880" color="white"  >Login</Button>
                    
                  </Stack>
                  <Text>Create your account ?<Link to="/signup" ><Box as={"span"} fontWeight="bold" color="#570880" cursor="pointer" >signup  </Box></Link>  </Text>
                </Stack>
              </Form>
            </Stack>
          </Stack>
      </Formik>
        </Stack>
      </Box  >
    </Flex>
  )
}

export default Signin

