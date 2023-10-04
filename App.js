import React, { useState } from 'react';
import Map from './screens/Map';
import { View, StyleSheet } from 'react-native';
import MyStatusBar from './components/MyStatusBar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Settings from './screens/Settings';
import { Platform } from 'react-native';
import Constants from 'expo-constants';

const settings = {
  backgroundColor: '#00a484',
  title:'map demo',
  title1:'Settings'
}

export default function App() {
  const Stack = createNativeStackNavigator();

  const [mapType, setMapType] = useState('standard')

  return (
    <>
      <MyStatusBar backgroundColor="#49D295" barStyle="light-content" />
      <View style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="map" screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home">
              {(props) =>
                <Map
                  {...props}
                  backgroundColor={settings.backgroundColor}
                  title={settings.title}
                  mapType={mapType}
                />
              }
            </Stack.Screen>
            <Stack.Screen name='settings'>
            {(props) =>
              <Settings 
                {...props}
                backgroundColor={settings.backgroundColor}
                title={settings.title1}
                setMapType={setMapType}
              />
            }
            </Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'android' ? Constants.statusBarHeight : 0,
    flex: 1
  },

})
