import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

import Header from '../components/Header';


class InboxScreen extends Component {
  render() {
    return (
      <>
        <View>
          <Header textHeader="Inbox" />
        </View>
        <View style={{flex:1,backgroundColor: '#F7f7f7'}}>
          <Image style={{alignItems:'center', justifyContent:'center', top:180, left:50}} source={require('../assets/images/inbox.png')} />
        </View>
      </>
    );
  }
}

export default InboxScreen;

const styles = StyleSheet.create({});
