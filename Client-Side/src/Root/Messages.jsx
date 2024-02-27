import React from 'react'
import HeaderLayout from './Components/HeaderLayout'
import styled from 'styled-components'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Text } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'

const Messages = () => {
  return (
<>
<HeaderLayout/>
    <Breadcrumb pl="50px" pt="120px" >
        <BreadcrumbItem>
        <NavLink to="/messages" > <BreadcrumbLink fontSize="20px" color="#812eaa" fontWeight="bold" >Messages</BreadcrumbLink> </NavLink>
        </BreadcrumbItem>
      </Breadcrumb>
</>
  )
}

export default Messages
