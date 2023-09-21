import React, { useState } from 'react'
import { SimpleGrid,Text, Box,FormControl, Grid, GridItem, Image, Input,Button,Flex,Heading,Spacer,Container, useBreakpointValue} from '@chakra-ui/react'

import {FcLikePlaceholder} from "react-icons/fc"
import {AiFillFacebook} from "react-icons/ai"
import Des from '../../Component/Footer/Comment_box'
import {FaPeriscope} from "react-icons/fa"

import { useEffect } from 'react'
import { Ftr } from '../../Component/Ftr'
import { Link } from 'react-router-dom'
// import { Box, Button, Flex, Heading, Image, Input, Spacer, Text } from '@chakra-ui/react'
const See = () => {

const[title,setTitle]=useState()

useEffect(()=>{
const e=localStorage.getItem("inputTitle");
setTitle(e)
},[]
)


  return (
    <>
    <Grid gridTemplateColumns='70% 30%' gap={6} h="200px" w="70%" m="auto" mt={5} >
    <GridItem w='100%' h='500' >
    <SimpleGrid columns={1} spacing={1}>
    <Box mt={2} ml={2}>
    <Link to="/" >
        {/* <Image src={Nidhi}/> */}
      </Link>
        </Box >
  <Box height='30px' mt={4}>
  <Input value={title} />
  </Box>
  <Box bg='blue.50' height='70px' mt='5' display="flex" gap={6} >
    <Box display="flex" gap={400}>
    
      <Image src='https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745' alt='Logo' h='14' w='14' borderRadius='60%'/>
   
    <FcLikePlaceholder size={40}  />
    {/* <AiFillFacebook/> */}
    
    </Box>
    <AiFillFacebook size={40} color="blue"/> 
  </Box>
 
</SimpleGrid>
 <Box height='auto' border="1px solid grey" mt={4} borderRadius="12px">
 <Des />
</Box> 
    </GridItem>



 


<Box  height='auto' border="0px solid red" ></Box>


<br/>
<br/>
<br/>
<br/>


  
</Grid>
<Box mt={600}></Box>
<Flex flexDir={"column"} alignItems={"center"}>
 <Flex alignItems={'flex-start'}  width={"84%"} margin={1}>
    <Text fontSize={useBreakpointValue({ base: '2xl', md: '3xl' ,sm:"xl"})} fontWeight={'bold'}>
    Plan Your Next Trip Using Complete Destination Guides
    </Text>
    </Flex>
    <Flex width={"84%"} display={{lg:"flex", md: 'box',sm:'box' }} margin={4} flexDir='row' gap='8'>
      <Flex width={{lg:'25%', md:"80%", sm:"80%"}} gap={3} flexDir="column">
        <Image borderRadius={"7px"} src='https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1669205399_germany.jpeg' alt='img2' />
      </Flex>
      <Flex width={{lg:'25%', md:"80%", sm:"80%"}} gap={3} flexDir="column">
        <Image borderRadius={"7px"} src='https://cdn1.tripoto.com/media/filter/tst/img/1339961/Image/1613732480_4_4.jpg' alt='img2' />
      </Flex>
      <Flex width={{lg:'25%', md:"80%", sm:"80%"}} gap={3} flexDir="column">
        <Image borderRadius={"7px"} src='https://cdn1.tripoto.com/media/filter/tst/img/1756031/Image/1599216481_rajasthan.jpg' alt='img2' />
      </Flex>
      <Flex width={{lg:'25%', md:"80%", sm:"80%"}} gap={3} flexDir="column">
        <Image borderRadius={"7px"} src='https://cdn1.tripoto.com/media/filter/tst/img/1756031/Image/1599216560_kerala.jpg' alt='img2' />
      </Flex>
    </Flex>
    </Flex>
<br/>
<br/>
  </>
  
  )
}

export default See