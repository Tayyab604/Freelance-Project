import React from 'react'

import styled from 'styled-components'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Text } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import HeaderLayout from './Components/HeaderLayout'

const SavedProject = () => {
  return (
    <>
    <HeaderLayout/>
    <Breadcrumb pl="50px" pt="120px" >
        <BreadcrumbItem>
        <NavLink to="/saveproject" > <BreadcrumbLink fontSize="20px" color="#812eaa" fontWeight="bold" >Savedproject</BreadcrumbLink> </NavLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </>
  )
}

export default SavedProject
