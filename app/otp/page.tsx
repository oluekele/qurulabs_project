import React from 'react'
import { BiSolidEnvelope } from "react-icons/bi";
import { Box, Center, Container, Heading, Stack, VStack, HStack, Text, PinInput, PinInputField, Button, Link, } from '@chakra-ui/react'
import Image1 from "@/assets/image 1.png"
import Image from 'next/image';

const OTPSection = () => {
  return (
    <>
        <Container 
          maxW={`90%`}
          pt={`5rem`}
        >
          <Heading>LOGO</Heading>
          <Box 
            as='section'
            mt={`8rem`}
            mb={`1rem`} 
          >
            <Stack align={`center`}>
              <BiSolidEnvelope size={`2rem`} />
              <VStack as='div' w={`30%`} align={`center`}>
                <Heading as="h3" size="md" fontWeight={`600`}  fontSize='28px'>Check your Inbox</Heading>
                <Text fontSize='13px' align={`center`} color={`quruText.400`}>We’ve sent a one time password to newproject@gmail.com</Text>
              </VStack>
              <HStack mt={`2rem`} spacing={6}>
                <PinInput >
                  <PinInputField
                    _focusVisible={{borderColor: `transparent`, outlineColor: `quruBtn.900`}}
                    borderRadius="full" 
                    w={`57.41px`} 
                    h={`56.77px`} 
                  />
                  <PinInputField 
                    _focusVisible={{borderColor: `transparent`, outlineColor: `quruBtn.900`}} 
                    borderRadius="full" 
                    w={`57.41px`} 
                    h={`56.77px`} 
                  />
                  <PinInputField 
                    _focusVisible={{borderColor: `transparent`, outlineColor: `quruBtn.900`}}
                    borderRadius="full" 
                    w={`57.41px`} 
                    h={`56.77px`} 
                  />
                  <PinInputField 
                    _focusVisible={{borderColor: `transparent`, outlineColor: `quruBtn.900`}}
                    borderRadius="full" 
                    w={`57.41px`} 
                    h={`56.77px`} 
                  />
                </PinInput>
              </HStack>
              <Button 
                as={`a`} 
                href='#' 
                w={`371px`} 
                h={`55px`} 
                mt={`1.5rem`}
                color={`white`}
                borderRadius={`full`}
                bg={`quruBtn.900`}
                _hover={{background: "orange.300", color: "wheat"}}
              >
                Verify
              </Button>
              <Center 
                fontSize='13px'
                my={`1rem`}
              >
                Didn’t receive a code?  <Link href='#' color={`quruBtn.900`} ml={`.5rem`}>Resend Code</Link></Center>
            </Stack>
          </Box>
          <Image src={Image1} alt='Thumbnail' />
        </Container>
    </>
  )
}

export default OTPSection