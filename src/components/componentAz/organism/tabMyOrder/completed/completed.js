import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, ScrollView} from 'react-native';

export default class completed extends Component {
  render() {
    return (
      <>
        <View
          style={{
            marginTop: 'auto',
            marginBottom: 'auto',
          }}>
          <Image
            style={styles.image}
            resizeMode="contain"
            resizeMethod="resize"
            source={require('./../../../../../assets/AssetsAz/Images/carrort-empty.png')}
          />
          <Text style={styles.headText}>
            Your fresh veggies & fruits are calling!
          </Text>
          <Text style={styles.subText}>
            Once your order were delivered, you can see all the veggies and
            fruits you've bought here.
          </Text>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: 200,
    alignSelf: 'center',
    marginTop: 'auto',
    marginBottom: 'auto',
    marginLeft: 20,
  },
  headText: {
    textAlign: 'center',
    marginTop: -20,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#576357',
  },
  subText: {
    color: '#acb2ad',
    marginTop: 5,
    marginBottom: 25,
    width: '80%',
    textAlign: 'center',
    alignSelf: 'center',
  },
});
