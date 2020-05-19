import React, {Component} from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {
  Header,
  Container,
  Left,
  Right,
  Button,
  Icon,
  Body,
  Title,
} from 'native-base';

import Style from './../../organism/infoOrder/style';
import Info from './../../organism/infoOrder/infoOrder';
import Status from '../../organism/infoOrder/statusOrder';
import Footer from '../../organism/infoOrder/footer';
import AccOrder from '../../organism/infoOrder/accordionOrder';
import AccSend from '../../organism/infoOrder/accordionSend';
import AccAddress from '../../organism/infoOrder/accordionAddress';

class myOrderDetail extends Component {
  render() {
    return (
      <>
        <Header style={Style.header}>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate('OrderScreen')}>
              <Icon name="arrow-back" style={Style.tittleHead1} />
            </Button>
          </Left>
          <Body>
            <Title style={Style.tittleHead}>Order Detail</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="menu" />
            </Button>
          </Right>
        </Header>
        <ScrollView>
          <View style={Style.container}>
            <Info />
            <Status />
            <AccOrder />
            <AccAddress />
            <AccSend />
          </View>
        </ScrollView>

        <View style={Style.buttonChat}>
          <Footer toChat={() => this.props.navigation.navigate('ChatScreen')} />
        </View>
      </>
    );
  }
}

export default myOrderDetail;
