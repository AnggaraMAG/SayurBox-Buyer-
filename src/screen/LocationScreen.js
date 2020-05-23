import React, {Component} from 'react';
import {View, Text} from 'react-native';

import {Header, Input, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {TouchableOpacity} from 'react-native-gesture-handler';

class Location extends Component {
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
              onPress={() =>
                this.props.navigation.navigate('BottomTabNavigator')
              }
              name="chevron-left"
              size={24}
              style={{marginRight: 10}}
            />
          }
          centerComponent={
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Ubah Alamat</Text>
          }
        />
        <View style={{marginTop: 1, backgroundColor: 'white', height: '100%'}}>
          <View style={{marginLeft: 5, marginRight: 10, marginTop: 10}}>
            <Text style={{marginLeft: 10, fontWeight: 'bold', fontSize: 18}}>
              Mau dikirim kemana pesanan kamu?
            </Text>
            <Input
              containerStyle={{marginTop: 15}}
              labelStyle={{color: 'black', fontSize: 13}}
              label="Nama Penerima"
              inputStyle={{left: -4}}
              placeholder="Masukan nama penerima"
            />
            <Text
              style={{
                fontSize: 13,
                fontWeight: 'bold',
                marginTop: 15,
                marginLeft: 10,
              }}>
              No. Telepon Penerima
            </Text>
            <View
              style={{
                flexDirection: 'row',
                marginHorizontal: 10,
              }}>
              <View
                style={{
                  backgroundColor: 'gray',
                  borderRadius: 5,
                  marginTop: 15,
                  width: 30,
                }}>
                <Text style={{color: 'white', marginTop: 5, marginLeft: 2}}>
                  +62
                </Text>
              </View>
              <Input inputStyle={{left: -4}} placeholder="Contoh: 8124123821" />
            </View>
            <Input
              containerStyle={{marginTop: 15}}
              labelStyle={{color: 'black', fontSize: 13}}
              label="Email"
              inputStyle={{left: -4}}
              placeholder="Masukan email anda"
            />
            <Text
              style={{
                fontSize: 13,
                fontWeight: 'bold',
                marginTop: 15,
                marginLeft: 10,
              }}>
              Area Pengiriman
            </Text>
            <View
              style={{
                backgroundColor: 'gray',
                flexDirection: 'row',
                marginHorizontal: 10,
                marginTop: 10,
                width: '96%',
                height: 40,
                alignItems: 'center',
              }}>
              <View
                style={{
                  backgroundColor: 'white',
                  borderRadius: 100,
                  width: 20,
                  height: 20,
                  marginHorizontal: 10,
                  alignItems: 'center',
                }}>
                <Icon
                  name="exclamation"
                  style={{color: 'gray', marginTop: 3.5}}
                />
              </View>
              <Text>Area pengiriman kamu adalah Bandung</Text>
            </View>
            <View style={{marginTop: 10, flexDirection: 'row'}}>
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: 'bold',
                  marginTop: 5,
                  marginLeft: 10,
                }}>
                Pilih alamat dengan peta
              </Text>
            </View>
            <TouchableOpacity
              style={{
                marginLeft: 10,
                marginTop: 10,
                width: '96%',
                height: 100,
                borderRadius: 5,
                borderWidth: 3,
                borderStyle: 'dashed',
                alignItems: 'center',
              }}>
              <Text style={{marginTop: 'auto', marginBottom: 'auto'}}>
                Pilih Alamat
              </Text>
            </TouchableOpacity>
            <Input
              containerStyle={{marginTop: 15}}
              labelStyle={{color: 'black', fontSize: 13}}
              label="Catatan"
              inputStyle={{left: -4}}
              placeholder="Lengkapi No Rumah, Blok, RT/RW"
            />
            <Button
              onPress={() => this.props.navigation.navigate('ValidateScreen')}
              containerStyle={{marginTop: 35, marginHorizontal: 10}}
              buttonStyle={{backgroundColor: '#449C45'}}
              title="Lanjut Checkout"
            />
          </View>
        </View>
      </>
    );
  }
}

export default Location;
