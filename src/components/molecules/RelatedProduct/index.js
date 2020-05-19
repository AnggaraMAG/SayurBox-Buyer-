import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {Button} from 'native-base';

import Colors from './../../componentAz/color/color';

class RelatedProduct extends React.Component {
  render() {
    return (
      // <View
      //   style={{
      //     marginHorizontal: 5,
      //     marginTop: 5,
      //     flex: 1,
      //     marginRight: 8,
      //     borderWidth: 1,
      //     borderColor: Colors.PRIMARY,
      //     padding: 5,
      //     borderRadius: 3,
      //   }}>
      //   <Image
      //     style={{
      //       height: 110,
      //       width: 130,
      //       borderRadius: 8,
      //     }}
      //     source={props.image}
      //   />
      //   <View
      //     style={{
      //       height: 25,
      //       width: 70,
      //       backgroundColor: Colors.FONT_SEC,
      //       position: 'relative',
      //       top: 15,
      //       left: 5,
      //       borderTopRightRadius: 3,
      //       borderBottomRightRadius: 3,
      //       position: 'absolute',
      //     }}>
      //     <Text
      //       style={{
      //         fontWeight: 'bold',
      //         color: 'white',
      //         paddingLeft: 5,
      //         marginTop: 'auto',
      //         marginBottom: 'auto',
      //       }}>
      //       Imperfect
      //     </Text>
      //   </View>
      //   <View
      //     style={{
      //       marginTop: 8,
      //       marginLeft: 5,
      //       flex: 1,
      //     }}>
      //     <Text
      //       style={{
      //         fontWeight: 'bold',
      //         fontSize: 15,
      //         color: '#439D46',
      //       }}>
      //       {props.nama}
      //     </Text>
      //     <View style={{flexDirection: 'row'}}>
      //       <Text style={{fontWeight: '800', fontSize: 15}}>{props.satuan}</Text>
      //       <Text style={{fontWeight: '800', fontSize: 15}}>/</Text>
      //       <Text style={{fontWeight: '800', fontSize: 15}}>{props.berat}</Text>
      //     </View>
      //   </View>
      // </View>
      <TouchableOpacity
        onPress={this.props.toDetail}
        style={{
          marginRight: 6,
          marginLeft: 6,
          marginTop: 5,
          marginBottom: 5,
          flex: 1,
          width: 150,
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
          source={this.props.img}
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

export default RelatedProduct;
