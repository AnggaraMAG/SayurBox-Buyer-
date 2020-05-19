import React from 'react';
import {Text, View} from 'react-native';

import Colors from './../../../color/color';
import Style from './../style';
import Separator from './../../separator/separator';

export default function orderContent() {
  return (
    <View style={{backgroundColor: Colors.WHITE}}>
      <View style={Style.accorOrder}>
        <View>
          <Text style={{marginLeft: 50}}>1 x Kunyit Value (200gr)</Text>
        </View>
        <View>
          <Text style={{marginRight: 30}}>Rp 3.300</Text>
        </View>
      </View>
      <View>
        <View style={Style.accorOrderIn}>
          <View>
            <Text style={{marginLeft: 20, fontSize: 16}}>Discount</Text>
          </View>
          <View>
            <Text style={Style.discount}>Rp 0</Text>
          </View>
        </View>
        <View style={Style.accorOrderIn}>
          <View>
            <Text style={{marginLeft: 20, fontSize: 16}}>Delivery Fee</Text>
          </View>
          <View>
            <Text style={Style.delivFee}>Rp 20.000</Text>
          </View>
        </View>
        <View style={Style.accorOrderInLast}>
          <View>
            <Text style={{marginLeft: 20, fontSize: 16}}>Unique Code</Text>
          </View>
          <View>
            <Text style={Style.unique}>Rp 0</Text>
          </View>
        </View>
        <Separator />
        <View style={Style.total}>
          <View>
            <Text style={{marginLeft: 20, fontSize: 17, fontWeight: 'bold'}}>
              Total
            </Text>
          </View>
          <View>
            <Text style={{fontWeight: 'bold', marginRight: 30}}>Rp 23.300</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
