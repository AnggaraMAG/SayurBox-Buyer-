import React from 'react';
import {View, Image, Text} from 'react-native';
import {Button} from 'native-base';

const MainContentWithBanner = props => {
  return (
    <View style={{marginHorizontal: 12, marginTop: 5, flex: 1}}>
      {/* <View>
        <Image source={props.banner} style={{height: 120}} />
      </View> */}
      <Image
        style={{
          height: 110,
          width: 110,
          borderRadius: 8,
        }}
        source={props.img}
      />
      <View style={{marginTop: 8, marginLeft: 5, flex: 1}}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 20,
            color: '#439D46',
          }}>
          {props.buah}
        </Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={{fontWeight: '800', fontSize: 15}}>{props.bentuk}</Text>
          <Text style={{fontWeight: '800', fontSize: 15}}>/</Text>
          <Text style={{fontWeight: '800', fontSize: 15}}>{props.satuan1}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 17,
              color: '#439D46',
            }}>
            {props.harga}
          </Text>
          <Text> / </Text>
          <Text style={{fontWeight: '800', fontSize: 15}}>{props.satuan}</Text>
        </View>
        <View style={{marginHorizontal: 12, marginTop: 10, marginBottom: 10}}>
          <Button style={{aligItem: 'center', height: 30, width: 70}} success>
            <Text
              style={{
                marginLeft: 22,
                fontWeight: 'bold',
                color: 'white',
              }}>
              Beli
            </Text>
          </Button>
        </View>
      </View>
    </View>
  );
};

export default MainContentWithBanner;
