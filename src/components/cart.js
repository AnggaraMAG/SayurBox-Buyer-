import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import {Badge, Button} from 'react-native-elements';
import RBSheet from 'react-native-raw-bottom-sheet';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {connect} from 'react-redux';
import {remove_item} from '../_actions/cart';

//component
import Counter from './counter';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: this.props.items,
    };
  }

  calculatePrice = () => {
    let calculated = this.state.items.reduce(
      (acc, cur) => acc + cur.harga * cur.total,
      0,
    );
    let result = '';
    let flag = 1;
    for (let i = String(calculated).length - 1; i >= 0; i--) {
      if (flag === 3) {
        result += String(calculated)[i];
        result += '.';
        flag = 1;
      } else {
        result += String(calculated)[i];
        flag++;
      }
    }
    return (
      'Rp ' +
      result
        .split('')
        .reverse()
        .join('')
    );
  };

  increment = id => {
    this.setState(prevState => ({
      items: prevState.items.map((obj, i) =>
        i === id ? {...obj, total: obj.total + 1} : obj,
      ),
    }));
  };

  decrement = id => {
    this.setState(prevState => ({
      items: prevState.items.map((obj, i) =>
        i === id ? {...obj, total: obj.total - 1} : obj,
      ),
    }));
  };

  getSnapshotBeforeUpdate() {
    let filteredItems = this.state.items.filter(val => val.total > 0);
    console.log(this.props.cart.data, 'anjay mabar');
    if (filteredItems.length !== this.props.cart.data.length) {
      // console.log(filteredItems.length, prevState.items.length, 'anjing');
      console.log('anjing mabar goblok');
      return filteredItems;
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (snapshot !== null) {
      this.props.remove_item(snapshot);
    }
  }

  render() {
    return (
      <>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            height: 40,
            alignItems: 'center',
            borderTopColor: '#449C45',
            borderTopWidth: 2,
          }}
          onPress={() => this.RBSheet.open()}>
          <View style={{marginLeft: 10}}>
            <Icon name="shopping-bag" size={16} style={{color: '#449C45'}} />
            <Badge
              value={this.state.items.length}
              status="error"
              containerStyle={{
                position: 'absolute',
                width: 30,
                left: 7,
                top: -7,
              }}
            />
          </View>
          <View style={{marginLeft: 30, paddingLeft: 10}}>
            <Text style={{fontWeight: 'bold', color: '#449C45'}}>
              {this.calculatePrice()}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => this.RBSheet.open()}
            style={{
              left: '45%',
              top: -12.5,
              position: 'absolute',
              borderRadius: 100,
              width: 26,
              height: 26,
              backgroundColor: '#449C45',
            }}>
            <Icon
              style={{marginLeft: 5, marginTop: 2}}
              size={18}
              color="white"
              name="chevron-up"
            />
          </TouchableOpacity>
          <View style={{marginLeft: 'auto', marginRight: 10}}>
            <Button
              onPress={() => this.props.navigation.navigate('CheckoutScreen')}
              buttonStyle={{height: 30, backgroundColor: '#449C45'}}
              title="Checkout"
            />
          </View>
        </TouchableOpacity>
        <RBSheet
          ref={ref => {
            this.RBSheet = ref;
          }}
          height={400}
          duration={250}
          customStyles={{
            container: {
              borderTopWidth: 2,
              borderTopColor: '#449C45',
              elevation: 0,
            },
          }}>
          <View style={{flexDirection: 'row', width: '100%', marginTop: 10}}>
            <View style={{marginLeft: 10}}>
              <Icon name="shopping-bag" size={16} style={{color: '#449C45'}} />
              <Badge
                value="2"
                status="error"
                containerStyle={{
                  position: 'absolute',
                  width: 30,
                  left: 7,
                  top: -7,
                }}
              />
            </View>
            <View style={{marginLeft: 30, paddingLeft: 10}}>
              <Text style={{fontWeight: 'bold', color: '#449C45'}}>
                {this.calculatePrice()}
              </Text>
            </View>
            <View style={{marginLeft: 'auto', marginRight: 10}}>
              <Button
                onPress={() => this.props.navigation.navigate('CheckoutScreen')}
                buttonStyle={{height: 30, backgroundColor: '#449C45'}}
                title="Checkout"
              />
            </View>
          </View>
          <ScrollView>
            <View>
              {this.state.items.map((val, id) => (
                <View key={id} style={{flexDirection: 'row', margin: 10}}>
                  <Image
                    source={{
                      uri:
                        'https://cdn1-production-images-kly.akamaized.net/z8IcbR0_U72dfTaN14Xhj0Qc_0s=/640x640/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/1694314/original/037316800_1503982212-067002300_1483451648-Makan-Wortel-Bikin-Sakit-Kuning.jpg',
                    }}
                    style={{width: 70, height: 70}}
                  />
                  <View style={{marginHorizontal: 20}}>
                    <Text style={{fontWeight: 'bold'}}>{val.buah} (10kg)</Text>
                    <Text
                      style={{
                        fontWeight: 'bold',
                        marginTop: 'auto',
                        fontSize: 18,
                      }}>
                      {val.harga}
                    </Text>
                  </View>
                  <View style={{marginLeft: 'auto', marginRight: 10}}>
                    <Counter
                      increment={this.increment}
                      decrement={this.decrement}
                      key={id}
                      id={id}
                      total={val.total}
                    />
                  </View>
                </View>
              ))}
            </View>
          </ScrollView>
        </RBSheet>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    remove_item: newData => dispatch(remove_item(newData)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cart);
