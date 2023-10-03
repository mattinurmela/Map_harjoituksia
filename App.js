import React, { useState } from 'react';
import Map from './screens/Map';
import { StyleSheet, View } from 'react-native';
import MyStatusBar from './components/MyStatusBar';
import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Settings from './screens/Settings';

const settings = {
  backgroundColor: '#00a484',
  title:'map demo'
}

export default function App() {
  const Stack = createNativeStackNavigator();

  const [mapType, setMapType] = useState('standard')

  return (
    <>
      <MyStatusBar backgroundColor="#490295" barStyle="ligth-content" />
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
                title={settings.backgroundColor}
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
    marginTop: StatusBar.currentHeight,
    flex: 1
  },

})
