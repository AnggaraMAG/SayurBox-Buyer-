import React, {Component} from 'react';
import {View, TextInput, Image} from 'react-native';

class MainSearch extends Component {
  render() {
    return (
      <>
        <View
          style={{
            marginHorizontal: 20,
            flexDirection: 'row',
            paddingTop: 10,
          }}>
          <View style={{position: 'relative', flex: 1}}>
            <TextInput
              placeholder="Cari Produk segar di sini...."
              style={{
                borderWidth: 2,
                borderColor: '#E8E8E8',
                borderRadius: 10,
                height: 40,
                fontSize: 13,
                paddingLeft: 45,
                paddingRight: 20,
                backgroundColor: '#E7ECE7',
              }}
            />
            <Image
              source={require('../../../assets/assetsF/Icon/Search.png')}
              style={{
                position: 'absolute',
                top: 8,
                left: 8,
                height: 25,
                width: 25,
              }}
            />
          </View>
        </View>
      </>
    );
  }
}

export default MainSearch;
