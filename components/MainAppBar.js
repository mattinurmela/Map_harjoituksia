import Icon from "@expo/vector-icons/MaterialIcons";
import { AppBar, HStack, IconButton } from "@react-native-material/core";
import React from "react";


export default function MainAppBar({backgroundColor,getUserPosition,searchIcon, title, navigation}) {
    return (
      <AppBar
        title={title}
        backgroundColor={backgroundColor}
        trailing={props => (
          <HStack>
            <IconButton
              icon={props => <Icon name={searchIcon} {...props} />}
              onPress={getUserPosition}
              {...props}
            />
            <IconButton
              icon={props => <Icon name='settings' {...props} />}
              onPress={() => {navigation.navigate('settings')}}
              {...props}
            />
          </HStack>
        )}
      />
    );
}

