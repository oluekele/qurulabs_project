import Header from '@/components/header'
import LeftNavbar from '@/components/leftNavbar'
import { Container } from '@chakra-ui/react'
import React from 'react'

const PropertiesBoard = () => {
  return (
    <>
      <Header />
      <Container maxW={`56rem`} bg={`gray.400`}>
        <LeftNavbar title="List Property" />
      </Container>
    </>
  )
}

export default PropertiesBoard