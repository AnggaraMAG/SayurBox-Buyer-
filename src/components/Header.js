import React from 'react';
import {View, Text} from 'react-native';

const styles = {
  textStyle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  headerStyle: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    shadowColor: 'grey',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 2,
  },
};

const Header = props => {
  const {textStyle, headerStyle} = styles;
  return (
    <View style={headerStyle}>
      <Text style={textStyle}>{props.textHeader}</Text>
    </View>
  );
};

export default Header;
