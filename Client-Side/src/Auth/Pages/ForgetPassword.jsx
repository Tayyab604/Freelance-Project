
import { Box, Button, FormControl, FormErrorMessage, FormLabel, Icon, Input, Stack, Text, useToast } from '@chakra-ui/react';
import { GiPadlockOpen } from "react-icons/gi";
import { forgetPasswordValidation } from '../Validation/Validationj';
import { Field, Form, Formik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import { IoCaretBackCircle } from "react-icons/io5";
import { useMutation } from 'react-query';
import { ForgetThePassword } from '../../Api/query/userQuery';
import { useEffect } from 'react';


const ForgetPassword=()=> {
  useEffect(()=>{
    document.title = "Canfree | Forget Password"
  },[])
  const toast = useToast()
  const { mutate, isLoading } = useMutation({
    mutationKey: 'forgetthepassword',
    mutationFn: ForgetThePassword,
    onSuccess: () => {
      toast({
        title: "Successfully Forget Mail Send",
        status: "success"
      })
    },
    onError: (error,data) => {
      toast({
        title: "Forget Password Error",
        description: error.message,
        status: "error"
      })
      
    }
  })
   
  return (
    
      <Stack background="linear-gradient(180deg,#F082DA, #F5B484)" h="100vh" >
        <Link to="/login" ><Icon  ml="30px" mt="20px"  cursor="pointer" as={IoCaretBackCircle} color="#570880" fontSize="60px"   /></Link>
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
       <Icon    as={GiPadlockOpen} color="#570880" fontSize="60px"   />
       <Text fontWeight="bold" fontSize="30px" color="#570880" >Forget Password</Text>
       <Text textAlign="center" color="#570880" >Enter your email .We have send  you  an email for <br /> forget your password</Text>
       <Formik
          initialValues={{
            email: "",
          }}
          onSubmit={(values) => {
            mutate({
              email : values.email
            })
          }}
        validationSchema={forgetPasswordValidation}
        >
          
             
              <Form>
               
                  <Stack gap="20px" justifyContent="center" alignItems="center" >
                  <Field name='email' >
                    {({ field, meta }) =>
                      <FormControl isInvalid={!!(meta.error)} >
                        <Input  _placeholder={{ color : "#69268a"  }} placeholder='Email' borderRadius="12px" border="1px solid#69268a" type='email' w="373px" {...field} name='email' />
                        <FormErrorMessage>{meta.error}</FormErrorMessage>
                      </FormControl>
                    }
                  </Field>
                 
                    <Button  isLoading={isLoading} w="full" type="submit"   _hover={{
                              transition: "0.3s ease-out",
                              boxShadow:"0px 0px 30px #69268a",
                             
                               

                            }}    background="linear-gradient(180deg,#F082DA, #F5B484)" transition="0.3s ease-out" color="#69268a"  >Send Forget Mail</Button>
                  </Stack>

                    
            
                
                
              </Form>
          
        </Formik>
        
       </Stack>
        </Box>
       </Stack>
      </Stack>
  
  )
}

export default ForgetPassword




