import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Header} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';

class Checkout extends Component {
  render() {
    return (
      <>
        <Header
          containerStyle={{
            maxHeight: 60,
            paddingTop: 10,
            backgroundColor: 'white',
          }}
          leftComponent={
            <Icon
              onPress={() =>
                this.props.navigation.navigate('BottomTabNavigator')
              }
              name="chevron-left"
              size={24}
              style={{marginRight: 10}}
            />
          }
          centerComponent={
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Checkout</Text>
          }
        />
      </>
    );
  }
}

export default Checkout;
