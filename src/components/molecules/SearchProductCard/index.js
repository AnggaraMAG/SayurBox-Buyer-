import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {Button} from 'native-base';
import Colors from './../../componentAz/color/color';

class MainContent extends React.Component {
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.toDetail}
        style={{
          marginTop: 5,
          marginBottom: 5,
          flex: 1,
          width: '99%',
          borderWidth: 1,
          borderColor: Colors.PRIMARY,
          paddingTop: 10,
          borderRadius: 3,
        }}>
        <Image
          style={{
            height: 110,
            width: 'auto',
            borderRadius: 8,
            marginLeft: 5,
            marginRight: 5,
          }}
          source={{
            uri: this.props.img,
          }}
        />
        <View
          style={{
            height: 20,
            width: 60,
            backgroundColor: '#A09E9B',
            top: 20,
            borderTopRightRadius: 3,
            borderBottomRightRadius: 3,
            position: 'absolute',
            left: 5,
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              color: 'white',
              marginTop: 'auto',
              marginBottom: 'auto',
              marginLeft: 5,
              fontSize: 12,
            }}>
            Imperfect
          </Text>
        </View>
        <View style={{flex: 1, marginTop: 5}}>
          <View style={{marginLeft: 5}}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 16,
                color: Colors.PRIMARY,
              }}>
              {this.props.buah}
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontWeight: '800', fontSize: 15}}>
                {this.props.bentuk}
              </Text>
              <Text style={{fontWeight: '800', fontSize: 15}}>/</Text>
              <Text style={{fontWeight: '800', fontSize: 15}}>
                {this.props.satuan1}
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text>Rp.2000</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 17,
                  color: '#439D46',
                }}>
                {this.props.harga}
              </Text>
              <Text> / </Text>
              <Text style={{fontWeight: '800', fontSize: 15}}>
                {this.props.satuan}
              </Text>
            </View>
          </View>

          <Button
            style={{
              alignItems: 'center',
              height: 30,
              width: '90%',
              marginTop: 20,
              marginBottom: 10,
              elevation: 0,
              alignSelf: 'center',
            }}
            success>
            <Text
              style={{
                marginLeft: 'auto',
                marginRight: 'auto',
                fontWeight: 'bold',
                color: 'white',
              }}>
              Beli
            </Text>
          </Button>
        </View>
      </TouchableOpacity>
    );
  }
}

export default MainContent;
