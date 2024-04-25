import React, { useEffect, useState } from 'react'
import HeaderLayout from './Components/HeaderLayout'
import styled from 'styled-components'
import { AccordionButton, AccordionIcon, AccordionPanel, Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Text, Accordion, AccordionItem, Stack, Flex, FormControl, FormLabel, Input, FormErrorMessage, Select, Button, Textarea, useToast, useDisclosure, AlertDialog, AlertDialogOverlay, AlertDialogContent, AlertDialogHeader, AlertDialogBody, AlertDialogFooter } from '@chakra-ui/react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Field, Form, Formik, connect } from 'formik'
import { ProfileBasicInfoValidation, ProfileEducationValidation, ProfileQualificationValidation, ProfileWorkExperienceValidation } from '../Auth/Validation/Validationj'
import { useMutation } from 'react-query'
import { GetAllDataOfProfile, GetAllDataOfProfileForUpdate, ProfileBasicInfo, ProfileEducation, ProfileQualifications, ProfileWorkExperience, UpdateProfileBasicInfo } from '../Api/query/ProfileQuery'
import useAuth from '../hooks/useAuth'

const Profile = () => {
  useEffect(() => {
    const GetUserprofile = async () => {
      try {
        const data = await GetAllDataOfProfile(email);
        setGetProfile(data)
      } catch (error) {
        console.log(error);
      }
    }
    GetUserprofile()
  }, [])
  const { user } = useAuth()
  const email = user.email
  const [GetProfile, setGetProfile] = useState(false)
  const [updateBasicInfo, setupdateBasicInfo] = useState(false)
  const [GetProfileForUpdate, setGetProfileForUpdate] = useState(false)
  const [SaveProfile, setSaveProfile] = useState(false)
  const [firstForm, setfirstForm] = useState("block")
  const [secondForm, setsecondForm] = useState("none")
  useEffect(() => {
    const GetUserprofileForUpdate = async () => {
      try {
        const data = await GetAllDataOfProfileForUpdate(email);
        setGetProfileForUpdate(data)
      } catch (error) {
        console.log(error);
      }
    }
    GetUserprofileForUpdate()
  }, [secondForm])
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = React.useRef()
  const navigate = useNavigate()
  const toast = useToast()
  const BasicInfo = useMutation({
    mutationKey: 'BasicInfo',
    mutationFn: ProfileBasicInfo,
    onSuccess: (data) => {
      setSaveProfile(data)
    },
    onError: (error) => {
      toast({
        title: "BasicInfo Error",
        description: error.message,
        status: "error"
      })
    }
  })
  const UpdateBasicInfo = useMutation({
    mutationKey: 'UpdateBasicInfo',
    mutationFn: UpdateProfileBasicInfo,
    onSuccess: (data) => {
      setupdateBasicInfo(data)
      setGetProfile(data)
      // setSaveProfile(data)
    },
    onError: (error) => {
      toast({
        title: "BasicInfo Error",
        description: error.message,
        status: "error"
      })
    }
  })
  if (BasicInfo.isSuccess) {
    toast({
      title: "Save Basic Info",
      status: "success"
    })
  }
  const ControllerHandler = () => {
    setGetProfile(false)
    setfirstForm("none")
    setsecondForm("block")
    onClose()
  }
  // basicInfo For Profile is End 
  const Education = useMutation({
    mutationKey: 'Education',
    mutationFn: ProfileEducation,
    onSuccess: (data) => {

    },
    onError: (error) => {
      toast({
        title: "Education Error",
        description: error.message,
        status: "error"
      })
    }
  })
  const Qualifications = useMutation({
    mutationKey: 'Qualifications',
    mutationFn: ProfileQualifications,
    onSuccess: (data) => {

    },
    onError: (error) => {
      toast({
        title: "Qualifications Error",
        description: error.message,
        status: "error"
      })
    }
  })
  const WorkExperience = useMutation({
    mutationKey: 'WorkExperience',
    mutationFn: ProfileWorkExperience,
    onSuccess: (data) => {

    },
    onError: (error) => {
      toast({
        title: "WorkExperience Error",
        description: error.message,
        status: "error"
      })
    }
  })
  return (
    <>
      <HeaderLayout />
      <Breadcrumb pl="50px" pt="100px" >
        <BreadcrumbItem>
          <NavLink to="/profile" > <BreadcrumbLink fontSize="20px" color="#570880" fontWeight="bold" >Profile</BreadcrumbLink> </NavLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Box boxShadow="0 0 5px #812eaa" w="100wh" h="200px" background="linear-gradient(180deg,#F2CFF5, white)" borderRadius="20px" mx="30px" ></Box>
      <Box position="absolute" top="200px" left="70px" w="200px" h="200px" borderRadius="full" boxShadow="0 0 5px #812eaa" background="linear-gradient(180deg,#F2CFF5, white)" ></Box>
      <Flex px="30px" py="30px" mt="50px"  >
        <Box px="30px" flexGrow="1" >
          <Accordion>
            <AccordionItem   >
              <h2>
                <AccordionButton  >
                  <Box fontSize="30px" color="#570880" fontWeight="bold" as="span" flex='1' textAlign='left'>
                    Basic Info
                  </Box>
                  <AccordionIcon color="#570880" />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Flex gap="20px" justifyContent="end" >
                </Flex>
                {
                  SaveProfile || GetProfile ?
                    <>
                      <Box border="5px solid #570880" p="15px" borderRadius="15px" w="850px" >
                        <Stack gap="30px" >
                          <Flex gap="100px" >
                            <Flex p="10px" borderRadius="10px" gap="5px" color="#69268a" fontSize="20px" >
                              <Text fontWeight="bold" >FirstName:</Text>{GetProfile && GetProfile.Profile.firstname}{SaveProfile && SaveProfile.Profile.firstname} {updateBasicInfo && updateBasicInfo.Profile[0].firstname}
                            </Flex>
                            <Flex  p="10px" borderRadius="10px" gap="5px" color="#69268a" fontSize="20px" >
                              <Text fontWeight="bold" >LastName:</Text>{GetProfile && GetProfile.Profile.lastname}{SaveProfile && SaveProfile.Profile.lastname}{updateBasicInfo && updateBasicInfo.Profile[0].lastname}
                            </Flex>
                            <Flex  p="10px" borderRadius="10px" gap="5px" color="#69268a" fontSize="20px" >
                              <Text fontWeight="bold" >Sex:</Text>{GetProfile && GetProfile.Profile.sex}{SaveProfile && SaveProfile.Profile.sex}{updateBasicInfo && updateBasicInfo.Profile[0].sex}
                            </Flex>
                          </Flex>
                          <Flex gap="50px" >
                            <Flex overflow="auto"  p="10px" borderRadius="10px" gap="5px" color="#69268a" fontSize="20px" >
                              <Text fontWeight="bold" >Date Of Birth:</Text>{GetProfile && GetProfile.Profile.dob}{SaveProfile && SaveProfile.Profile.dob}{updateBasicInfo && updateBasicInfo.Profile[0].dob}
                            </Flex>
                            <Flex overflow="auto" p="10px" borderRadius="10px" gap="5px" color="#69268a" fontSize="20px" >
                              <Text fontWeight="bold" >City:</Text>{GetProfile && GetProfile.Profile.city}{SaveProfile && SaveProfile.Profile.city}{updateBasicInfo && updateBasicInfo.Profile[0].city}
                            </Flex>
                            <Flex overflow="auto"p="10px" borderRadius="10px" gap="5px" color="#69268a" fontSize="20px" >
                              <Text fontWeight="bold" >Address:</Text>{GetProfile && GetProfile.Profile.address}{SaveProfile && SaveProfile.Profile.address}{updateBasicInfo && updateBasicInfo.Profile[0].address}
                            </Flex>
                          </Flex>
                          <Flex gap="50px" >
                            <Flex overflow="auto"  p="10px" borderRadius="10px" gap="30px" color="#69268a" fontSize="20px" >
                              <Text fontWeight="bold" >Title:</Text>{GetProfile && GetProfile.Profile.title}{SaveProfile && SaveProfile.Profile.title}{updateBasicInfo && updateBasicInfo.Profile[0].title}
                            </Flex>
                            <Flex  p="10px" borderRadius="10px" gap="30px" color="#69268a" fontSize="20px" >
                              <Text fontWeight="bold" >Skill:</Text>{GetProfile && GetProfile.Profile.primaryskill}{SaveProfile && SaveProfile.Profile.primaryskill}{updateBasicInfo && updateBasicInfo.Profile[0].primaryskill}
                            </Flex>

                          </Flex>
                          <Flex gap="100px" >
                            <Flex overflow="auto"  p="10px" borderRadius="10px" gap="30px" color="#69268a" fontSize="20px" >
                              <Text fontWeight="bold" >AboutSelf:</Text>
                              <Box w="700px" >
                                {GetProfile && GetProfile.Profile.aboutyourself}{SaveProfile && SaveProfile.Profile.aboutyourself}{updateBasicInfo && updateBasicInfo.Profile[0].aboutyourself}
                              </Box>
                            </Flex>


                          </Flex>
                          <Flex justifyContent="end" >
                            <Button _hover={{
                              transition: "0.3s ease-out",
                              boxShadow: "0px 0px 20px #69268a",



                            }} background="linear-gradient(180deg,#F082DA, #F5B484)" transition="0.3s ease-out" color="#69268a" w="150px" onClick={onOpen}>
                              Update
                            </Button>
                          </Flex>


                          <AlertDialog
                            isOpen={isOpen}
                            leastDestructiveRef={cancelRef}
                            onClose={onClose}
                          >
                            <AlertDialogOverlay>
                              <AlertDialogContent>
                                <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                                  Update BasicInfo
                                </AlertDialogHeader>

                                <AlertDialogBody>
                                  Are you sure?
                                </AlertDialogBody>

                                <AlertDialogFooter>
                                  <Button _hover={{
                                    transition: "0.3s ease-out",
                                    boxShadow: "0px 0px 20px #69268a",



                                  }} background="linear-gradient(180deg,#F082DA, #F5B484)" transition="0.3s ease-out" color="#69268a" w="150px" ref={cancelRef} onClick={onClose}>
                                    Cancel
                                  </Button>
                                  <Button
                                    _hover={{
                                      transition: "0.3s ease-out",
                                      boxShadow: "0px 0px 20px #69268a",



                                    }} background="linear-gradient(180deg,#F082DA, #F5B484)" transition="0.3s ease-out" color="#69268a" w="150px"
                                    onClick={ControllerHandler} colorScheme='red' ml={3}>
                                    Update
                                  </Button>
                                </AlertDialogFooter>
                              </AlertDialogContent>
                            </AlertDialogOverlay>
                          </AlertDialog>
                          <Flex justifyContent="end" >

                          </Flex>
                        </Stack>
                      </Box>
                    </>
                    :
                    <>
                      <Box border="5px solid #570880" p="20px" borderRadius="15px" display={firstForm} >
                        <Formik

                          initialValues={{
                            firstname: "",
                            lastname: "",
                            sex: "",
                            dob: "",
                            city: "",
                            address: "",
                            title: "",
                            primaryskill: "",
                            aboutyourself: ""
                          }}
                          onSubmit={(values) => {

                            BasicInfo.mutate({
                              email: email,
                              firstname: values.firstname,
                              lastname: values.lastname,
                              sex: values.sex,
                              dob: values.dob,
                              city: values.city,
                              address: values.address,
                              title: values.title,
                              primaryskill: values.primaryskill,
                              aboutyourself: values.aboutyourself
                            })





                          }}
                          validationSchema={ProfileBasicInfoValidation}
                        >



                          <Form>

                            <Flex gap="50px"  >
                              <Field name='firstname'  >
                                {({ field, meta }) =>
                                  <FormControl isInvalid={!!(meta.error)} >
                                    <FormLabel color="#570880" htmlFor="firstname"   >First Name</FormLabel>
                                    <Input borderRadius="12px" border="1px solid #570880" color="#570880" type='text' maxW="473px" {...field} name='firstname' />
                                    <FormErrorMessage>{meta.error}</FormErrorMessage>
                                  </FormControl>
                                }
                              </Field>
                              <Field name='lastname' >
                                {({ field, meta }) =>
                                  <FormControl isInvalid={!!(meta.error)} >
                                    <FormLabel color="#570880" htmlFor="lastname"   >Last Name</FormLabel>
                                    <Input border="1px solid #570880" color="#570880" borderRadius="12px" type='text' maxW="473px" {...field} name='lastname' />
                                    <FormErrorMessage>{meta.error}</FormErrorMessage>
                                  </FormControl>
                                }
                              </Field>
                              <Field name='sex' >
                                {({ field, meta }) =>
                                  <FormControl isInvalid={!!(meta.error)} >
                                    <FormLabel color="#570880" htmlFor="sex"   >Sex</FormLabel>
                                    <Select border="1px solid #570880" color="#570880" w="100%" borderRadius="10px"  {...field} name="sex" placeholder='Gender'>
                                      <option value='male'>Male</option>
                                      <option value='female'>Female</option>
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
                                    <FormLabel color="#570880" htmlFor="dob"   >Date of birth</FormLabel>
                                    <Input border="1px solid #570880" color="#570880" borderRadius="12px" type='date'  {...field} name='dob' />
                                    <FormErrorMessage>{meta.error}</FormErrorMessage>
                                  </FormControl>
                                }
                              </Field>
                              <Field name='city' >
                                {({ field, meta }) =>
                                  <FormControl isInvalid={!!(meta.error)} >
                                    <FormLabel color="#570880" htmlFor="city"   >City</FormLabel>
                                    <Input border="1px solid #570880" color="#570880" borderRadius="12px" type='text' maxW="473px" {...field} name='city' />
                                    <FormErrorMessage>{meta.error}</FormErrorMessage>
                                  </FormControl>
                                }
                              </Field>
                              <Field name='address' >
                                {({ field, meta }) =>
                                  <FormControl isInvalid={!!(meta.error)} >
                                    <FormLabel color="#570880" htmlFor="address"   >Address</FormLabel>
                                    <Input border="1px solid #570880" color="#570880" borderRadius="12px" type='text' maxW="473px" {...field} name='address' />
                                    <FormErrorMessage>{meta.error}</FormErrorMessage>
                                  </FormControl>
                                }
                              </Field>
                            </Flex>
                            <Flex gap="50px" >
                              <Field name='title' >
                                {({ field, meta }) =>
                                  <FormControl isInvalid={!!(meta.error)} >
                                    <FormLabel color="#570880" htmlFor="title"   >Professional Title</FormLabel>
                                    <Input border="1px solid #570880" color="#570880" borderRadius="12px" type='text' maxW="473px" {...field} name='title' />
                                    <FormErrorMessage>{meta.error}</FormErrorMessage>
                                  </FormControl>
                                }
                              </Field>
                              <Field name='primaryskill' >
                                {({ field, meta }) =>
                                  <FormControl isInvalid={!!(meta.error)} >
                                    <FormLabel color="#570880" htmlFor="primaryskill"   >Primaryskill</FormLabel>
                                    <Select border="1px solid #570880" color="#570880" w="100%" borderRadius="10px"  {...field} name="primaryskill" placeholder='Skill'>
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
                                  <FormLabel color="#570880" htmlFor="aboutyourself"   >About YourSelf</FormLabel>
                                  <Textarea border="1px solid #570880" color="#570880" placeholder='Type Here' borderRadius="12px" type='text' w="100%" {...field} name='aboutyourself' />
                                  <FormErrorMessage>{meta.error}</FormErrorMessage>
                                </FormControl>
                              }
                            </Field>
                            <Flex mt="20px" justifyContent="end"  >
                              <Button isLoading={BasicInfo.isLoading} type="submit" _hover={{
                                transition: "0.3s ease-out",
                                boxShadow: "0px 0px 20px #69268a",
                              }} w="100px" background="linear-gradient(180deg,#F082DA, #F5B484)" transition="0.3s ease-out" color="#69268a"  >Save
                              </Button>
                            </Flex>


                          </Form>


                        </Formik>
                      </Box>
                      <Box border="5px solid #570880" p="20px" borderRadius="15px" display={secondForm} >
                        <Formik

                          initialValues={{
                            firstname: GetProfileForUpdate && GetProfileForUpdate.Profile.firstname,
                            lastname: GetProfileForUpdate && GetProfileForUpdate.Profile.lastname,
                            sex: GetProfileForUpdate && GetProfileForUpdate.Profile.sex,
                            dob: GetProfileForUpdate && GetProfileForUpdate.Profile.dob,
                            city: GetProfileForUpdate && GetProfileForUpdate.Profile.city,
                            address: GetProfileForUpdate && GetProfileForUpdate.Profile.address,
                            title: GetProfileForUpdate && GetProfileForUpdate.Profile.title,
                            primaryskill: GetProfileForUpdate && GetProfileForUpdate.Profile.primaryskill,
                            aboutyourself: GetProfileForUpdate && GetProfileForUpdate.Profile.aboutyourself
                          }}
                          onSubmit={(values) => {

                            UpdateBasicInfo.mutate({
                              email: email,
                              firstname: values.firstname,
                              lastname: values.lastname,
                              sex: values.sex,
                              dob: values.dob,
                              city: values.city,
                              address: values.address,
                              title: values.title,
                              primaryskill: values.primaryskill,
                              aboutyourself: values.aboutyourself
                            })





                          }}
                          validationSchema={ProfileBasicInfoValidation}
                        >



                          <Form>
                            <Text color="#69268a" fontWeight="bold" mb="20px" >Update Basic Info</Text>
                            <Flex gap="50px" >
                              <Field name='firstname' >
                                {({ field, meta }) =>
                                  <FormControl isInvalid={!!(meta.error)} >
                                    <FormLabel color="#570880" htmlFor="firstname"   >First Name</FormLabel>
                                    <Input borderRadius="12px" border="1px solid #570880" color="#570880" type='text' maxW="473px" {...field} name='firstname' />
                                    <FormErrorMessage>{meta.error}</FormErrorMessage>
                                  </FormControl>
                                }
                              </Field>
                              <Field name='lastname' >
                                {({ field, meta }) =>
                                  <FormControl isInvalid={!!(meta.error)} >
                                    <FormLabel color="#570880" htmlFor="lastname"   >Last Name</FormLabel>
                                    <Input border="1px solid #570880" color="#570880" borderRadius="12px" type='text' maxW="473px" {...field} name='lastname' />
                                    <FormErrorMessage>{meta.error}</FormErrorMessage>
                                  </FormControl>
                                }
                              </Field>
                              <Field name='sex' >
                                {({ field, meta }) =>
                                  <FormControl isInvalid={!!(meta.error)} >
                                    <FormLabel color="#570880" htmlFor="sex"   >Sex</FormLabel>
                                    <Select border="1px solid #570880" color="#570880" w="100%" borderRadius="10px" {...field} name="sex" placeholder='Gender'>
                                      <option value='male'>Male</option>
                                      <option value='female'>Female</option>
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
                                    <FormLabel color="#570880" htmlFor="dob"   >Date of birth</FormLabel>
                                    <Input border="1px solid #570880" color="#570880" borderRadius="12px" type='date'  {...field} name='dob' />
                                    <FormErrorMessage>{meta.error}</FormErrorMessage>
                                  </FormControl>
                                }
                              </Field>
                              <Field name='city' >
                                {({ field, meta }) =>
                                  <FormControl isInvalid={!!(meta.error)} >
                                    <FormLabel color="#570880" htmlFor="city"   >City</FormLabel>
                                    <Input border="1px solid #570880" color="#570880" borderRadius="12px" type='text' maxW="473px" {...field} name='city' />
                                    <FormErrorMessage>{meta.error}</FormErrorMessage>
                                  </FormControl>
                                }
                              </Field>
                              <Field name='address' >
                                {({ field, meta }) =>
                                  <FormControl isInvalid={!!(meta.error)} >
                                    <FormLabel color="#570880" htmlFor="address"   >Address</FormLabel>
                                    <Input border="1px solid #570880" color="#570880" borderRadius="12px" type='text' maxW="473px" {...field} name='address' />
                                    <FormErrorMessage>{meta.error}</FormErrorMessage>
                                  </FormControl>
                                }
                              </Field>
                            </Flex>
                            <Flex gap="50px" >
                              <Field name='title' >
                                {({ field, meta }) =>
                                  <FormControl isInvalid={!!(meta.error)} >
                                    <FormLabel color="#570880" htmlFor="title"   >Professional Title</FormLabel>
                                    <Input border="1px solid #570880" color="#570880" borderRadius="12px" type='text' maxW="473px" {...field} name='title' />
                                    <FormErrorMessage>{meta.error}</FormErrorMessage>
                                  </FormControl>
                                }
                              </Field>
                              <Field name='primaryskill' >
                                {({ field, meta }) =>
                                  <FormControl isInvalid={!!(meta.error)} >
                                    <FormLabel color="#570880" htmlFor="primaryskill"   >Primaryskill</FormLabel>
                                    <Select border="1px solid #570880" color="#570880" w="100%" borderRadius="10px" {...field} name="primaryskill" placeholder='Skill'>
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
                                  <FormLabel color="#570880" htmlFor="aboutyourself"   >About YourSelf</FormLabel>
                                  <Textarea border="1px solid #570880" color="#570880" placeholder='Type Here' borderRadius="12px" type='text' w="100%" {...field} name='aboutyourself' />
                                  <FormErrorMessage>{meta.error}</FormErrorMessage>
                                </FormControl>
                              }
                            </Field>
                            <Flex mt="20px" justifyContent="end"  >
                              <Button isLoading={UpdateBasicInfo.isLoading} type="submit" _hover={{
                                transition: "0.3s ease-out",
                                boxShadow: "0px 0px 20px #69268a",
                              }} w="100px" background="linear-gradient(180deg,#F082DA, #F5B484)" transition="0.3s ease-out" color="#69268a"  >Update
                              </Button>
                            </Flex>


                          </Form>
                        </Formik>
                      </Box>
                    </>
                }
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box fontSize="30px" color="#570880" fontWeight="bold" as="span" flex='1' textAlign='left'>
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
                    enddata: "",
                    degree: "",
                  }}
                  onSubmit={(values) => {


                    Education.mutate({
                      country: values.country,
                      collage: values.collage,
                      startdata: values.startdata,
                      enddata: values.enddata,
                      degree: values.degree
                    })





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
                      <Button isLoading={Education.isLoading} type="submit" _hover={{
                        transition: "0.3s ease-out",
                        boxShadow: "0px 0px 20px #69268a",



                      }} w="100px" background="linear-gradient(180deg,#F082DA, #F5B484)" transition="0.3s ease-out" color="#69268a"  >Save
                      </Button>
                    </Flex>


                  </Form>


                </Formik>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box fontSize="30px" color="#570880" fontWeight="bold" as="span" flex='1' textAlign='left'>
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
                    summary: "",
                  }}
                  onSubmit={(values) => {

                    Qualifications.mutate({
                      certificate: values.certificate,
                      organization: values.organization,
                      startdata: values.startdata,
                      summary: values.summary
                    })






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
                          <Textarea placeholder='Type Here' borderRadius="12px" border="1px solid#333333" type='text' w="100%" {...field} name='summary' />
                          <FormErrorMessage>{meta.error}</FormErrorMessage>
                        </FormControl>
                      }
                    </Field>

                    <Flex mt="20px" justifyContent="end"  >
                      <Button isLoading={Qualifications.isLoading} type="submit" _hover={{
                        transition: "0.3s ease-out",
                        boxShadow: "0px 0px 20px #69268a",



                      }} w="100px" background="linear-gradient(180deg,#F082DA, #F5B484)" transition="0.3s ease-out" color="#69268a"  >Save
                      </Button>
                    </Flex>


                  </Form>


                </Formik>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box fontSize="30px" color="#570880" fontWeight="bold" as="span" flex='1' textAlign='left'>
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
                    enddata: "",
                    summary: "",
                  }}
                  onSubmit={(values) => {

                    WorkExperience.mutate({
                      position: values.position,
                      company: values.company,
                      startdata: values.startdata,
                      enddata: values.enddata,
                      summary: values.summary
                    })
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
                          <Textarea placeholder='Type Here' borderRadius="12px" border="1px solid#333333" type='text' w="100%" {...field} name='summary' />
                          <FormErrorMessage>{meta.error}</FormErrorMessage>
                        </FormControl>
                      }
                    </Field>
                    <Flex mt="20px" justifyContent="end"  >
                      <Button isLoading={WorkExperience.isLoading} type="submit" _hover={{
                        transition: "0.3s ease-out",
                        boxShadow: "0px 0px 20px #69268a",
                      }} w="100px" background="linear-gradient(180deg,#F082DA, #F5B484)" transition="0.3s ease-out" color="#69268a"  >Save
                      </Button>
                    </Flex>


                  </Form>


                </Formik>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box fontSize="30px" color="#570880" fontWeight="bold" as="span" flex='1' textAlign='left'>
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
                  <Box fontSize="30px" color="#570880" fontWeight="bold" as="span" flex='1' textAlign='left'>
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
        <Box>
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