import React from 'react';
import {View, Text} from 'react-native';

import Style from './style';

export default function statusOrder() {
  return (
    <View style={Style.status}>
      <Text style={Style.subtitle}>Status Pemesanan</Text>
      <Text style={Style.timeline}>Timeline Here</Text>
      <Text style={Style.statOrder}>Status Pesanan (batal/tdk)</Text>
    </View>
  );
}
