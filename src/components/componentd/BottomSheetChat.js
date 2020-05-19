import React, { Component } from "react";
import { View, Button, Image, Text, StyleSheet, Picker, TouchableOpacity } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import RNPickerSelect from 'react-native-picker-select';
import {Icon} from 'react-native-elements'


export default class Example extends Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Button title="OPEN BOTTOM SHEET" onPress={() => this.RBSheet.open()} />
          <RBSheet
            ref={ref => {
              this.RBSheet = ref;
            }}
            height={200}
            duration={250}
            customStyles={{
              container: {
                justifyContent: "center",
              }
            }}
          >
              <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={{width:80, height:80, backgroundColor:'red', marginTop:30, marginLeft:35}}>
                </View>
                <View style={{width:80, height:80, backgroundColor:'blue', marginTop:30, marginLeft:40}}>
                </View>
                <View style={{width:80, height:80, backgroundColor:'green', marginTop:30, marginLeft:40}}>
                </View>
              </View>
          </RBSheet>
        </View>
      );
    }
  }