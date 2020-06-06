import React, {Component} from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import RNPickerSelect from 'react-native-picker-select';
import {Icon} from 'react-native-elements';

export default class BottomSheetOrder extends Component {
  getTime = () => {
    const date = new Date();
    let month = '';
    let day = '';
    switch (date.getMonth()) {
      case 0:
        month = 'Januari';
        break;
      case 1:
        month = 'Februari';
        break;
      case 2:
        month = 'Maret';
        break;
      case 3:
        month = 'April';
        break;
      case 4:
        month = 'May';
        break;
      case 5:
        month = 'Juni';
        break;
      case 6:
        month = 'Juli';
        break;
      case 7:
        month = 'Agustus';
        break;
      case 8:
        month = 'September';
        break;
      case 9:
        month = 'Oktober';
        break;
      case 10:
        month = 'November';
        break;
      case 11:
        month = 'Desember';
        break;
      default:
        console.log('error');
        break;
    }

    switch (date.getDay()) {
      case 0:
        day = 'Senin';
        break;
      case 1:
        day = 'Selasa';
        break;
      case 2:
        day = 'Rabu';
        break;
      case 3:
        day = 'Kamis';
        break;
      case 4:
        day = "Jum'at";
        break;
      case 5:
        day = 'Sabtu';
        break;
      case 6:
        day = 'Minggu';
        break;
      default:
        console.log('error');
        break;
    }
    return `${day}, ${date.getDate()} ${month} ${date.getFullYear()}`;
  };
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity onPress={() => this.RBSheet.open()}>
          <View>
            <View style={{marginTop: 5, marginLeft: 10}}>
              <Text
                style={{fontWeight: '1000', fontSize: 15, color: '#576357'}}>
                Area dan Tanggal Pengiriman
              </Text>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{
                    color: '#439D46',
                    fontSize: 18,
                    fontWeight: 'bold',
                  }}>
                  Bandung -{' '}
                </Text>
                <Text
                  style={{
                    color: '#439D46',
                    fontSize: 18,
                    fontWeight: 'bold',
                  }}>
                  {this.getTime()}
                </Text>
                <Image
                  style={{
                    height: 13,
                    width: 13,
                    left: 6,
                    top: 6,
                    transform: [{rotate: '-90deg'}],
                  }}
                  source={require('../../assets/assetsF/Icon/back.png')}
                />
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <RBSheet
          ref={ref => {
            this.RBSheet = ref;
          }}
          height={500}
          duration={250}
          customStyles={{
            container: {
              alignItems: 'center',
            },
          }}>
          <Image
            source={require('../../assets/images/sayurmotor.png')}
            style={{marginTop: 50}}
          />
          <Text
            style={{
              textAlign: 'left',
              marginLeft: -190,
              marginBottom: 10,
              fontSize: 15,
              fontWeight: 'bold',
              fontFamily: 'Roboto',
            }}>
            Mau Dikirim Kemana?
          </Text>
          <View
            style={{
              borderWidth: 1,
              width: 300,
              height: 50,
              borderRadius: 12,
              borderColor: '#DAE0E2',
            }}>
            <RNPickerSelect
              onValueChange={value => console.log(value)}
              items={[
                {label: 'DKI Jakarta', value: 'DKI Jakarta'},
                {label: 'Bogor', value: 'Bogor'},
                {label: 'Depok', value: 'Depok'},
                {label: 'Tanggerang', value: 'Tanggerang'},
                {label: 'Bekasi', value: 'Bekasi'},
                {label: 'Bandung', value: 'Bandung'},
              ]}
              Icon={() => {
                return (
                  <Icon
                    name="location-pin"
                    type="entypo"
                    color="#DAE0E2"
                    size={50}
                  />
                );
              }}
            />
            <Text
              style={{
                marginLeft: -20,
                marginTop: 10,
                fontSize: 14,
                fontWeight: 'bold',
                fontFamily: 'Roboto',
              }}>
              Pilih Tanggal Pengiriman
            </Text>
            <View
              style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
              <View
                style={{
                  width: 80,
                  height: 80,
                  marginTop: 15,
                  borderWidth: 1,
                  borderRadius: 12,
                  borderColor: '#DAE0E2',
                }}>
                <TouchableOpacity>
                  <Image
                    source={require('../../assets/images/iconcalendar.png')}
                    style={{marginLeft: 25, marginTop: 5}}
                  />
                  <Text
                    style={{
                      fontSize: 12,
                      fontFamily: 'Roboto',
                      color: 'green',
                      marginLeft: 25,
                    }}>
                    Rabu
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      fontFamily: 'Roboto',
                      color: 'green',
                      marginLeft: 20,
                    }}>
                    20 Mei
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  width: 80,
                  height: 80,
                  marginTop: 15,
                  marginLeft: 25,
                  borderWidth: 1,
                  borderRadius: 12,
                  borderColor: '#DAE0E2',
                }}>
                <TouchableOpacity>
                  <Image
                    source={require('../../assets/images/iconcalendar.png')}
                    style={{marginLeft: 25, marginTop: 5}}
                  />
                  <Text
                    style={{
                      fontSize: 12,
                      fontFamily: 'Roboto',
                      color: 'green',
                      marginLeft: 25,
                    }}>
                    Sabtu
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      fontFamily: 'Roboto',
                      color: 'green',
                      marginLeft: 20,
                    }}>
                    23 Mei
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: '#26ae60',
              width: 300,
              top: 150,
              height: 32,
              borderRadius: 4,
            }}>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: 16,
                textAlign: 'center',
                marginTop: 4,
              }}>
              Simpan
            </Text>
          </TouchableOpacity>
        </RBSheet>
      </View>
    );
  }
}
