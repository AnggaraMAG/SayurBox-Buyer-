import React from 'react';
import {View, Text} from 'react-native';

import Style from './../style';
import Colors from './../../../color/color';

export default function addressContent() {
  return (
    <View style={{backgroundColor: Colors.WHITE, paddingLeft: 15}}>
      <Text
        style={{
          fontSize: 16,
          marginTop: 5,
          marginBottom: 5,
          fontWeight: 'bold',
        }}>
        Aziz Nur Abdul Qodir
      </Text>
      <Text style={Style.space}>Phone (+62)8997775669</Text>
      <Text style={Style.space}>
        Jalan Elang I, Jl. Elang I No.103, RT.03/RW.01, Sawah Lama, Kec.
        Ciputat, Kota Tangerang Selatan, Banten 15431, Indonesia
      </Text>
      <Text style={Style.space}>Kecamatan Ciputat, Kota Tangerang Selatan</Text>
      <Text style={{paddingTop: 1, paddingBottom: 20}}>Banten</Text>
    </View>
  );
}
