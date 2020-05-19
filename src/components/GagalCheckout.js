import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import {Header, Body, Title} from 'native-base';

class GagalCheckout extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#F7F7F7'}}>
        <Header style={{backgroundColor: 'white'}}>
          {/* <Left>
            <Button transparent>
              <Icon name="arrow-back" />
            </Button>
          </Left> */}
          <Body>
            <Title
              style={{
                color: '#576357',
                fontWeight: 'bold',
                marginLeft: 150,
              }}>
              Checkout
            </Title>
          </Body>
          {/* <Right /> */}
        </Header>
        <View style={{alignItems: 'center', marginTop: 50}}>
          <Image
            source={require('../../assets/assetsF/Icon/imagegagalcheckout.jpg')}
          />
          <Text
            style={{
              top: 10,
              fontWeight: '800',
              fontSize: 15,
              textAlign: 'center',
              marginHorizontal: 10,
              color: '#576357',
            }}>
            Belum jadi member Sayurbox? yuks daftar! Biar bisa tracking order
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            marginTop: 20,
            justifyContent: 'space-evenly',
          }}>
          <View
            style={{
              backgroundColor: '#ACB2AD',
              height: 40,
              width: 120,
            }}>
            <Text
              style={{
                textAlign: 'center',
                top: 4,
                fontWeight: 'bold',
                fontSize: 20,
                color: 'white',
              }}>
              Daftar
            </Text>
          </View>
          <View
            style={{
              backgroundColor: '#ACB2AD',
              height: 40,
              width: 120,
            }}>
            <Text
              style={{
                textAlign: 'center',
                top: 4,
                fontWeight: 'bold',
                fontSize: 20,
                color: 'white',
              }}>
              Login
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

export default GagalCheckout;
