import { Box ,Container,Image} from '@chakra-ui/react'
import React from 'react'

const KnowMore = () => {
  return (
    <div>
     <Box backgroundColor='#f6f6f6' paddingY='10px' mt="25px">
        <Container maxW="1300px">
       <Image w="100%" src='https://onemg.gumlet.io/marketing/29087450-0f25-4856-96fc-62f4ea81bbd3.png' alt='Dan Abramov' />
        </Container>
     </Box>
    </div>
  )
}

export default KnowMore
