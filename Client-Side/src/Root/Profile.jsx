import React from 'react'
import HeaderLayout from './Components/HeaderLayout'
import styled from 'styled-components'
import { AccordionButton, AccordionIcon, AccordionPanel, Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Text,Accordion,AccordionItem, Stack, Flex, FormControl, FormLabel, Input, FormErrorMessage, Select, Button, Textarea } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import { Field, Form, Formik } from 'formik'
import { ProfileBasicInfoValidation, ProfileEducationValidation, ProfileQualificationValidation, ProfileWorkExperienceValidation } from '../Auth/Validation/Validationj'

const Profile = () => {
  return (
    <>
    <HeaderLayout/>
    <Breadcrumb pl="50px" pt="100px" >
        <BreadcrumbItem>
        <NavLink to="/profile" > <BreadcrumbLink fontSize="20px" color="#570880" fontWeight="bold" >Profile</BreadcrumbLink> </NavLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Box  boxShadow="0 0 5px #812eaa" w="100wh" h="200px" background="linear-gradient(180deg,#F2CFF5, white)" borderRadius="20px" mx="30px" ></Box>
      <Box position="absolute" top="200px" left="70px" w="200px" h="200px" borderRadius="full"  boxShadow="0 0 5px #812eaa" background="linear-gradient(180deg,#F2CFF5, white)" ></Box>
     <Flex px="30px" py="30px"  mt="50px"  >
    <Box px="30px" flexGrow="1" >
    <Accordion>
  <AccordionItem   >
    <h2>
      <AccordionButton  >
        <Box   fontSize="20px" color="#570880" fontWeight="bold" as="span" flex='1' textAlign='left'>
          Basic Info
        </Box>
        <AccordionIcon  color="#570880" />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <Formik
        
        initialValues={{
          firstname: "",
          lastname: "",
          sex: "",
          dob : "",
          city : "",
          address : "",
          title : "",
          primaryskill : "",
          aboutyourself : ""




        }}
        onSubmit={(values) => {
         
        console.log(values)
         




        }}
        validationSchema={ProfileBasicInfoValidation}
      >
        
         
            
            <Form>
            
                <Flex gap="50px" >
                <Field name='firstname' >
                  {({ field, meta }) =>
                    <FormControl isInvalid={!!(meta.error)} >
                      <FormLabel color="#333333" htmlFor="firstname"   >First Name</FormLabel>
                      <Input borderRadius="12px" border="1px solid#333333" type='text' maxW="473px" {...field} name='firstname' />
                      <FormErrorMessage>{meta.error}</FormErrorMessage>
                    </FormControl>
                  }
                </Field>
                <Field name='lastname' >
                  {({ field, meta }) =>
                    <FormControl isInvalid={!!(meta.error)} >
                      <FormLabel color="#333333" htmlFor="lastname"   >Last Name</FormLabel>
                      <Input borderRadius="12px" border="1px solid#333333" type='text' maxW="473px" {...field} name='lastname' />
                      <FormErrorMessage>{meta.error}</FormErrorMessage>
                    </FormControl>
                  }
                </Field>
                <Field name='sex' >
                  {({ field, meta }) =>
                    <FormControl isInvalid={!!(meta.error)} >
                      <FormLabel color="#333333" htmlFor="sex"   >Sex</FormLabel>
                      <Select w="100%" borderRadius="10px" border="1px solid black" {...field} name="sex"  placeholder='Gender'>
                        <option  value='male'>Male</option>
                        <option  value='female'>Female</option>
                      </Select>
                      <FormErrorMessage>{meta.error}</FormErrorMessage>
                    </FormControl>
                  }
                </Field>
                </Flex>
              <Flex gap="50px" >
              <Field name='dob' >
                  {({ field, meta }) =>
                    <FormControl isInvalid={!!(meta.error)} >
                      <FormLabel color="#333333" htmlFor="dob"   >Date of birth</FormLabel>
                      <Input borderRadius="12px" border="1px solid#333333" type='date'  {...field} name='dob' />
                      <FormErrorMessage>{meta.error}</FormErrorMessage>
                    </FormControl>
                  }
                </Field>
                <Field name='city' >
                  {({ field, meta }) =>
                    <FormControl isInvalid={!!(meta.error)} >
                      <FormLabel color="#333333" htmlFor="city"   >City</FormLabel>
                      <Input borderRadius="12px" border="1px solid#333333" type='text' maxW="473px" {...field} name='city' />
                      <FormErrorMessage>{meta.error}</FormErrorMessage>
                    </FormControl>
                  }
                </Field>
                <Field name='address' >
                  {({ field, meta }) =>
                    <FormControl isInvalid={!!(meta.error)} >
                      <FormLabel color="#333333" htmlFor="address"   >Address</FormLabel>
                      <Input borderRadius="12px" border="1px solid#333333" type='text' maxW="473px" {...field} name='address' />
                      <FormErrorMessage>{meta.error}</FormErrorMessage>
                    </FormControl>
                  }
                </Field>
              </Flex>
              <Flex gap="50px" >
              <Field name='title' >
                  {({ field, meta }) =>
                    <FormControl isInvalid={!!(meta.error)} >
                      <FormLabel color="#333333" htmlFor="title"   >Professional Title</FormLabel>
                      <Input borderRadius="12px" border="1px solid#333333" type='text' maxW="473px" {...field} name='title' />
                      <FormErrorMessage>{meta.error}</FormErrorMessage>
                    </FormControl>
                  }
                </Field>
              <Field name='primaryskill' >
                  {({ field, meta }) =>
                    <FormControl isInvalid={!!(meta.error)} >
                      <FormLabel color="#333333" htmlFor="primaryskill"   >Primaryskill</FormLabel>
                      <Select w="100%" borderRadius="10px" border="1px solid black" {...field} name="primaryskill"  placeholder='Skill'>
                      <option className='option' value="GraphicsDesign">Graphics & Designer</option>
                <option value="ProgrammingTech">Programming & Tech</option>
                <option value="DigitalMarketing">Digital Marketing</option>
                <option value="VideoAnimation">Video & Animation</option>
                <option value="WritingTranslation">Writing & Translation</option>
                <option value="Data">Data</option>
                <option value="OT">AI Services</option>
                      </Select>
                      <FormErrorMessage>{meta.error}</FormErrorMessage>
                    </FormControl>
                  }
                </Field>
               
              </Flex>
              <Field name='aboutyourself' >
                  {({ field, meta }) =>
                    <FormControl isInvalid={!!(meta.error)} >
                      <FormLabel color="#333333" htmlFor="aboutyourself"   >About YourSelf</FormLabel>
                      <Textarea  placeholder='Type Here'  borderRadius="12px" border="1px solid#333333" type='text' w="100%" {...field} name='aboutyourself' />
                      <FormErrorMessage>{meta.error}</FormErrorMessage>
                    </FormControl>
                  }
                </Field>
             
                
                
                
           
              
               
                <Flex mt="20px" justifyContent="end"  >
                <Button type="submit"   _hover={{
                              transition: "0.3s ease-out",
                              boxShadow:"0px 0px 20px #69268a",
                             
                               

                            }}  w="100px" background="linear-gradient(180deg,#F082DA, #F5B484)" transition="0.3s ease-out" color="#69268a"  >Save
                    </Button>
                </Flex>
               
          
            </Form>
      
      
      </Formik>
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box   fontSize="20px" color="#570880" fontWeight="bold" as="span" flex='1' textAlign='left'>
        Education 
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <Formik
        initialValues={{
          country: "",
          collage: "",
          startdata: "",
          enddata : "",
          degree : "",
        }}
        onSubmit={(values) => {
         
        console.log(values)
         




        }}
        validationSchema={ProfileEducationValidation}
      >
        
         
            
            <Form>
            
                <Flex gap="50px" >
                <Field name='country' >
                  {({ field, meta }) =>
                    <FormControl isInvalid={!!(meta.error)} >
                      <FormLabel color="#333333" htmlFor="country"   >Country</FormLabel>
                      <Input borderRadius="12px" border="1px solid#333333" type='text' maxW="473px" {...field} name='country' />
                      <FormErrorMessage>{meta.error}</FormErrorMessage>
                    </FormControl>
                  }
                </Field>
                <Field name='collage' >
                  {({ field, meta }) =>
                    <FormControl isInvalid={!!(meta.error)} >
                      <FormLabel color="#333333" htmlFor="collage"   >Universty/Collage</FormLabel>
                      <Input borderRadius="12px" border="1px solid#333333" type='text' maxW="473px" {...field} name='collage' />
                      <FormErrorMessage>{meta.error}</FormErrorMessage>
                    </FormControl>
                  }
                </Field>
                </Flex>
                <Field name='degree' >
                  {({ field, meta }) =>
                    <FormControl isInvalid={!!(meta.error)} >
                      <FormLabel color="#333333" htmlFor="degree"   >Degree</FormLabel>
                      <Input borderRadius="12px" border="1px solid#333333" type='text' w="100%" {...field} name='degree' />
                      <FormErrorMessage>{meta.error}</FormErrorMessage>
                    </FormControl>
                  }
                </Field>
              <Flex gap="50px" >
              <Field name='startdata' >
                  {({ field, meta }) =>
                    <FormControl isInvalid={!!(meta.error)} >
                      <FormLabel color="#333333" htmlFor="startdata"   >Start Date</FormLabel>
                      <Input borderRadius="12px" border="1px solid#333333" type='date'  {...field} name='startdata' />
                      <FormErrorMessage>{meta.error}</FormErrorMessage>
                    </FormControl>
                  }
                </Field>
                <Field name='enddata' >
                  {({ field, meta }) =>
                    <FormControl isInvalid={!!(meta.error)} >
                      <FormLabel color="#333333" htmlFor="enddata"   >End Date</FormLabel>
                      <Input borderRadius="12px" border="1px solid#333333" type='date'  {...field} name='enddata' />
                      <FormErrorMessage>{meta.error}</FormErrorMessage>
                    </FormControl>
                  }
                </Field>
              
              </Flex> 
                <Flex mt="20px" justifyContent="end"  >
                <Button type="submit"   _hover={{
                              transition: "0.3s ease-out",
                              boxShadow:"0px 0px 20px #69268a",
                             
                               

                            }}  w="100px" background="linear-gradient(180deg,#F082DA, #F5B484)" transition="0.3s ease-out" color="#69268a"  >Save
                    </Button>
                </Flex>
               
          
            </Form>
      
      
      </Formik>
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box   fontSize="20px" color="#570880" fontWeight="bold" as="span" flex='1' textAlign='left'>
        Qualifications
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <Formik
        initialValues={{
          certificate: "",
          organization: "",
          startdata: "",
          summary : "",
        }}
        onSubmit={(values) => {
         
        console.log(values)
         




        }}
        validationSchema={ProfileQualificationValidation}
      >
        
         
            
            <Form>
            
                <Flex gap="50px" >
                <Field name='certificate' >
                  {({ field, meta }) =>
                    <FormControl isInvalid={!!(meta.error)} >
                      <FormLabel color="#333333" htmlFor="certificate"   >Professional Certificate</FormLabel>
                      <Input borderRadius="12px" border="1px solid#333333" type='text' maxW="473px" {...field} name='certificate' />
                      <FormErrorMessage>{meta.error}</FormErrorMessage>
                    </FormControl>
                  }
                </Field>
                <Field name='organization' >
                  {({ field, meta }) =>
                    <FormControl isInvalid={!!(meta.error)} >
                      <FormLabel color="#333333" htmlFor="organization"   >Organization</FormLabel>
                      <Input borderRadius="12px" border="1px solid#333333" type='text' maxW="473px" {...field} name='organization' />
                      <FormErrorMessage>{meta.error}</FormErrorMessage>
                    </FormControl>
                  }
                </Field>
                <Field name='startdata' >
                  {({ field, meta }) =>
                    <FormControl isInvalid={!!(meta.error)} >
                      <FormLabel color="#333333" htmlFor="startdata"   >Start Date</FormLabel>
                      <Input borderRadius="12px" border="1px solid#333333" type='date'  {...field} name='startdata' />
                      <FormErrorMessage>{meta.error}</FormErrorMessage>
                    </FormControl>
                  }
                </Field>
                </Flex>
                <Field name='summary' >
                  {({ field, meta }) =>
                    <FormControl isInvalid={!!(meta.error)} >
                      <FormLabel color="#333333" htmlFor="summary"   >Summary</FormLabel>
                      <Textarea  placeholder='Type Here'  borderRadius="12px" border="1px solid#333333" type='text' w="100%" {...field} name='summary' />
                      <FormErrorMessage>{meta.error}</FormErrorMessage>
                    </FormControl>
                  }
                </Field>
               
                <Flex mt="20px" justifyContent="end"  >
                <Button type="submit"   _hover={{
                              transition: "0.3s ease-out",
                              boxShadow:"0px 0px 20px #69268a",
                             
                               

                            }}  w="100px" background="linear-gradient(180deg,#F082DA, #F5B484)" transition="0.3s ease-out" color="#69268a"  >Save
                    </Button>
                </Flex>
               
          
            </Form>
      
      
      </Formik>
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box   fontSize="20px" color="#570880" fontWeight="bold" as="span" flex='1' textAlign='left'>
        Work Experience 
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <Formik
        
        initialValues={{
          position: "",
          company: "",
          startdata: "",
          enddata : "",
          summary : "",



        }}
        onSubmit={(values) => {
         
        console.log(values)
         




        }}
        validationSchema={ProfileWorkExperienceValidation}
      >
        
         
            
            <Form>
            
                <Flex gap="50px" >
                <Field name='position' >
                  {({ field, meta }) =>
                    <FormControl isInvalid={!!(meta.error)} >
                      <FormLabel color="#333333" htmlFor="position"   >Your Position or Title</FormLabel>
                      <Input borderRadius="12px" border="1px solid#333333" type='text' maxW="473px" {...field} name='position' />
                      <FormErrorMessage>{meta.error}</FormErrorMessage>
                    </FormControl>
                  }
                </Field>
                <Field name='company' >
                  {({ field, meta }) =>
                    <FormControl isInvalid={!!(meta.error)} >
                      <FormLabel color="#333333" htmlFor="company"   >Your Company</FormLabel>
                      <Input borderRadius="12px" border="1px solid#333333" type='text' maxW="473px" {...field} name='company' />
                      <FormErrorMessage>{meta.error}</FormErrorMessage>
                    </FormControl>
                  }
                </Field>
                </Flex>
              <Flex gap="50px" >
              <Field name='startdata' >
                  {({ field, meta }) =>
                    <FormControl isInvalid={!!(meta.error)} >
                      <FormLabel color="#333333" htmlFor="startdata"   >Start Date</FormLabel>
                      <Input borderRadius="12px" border="1px solid#333333" type='date'  {...field} name='startdata' />
                      <FormErrorMessage>{meta.error}</FormErrorMessage>
                    </FormControl>
                  }
                </Field>
                <Field name='enddata' >
                  {({ field, meta }) =>
                    <FormControl isInvalid={!!(meta.error)} >
                      <FormLabel color="#333333" htmlFor="enddata"   >End Date</FormLabel>
                      <Input borderRadius="12px" border="1px solid#333333" type='date'  {...field} name='enddata' />
                      <FormErrorMessage>{meta.error}</FormErrorMessage>
                    </FormControl>
                  }
                </Field>
              
              </Flex>
              <Field name='summary' >
                  {({ field, meta }) =>
                    <FormControl isInvalid={!!(meta.error)} >
                      <FormLabel color="#333333" htmlFor="summary"   >Summary</FormLabel>
                      <Textarea  placeholder='Type Here'  borderRadius="12px" border="1px solid#333333" type='text' w="100%" {...field} name='summary' />
                      <FormErrorMessage>{meta.error}</FormErrorMessage>
                    </FormControl>
                  }
                </Field>
             
                
                
                
           
              
               
                <Flex mt="20px" justifyContent="end"  >
                <Button type="submit"   _hover={{
                              transition: "0.3s ease-out",
                              boxShadow:"0px 0px 20px #69268a",
                             
                               

                            }}  w="100px" background="linear-gradient(180deg,#F082DA, #F5B484)" transition="0.3s ease-out" color="#69268a"  >Save
                    </Button>
                </Flex>
               
          
            </Form>
      
      
      </Formik>
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box   fontSize="20px" color="#570880" fontWeight="bold" as="span" flex='1' textAlign='left'>
        Portfolio items 
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box   fontSize="20px" color="#570880" fontWeight="bold" as="span" flex='1' textAlign='left'>
        Certificates 
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>
</Accordion>
    </Box>
     <Box  >
      
     <Dabba2  >
          <Stack mt="70px" color="#812eaa" gap="30px" >

            
            <Stack gap="60px" >
            <Flex justifyContent="space-between" px="20px" fontSize="20px" fontWeight="bold" >
              <Text >Response rate</Text>
              <Text  >12</Text>
            </Flex>
              <Flex justifyContent="space-between" px="20px" fontSize="20px" fontWeight="bold" >
                <Text>Profile Completion</Text>
                <Text>123</Text>
              </Flex>
              <Flex justifyContent="space-between" px="20px" fontSize="20px" fontWeight="bold" >
                <Text>Project completed</Text>
                <Text>123</Text>
              </Flex>
              <Flex justifyContent="space-between" px="20px" fontSize="20px" fontWeight="bold" >
                <Text>Contest won</Text>
                <Text>12312</Text>
              </Flex>
              <Flex justifyContent="space-between" px="20px" fontSize="20px" fontWeight="bold" >
                <Text>Test score</Text>
                <Text>800</Text>
              </Flex>
              <Flex justifyContent="space-between" px="20px" fontSize="20px" fontWeight="bold" >
                <Text>Repeat Client Rate</Text>
                <Text>50</Text>
              </Flex>
              
            </Stack>
          </Stack>
        </Dabba2>
     </Box>
        </Flex>
    </>
  )
}

export default Profile

const Dabba2 = styled.div`
  box-shadow: 0 0 5px #812eaa;

    width: 500px;
    height: 1000px;
 
    background:linear-gradient(180deg,#F2CFF5, white);
    border:1px solid rgba(255, 255, 255, 0.18);
    border-radius: 15px;
    font-family: "Poppins", sans-serif;
    
    `