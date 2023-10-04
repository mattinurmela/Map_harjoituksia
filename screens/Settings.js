import { Text, StyleSheet, View } from 'react-native'
import React from 'react'
import NavigateBackAppBar from '../components/NavigateBackAppBar'
import { useState } from 'react'
import { Picker } from '@react-native-picker/picker'

export default function Settings({...props}) {

  const [selectedType, setSelectedType] = useState(props.mapType)

  return (
    <>
      <NavigateBackAppBar {...props}/>
      <View style={styles.settingsArea}>
        <Text style={styles.heading}>Map Type</Text>
        <Picker
          selectedValue={selectedType}
          onValueChange={(itemValue) => {
            setSelectedType(itemValue)
            props.setMapType(itemValue)
          }}
          >
          <Picker.Item label="Standard" value="standard" />
          <Picker.Item label="Satellite" value="satellite" />
          <Picker.Item label="Terrain" value="terrain" />
        </Picker>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  settingsArea: {
    margintop: 32,
    marginLeft: 16,
  },
  heading: {
    color: global.backgroundColor,
    textTransform: 'uppercase',
  }
})
