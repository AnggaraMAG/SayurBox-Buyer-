import React, {Component} from 'react';
import {View} from 'react-native';

import TabTab from '../components/componentAz/organism/tabMyOrder/Tabed';
import Header from '../components/Header';

class OrderScreen extends Component {
  render() {
    return (
      <>
        <View>
          <Header textHeader="My Order" />
        </View>
        <TabTab />
      </>
    );
  }
}

export default OrderScreen;
