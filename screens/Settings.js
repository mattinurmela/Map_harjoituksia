import { Text } from 'react-native'
import React from 'react'
import NavigateBackApplication from '../components/NavigateBackApplication'
import { useEffect } from 'react'

export default function Settings({...props}) {

    useEffect(() => {
      props.setMapType('satellite')
    }, [])
    

  return (
    <>
      <NavigateBackApplication {...props}/>
      <Text>Settings</Text>
    </>
  );
}