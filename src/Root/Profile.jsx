import React from 'react'
import HeaderLayout from './Components/HeaderLayout'
import styled from 'styled-components'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Text } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'

const Profile = () => {
  return (
    // <Container>
    <>
    <HeaderLayout/>
    <Breadcrumb pl="50px" pt="120px" >
        <BreadcrumbItem>
        <NavLink to="/profile" > <BreadcrumbLink fontSize="20px" color="#570880" fontWeight="bold" >Profile</BreadcrumbLink> </NavLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </>
  // </Container>
  )
}

export default Profile
// const Container = styled.div`

//     margin: 0;
//     height:  100vh;
//     width: 100%;
//     background-image: url("./Images/bg.png");
//     background-position: center;
//     background-repeat: no-repeat;
//     background-size: cover;

//     `