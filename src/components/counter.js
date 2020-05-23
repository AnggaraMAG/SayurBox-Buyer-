import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

class Counter extends Component {
  render() {
    return (
      <View style={this.props.style}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            style={{
              borderRadius: 100,
              borderWidth: 1,
              width: 30,
              height: 30,
              alignContent: 'center',
            }}>
            <Icon
              name="minus"
              size={22}
              style={{marginTop: 2, marginLeft: 4.5}}
            />
          </TouchableOpacity>
          <View style={{marginHorizontal: 20}}>
            <Text style={{fontSize: 22}}>{this.props.total}</Text>
          </View>
          <TouchableOpacity
            style={{
              borderRadius: 100,
              borderWidth: 1,
              width: 30,
              height: 30,
              alignContent: 'center',
            }}>
            <Icon
              name="plus"
              size={22}
              style={{marginTop: 2, marginLeft: 4.5}}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Counter;
