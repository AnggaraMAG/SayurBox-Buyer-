import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {Header, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';

class Payment extends Component {
  render() {
    return (
      <>
        <Header
          containerStyle={{
            maxHeight: 60,
            paddingTop: 10,
            backgroundColor: 'white',
          }}
          leftComponent={
            <Icon
              onPress={() => this.props.navigation.goBack()}
              name="chevron-left"
              size={24}
              style={{marginRight: 10}}
            />
          }
          centerComponent={
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>
              Metode Pembayaran
            </Text>
          }
        />
        <ScrollView>
          <View style={{marginTop: 15}}>
            <Text>Test</Text>
          </View>
        </ScrollView>
        <View style={{backgroundColor: 'white'}}>
          <View
            style={{
              marginHorizontal: 10,
              marginVertical: 15,
            }}>
            <Button
              onPress={() => this.props.navigation.navigate('PaymentScreen')}
              buttonStyle={{backgroundColor: '#449C45', borderRadius: 5}}
              title="Buat Order"
            />
          </View>
        </View>
      </>
    );
  }
}

export default Payment;
