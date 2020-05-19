import React from 'react';
import {View, Text} from 'react-native';

import Colors from './../../componentAz/color/color';

const MainLine = props => {
  return (
    <View
      style={{
        backgroundColor: Colors.SEPARATOR,
        height: 10,
      }}
    />
  );
};

export default MainLine;
