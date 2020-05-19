import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';

const MainBanner = props => {
  return (
    <View style={{flex: 1, marginBottom: 10}}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          marginTop: 5,
        }}>
        <View
          style={{
            flex: 1,
            marginLeft: 10,
          }}>
          <Text style={{fontSize: 17, fontWeight: '800', color: '#576357'}}>
            {props.title}
          </Text>
          <Text style={{fontSize: 13, fontWeight: '800', color: '#ACB2AD'}}>
            {props.keterangan}
          </Text>
        </View>
      </View>
      <View style={{marginTop: 10}}>
        <Image
          style={{
            marginHorizontal: 10,
            borderRadius: 10,
            height: 150,
            width: '95%',
          }}
          source={props.img}
        />
      </View>
    </View>
  );
};

export default MainBanner;
