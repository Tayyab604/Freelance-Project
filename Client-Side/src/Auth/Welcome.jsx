
import { Button, Stack, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


function Welcome() {

  return (
    <Container>
      <Stack justifyContent="center" alignItems="center" h="100vh" >
        <Dabba>
       <Link to="/dashboard" >
       <Button  _hover={{
                      backgroundColor: "#69268a"
                    }} w="270px" h="64px" fontSize="22px" borderRadius="32px" backgroundColor="#570880" color="white"  >Welcome to</Button></Link>
          <img src="./Images/Logo.png" alt="" />
          <Text fontSize="40px" fontWeight="bold" >Start your journey with us</Text>
        </Dabba>
      </Stack>
    </Container>
  )
}

export default Welcome


const Dabba = styled.div`

height: 50vh;
width: 1040px;
height: 524px;
background: linear-gradient(135deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4));
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: 20px;
    border:1px solid rgba(255, 255, 255, 0.18);
border-radius: 15px;
font-family: "Poppins", sans-serif;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
gap: 20px;
color: #570880;
`
const Container = styled.div`

    margin: 0;
    height:  100vh;
    background-image: url("./Images/bg.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    
    `


