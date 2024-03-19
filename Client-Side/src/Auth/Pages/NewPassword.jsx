
import { Box, Button, FormControl, FormErrorMessage, FormLabel, Icon, Input, Stack, Text, useToast } from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import {  useNavigate, useParams } from 'react-router-dom';

import { FaLock } from "react-icons/fa";
import { useMutation } from 'react-query';
import { UpdateForgetPassword } from '../../Api/query/userQuery';
import { UpdateforgetPasswordValidation } from '../Validation/Validationj';
import { useEffect } from 'react';



function NewPassword() {
  useEffect(()=>{
    document.title = "Canfree | New Password"
  },[])
  const {token}=useParams()
  const navigate = useNavigate()
  const toast = useToast()
  const { mutate, isLoading } = useMutation({
    mutationKey: 'updateforgetpassword',
    mutationFn: ({newpassword})=>UpdateForgetPassword({token,newpassword}),
    onSuccess: (data) => {
      toast({
        title: "Successfully Forget Password",
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
    
      <Stack background="linear-gradient(180deg,#F082DA, #F5B484)" h="100vh" justifyContent="center" alignItems="center" >
       <Stack justifyContent="center" alignItems="center" >
       <Box borderRadius="15px"  flexDir="column"  display="flex" justifyContent="center"   w={{
          lg : "500px",
          xl : "500px",
          base : "350px"
        }} h={{
          lg : "350px",
          xl : "350px",
          base : "324px"
        }} background="linear-gradient(135deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4))" backdropFilter="blur(10px)"  > 
       <Stack gap="10px" p="30px"  alignItems="center" >
       <Icon    as={FaLock} color="#570880" fontSize="60px"   />
       <Text fontWeight="bold" fontSize="30px" color="#570880" >Change Password</Text>
       <Text textAlign="center" color="#570880" >Enter new password below</Text>
       <Formik
          initialValues={{
            newpassword : ""
          }}
          onSubmit={(values) => {
            mutate({
              newpassword : values.newpassword
            })
            
          }}
          validationSchema={UpdateforgetPasswordValidation}
        >
          
             
              <Form>
               
                  <Stack gap="20px" justifyContent="center" alignItems="center" >
                  <Field name='newpassword' >
                    {({ field, meta }) =>
                      <FormControl isInvalid={!!(meta.error)} >
                        <Input  _placeholder={{ color : "#69268a"  }} placeholder='New Password' borderRadius="12px" border="1px solid#69268a" type='password' w="373px" {...field} name='newpassword' />
                        <FormErrorMessage>{meta.error}</FormErrorMessage>
                      </FormControl>
                    }
                  </Field>
                 
                    <Button isLoading={isLoading} w="full" type="submit"   _hover={{
                              transition: "0.3s ease-out",
                              boxShadow:"0px 0px 30px #69268a",
                             
                               

                            }}    background="linear-gradient(180deg,#F082DA, #F5B484)" transition="0.3s ease-out" color="#69268a"  >Change Password</Button>
                  </Stack>

                    
            
                
                
              </Form>
          
        </Formik>
        
       </Stack>
        </Box>
       </Stack>
       
      </Stack>
  
  )
}

export default NewPassword




