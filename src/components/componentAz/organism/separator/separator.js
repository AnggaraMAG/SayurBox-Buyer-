import React from 'react';
import {View, StyleSheet} from 'react-native';
import Colors from './../../color/color';

export default function separator() {
  return <View style={styles.separator} />;
}

const styles = StyleSheet.create({
  separator: {
    backgroundColor: Colors.SEPARATOR,
    height: 1,
    marginTop: 2,
  },
});
