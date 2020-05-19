import React from 'react';
import {View, Text} from 'react-native';

import Style from './style';

function infoOrder() {
  return (
    <View style={Style.info}>
      <Text style={Style.title}>Order Number</Text>
      <Text style={Style.subtitle}>SR-9TR60UHM180M-NR</Text>
      <Text style={Style.title}>Batas Waktu Pembayaran</Text>
      <Text style={Style.subtitle}>Senin, 20 April 2020 pukul 16.00 WIB.</Text>
      <Text style={Style.title}>Total Tagihan</Text>
      <Text style={Style.price}>Rp 23.000</Text>
    </View>
  );
}

export default infoOrder;
