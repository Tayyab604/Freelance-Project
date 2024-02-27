import { Box, Button, Flex, FormControl, FormErrorMessage, FormLabel, Image, Input, Stack, Text } from '@chakra-ui/react'
import { Field, Form, Formik } from 'formik'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { signupFormValidation } from '../Validation/Validationj'



const Signup = () => {
  const navigate = useNavigate()
  return (
    <Flex w="100wh" h="100vh" >
      <BgImg   >
        <Flex h="100%" flexDir="column" justifyContent="center" alignItems="center" >
          <Text fontSize="64px" fontWeight="bold" color="#570880" >WELCOME TO</Text>
          <Image w="300px" src='./Images/Logo.png' />
        </Flex>
      </BgImg>
      <Box flexGrow="1" >
        <Formik
          initialValues={{
            username: "",
            email: "",
            password: ""
          }}
          onSubmit={(values) => {
            console.log(values)
            if (values) {
              navigate("/selectrole")
            }

          }}
          validationSchema={signupFormValidation}
        >
          <Stack justifyContent="center" h="100%" alignItems="center" >
            <Stack gap="30px"  >
              <Box>
                <Text fontSize="32px" fontWeight="medium" >
                  Create an account
                </Text>
              </Box>
              <Form>
                <Stack gap="20px" >
                  <Field name='username' >
                    {({ field, meta }) =>
                      <FormControl isInvalid={!!(meta.error)} >
                        <FormLabel color="#333333" htmlFor="username"   >Username</FormLabel>
                        <Input borderRadius="12px" border="1px solid#333333" type='text' w="473px" {...field} name='username' />
                        <FormErrorMessage>{meta.error}</FormErrorMessage>
                      </FormControl>
                    }
                  </Field>
                  <Field name='email' >
                    {({ field, meta }) =>
                      <FormControl isInvalid={!!(meta.error)} >
                        <FormLabel color="#333333" htmlFor="email"   >Email</FormLabel>
                        <Input borderRadius="12px" border="1px solid#333333" type='email' w="473px" {...field} name='email' />
                        <FormErrorMessage>{meta.error}</FormErrorMessage>
                      </FormControl>
                    }
                  </Field>
                  <Field name='password' >
                    {({ field, meta }) =>
                      <FormControl isInvalid={!!(meta.error)} >
                        <FormLabel color="#333333" htmlFor="password"   >Password</FormLabel>
                        <Input borderRadius="12px" border="1px solid#333333" type='password' w="473px" {...field} name='password' />
                        <FormErrorMessage>{meta.error}</FormErrorMessage>
                      </FormControl>
                    }
                  </Field>
                </Stack>
                <Stack mt="20px" gap="20px" >
                  <Text color="#333333" >By creating an account, you agree to our <br /><Link to="termofuse" ><Box as={"span"} fontWeight="bold" cursor="pointer" color="#570880" >Terms of use</Box></Link> and <Link to="privacypolicy">
                    <Box as={"span"} cursor="pointer" fontWeight="bold" color="#570880" >Privacy Policy</Box></Link>  </Text>
                  <Stack>
                    <Button type="submit" _hover={{
                      backgroundColor: "#69268a"
                    }} w="270px" h="64px" fontSize="22px" borderRadius="32px" backgroundColor="#570880" color="white"  >Signup</Button>
                  </Stack>
                  <Text>Already have an ccount?   <Link to="/login" ><Box as={"span"} fontWeight="bold" color="#570880" cursor="pointer" >Login  </Box></Link>  </Text>
                </Stack>
              </Form>
            </Stack>
          </Stack>
        </Formik>
      </Box  >
    </Flex>

  )
}

export default Signup

const BgImg = styled.div`
background-image: url("./Images/Background Signup.png");
background-size: cover;
background-position: center;
flex-grow: 1;
`
