import React, { useState } from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet } from "react-native";
import * as Location from "expo-location";
import MainAppBar from "../components/MainAppBar";

const icons = {
  location:'my-location',
  location_searching: 'location-searching'
}

export default function Map({...props}) {
  const [searchIcon, setSearchIcon] = useState(icons.location)
  const [marker, setMarker] = useState (null)


  const [location, setLocation] = useState({
    latitude: 65.08,
    longitude: 25.48,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  });

  // useEffect(() => {
  //   (async () => {
  //     getUserPosition();
  //   })();
  // }, []);

  const getUserPosition = async () => {
    setSearchIcon(icons.location_searching);
    let { status } = await Location.requestForegroundPermissionsAsync();

    try {
      if (status !== "granted") {
        console.log("Not Granted");
        return;
      }

      const position = await Location.getCurrentPositionAsync({accuracy: Location.Accuracy.High})
      setLocation({...location, 'latitude': position.coords.latitude, 'longitude': position.coords.longitude})
      setSearchIcon(icons.location)
      setMarker(position.coords)
    } catch (error) {
      console.log(error)
    }
  };

  return (
          <>
          <MainAppBar
            {...props}
            searchIcon={searchIcon}
            getUserPosition={getUserPosition}
            />
          <MapView 
          style={styles.map} 
          region={location} 
          mapType={props.mapType}
          >
            {
              marker &&
              <Marker title="My position" coordinate={{latitude: marker.latitude, longitude: marker.longitude}} />
            }
          </MapView>
         </>
  )
}

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%",
  },
});