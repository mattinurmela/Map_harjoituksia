import Icon from "@expo/vector-icons/MaterialIcons";
import { AppBar, HStack, IconButton } from "@react-native-material/core";
import React from "react";

export default function NavigateBackApplication({backgroundColor, title, navigation}) {
    return (
      <AppBar
        title={title}
        backgroundColor={backgroundColor}
        leading={props => (
          <HStack>
            <IconButton
              icon={props => <Icon name='arrow-back' {...props} />}
              onPress={() => {navigation.goBack()}}
              {...props}
            />
          </HStack>
        )}
      />
    );
}