import React, {Component} from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import RNPickerSelect from 'react-native-picker-select';
import {Icon} from 'react-native-elements';

//utilities
import setTimeChooser from '../../utilities/setTImeChooser';

export default class BottomSheetOrder extends Component {
  defaultSendTime = () => {
    const date = new Date();
    return `${setTimeChooser().day1}, ${setTimeChooser().date1} ${
      setTimeChooser().month1
    } ${date.getFullYear()}`;
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
                  {this.defaultSendTime()}
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
              items={[{label: 'Bandung', value: 'Bandung'}]}
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
                    {setTimeChooser().day1}
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      fontFamily: 'Roboto',
                      color: 'green',
                      marginLeft: 20,
                    }}>
                    {`${setTimeChooser().date1} ${setTimeChooser().month1}`}
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
                    {setTimeChooser().day2}
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      fontFamily: 'Roboto',
                      color: 'green',
                      marginLeft: 20,
                    }}>
                    {`${setTimeChooser().date2} ${setTimeChooser().month2}`}
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
