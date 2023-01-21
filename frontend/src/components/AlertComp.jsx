import { Alert, AlertIcon } from '@chakra-ui/react'
import React from 'react'

const AlertComp = (props) => {
    console.log("props",props)
  return (
    <Alert status='success'>
    <AlertIcon />
    {props.text}
  </Alert>
  )
}

export default AlertComp
