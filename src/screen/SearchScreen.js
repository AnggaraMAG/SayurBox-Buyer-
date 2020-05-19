import React, {Component} from 'react';
import {View, Text, TextInput, Image} from 'react-native';
import {connect} from 'react-redux';
import {get_product} from '../_actions/product';

import MainContent from '../components/molecules/SearchProductCard/index';

class SearchScreen extends Component {
  componentDidMount() {
    this.props.get_product();
  }

  render() {
    console.log(this.props.product, 'woiiii');
    return (
      <View>
        <View>
          <View
            style={{
              flexDirection: 'row',
              paddingVertical: 10,
              backgroundColor: 'white',
            }}>
            <View style={{position: 'relative', flex: 1, marginLeft: 30}}>
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
                source={require('../assets/assetsF/Icon/Search.png')}
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
        </View>
        {this.props.navigation.state.params ? (
          <View
            style={{
              paddingVertical: 15,
              backgroundColor: 'white',
              marginTop: 2,
              marginBottom: 0,
            }}>
            <Text style={{fontSize: 26}}>
              {this.props.navigation.state.params}
            </Text>
          </View>
        ) : null}
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}>
          {/* insert Product as Category*/}
          {this.props?.product?.loading ? (
            <Text>Loading..</Text>
          ) : (
            this.props.product.data.data.data.map((value, i) => (
              <View
                key={i}
                style={{
                  backgroundColor: 'white',
                  width: '49%',
                  height: 280,
                  marginHorizontal: 1,
                  marginVertical: 1,
                }}>
                <MainContent
                  img={`http://192.168.43.94:5000/product/${value.image}`}
                />
              </View>
            ))
          )}
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    product: state.product,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    get_product: () => dispatch(get_product()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchScreen);
