import React, { Component } from "react";
import {StyleSheet, View, Text, Image} from 'react-native';
import {
    Button,
    Tabs,
    Tab,
    TabHeading,
    Icon,
    Container,
    Header,
  } from 'native-base';

export default class SellerProfile extends Component {
    render(){
        return(
            <View style={{backgroundColor:'white', color:'white'}}>
            <View style={{backgroundColor:'white'}}>
              <Image
                source={require('../../../assets/images/profilemain.png')}
                style={{height: 90, width: 90, left: 25, top: 10}}
              />
            </View>
            <View style={{position: 'relative', left: 130, top: -80, backgroundColor:'white'}}>
              <View>
                <Text style={{fontSize: 25, fontWeight: '700', paddingBottom: 10}}>
                  Kang Sayur
                </Text>
              </View>
              <View style={{paddingBottom: 10, flexDirection: 'row', backgroundColor:'white'}}>
                <Image
                  source={require('../../../assets/images/location-icon.jpg')}
                  style={{height: 25, width: 25, marginRight: 5,backgroundColor:'tra'}}
                />
                <Text style={{color: '#2e2e2e', fontSize: 16}}>
                  DKI Jakarta
                </Text>
              </View>
              <View style={{paddingBottom: 10, flexDirection: 'row', backgroundColor:'white'}}>
                <Image
                  source={require('../../../assets/images/seller.png')}
                  style={{height: 25, width: 25, marginRight: 5}}
                />
                <Text style={{color: '#2e2e2e', fontSize: 16}}>427 Follower</Text>
              </View>
              <Text
                style={{
                  backgroundColor: 'white',
                  color: '#054d16',
                  fontSize: 16,
                  fontWeight: '700',
                }}>
                Toko ini bebas ongkir
              </Text>
            </View>
            <Button
              style={{
                position: 'absolute',
                top: 90,
                right: 10,
                height: 35,
                width: 90,
                justifyContent: 'center',
                backgroundColor: '#00a827',
                borderRadius: 10
              }}>
              <Text style={{color: 'white'}}>Follow</Text>
            </Button>
          </View>
    
        )
    }
}

