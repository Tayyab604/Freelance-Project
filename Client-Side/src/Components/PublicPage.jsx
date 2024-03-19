
import { Box, Button, Flex, Icon, Image, Input, InputGroup, Stack, Text } from '@chakra-ui/react';
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
    "logo design"
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
  const settings={
    dots:true,
    Infinite:true,
    speed:500,
    slidesToShow:4,
    slidesToScroll:3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  }

  return (
    <>
      
      <Container position="fixed" top="0" zIndex="1" w="100%">
        <Dabba>
          <Flex justifyContent="space-between" pl="50px" alignItems="center" h="100%" px="100px" >
            <Flex gap="50px" alignItems="center">
              <Box>
                <img width="127px" height="86px" src="./Images/Logo.png" alt="" />
              </Box>

            </Flex>
            <Flex gap="50px" justifyContent="center"  >
              <NavLink to="/signup"
              >
                <Flex justifyContent="center" alignItems="center" color="#812eaa" fontWeight="bold" borderRadius="10px" w="148px" h="52px" boxShadow="5px 5px 10px #F082DA" background="linear-gradient(90deg,#F082DA, #F5B484)" >Signup
                </Flex>
              </NavLink>
              <NavLink to="/login"
              >
                <Flex boxShadow="5px 5px 10px #F082DA" justifyContent="center" alignItems="center" color="#812eaa" fontWeight="bold" borderRadius="10px" w="148px" h="52px" background="linear-gradient(90deg,#F082DA, #F5B484)"  >Login
                </Flex>
              </NavLink>
            </Flex>
          </Flex>
        </Dabba>
      </Container>
<Stack gap="50px" >

      <Flex justifyContent="center" >
        <Box background="linear-gradient(180deg,#F2CFF5, white)" boxShadow="0 4px 4px #F082DA" borderRadius="15px" mt="150px" w="1374px" h="380px" backgroundColor="black" >
          <Flex gap="150px" justifyContent="center" alignItems="center" h="100%" >
            <Flex flexDir="column" gap="30px"  >
              <Text fontSize="32px" fontWeight="bold" color="#812eaa">Find the perfect match <br />
                for your project</Text>
              <InputGroup px="20px" background="white" alignItems="center" w="750px" h="50px" boxShadow="0 0 5px #812eaa" borderRadius="15px"  >
                <Input variant="unstyled" h="50px" color="#812eaa" fontSize="20px" placeholder="Search"   ></Input>
                <Icon color="#812eaa" as={CiSearch} fontSize="30px" />
              </InputGroup>
              <Flex alignItems="center"  >
                <Text color="#812eaa" fontSize="15px" fontWeight="bold" >Mostly searched:</Text>
                <Flex gap="10px" >
                  {
                    sectio1.map((data) => (
                      <Flex cursor="pointer" justifyContent="center" alignItems="center" fontWeight="bold" color='#812eaa' w="150px" h="33px" borderRadius="10px" border="2px solid #812eaa" >{data}</Flex>
                    ))
                  }
                </Flex>

              </Flex>
            </Flex>
            <Image w="310px" h="263px" src="./Images/main section1.png" />
          </Flex>

        </Box>
      </Flex>

      <Text color="#570880" fontSize="30px" fontWeight="bold" mt="20px" ml="100px" >Popular Services</Text>

      
        <Flex  justifyContent="center" >
        <Box w="1200px" h="300px" > 
         <Slider  {...settings}  >
        {
          section2.map((data)=>(
             <Flex  > 
            <Stack justifyContent="center" alignItems="center" h="250px" w="278px" borderRadius="15px" background="linear-gradient(180deg,#F082DA, #F5B484)" >
        <Text color="#570880" fontSize="25px" fontWeight="bold"  >{data.text}</Text>
        <Image  src={data.img} w="200px" h="200px" />
        </Stack>
         </Flex> 
          ))
        }


        </Slider>
         </Box>
        </Flex>
    

      <Box background="linear-gradient(180deg,#F082DA, #F5B484)" boxShadow="0 4px 4px #F082DA" borderRadius="15px" w="100%" h="538px" backgroundColor="black" >
        <Flex justifyContent="center" alignItems="center" h="100%" gap="150px" >
          <Stack gap="30px" >
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

      <Text color="#570880" fontSize="30px" fontWeight="bold" mt="20px" ml="100px" >We've got you covered</Text>

      <Box borderRadius="15px" w="100%" h="538px"  >
        <Stack gap="70px" justifyContent="center" alignItems="center" h="100%" >
          <Flex gap="100px"  >
            <Stack gap="20px" alignItems="center" >
              <Image w="100px" h="100px" src="./Images/main section4/graphic.png" />
              <Text fontSize="25px" color="#570880" fontWeight="bold" >Graphic design</Text>
            </Stack>
            <Stack gap="20px" alignItems="center" >
              <Image w="100px" h="100px" src="./Images/main section4/marketing.png" />
              <Text fontSize="25px" color="#570880" fontWeight="bold" >Marketing</Text>
            </Stack>
            <Stack gap="20px" alignItems="center" >
              <Image w="100px" h="100px" src="./Images/main section4/writing.png" />
              <Text fontSize="25px" color="#570880" fontWeight="bold" >Writing &Translation</Text>
            </Stack>
            <Stack gap="20px" alignItems="center" >
              <Image w="100px" h="100px" src="./Images/main section4/video.png" />
              <Text fontSize="25px" color="#570880" fontWeight="bold" >Video & Animation</Text>
            </Stack>
          </Flex>
          <Flex gap="190px"  >
            <Stack gap="20px" alignItems="center" >
              <Image w="100px" h="100px" src="./Images/main section4/tech.png" />
              <Text fontSize="25px" color="#570880" fontWeight="bold" >Tech</Text>
            </Stack>
            <Stack gap="20px" alignItems="center" >
              <Image w="100px" h="100px" src="./Images/main section4/business.png" />
              <Text fontSize="25px" color="#570880" fontWeight="bold" >Business</Text>
            </Stack>
            <Stack gap="20px" alignItems="center" >
              <Image w="100px" h="100px" src="./Images/main section4/data.png" />
              <Text fontSize="25px" color="#570880" fontWeight="bold" >Data</Text>
            </Stack>
            <Stack gap="20px" alignItems="center" >
              <Image w="100px" h="100px" src="./Images/main section4/development.png" />
              <Text fontSize="25px" color="#570880" fontWeight="bold" >Development</Text>
            </Stack>




          </Flex>
        </Stack>
      </Box>

      <ImageContainer>
        <Flex gap="50px" justifyContent="center" alignItems="end" h="100%" pb="50px" >
          {
            section5.map((data) => (
              <Flex w="428px" h="198px" justifyContent="center" alignItems="center" background="linear-gradient(180deg,#f5a1e4, #F5B484)" borderRadius="20px" >
                <Stack px="50px"  >
                  <Flex gap="20px" alignItems="center" >
                    <Text color="white" fontWeight="bold" fontSize="35px" >{data.maintext}</Text>
                    <Image w="95px" h="95px" src='./Images/Arrow.png' />
                  </Flex>
                  <Text color="white" fontWeight="medium" fontSize="30px" >{data.subtext}</Text>
                </Stack>
              </Flex>
            ))
          }
        </Flex>
      </ImageContainer>

      <Box  borderRadius="15px" w="100%" h="538px"  >
        <Flex justifyContent="center" alignItems="center" h="100%" gap="150px" >
          <Stack gap="30px" >
            <Text color="#570880" fontSize="32px" fontWeight="bold" >Boost Your Business with Canfree</Text>
            <Stack>
              {
                section6.map((data) => (
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
          <Image src="./Images/main section6pic.png" />
        </Flex>
      </Box>

      <Box background="linear-gradient(180deg,#F082DA, #F5B484)" boxShadow="0 4px 4px #F082DA" borderRadius="15px" w="100%" h="538px" backgroundColor="black" >
       <Flex gap="150px" justifyContent="center" alignItems="center"  h="100%">
       <Stack alignItems="center" gap="50px" >
       <Text fontSize="35px" fontWeight="bold" color="#570880" >Everything seems achievable now</Text>
       <Box>
       <Link to="/signup" >
       <Flex cursor="pointer"  justifyContent="center" alignItems="center"  background="white"  w="330px" h="100px" borderRadius="20px"  fontSize="40px" fontWeight="bold" color="#570880" >Join CanFree</Flex>
       </Link>
       </Box>
       </Stack>
       <Image src="./Images/lastsection.png" />
       </Flex>
      </Box> 
</Stack>

    </>

  )
}

export default PublicPage
const Dabba = styled.div`
box-shadow: 0 0px 5px #812eaa; 
width: 100%;
height: 100px;
background: linear-gradient(135deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4));
backdrop-filter: blur(10px);
-webkit-backdrop-filter: blur(10px);
border:1px solid rgba(255, 255, 255, 0.18);
border-end-end-radius: 15px;
border-end-start-radius : 15px;
font-family: "Poppins", sans-serif;

`
const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 5 ;
   background-image: url("./Images/bg.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-end-end-radius: 15px;
border-end-start-radius : 15px;
`
const ImageContainer = styled.div`
width: 100%;
height: 538px;
background-image: url("./Images/main section5pic.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 15px;
  
`


