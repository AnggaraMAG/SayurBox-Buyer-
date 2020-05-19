import React from 'react';
import {View, Text} from 'react-native';

import Style from './../style';
import Colors from './../../../color/color';

export default function addressContent() {
  return (
    <View style={{backgroundColor: Colors.WHITE, paddingLeft: 15}}>
      <View style={{marginTop: 5}}>
        <Text>Pesanan anda akan dikirimkan pada :</Text>
        <Text style={{fontWeight: 'bold', marginBottom: 20}}>
          Selasa, 21 April 2020 Slot Sore B hari (ETA 15:00 - 21:00 WIB)
        </Text>
      </View>
    </View>
  );
}
