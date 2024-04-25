
import { Box, Button, Flex, Icon, Image, Input, InputGroup, Stack, Text,Drawer,
  DrawerBody, VStack,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton, useDisclosure,
  useBreakpointValue} from '@chakra-ui/react';
  
import { TiDelete } from "react-icons/ti";
import { FaBars, FaRegCircleUser } from "react-icons/fa6";
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { CiSearch } from "react-icons/ci";
import 'react-awesome-slider/dist/styles.css'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useEffect } from 'react';
const PublicPage = () => {
  useEffect(()=>{
    document.title = "Canfree | Public"
  },[])
  const sectio1 = [
    "Graphic design",
    "Marketing",
    "Web development",
    "Logo Design"
  ]
  const section3 = [
    {
      mainH: "Find Top Talent",
      subH: "Browse a Global Pool of Skilled Freelancers"
    },
    {
      mainH: "Simplify Your Workflow",
      subH: "One Platform, Seamless Project Management"
    },
    {
      mainH: "Achieve Your Goals",
      subH: "Get High-Quality Work Delivered on Time, On Budget"
    },


  ]
  const section5 = [
    {
      maintext: "Post a job  Hire a pro",
      subtext: "Find Marketplace"
    },
    {
      maintext: "Browse & Buy Projects",
      subtext: "Project Catalog"
    },
    {
      maintext: "Contest:Get your love",
      subtext: "Post Contest"
    },
  ]
  const section6 = [
    {
      mainH: "Global Talent Pool",
      subH: "Find the perfect skills, anywhere."
    },
    {
      mainH: "Cost-Effective & Flexible",
      subH: "Pay only for what you need."
    },
    {
      mainH: "Streamlined Workflow",
      subH: "Manage projects seamlessly."
    },
  ]
  const section2=[
    {
      text : "Logo design",
      img : "./Images/main section2/ai.png"
    },
    {
      text : "Marketing",
      img : "./Images/main section2/marketing.png"
    },
    {
      text : "Image Editing",
      img : "./Images/main section2/ps.png"
    },
    {
      text : "Development",
      img : "./Images/main section2/development.png"
    },
    {
      text : "Writing",
      img : "./Images/main section2/writing.png"
    },
    {
      text : "Data Base",
      img : "./Images/main section2/database.png"
    },
  ]
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#570880" ,borderRadius:"90px" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block",  background: "#570880",borderRadius:"90px" }}
        onClick={onClick}
      />
    );
  }
  const slidesToShow = useBreakpointValue({ base: 1,md: 3,lg:4, xl: 4 });
  const slidesToScroll = useBreakpointValue({base: 1,md: 3,xl: 3})
  const settings={
    dots:true,
    Infinite:true,
    speed:500,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  }
  const { isOpen, onClose, onOpen} = useDisclosure();
  return (
    <>
      
      <Box position="fixed" top="0" zIndex="1" w="100%" bgImg={"./Images/bg.png"} backgroundPosition='center' backgroundRepeat='no-repeat' backgroundSize='cover' borderEndRadius='15px'  borderEndStartRadius='15px' display={{base: "none",md: 'block'}}>

        <Box boxShadow="0 0px 5px #812eaa" h='100%' w='100%'
        bgGradient='linear(#ffffff66, #ffffff66)' backdropFilter='10px' backdropBlur='10px' border='1px #ffffff66' borderEndEndRadius='15px' borderEndStartRadius='15px' p='10px'>

          <Flex justifyContent="space-between" pl="50px" alignItems="center" h="100%" px={{
            md: "40px",
            lg: "40px",
            xl: "100px",
          }} >
            <Flex gap="50px" alignItems="center" >
              <Box>
                <img width="127px" height="86px" src="./Images/Logo.png" alt="" />
              </Box>
            </Flex>
            <Flex gap={{
              md: "20px",
              lg: "30px",
              xl: "50px",
              }} > 
              {/* <Text display={{md:'none',lg:'none',xl:'block'}}>XL</Text>
              <Text display={{md:'none',lg:'block',xl:'none'}}>LG</Text>
              <Text display={{md:'block',lg:'none',xl:'none'}}>MD</Text> */}
              <NavLink to="/signup">
                <Flex justifyContent="center" alignItems="center" color="#812eaa" fontWeight="bold" borderRadius="10px" w="148px" h="52px" boxShadow="5px 5px 10px #ffffff" background="linear-gradient(90deg,#F082DA, #F5B484)" >Signup
                </Flex>
              </NavLink>
              <NavLink to="/login"
              >
                <Flex boxShadow="5px 5px 10px #ffffff" justifyContent="center" alignItems="center" color="#812eaa" fontWeight="bold" borderRadius="10px" w="148px" h="52px" background="linear-gradient(90deg,#F082DA, #F5B484)">Login
                </Flex>
              </NavLink>
            </Flex>
          </Flex>
        </Box>
      </Box>
      <Box position="fixed" top="0" zIndex="1" w="100%" bgImg={"./Images/bg.png"} backgroundPosition='center' backgroundRepeat='no-repeat' backgroundSize='cover' borderEndRadius='15px'  borderEndStartRadius='15px' 
    display={{
        base: 'block',
        md: 'none',
        lg: 'none',
        xl: 'none',
    }}>
      <Box boxShadow="0 0px 5px #812eaa" h='100%' w='100%'
        bgGradient='linear(#ffffff66, #ffffff66)' backdropFilter='10px' backdropBlur='10px' border='1px #ffffff66' borderEndEndRadius='15px' borderEndStartRadius='15px' p='10px'>
      <Flex justify='space-between' pl='50px' align='center' h='50%' px='25px' >
            <Box>
              <Image src='./Images/Logo.png' h='80px'/>
            </Box>
        <Icon as={FaBars} onClick={onOpen} fontSize='40px' color="#812eaa"  />

            <Drawer 
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
       
      >
        <DrawerOverlay />
        <DrawerContent>
            <DrawerCloseButton as={TiDelete}
            position='absolute' boxSize='10' left='1vh' top='1vh' color="#812eaa"
            // dropShadow="5px 5px 10px #ffffff66"
            />
            {/* <DrawerCloseButton/> */}
          
            <Box 
            // boxShadow="0 0px 5px #812eaa" h='100%' w='100%'
            // bgGradient='linear(#ffffff66, #ffffff66)' backdropFilter='10px' backdropBlur='10px'  
            >
          <DrawerBody 
          position="fixed" top="0" h='100%' w="100%" bgImg={"./Images/bg.png"} backgroundPosition='center' backgroundRepeat='no-repeat' backgroundSize='cover' zIndex='-1'
          >
            <VStack mt='70px' gap='30px'>
            <NavLink to="/signup" >
                <Flex justifyContent="center" alignItems="center" color="#812eaa" fontWeight="bold" borderRadius="10px" w="260px" h="52px" bg='white'>Sign Up
                </Flex>
              </NavLink>
              <NavLink to="/login"
              >
                <Flex justifyContent="center" alignItems="center" color="#812eaa" fontWeight="bold" borderRadius="10px" w="260px" h="52px" bg='white'>Log In
                </Flex>
              </NavLink>
            </VStack>
          </DrawerBody>
            </Box>
        </DrawerContent>
      </Drawer>
      
      </Flex>
      </Box>

      </Box>
      
<Stack gap="50px">

      <Flex justifyContent="center" mx='20px' >
        <Box background="linear-gradient(180deg,#F2CFF5, white)"  boxShadow="0 4px 4px #F082DA" borderRadius="15px" mt="150px" 
        w={{
          base: '260px',
          sm: '480px',
          md: '680px',
          lg: "1374px",
        }} 
        h={{
          sm: "550px",
          md: "700px",
          lg: "380px",
        }}
        pb={{
          base: '15px',
          sm: '0px',
        }}
        backgroundColor="black" >
          <Flex 
          gap={{
            md: "50px",
            lg: "30px",
            xl: '30px',
          }}
          flexDir={{
            base: 'column-reverse',
            sm: 'column-reverse',
            md: 'column-reverse',
            lg: 'row',
          }} 
          justify="center"
          alignItems="center" 
          h="100%" >

            <Flex
              px={{
                base: '10px',
                sm: '0px',
                md: '0px',
                lg: '0px',
                xl: '0px',
              }}
            h={{
              md: '350px',
              lg: '300px',
            }}
            flexDir={{
              base: 'column',
              md: 'column',
              lg: 'column',
              xl: 'column',
            }} 
            gap={{
              base: '20px',
              sm: '30px',
              md: '50px',
              lg: '50px',
              xl: '50px',
            }} 
            align='center'>
              <Text 
              pt={{
                sm: '20px',
                md: '0px',
                lg: '0px',
                xl: '0px',
              }} 
              fontSize={{
                base: '13px',
                sm: '18px',
                md: '30px',
                lg: '30px'
              }} fontWeight="bold" color="#812eaa" >Find the perfect match
                for your project</Text>
              <InputGroup px="20px" background="white" alignItems="center" 
              w={{
                base: '240px',
                sm: '300px',
                md: '600px',
                lg: '620px',
                xl: '750px',
                }} h="50px" boxShadow="0 0 5px #812eaa" borderRadius="15px"  >
                <Input variant="unstyled" h="50px" color="#812eaa" fontSize="20px" placeholder="Search"></Input>
                <Icon color="#812eaa" as={CiSearch} fontSize="30px" />
              </InputGroup>
              
              <Flex flexDir={{
                base: 'column',
                md: 'column',
                lg: 'row',
                xl: 'row  ',
              }} gap='5px'
              align={{
                base: 'center',
                md: 'normal',
                lg: 'center',
              }}
              >
                <Text color="#812eaa" 
                pb={{
                  sm: '5px',
                  md: '10px',
                  lg: '0px',
                }}
                pl={{
                  sm: '5px'
                }}
                fontSize={{
                  md: '25px',
                  lg: '15px'
                }} fontWeight="bold" >Mostly Searched:</Text>
                <Flex 
                px={{
                  sm: '5px'
                }}
                gap={{
                  base: '5px',
                  sm: '5px',
                  md: '20px',
                  lg: '5px',
                  xl: '10px',
                }} 
                flexDirection={{
                  base: 'column',
                  sm: 'row',
                  md: 'row',
                  lg: 'row',
                }}
                >
                  {
                    sectio1.map((data) => (
                      <Flex >
                      <Button cursor="pointer" justifyContent="center"  alignItems="center" fontWeight="bold" bg='none' color='#812eaa' 
                      w={{
                        base: "220px",
                        sm: "110px",
                        lg: "120px",
                        xl: "150px",
                      }}
                     h="33px" borderRadius="10px" border="2px solid #812eaa" 
                     flexDir={{
                        base: 'column',
                        md: 'column',
                        lg: 'row',
                        xl: 'row  ',
                      }}
                      >
                        <Text fontSize={{
                        base:  "15px",
                        sm:  "11px",
                        lg:  "13px",
                        xl: "15px"
                      }}>{data}</Text>
                      </Button>
                      </Flex>
                    ))
                  }
                </Flex>

              </Flex>
            </Flex>
            <Image w="310px" h="263px" src="./Images/main section1.png" p={{
              base: '25px',
              sm: '0px',
              md: '0px',
              lg: '0px',
              xl: '0px',
            }}/>
          </Flex>

        </Box>
      </Flex>

      <Text color="#570880" fontSize="30px" fontWeight="bold" mt="20px" ml="100px" >Popular Services</Text>
        <Flex  justifyContent="center" mx='20px' 
        >
        <Box w={{base:'180px',sm: '250px',md:'680px',lg:'850px',xl:'1200px'}} h="300px"> 
         <Slider  {...settings}>
        {
          section2.map((data)=>(
             <Flex mx='10px'> 
            <Stack display='flex' dir='row' justifyContent="center" alignItems="center" borderRadius="15px" background="linear-gradient(180deg,#F082DA, #F5B484)"
            w={{
              base: '168px',
              sm: '228px',
              md: '178px',
              lg: '178px',
              xl: '278px',
            }}
            h={{
              base: "200px",
              sm: "220px",
              md: "180px",
              lg: "200px",
              xl: "250px",
            }}
            >
        <Text color="#570880" fontWeight="bold"
        fontSize={{
            base: '20px',
            sm: '20px',
            md: '20px',
            lg: '20px',
            xl: '25px',
        }} >{data.text}</Text>
        <Image  src={data.img} w={{base:'100px',sm:'140px',md:'120px',lg: '120px',xl:'200px'}} 
        />
        </Stack>
         </Flex> 
          ))
        }


        </Slider>
         </Box>
        </Flex>
    

      <Box background="linear-gradient(180deg,#F082DA, #F5B484)" boxShadow="0 4px 4px #F082DA" borderRadius="15px"  backgroundColor="black" 
      
      ml={{
        base: '10px',
        sm: '133px',
        md: '150px',
        lg: '30px',
        xl: '70px',
      }}
      w={{
        base: '92%',
        sm: '65%',
        md: '70%',
        lg: "95%",
        xl: "91%",
      }}
      h={{
        md: "920px",
        lg: "538px",
      }} 
      p={{
        lg: '30px'
      }}
      >
        <Flex justifyContent="center" alignItems="center" h="100%" gap="10px"
        flexDir={{
          base: 'column-reverse',
          lg: 'row',
        }}>
          <Stack gap="30px" 
          pb={{
            base: '20px',
            sm: '20px',
            md: '10px',
            lg: '0px',
          }} 
          px={{
            base: '15px',
            sm: '30px',
            md: '30px',
            lg: '0px',
          }}
          >
            <Text color="#570880" fontSize="32px" fontWeight="bold" >Spotlight benefits</Text>
            <Stack>
              {
                section3.map((data) => (
                  <>
                    <Flex gap="10px" >
                      <Image w="38px" h="38px" src="./Images/icon.png" />
                      <Stack>
                        <Text color="#570880" fontSize="25px" fontWeight="bold" >{data.mainH}</Text>
                        <Text color="#570880" fontSize="25px" >{data.subH}</Text>
                      </Stack>
                    </Flex>
                  </>
                ))
              }

            </Stack>
          </Stack>
          <Image src="./Images/main section3.png" />
        </Flex>
      </Box>

      <Text color="#570880" fontSize="30px" fontWeight="bold" ml={{base:'40px', sm: '80px',md:'100px'}} >We've got you covered </Text>

      <Box borderRadius="15px" w="100%" h={{base: '450px', md: '400px',xl:'550px'}}>
        <Stack gap={{base: '0px',sm: '70px'}} justifyContent="center" alignItems="center" h={{base: '100%',md: '70%',lg: '80%'}} flexDir={{base: 'row',md:'column'}}>
          <Flex gap={{base: '5px',sm: '30px',md: '60px', lg: '80px', xl: '100px'}} flexDir={{base: 'column', md: 'row'}}>
            <Stack gap={{base:'5px',sm:'20px'}} alignItems="center">
              <Image w={{base:'70px',sm: '60px',lg: '80px', xl: '100px'}} src="./Images/main section4/graphic.png" />
              <Text color="#570880" fontWeight="bold" fontSize={{base:'13px',sm: '12px',lg: '18px',xl: '25px'}}>Graphic design</Text>
            </Stack>
            <Stack gap={{base:'5px',sm:'20px'}} alignItems="center" >
              <Image w={{base:'70px',sm: '60px',lg: '80px', xl: '100px'}}  src="./Images/main section4/marketing.png" />
              <Text fontSize={{base:'13px',sm: '12px',lg: '18px',xl: '25px'}} color="#570880" fontWeight="bold" >Marketing</Text>
            </Stack>
            <Stack gap={{base:'5px',sm:'20px'}} alignItems="center" >
              <Image w={{base:'70px',sm: '60px',lg: '80px', xl: '100px'}}  src="./Images/main section4/writing.png" />
              <Text fontSize={{base:'13px',sm: '12px',lg: '18px',xl: '25px'}} color="#570880" fontWeight="bold" >Writing &Translation</Text>
            </Stack>
            <Stack gap={{base:'5px',sm:'20px'}} alignItems="center" >
              <Image w={{base:'70px',sm: '60px',lg: '80px', xl: '100px'}}  src="./Images/main section4/video.png" />
              <Text fontSize={{base:'13px',sm: '12px',lg: '18px',xl: '25px'}} color="#570880" fontWeight="bold" >Video & Animation</Text>
            </Stack>
          </Flex>
          <Flex gap={{base: '5px',sm: '30px',md: '40px',lg: '90px', xl: '150px'}}flexDir={{base: 'column', md: 'row'}}>
            <Stack gap={{base:'5px',sm:'20px'}} alignItems="center" >
              <Image w={{base:'70px',sm: '60px',lg: '80px', xl: '100px'}} mx='25px' src="./Images/main section4/tech.png" />
              <Text fontSize={{base:'13px',sm: '12px',lg: '18px',xl: '25px'}} color="#570880" fontWeight="bold" >Tech</Text>
            </Stack>
            <Stack gap={{base:'5px',sm:'20px'}} alignItems="center" >
              <Image w={{base:'70px',sm: '60px',lg: '80px', xl: '100px'}} mx='25px' src="./Images/main section4/business.png" />
              <Text fontSize={{base:'13px',sm: '12px',lg: '18px',xl: '25px'}} color="#570880" fontWeight="bold" >Business</Text>
            </Stack>
            <Stack gap={{base:'5px',sm:'20px'}} alignItems="center" >
              <Image w={{base:'70px',sm: '60px',lg: '80px', xl: '100px'}} mx='25px' src="./Images/main section4/data.png" />
              <Text fontSize={{base:'13px',sm: '12px',lg: '18px',xl: '25px'}} color="#570880" fontWeight="bold" >Data</Text>
            </Stack>
            <Stack gap={{base:'5px',sm:'20px'}} alignItems="center" >
              <Image w={{base:'70px',sm: '60px',md: '100px',lg: '80px', xl: '100px'}} mx='25px' src="./Images/main section4/development.png" />
              <Text fontSize={{base:'13px',sm: '12px',lg: '18px',xl: '25px'}} color="#570880" fontWeight="bold" >Development</Text>
            </Stack>




          </Flex>
        </Stack>
      </Box>
      {/* ye niche wala box pehle styled component k through style hwa tha - ImageContainer */}

      <Box mx='40px'>
      <Box w='100%' h='538px' bgImg="./Images/main section5pic.png" backgroundPosition='center' backgroundRepeat='no-repeat' backgroundSize='cover' borderRadius='15px' 
      
      >
        <Flex gap={{base:'15px',sm:'20px',md:'10px',lg:'20px',xl:'50px'}} justifyContent="center"  alignItems={{sm:'center',md:'end'}} h="100%" pb="50px" px='30px' flexDir={{base:'column',sm:'column',md:'row'}} pt={{base:'40px',sm:'55px',md:'0px'}}>
          {
            section5.map((data) => (
              <Flex w={{base:'140px',sm:'280px',md:'428px'}} h={{base:'108px',sm:'120px',md:'108px',lg:'158px',xl:'198px'}} bg='green' justifyContent="center" alignItems="center" background="linear-gradient(180deg,#f5a1e4, #F5B484)" borderRadius="20px" >
                <Stack px={{base:'8px',sm:'8px',md:'8px',lg:'10px',xl:'30px'}} bg='' >
                  <Flex gap={{base:'1px',sm:'7px',md:'10px',lg:'20px'}} alignItems="center" bg=''>
                    <Text color="white" fontWeight="bold" fontSize={{base:'17px',sm:'20px',md:'20px',lg:'25px'}}>{data.maintext}</Text>
                    <Image w={{base:'40px',sm:'50px',md: '50px',lg:'80px',xl:'95px'}} src='./Images/Arrow.png' />
                  </Flex>
                  <Text color="white" fontWeight="medium" fontSize={{base:'12px',sm:'15px',md:'15px',lg:'20px'}}>{data.subtext}</Text>
                </Stack>
              </Flex>
            ))
          }
        </Flex>
      </Box>
      </Box>

      <Box mx='20px'>
      <Box borderRadius="15px" w="100%" h="538px">
        <Flex justifyContent="center" alignItems="center" h="100%" gap={{base:'25px',sm:'50px',md:'20px',lg:'50px',xl:'150px'}} flexDir={{base:'column-reverse',md:'column-reverse',lg:'row'}}>
          <Stack gap={{base:'30px',sm:'10px',md:'10px',lg:'30px'}} >
            <Text color="#570880" fontSize={{base:'15px',sm:'22px',md:'26px',lg:'32px'}} fontWeight="bold" >Boost Your Business with Canfree</Text>
            <Stack>
              {
                section6.map((data) => (
                  <>
                    <Flex gap="10px" >
                      <Image h={{base:'25px',sm: '28px',md:'38px'}} src="./Images/icon.png" />
                      <Stack>
                        <Text color="#570880" fontSize={{base:'15px',sm:'20px',md:'20px',lg:'25px'}} fontWeight="bold" >{data.mainH}</Text>
                        <Text color="#570880" fontSize={{base:'15px',sm:'20px',md:'20px',lg:'25px'}} >{data.subH}</Text>
                      </Stack>
                    </Flex>
                  </>
                ))
              }
            </Stack>
          </Stack>
          <Image src="./Images/main section6pic.png" h={{base:'150px',sm:'200px',md:'250px',lg:'400px'}} />
        </Flex>
      </Box>
      </Box>

      <Box mx='20px' mb='20px'>
      <Box background="linear-gradient(180deg,#F082DA, #F5B484)" boxShadow="0 4px 4px #F082DA" borderRadius="15px" w="100%" h={{base: '480',sm:'538px'}} backgroundColor="black" 
      
      >
       <Flex gap={{base: '30px',sm: '10px',md: '15px',lg: '50px',xl: '150px'}} justifyContent="center" alignItems="center"  h="100%" flexDir={{base: 'column-reverse',sm: 'column-reverse', md: 'row'}}>
       <Stack alignItems="center" gap={{base:'40px',sm:'20px',md:'50px'}} px='15px'>
       <Text fontSize={{base:'25px',sm:'25px',md: '20px',lg: '28px',xl: '35px'}} fontWeight="bold" color="#570880" >Everything seems achievable now</Text>
       <Box>
       <Link to="/signup" >
       <Flex cursor="pointer"  justifyContent="center" alignItems="center"  background="white"  w={{base:'150px',sm:'200px',md:'250px',lg: '280px',xl: '330px'}} h={{base:'50px',sm:'60px',md:'70px',lg: '80px',xl:'100px'}} borderRadius="20px"  fontSize={{md:'20px',}} fontWeight="bold" color="#570880" >Join CanFree</Flex>
       </Link>
       </Box>
       </Stack>
       <Image src="./Images/lastsection.png" h={{base: '200px',sm:'300px',md: '450px'}} />
       </Flex>
      </Box> 
      </Box>
</Stack>
    </>

  )
}

export default PublicPage

// const Dabba = styled.div`
// box-shadow: 0 0px 5px #812eaa; 
// width: 100%;
// height: 100px;
// background: linear-gradient(135deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4));
// backdrop-filter: blur(10px);
// -webkit-backdrop-filter: blur(10px);
// border:1px solid rgba(255, 255, 255, 0.18);
// border-end-end-radius: 15px;
// border-end-start-radius : 15px;
// font-family: "Poppins", sans-serif;
// `
// const Container = styled.div`
//   position: fixed;
//   top: 0;
//   width: 100%;
//   z-index: 5 ;
//    background-image: url("./Images/bg.png");
//     background-position: center;
//     background-repeat: no-repeat;
//     background-size: cover;
//     border-end-end-radius: 15px;
// border-end-start-radius : 15px;
// `
// const ImageContainer = styled.div`
// width: 100%;
// height: 538px;
// background-image: url("./Images/main section5pic.png");
//     background-position: center;
//     background-repeat: no-repeat;
//     background-size: cover;
//     border-radius: 15px;
  
// `


