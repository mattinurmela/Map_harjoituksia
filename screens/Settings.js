import { Text } from 'react-native'
import React from 'react'
import NavigateBackApplication from '../components/NavigateBackApplication'

export default function Settings(...props) {

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