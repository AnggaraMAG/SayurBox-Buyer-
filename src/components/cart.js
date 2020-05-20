import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {ListItem, Badge, Button} from 'react-native-elements';
import RBSheet from 'react-native-raw-bottom-sheet';
import Icon from 'react-native-vector-icons/FontAwesome5';

class Cart extends Component {
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
            <Text style={{fontWeight: 'bold', color: '#449C45'}}>240.000</Text>
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
          closeOnDragDown={true}
          height={400}
          duration={250}
          customStyles={{
            container: {
              borderTopWidth: 2,
              borderTopColor: '#449C45',
              elevation: 0,
            },
          }}>
          <View style={{flexDirection: 'row', width: '100%', marginTop: -4}}>
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
                240.000
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
        </RBSheet>
      </>
    );
  }
}

export default Cart;
