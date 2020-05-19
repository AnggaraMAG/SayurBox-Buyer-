import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';

class MainFeature extends React.Component {
  render() {
    return (
      <TouchableOpacity
        style={{
          width: '25%',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          marginBottom: 18,
        }}>
        <TouchableOpacity
          onPress={this.props.onPress}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image style={{height: 40, width: 50}} source={this.props.img} />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 11,
            fontWeight: 'bold',
            textAlign: 'center',
            marginTop: 6,
            color: '#576357',
          }}>
          {this.props.title}
        </Text>
      </TouchableOpacity>
    );
  }
}

export default MainFeature;
