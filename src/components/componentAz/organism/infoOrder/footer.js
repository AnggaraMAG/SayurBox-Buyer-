import React from 'react';
import {View, Text} from 'react-native';

import Style from './style';
import {Button} from 'native-base';
import {Icon} from 'react-native-elements';
import Colors from './../../color/color';
import {TouchableHighlight} from 'react-native-gesture-handler';

export default function footer({toChat}) {
  return (
    <TouchableHighlight style={Style.footer}>
      <Button
        iconLeft
        success
        style={Style.button}
        onPress={toChat}
        full
        rounded>
        <Icon
          name="chat"
          type="material-icons"
          color={Colors.WHITE}
          size={20}
          style={{paddingLeft: 10}}
        />
        <Text style={{fontSize: 13, color: Colors.WHITE, paddingLeft: 5}}>
          Chat
        </Text>
      </Button>
    </TouchableHighlight>
  );
}
