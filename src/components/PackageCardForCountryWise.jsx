import React from 'react'
import { Card, CardBody, Image,Text,CardFooter ,Stack,Heading,Divider,ButtonGroup,Button} from '@chakra-ui/react'
const PackageCardForCountryWise = ({packagename, packagetext, packagemoney}) => {
  return (
   <>
   <div className='p-2'>
   <Card maxW='sm'>
  <CardBody>
    <Image
      src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{packagename} </Heading>
      <Text>
        {packagetext}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
          Rs.{packagemoney}
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        See Details
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
</div>
   </>
  )
}

export default PackageCardForCountryWise