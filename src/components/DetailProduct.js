import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Button, Tab, Tabs, TabHeading, Icon} from 'native-base';
import {ScrollView} from 'react-native-gesture-handler';

import RelatedProduct from './molecules/RelatedProduct';
import Colors from './../components/componentAz/color/color';
import Separator from './componentAz/organism/separator/separator';

class DetailProduct extends Component {
  render() {
    return (
      <ScrollView>
        <View style={{flex: 1, backgroundColor: '#0000', marginBottom: 30}}>
          <Image
            style={{height: 250, flex: 1, width: 'auto'}}
            source={require('./../assets/assetsF/BahanPokok/bawangputih.jpg')}
          />
          <View style={{marginLeft: 15, marginTop: 10}}>
            <Text style={{fontSize: 25, color: '#439D46'}}>
              Lemon Lokal Imperfect
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: '500',
                }}>
                7 - 8 Buah/500 gram
              </Text>
            </View>
          </View>
          {/* 2 */}
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              marginTop: 10,
              marginHorizontal: 15,
            }}>
            <View style={{flex: 1, marginTop: 'auto', marginBottom: 'auto'}}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: '#439D46',
                  justifyContent: 'center',
                }}>
                Rp 3.300
              </Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={{color: Colors.FONT_PRIM}}>/200 gram</Text>
              </View>
            </View>
            <View style={{flex: 1, alignItems: 'flex-end', marginBottom: 10}}>
              <Button style={{height: 30, width: 120}} success>
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

              <Button
                iconLeft
                light
                transparent
                onPress={() => this.props.navigation.navigate('ChatScreen')}
                style={{
                  height: 30,
                  width: 120,
                  borderWidth: 1,
                  borderColor: '#439D46',
                  borderRadius: 3,
                  marginTop: 5,
                }}>
                <Icon
                  type="Entypo"
                  name="chat"
                  size={15}
                  style={{color: Colors.PRIMARY, marginLeft: 'auto'}}
                />
                <Text
                  style={{
                    marginLeft: 5,
                    marginRight: 'auto',
                    color: Colors.PRIMARY,
                  }}>
                  Chat
                </Text>
              </Button>
            </View>
          </View>
          {/* Garis */}
          <Separator />
          {/* End Garis */}
          {/* 3 */}
          <View style={{marginTop: 10, marginHorizontal: 15}}>
            <View
              style={{
                height: 30,
                width: 90,
                backgroundColor: Colors.FONT_PRIM,
                borderRadius: 2,
              }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 13,
                  color: 'white',
                  padding: 4,
                  marginTop: 'auto',
                  marginBottom: 'auto',
                  alignSelf: 'center',
                }}>
                Conventional
              </Text>
            </View>
            <Text
              style={{
                fontWeight: '800',
                color: Colors.FONT_PRIM,
                marginTop: 10,
                fontSize: 13,
              }}>
              Non-Organic Farming Method
            </Text>
            <Text style={{marginTop: 5, fontSize: 13, fontWeight: '500'}}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Text>
          </View>
          {/* Tabs */}
          <View style={{marginTop: 25}}>
            <Tabs
              tabBarUnderlineStyle={{
                backgroundColor: 'green',
                borderRadius: 5,
              }}>
              <Tab
                heading={
                  <TabHeading
                    style={{
                      backgroundColor: 'white',
                      borderWidth: 0,
                    }}>
                    <View
                      style={{
                        marginHorizontal: 15,
                      }}>
                      <Text
                        style={{
                          fontSize: 15,
                          fontWeight: 'bold',
                          color: '#439D46',
                        }}>
                        Health and Benefits
                      </Text>
                    </View>
                  </TabHeading>
                }>
                <View
                  style={{
                    minHeight: 40,
                    backgroundColor: Colors.BACKGROUND_SEC,
                  }}>
                  <Text style={styles.tabBarDetail}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </Text>
                </View>
              </Tab>
              <Tab
                heading={
                  <TabHeading
                    style={{backgroundColor: 'white', borderWidth: 0}}>
                    <View style={{marginHorizontal: 15}}>
                      <Text
                        style={{
                          fontSize: 15,
                          fontWeight: 'bold',
                          color: '#439D46',
                        }}>
                        Prep and Storage
                      </Text>
                    </View>
                  </TabHeading>
                }>
                <View
                  style={{
                    minHeight: 40,
                    backgroundColor: Colors.BACKGROUND_SEC,
                  }}>
                  <Text style={styles.tabBarDetail}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the
                  </Text>
                </View>
              </Tab>
            </Tabs>
          </View>
          {/* End Tabs */}
          <View style={{marginTop: 25, marginLeft: 15}}>
            <Text style={{fontWeight: '800', fontSize: 15, color: '#576357'}}>
              About The Producers
            </Text>
            <View
              style={{marginTop: 20, flexDirection: 'row', marginBottom: 10}}>
              <Image
                style={{
                  width: 40,
                  height: 40,
                  marginTop: 'auto',
                  marginBottom: 'auto',
                }}
                source={require('./../assets/assetsF/Icon/S.png')}
                resizeMode="contain"
                resizeMethod="resize"
              />
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: '#576357',
                  marginTop: 'auto',
                  marginBottom: 'auto',
                  marginLeft: 5,
                }}>
                SayurBox
              </Text>
            </View>
          </View>
          {/* Garis */}
          <Separator />
          {/* End Garis */}
          <View style={{marginVertical: 15, marginLeft: 15}}>
            <Text
              style={{
                fontWeight: '800',
                fontSize: 15,
                color: '#576357',
              }}>
              This producer has no description
            </Text>
          </View>
          {/* Garis */}
          <Separator />
          {/* End Garis */}
          <View style={{marginLeft: 15}}>
            <View style={{marginVertical: 15}}>
              <Text
                style={{
                  fontWeight: '800',
                  fontSize: 15,
                  color: '#576357',
                }}>
                Related Products
              </Text>
            </View>
            <View style={{flex: 1}}>
              {/* RelatedProduct */}

              <ScrollView horizontal>
                <RelatedProduct
                  img={require('../assets/assetsF/BahanPokok/bawangputih.jpg')}
                  buah="Kiwi"
                  bentuk="4 pcs"
                  satuan1="kg"
                  harga="25.500"
                  satuan="kg"
                  toDetail={() =>
                    this.props.navigation.navigate('DetailProduct')
                  }
                />
                <RelatedProduct
                  img={require('../assets/assetsF/BahanPokok/bawangputih.jpg')}
                  buah="Kiwi"
                  bentuk="4 pcs"
                  satuan1="kg"
                  harga="25.500"
                  satuan="kg"
                  toDetail={() =>
                    this.props.navigation.navigate('DetailProduct')
                  }
                />
                <RelatedProduct
                  img={require('../assets/assetsF/BahanPokok/bawangputih.jpg')}
                  buah="Kiwi"
                  bentuk="4 pcs"
                  satuan1="kg"
                  harga="25.500"
                  satuan="kg"
                  toDetail={() =>
                    this.props.navigation.navigate('DetailProduct')
                  }
                />
                <RelatedProduct
                  img={require('../assets/assetsF/BahanPokok/bawangputih.jpg')}
                  buah="Kiwi"
                  bentuk="4 pcs"
                  satuan1="kg"
                  harga="25.500"
                  satuan="kg"
                  toDetail={() =>
                    this.props.navigation.navigate('DetailProduct')
                  }
                />
                <RelatedProduct
                  img={require('../assets/assetsF/BahanPokok/bawangputih.jpg')}
                  buah="Kiwi"
                  bentuk="4 pcs"
                  satuan1="kg"
                  harga="25.500"
                  satuan="kg"
                  toDetail={() =>
                    this.props.navigation.navigate('DetailProduct')
                  }
                />
              </ScrollView>
              {/* End RelatedProduct */}
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  tabBarDetail: {
    fontWeight: '800',
    fontSize: 13,
    paddingTop: 'auto',
    paddingBottom: 'auto',
    padding: 10,
    minHeight: 80,
    margin: 5,
    color: Colors.FONT_PRIM,
  },
});

export default DetailProduct;
