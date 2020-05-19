import React, {Component} from 'react';
import MainSearch from './molecules/MainSearch/index';
import {View, Text, ScrollView, Image} from 'react-native';
import {Button} from 'native-base';

class CekAll extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <MainSearch />
        <ScrollView>
          <View style={{marginVertical: 15, marginLeft: 10}}>
            <Text style={{fontSize: 20, fontWeight: '800'}}>Sayuran</Text>
          </View>
          {/* Garis */}
          <View
            style={{
              backgroundColor: '#BABFB9',
              height: 2,
              marginTop: 1,
            }}
          />
          {/* EndGaris */}
          {/* CekAll */}
          <View style={{flex: 1, flexWrap: 'wrap'}}>
            <View
              style={{
                marginTop: 10,
                flexDirection: 'row',
                marginHorizontal: 10,
                justifyContent: 'space-between',
                flexWrap: 'wrap',
              }}>
              {/* Isi nya */}
              <View style={{minHeight: 300, width: '50%'}}>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <Image
                    style={{
                      width: 160,
                      height: 120,
                      borderRadius: 10,
                    }}
                    source={require('./../assets/assetsF/BahanPokok/bawangputih.jpg')}
                  />
                  <View style={{marginTop: 8, flex: 1}}>
                    <Text
                      style={{
                        fontWeight: 'bold',
                        fontSize: 20,
                        color: '#439D46',
                      }}>
                      GulaAren
                    </Text>
                    <View style={{flexDirection: 'row'}}>
                      <Text style={{fontWeight: '800', fontSize: 15}}>
                        7-8 Buah
                      </Text>
                      <Text style={{fontWeight: '800', fontSize: 15}}>/</Text>
                      <Text style={{fontWeight: '800', fontSize: 15}}>
                        500 gram
                      </Text>
                    </View>
                    {/* Diskon */}
                    <View style={{flexDirection: 'row'}}>
                      <Text>Rp. 7000</Text>
                      <View
                        style={{
                          marginLeft: 5,
                          height: 23,
                          minWidth: 40,
                          backgroundColor: 'orange',
                          borderRadius: 20,
                        }}>
                        <Text
                          style={{
                            color: 'white',
                            fontWeight: 'bold',
                            padding: 2,
                          }}>
                          Save 50%
                        </Text>
                      </View>
                    </View>
                    {/* End Diskon */}
                    <View style={{flexDirection: 'row'}}>
                      <Text
                        style={{
                          fontWeight: 'bold',
                          fontSize: 17,
                          color: '#439D46',
                        }}>
                        Rp.20.000
                      </Text>
                      <Text> / </Text>
                      <Text style={{fontWeight: '800', fontSize: 15}}>
                        500 gram
                      </Text>
                    </View>
                    <View
                      style={{
                        alignItems: 'center',
                        marginTop: 10,
                        marginBottom: 10,
                      }}>
                      <Button style={{height: 30, width: 70}} success>
                        <Text
                          style={{
                            marginLeft: 22,
                            fontWeight: 'bold',
                            color: 'white',
                          }}>
                          Beli
                        </Text>
                      </Button>
                    </View>
                  </View>
                </View>
              </View>
              {/* End Isi */}
              {/* Isi nya */}
              <View style={{minHeight: 300, width: '50%'}}>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <Image
                    style={{
                      width: 160,
                      height: 120,
                      borderRadius: 10,
                    }}
                    source={require('./../assets/assetsF/BikinEmpon/gulaaren.jpg')}
                  />
                  <View style={{marginTop: 8, flex: 1}}>
                    <Text
                      style={{
                        fontWeight: 'bold',
                        fontSize: 20,
                        color: '#439D46',
                      }}>
                      GulaAren
                    </Text>
                    <View style={{flexDirection: 'row'}}>
                      <Text style={{fontWeight: '800', fontSize: 15}}>
                        7-8 Buah
                      </Text>
                      <Text style={{fontWeight: '800', fontSize: 15}}>/</Text>
                      <Text style={{fontWeight: '800', fontSize: 15}}>
                        500 gram
                      </Text>
                    </View>
                    {/* Diskon */}
                    <View style={{flexDirection: 'row'}}>
                      <Text>Rp. 7000</Text>
                      <View
                        style={{
                          marginLeft: 5,
                          height: 23,
                          minWidth: 40,
                          backgroundColor: 'orange',
                          borderRadius: 20,
                        }}>
                        <Text
                          style={{
                            color: 'white',
                            fontWeight: 'bold',
                            padding: 2,
                          }}>
                          Save 50%
                        </Text>
                      </View>
                    </View>
                    {/* End Diskon */}
                    <View style={{flexDirection: 'row'}}>
                      <Text
                        style={{
                          fontWeight: 'bold',
                          fontSize: 17,
                          color: '#439D46',
                        }}>
                        Rp.20.000
                      </Text>
                      <Text> / </Text>
                      <Text style={{fontWeight: '800', fontSize: 15}}>
                        500 gram
                      </Text>
                    </View>
                    <View
                      style={{
                        alignItems: 'center',
                        marginTop: 10,
                        marginBottom: 10,
                      }}>
                      <Button style={{height: 30, width: 70}} success>
                        <Text
                          style={{
                            marginLeft: 22,
                            fontWeight: 'bold',
                            color: 'white',
                          }}>
                          Beli
                        </Text>
                      </Button>
                    </View>
                  </View>
                </View>
              </View>
              {/* End Isi */}
              {/* Isi nya */}
              <View style={{minHeight: 300, width: '50%'}}>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <Image
                    style={{
                      width: 160,
                      height: 120,
                      borderRadius: 10,
                    }}
                    source={require('./../assets/assetsF/BikinEmpon/gulaaren.jpg')}
                  />
                  <View style={{marginTop: 8, flex: 1}}>
                    <Text
                      style={{
                        fontWeight: 'bold',
                        fontSize: 20,
                        color: '#439D46',
                      }}>
                      GulaAren
                    </Text>
                    <View style={{flexDirection: 'row'}}>
                      <Text style={{fontWeight: '800', fontSize: 15}}>
                        7-8 Buah
                      </Text>
                      <Text style={{fontWeight: '800', fontSize: 15}}>/</Text>
                      <Text style={{fontWeight: '800', fontSize: 15}}>
                        500 gram
                      </Text>
                    </View>
                    {/* Diskon */}
                    <View style={{flexDirection: 'row'}}>
                      <Text>Rp. 7000</Text>
                      <View
                        style={{
                          marginLeft: 5,
                          height: 23,
                          minWidth: 40,
                          backgroundColor: 'orange',
                          borderRadius: 20,
                        }}>
                        <Text
                          style={{
                            color: 'white',
                            fontWeight: 'bold',
                            padding: 2,
                          }}>
                          Save 50%
                        </Text>
                      </View>
                    </View>
                    {/* End Diskon */}
                    <View style={{flexDirection: 'row'}}>
                      <Text
                        style={{
                          fontWeight: 'bold',
                          fontSize: 17,
                          color: '#439D46',
                        }}>
                        Rp.20.000
                      </Text>
                      <Text> / </Text>
                      <Text style={{fontWeight: '800', fontSize: 15}}>
                        500 gram
                      </Text>
                    </View>
                    <View
                      style={{
                        alignItems: 'center',
                        marginTop: 10,
                        marginBottom: 10,
                      }}>
                      <Button style={{height: 30, width: 70}} success>
                        <Text
                          style={{
                            marginLeft: 22,
                            fontWeight: 'bold',
                            color: 'white',
                          }}>
                          Beli
                        </Text>
                      </Button>
                    </View>
                  </View>
                </View>
              </View>
              {/* End Isi */}
            </View>
          </View>
          {/* End Isi CekAll */}
        </ScrollView>
      </View>
    );
  }
}

export default CekAll;
