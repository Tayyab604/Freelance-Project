import { Box, Button, Flex, FormControl, FormErrorMessage, FormLabel, Image, Input, Select, Stack, Text, useToast } from '@chakra-ui/react'
import { Field, Form, Formik } from 'formik'
import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signupFormValidation } from '../Validation/Validationj'
import { useMutation } from 'react-query'
import {SignUpUser} from '../../Api/query/userQuery'
import "../../index.css"
import { AuthContext } from '../../Provider/AuthProvider'

const Signup = () => {
  useEffect(()=>{
    document.title = "Canfree | Signup"
  },[])
  const navigate = useNavigate()
  const toast = useToast()
  const { mutate, isLoading } = useMutation({
    mutationKey: 'signup',
    mutationFn: SignUpUser,
    onSuccess: (data) => {
        navigate(`/register-email-verify/${data.email}`) 
    },
    onError: (error) => {
      toast({
        title: "Signup Error",
        description: error.message,
        status: "error"
      })
    }
  })


  return (
    <>
    <Box display="none" >
    </Box>
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
      <Box>

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
            username: "",
            email: "",
            password: "",
            role: ""
          }}
          onSubmit={(values) => {
           
            mutate({
              username: values.username,
              email: values.email,
              password: values.password,
              role: values.role
            })
            
           




          }}
          validationSchema={signupFormValidation}
        >
          <Stack justifyContent="center" h="100%" alignItems="center" >
            <Stack gap="10px"  >
              <Box>
                <Text fontSize="40px" fontWeight="bold" >
                  Create an account
                </Text>
              </Box>
              <Form>
                <Stack  >
                  <Field name='username' >
                    {({ field, meta }) =>
                      <FormControl isInvalid={!!(meta.error)} >
                        <FormLabel color="#333333" htmlFor="username"   >Username</FormLabel>
                        <Input borderRadius="12px" border="1px solid#333333" type='text' maxW="473px" {...field} name='username' />
                        <FormErrorMessage>{meta.error}</FormErrorMessage>
                      </FormControl>
                    }
                  </Field>
                  <Field name='email' >
                    {({ field, meta }) =>
                      <FormControl isInvalid={!!(meta.error)} >
                        <FormLabel color="#333333" htmlFor="email"   >Email</FormLabel>
                        <Input borderRadius="12px" border="1px solid#333333" type='email' maxW="473px" {...field} name='email' />
                        <FormErrorMessage>{meta.error}</FormErrorMessage>
                      </FormControl>
                    }
                  </Field>
                  <Field name='password' >
                    {({ field, meta }) =>
                      <FormControl isInvalid={!!(meta.error)} >
                        <FormLabel color="#333333" htmlFor="password"   >Password</FormLabel>
                        <Input borderRadius="12px" border="1px solid#333333" type='password' maxW="473px" {...field} name='password' />
                        <FormErrorMessage>{meta.error}</FormErrorMessage>
                      </FormControl>
                    }
                  </Field>
                  <Field name='role' >
                    {({ field, meta }) =>
                      <FormControl isInvalid={!!(meta.error)} >
                        <FormLabel color="#333333" htmlFor="password"   >Role</FormLabel>
                        <Select w="150px" borderRadius="10px" border="1px solid black" {...field} name="role"  placeholder='Select Role'>
                          <option  value='buyer'>Buyer</option>
                          <option  value='seller'>Seller</option>
                        </Select>
                        <FormErrorMessage>{meta.error}</FormErrorMessage>
                      </FormControl>
                    }
                  </Field>
                </Stack>
                <Stack mt="20px" gap="20px" >
                  <Text color="#333333" >By creating an account, you agree to our <br /><Link to="termofuse" ><Box as={"span"} fontWeight="bold" cursor="pointer" color="#570880" >Terms of use</Box></Link> and <Link to="privacypolicy">
                    <Box as={"span"} cursor="pointer" fontWeight="bold" color="#570880" >Privacy Policy</Box></Link>  </Text>
                  <Stack>
                    <Button isLoading={isLoading} type="submit" _hover={{
                      backgroundColor: "#69268a"
                    }} w="270px" h="64px" fontSize="22px" borderRadius="32px" backgroundColor="#570880" color="white"  >Signup</Button>
                  </Stack>
                  <Text>Already have an ccount?   <Link to="/login" ><Box as={"span"} fontWeight="bold" color="#570880" cursor="pointer" >Login  </Box></Link>  </Text>
                </Stack>
              </Form>
            </Stack>
          </Stack>
        </Formik>
        </Stack>
      </Box  >
    </Flex>
    </>

  )
}

export default Signup



