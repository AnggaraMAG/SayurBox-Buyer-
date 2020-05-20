import React, {Component} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {Header, Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {TouchableOpacity} from 'react-native-gesture-handler';

class Checkout extends Component {
  render() {
    return (
      <>
        <Header
          containerStyle={{
            maxHeight: 60,
            paddingTop: 10,
            backgroundColor: 'white',
          }}
          leftComponent={
            <Icon
              onPress={() =>
                this.props.navigation.navigate('BottomTabNavigator')
              }
              name="chevron-left"
              size={24}
              style={{marginRight: 10}}
            />
          }
          centerComponent={
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Checkout</Text>
          }
        />
        <ScrollView>
          <View style={{marginTop: 1, backgroundColor: 'white'}}>
            <View style={{marginHorizontal: 10, marginVertical: 20}}>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: 'bold',
                  }}>
                  Alamat Pengiriman
                </Text>
                <Icon
                  name="edit"
                  style={{marginLeft: 'auto', marginRight: 5, top: 3}}
                />
                <Text>Ubah</Text>
              </View>
              <View
                style={{
                  marginTop: 10,
                  flexDirection: 'row',
                  width: '96%',
                  borderRadius: 5,
                  borderWidth: 1,
                  height: 100,
                }}>
                <Text
                  style={{
                    marginLeft: 10,
                    marginTop: 'auto',
                    marginBottom: 'auto',
                  }}>
                  info pengiriman
                </Text>
              </View>
            </View>
          </View>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              marginTop: 15,
              marginLeft: 15,
            }}>
            Detail Pesanan
          </Text>
          <View style={{marginTop: 15, backgroundColor: 'white'}}>
            <View style={{marginHorizontal: 10}}>
              <View style={{flexDirection: 'row', marginVertical: 10}}>
                <Image
                  style={{height: 50, width: 55, borderRadius: 5}}
                  source={{
                    uri:
                      'https://cdn1-production-images-kly.akamaized.net/z8IcbR0_U72dfTaN14Xhj0Qc_0s=/640x640/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/1694314/original/037316800_1503982212-067002300_1483451648-Makan-Wortel-Bikin-Sakit-Kuning.jpg',
                  }}
                />
                <View style={{marginHorizontal: 10}}>
                  <Text>Wortel</Text>
                </View>
                <View style={{marginLeft: 'auto'}}>
                  <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity>
                      <Text>untuk counter</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={{marginTop: 1, backgroundColor: 'white'}}>
            <View
              style={{
                marginHorizontal: 10,
                backgroundColor: 'yellow',
                marginVertical: 10,
              }}>
              <View
                style={{
                  margin: 3,
                  borderStyle: 'dashed',
                  borderWidth: 1,
                  borderRadius: 1,
                  flexDirection: 'row',
                }}>
                <Text
                  style={{
                    marginHorizontal: 10,
                    marginVertical: 7,
                    fontWeight: 'bold',
                    color: 'gray',
                  }}>
                  Produk yang tidak tersedia akan dikembalikan dengan voucher
                  melalui email atau aplikasi
                </Text>
              </View>
            </View>
          </View>
          <TouchableOpacity
            style={{
              marginTop: 1,
              backgroundColor: 'white',
              height: 60,
              alignItems: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                marginBottom: 'auto',
                marginTop: 'auto',
              }}>
              <Icon color="#449C45" name="shopping-bag" size={16} />
              <Text
                style={{
                  fontSize: 16,
                  color: '#449C45',
                  fontWeight: 'bold',
                  marginLeft: 15,
                }}>
                Belanja Lagi
              </Text>
            </View>
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              marginTop: 15,
              marginLeft: 15,
            }}>
            Kemasan Produk
          </Text>
          <TouchableOpacity style={{marginTop: 15, backgroundColor: 'white'}}>
            <View
              style={{
                margin: 10,
                borderWidth: 1,
                borderRadius: 5,
                flexDirection: 'row',
              }}>
              <View style={{marginHorizontal: 10, marginVertical: 15}}>
                <Text style={{fontWeight: 'bold'}}>
                  Tidak menggunakan plastik
                </Text>
                <Text style={{fontSize: 12}}>
                  Kemasan Produk tidak menggunakan plastik
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              marginTop: 15,
              marginLeft: 15,
            }}>
            Waktu Pengiriman
          </Text>
          <View style={{backgroundColor: 'white', marginTop: 15}}>
            <View style={{marginHorizontal: 10, marginVertical: 15}}>
              <View
                style={{
                  flexDirection: 'row',
                  borderBottomWidth: 1,
                  paddingBottom: 15,
                }}>
                <Text style={{fontWeight: 'bold'}}>Tanggal Pengiriman</Text>
                <Text style={{marginLeft: 'auto'}}>Jumat, 22 Mei 2020</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 15,
                  borderBottomWidth: 1,
                  paddingBottom: 15,
                }}>
                <Text style={{fontWeight: 'bold'}}>Area Pengiriman</Text>
                <Text style={{marginLeft: 'auto'}}>Bandung</Text>
              </View>
              <View
                style={{
                  marginTop: 15,
                  borderBottomWidth: 1,
                  paddingBottom: 15,
                }}>
                <Text style={{fontWeight: 'bold'}}>Pilih Waktu Pengiriman</Text>
                <TouchableOpacity
                  style={{
                    marginVertical: 10,
                    borderWidth: 1,
                    borderRadius: 3,
                  }}>
                  <View
                    style={{
                      marginHorizontal: 10,
                      marginVertical: 15,
                      flexDirection: 'row',
                    }}>
                    <View>
                      <Text style={{fontWeight: 'bold', fontSize: 12}}>
                        Slot Siang
                      </Text>
                      <Text style={{fontSize: 10}}>ETA 13.00 - 17.00 WIB</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <Input
              multiline={true}
              containerStyle={{marginBottom: 15}}
              inputStyle={{
                borderWidth: 0.5,
                fontSize: 14,
                height: 80,
              }}
              labelStyle={{marginBottom: 5}}
              placeholder="Tambahkan Catatan Khusus"
              label="Catatan (Opsional)"
            />
          </View>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              marginTop: 15,
              marginLeft: 15,
            }}>
            Ringkasan Pembayaran
          </Text>
          <View style={{backgroundColor: 'white', marginVertical: 15}}>
            <View style={{marginHorizontal: 10, marginVertical: 15}}>
              <View
                style={{
                  flexDirection: 'row',
                  borderBottomWidth: 1,
                  paddingBottom: 15,
                }}>
                <Text style={{fontWeight: 'bold'}}>Subtotal (2 item)</Text>
                <Text style={{marginLeft: 'auto'}}>Rp. 240.000</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 15,
                  borderBottomWidth: 1,
                  paddingBottom: 15,
                }}>
                <Text style={{fontWeight: 'bold'}}>Voucher</Text>
                <Text style={{marginLeft: 'auto'}}>(- Rp 0)</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 15,
                  borderBottomWidth: 1,
                  paddingBottom: 15,
                }}>
                <Text style={{fontWeight: 'bold'}}>Ongkos Kirim</Text>
                <Text style={{marginLeft: 'auto'}}>Ro. 20.000</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </>
    );
  }
}

export default Checkout;
