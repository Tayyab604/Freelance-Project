
import { Box, HStack, Stack, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function SelectRole() {
  const navigate = useNavigate()
  const [freelanceRole, setfreelanceRole] = useState("")
  const [buyerRole, setbuyerRole] = useState("")
  if (freelanceRole) {
    navigate('/selectcatagory')
    console.log(freelanceRole)
  }
  if (buyerRole) {
    navigate('/welcome')
    console.log(buyerRole)
  }
  return (
    <Body>
      <Main>
        <Up>
          <img src="./Images/Logo.png" alt="logo" />
        </Up>
        <Down>
          <Box onClick={() => setfreelanceRole("freelancer")} >
            <Stack _hover={{ backgroundColor: "#e7e1e1" }} justifyContent="center" alignItems="center" backgroundColor="white" w="366px" h="440px" borderRadius="15px" >
              <Text fontSize="30px" >I am</Text>
              <Text fontSize="30px" fontWeight="bold" >Freelancer</Text>
              <div className='pic' >
                <img src="./Images/woman.png" alt="girl" />
              </div>
            </Stack>
          </Box>
          <Box onClick={() => { setbuyerRole("buyer") }} >
            <Stack _hover={{ backgroundColor: "#e7e1e1" }} justifyContent="center" alignItems="center" backgroundColor="white" w="366px" h="440px" borderRadius="15px" >
              <Text fontSize="30px" >I am</Text>
              <Text fontSize="30px" fontWeight="bold" >Client</Text>
              <div className='pic' >
                <img src="./Images/man.png" alt="man" />
              </div>
            </Stack>
          </Box>
        </Down>
      </Main>
    </Body>
  )
}

export default SelectRole

const Main = styled.div`
  display: flex;
  flex-direction: column;
`
const Up = styled.div`
margin-bottom: 5vh;
  img{
    height: 83px;
    width: 123px;
    background: transparent;
    margin-top: 70px;
    margin-left: 80px;
  }
`
const Down = styled.div`
  display: flex;
  gap: 15vh;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
const Body = styled.div`
    margin: 0;
    height:  100vh;
    background-image: url("../public/Images/bg.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
  `