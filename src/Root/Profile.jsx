import React from 'react'
import HeaderLayout from './Components/HeaderLayout'
import styled from 'styled-components'
import { Text } from '@chakra-ui/react'

const Profile = () => {
  return (
    <Container>
    <HeaderLayout/>
    <Text fontSize="50px">profile</Text>
  </Container>
  )
}

export default Profile
const Container = styled.div`

    margin: 0;
    height:  100vh;
    width: 100%;
    background-image: url("./Images/bg.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    `