import React from 'react'
import HeaderLayout from './Components/HeaderLayout'
import styled from 'styled-components'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Text } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'

const Setting = () => {
  return (
  <>
    <HeaderLayout/>
    <Breadcrumb pl="50px" pt="120px" >
        <BreadcrumbItem>
        <NavLink to="/setting" > <BreadcrumbLink fontSize="20px" color="#570880" fontWeight="bold" >Setting</BreadcrumbLink> </NavLink>
        </BreadcrumbItem>
      </Breadcrumb>
  </>
  )
}

export default Setting


