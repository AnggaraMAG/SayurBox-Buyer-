import React, {Component} from 'react';
import {
  StatusBar,
  View,
  ScrollView,
  Text,
  Image,
  TextInput,
} from 'react-native';
import ImageSlider from 'react-native-image-slider';
import {Icon} from 'native-base';
import {connect} from 'react-redux';
import {add_item} from '../_actions/cart';

//image
import apel from '../assets/assetsF/Spesial/apel.jpg';
import sereh from '../assets/assetsF/Spesial/sereh.jpg';
import kiwi from '../assets/assetsF/Spesial/kiwi.jpg';

import Separator from './../components/componentAz/organism/separator/separator';
import MainFeature from '../components/molecules/MainFeature/index';
import MainContent from '../components/molecules/MainContent/index';
import MainBanner from '../components/molecules/MainBanner/index';
import MainLine from '../components/molecules/MainLine/index';
import BottomSheetOrder from '../components/componentd/BottomSheetOrder';
import Colors from './../components/componentAz/color/color';
import SeeAll from '../components/componentAz/organism/shopScreen/seeAll/seeAll';
import Cart from '../components/cart';

const item_list = [
  {
    img: kiwi,
    buah: 'Kiwi',
    bentuk: '4 pcs',
    satuan1: 'kg',
    harga: 25500,
    satuan: 'kg',
    total: 1,
  },
  {
    img: apel,
    buah: 'Apel',
    bentuk: '5 pcs',
    satuan1: 'kg',
    harga: 20500,
    satuan: 'kg',
    total: 1,
  },
  {
    img: sereh,
    buah: 'Sereh',
    bentuk: '5 pcs',
    satuan1: 'kg',
    harga: 22000,
    satuan: 'kg',
    total: 1,
  },
];

class ShopScreen extends Component {
  render() {
    const items = this.props.cart.data;
    return (
      <View style={{flex: 1, backgroundColor: Colors.WHITE}}>
        <StatusBar barStyle="dark-content" backgroundColor="white" />
        <View style={{position: 'absolute'}}>
          <BottomSheetOrder />
        </View>
        {/* Header */}
        {/* Garis */}

        {/* EndGaris */}

        {/* Search Bar */}
        <View>
          <View
            style={{
              marginHorizontal: 20,
              flexDirection: 'row',
              paddingTop: 50,
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
        {/* End Search Bar */}
        {/* Slider */}
        <ScrollView style={{marginTop: 10}}>
          <View>
            <ImageSlider
              style={{
                flex: 1,
                width: '100%',
                height: 150,
                position: 'absolute',
              }}
              images={[
                require('../assets/assetsF/slider/slider1.jpg'),
                require('../assets/assetsF/slider/slider3.jpg'),
                require('../assets/assetsF/slider/image4.jpg'),
                require('../assets/assetsF/slider/slider6.jpg'),
                require('../assets/assetsF/slider/slider7.jpg'),
              ]}
              autoPlayWithInterval={3000}
            />
            <View style={{alignItems: 'flex-end', paddingTop: 120}}>
              <View
                style={{
                  backgroundColor: '#DEDAD1',
                  height: 30,
                  width: 130,
                  borderTopLeftRadius: 20,
                  position: 'relative',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: 'bold',
                    color: 'white',
                    textAlign: 'center',
                  }}>
                  Lihat Semuanya
                </Text>
              </View>
            </View>
          </View>
          {/* Feature */}
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              marginHorizontal: 20,
              marginTop: 20,
            }}>
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                width: '100%',
                flexWrap: 'wrap',
              }}>
              {/* 1 */}
              {/* <TouchableOpacity> */}
              <MainFeature
                onPress={() =>
                  this.props.navigation.navigate('SearchScreen', 'Sayuran')
                }
                title="Sayuran"
                img={require('../assets/assetsF/Icon/wortel.png')}
              />
              {/* </TouchableOpacity> */}
              <MainFeature
                onPress={() =>
                  this.props.navigation.navigate('SearchScreen', 'Buah')
                }
                title="Buah"
                img={require('../assets/assetsF/Icon/alpukat.png')}
              />
              <MainFeature
                onPress={() =>
                  this.props.navigation.navigate('SearchScreen', 'Paket')
                }
                title="Paket"
                img={require('../assets/assetsF/Icon/gandum.png')}
              />
            </View>
          </View>
          {/* End Feature */}
          {/* Garis */}
          <MainLine />
          {/* End Garis */}
          {/* Spesial Hari Ini */}
          <View
            style={{
              flex: 1,
            }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                marginTop: 5,
              }}>
              <View
                style={{
                  flex: 2.5,
                  marginLeft: 10,
                }}>
                <Text
                  style={{fontSize: 17, fontWeight: '800', color: '#576357'}}>
                  Spesial Hari Ini
                </Text>
                <Text
                  style={{fontSize: 13, fontWeight: '800', color: '#ACB2AD'}}>
                  Promo menarik dari Sayurbox untuk kamu
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  flexDirection: 'row',
                }}>
                <SeeAll />
                <Icon
                  name="right"
                  type="AntDesign"
                  style={{fontSize: 15, color: Colors.PRIMARY, paddingTop: 8}}
                />
              </View>
            </View>
            {/* Garis */}
            <Separator />
            {/* End Garis */}
            <View style={{flex: 3, marginTop: 5}}>
              <ScrollView horizontal>
                {item_list.map((val, id) => (
                  <MainContent
                    key={id}
                    id={id}
                    img={val.img}
                    buah={val.buah}
                    bentuk={val.bentuk}
                    satuan1={val.satuan1}
                    harga={val.harga}
                    satuan={val.satuan}
                    total={val.total}
                    toDetail={() =>
                      this.props.navigation.navigate('DetailProduct', {
                        id: 1,
                        name: 'kiwi',
                      })
                    }
                    buy={() => {
                      this.props.add_item(items, val);
                      this.setState({
                        items: items,
                      });
                    }}
                  />
                ))}
              </ScrollView>
            </View>
          </View>

          {/* Garis */}
          <MainLine />
          {/* End Garis */}

          {/* Sayuran Hari Ini */}
          <View
            style={{
              flex: 1,
            }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                marginTop: 5,
              }}>
              <View
                style={{
                  flex: 2.5,
                  marginLeft: 10,
                }}>
                <Text
                  style={{fontSize: 17, fontWeight: '800', color: '#576357'}}>
                  Sayuran Segar
                </Text>
                <Text
                  style={{fontSize: 13, fontWeight: '800', color: '#ACB2AD'}}>
                  Kumpulan Sayur Segar
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  flexDirection: 'row',
                }}>
                <SeeAll />
                <Icon
                  name="right"
                  type="AntDesign"
                  style={{fontSize: 15, color: Colors.PRIMARY, paddingTop: 8}}
                />
              </View>
            </View>
            {/* Garis */}
            <Separator />
            {/* End Garis */}
            <View style={{flex: 3, marginTop: 5}}>
              <ScrollView horizontal>
                <MainContent
                  img={require('../assets/assetsF/Sayuran/bawangmerah.jpg')}
                  buah="Bawang Merah"
                  bentuk="1 pcs"
                  satuan1="kg"
                  harga="30.000"
                  satuan="kg"
                />
                <MainContent
                  img={require('../assets/assetsF/Sayuran/jamur.jpg')}
                  buah="Jamur"
                  bentuk="1 pcs"
                  satuan1="kg"
                  harga="20.000"
                  satuan="kg"
                />
                <MainContent
                  img={require('../assets/assetsF/Sayuran/kacangpanjang.jpg')}
                  buah="Kacang Panjang"
                  bentuk="1 pcs"
                  satuan1="kg"
                  harga="25.000"
                  satuan="pcs"
                />
                <MainContent
                  img={require('../assets/assetsF/Sayuran/kembangkol.jpg')}
                  buah="Kembang Kol"
                  bentuk="1-2 buah"
                  satuan1="kg"
                  harga="30.000"
                  satuan="kg"
                />
                <MainContent
                  img={require('../assets/assetsF/Sayuran/selada.jpg')}
                  buah="Selada"
                  bentuk="3-5 Buah"
                  satuan1="pcs"
                  harga="20.000"
                  satuan="kg"
                />
                <MainContent
                  img={require('../assets/assetsF/Sayuran/terong.jpg')}
                  buah="terong"
                  bentuk="3-5 Buah"
                  satuan1="pcs"
                  harga="30.000"
                  satuan="kg"
                />
              </ScrollView>
            </View>
          </View>

          {/* Garis */}
          <MainLine />
          {/* End Garis */}

          {/* Juice For You */}
          <View
            style={{
              flex: 1,
            }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                marginTop: 5,
              }}>
              <View
                style={{
                  flex: 2.5,
                  marginLeft: 10,
                }}>
                <Text
                  style={{fontSize: 17, fontWeight: '800', color: '#576357'}}>
                  Juice For You!
                </Text>
                <Text
                  style={{fontSize: 13, fontWeight: '800', color: '#ACB2AD'}}>
                  Aneka jus untuk tiap harimu
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  flexDirection: 'row',
                }}>
                <SeeAll />
                <Icon
                  name="right"
                  type="AntDesign"
                  style={{fontSize: 15, color: Colors.PRIMARY, paddingTop: 8}}
                />
              </View>
            </View>
            <View>
              <Image
                source={require('../assets/assetsF/card/4.jpg')}
                style={{height: 150, width: '100%', marginTop: 5}}
              />
            </View>
            <View style={{flex: 3, marginTop: 5}}>
              <ScrollView horizontal>
                <MainContent
                  img={require('../assets/assetsF/Sayuran/bawangmerah.jpg')}
                  buah="Bawang Merah"
                  bentuk="1 pcs"
                  satuan1="kg"
                  harga="30.000"
                  satuan="kg"
                />
                <MainContent
                  img={require('../assets/assetsF/Sayuran/jamur.jpg')}
                  buah="Jamur"
                  bentuk="1 pcs"
                  satuan1="kg"
                  harga="20.000"
                  satuan="kg"
                />
                <MainContent
                  img={require('../assets/assetsF/Sayuran/kacangpanjang.jpg')}
                  buah="Kacang Panjang"
                  bentuk="1 pcs"
                  satuan1="kg"
                  harga="25.000"
                  satuan="pcs"
                />
                <MainContent
                  img={require('../assets/assetsF/Sayuran/kembangkol.jpg')}
                  buah="Kembang Kol"
                  bentuk="1-2 buah"
                  satuan1="kg"
                  harga="30.000"
                  satuan="kg"
                />
                <MainContent
                  img={require('../assets/assetsF/Sayuran/selada.jpg')}
                  buah="Selada"
                  bentuk="3-5 Buah"
                  satuan1="pcs"
                  harga="20.000"
                  satuan="kg"
                />
                <MainContent
                  img={require('../assets/assetsF/Sayuran/terong.jpg')}
                  buah="terong"
                  bentuk="3-5 Buah"
                  satuan1="pcs"
                  harga="30.000"
                  satuan="kg"
                />
              </ScrollView>
            </View>
          </View>

          {/* Garis */}
          <MainLine />
          {/* End Garis */}

          {/* Banner */}
          <MainBanner
            title="Untuk Yang Paling Setia"
            keterangan="Dapat hadiah dari Sayurbox di sini!"
            img={require('../assets/assetsF/card/5.jpg')}
          />
          {/* End Banner */}

          {/* Garis */}
          <MainLine />
          {/* End Garis */}

          {/* Lebih Dari Jeruk */}
          <View
            style={{
              flex: 1,
            }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                marginTop: 5,
              }}>
              <View
                style={{
                  flex: 2.5,
                  marginLeft: 10,
                }}>
                <Text
                  style={{fontSize: 17, fontWeight: '800', color: '#576357'}}>
                  Lebih dari Jeruk
                </Text>
                <Text
                  style={{fontSize: 13, fontWeight: '800', color: '#ACB2AD'}}>
                  Vitamin C paling tinggi di sini!
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  flexDirection: 'row',
                }}>
                <SeeAll />

                <Icon
                  name="right"
                  type="AntDesign"
                  style={{fontSize: 15, color: Colors.PRIMARY, paddingTop: 8}}
                />
              </View>
            </View>
            <View>
              <Image
                source={require('../assets/assetsF/card/6.jpg')}
                style={{height: 150, width: '100%', marginTop: 5}}
              />
            </View>
            <View style={{flex: 3, marginTop: 5}}>
              <ScrollView horizontal>
                <MainContent
                  img={require('../assets/assetsF/VitaminC/brokoli.jpg')}
                  buah="Brokoli"
                  bentuk="1 pcs"
                  satuan1="kg"
                  harga="30.000"
                  satuan="kg"
                />
                <MainContent
                  img={require('../assets/assetsF/VitaminC/kiwi.jpg')}
                  buah="Kiwi"
                  bentuk="4-6 Buah"
                  satuan1="kg"
                  harga="20.000"
                  satuan="kg"
                />
                <MainContent
                  img={require('../assets/assetsF/VitaminC/kolputih.jpg')}
                  buah="Kol Putih"
                  bentuk="1 pcs"
                  satuan1="kg"
                  harga="25.000"
                  satuan="pcs"
                />
                <MainContent
                  img={require('../assets/assetsF/VitaminC/kolungu.jpg')}
                  buah="Kol Ungu"
                  bentuk="1-2 buah"
                  satuan1="kg"
                  harga="30.000"
                  satuan="kg"
                />
                <MainContent
                  img={require('../assets/assetsF/VitaminC/nanas.jpg')}
                  buah="Nanas"
                  bentuk="1-2 Buah"
                  satuan1="pcs"
                  harga="25.000"
                  satuan="kg"
                />
                <MainContent
                  img={require('../assets/assetsF/VitaminC/pepaya.jpg')}
                  buah="Pepaya"
                  bentuk="1 Buah"
                  satuan1="pcs"
                  harga="30.000"
                  satuan="kg"
                />
              </ScrollView>
            </View>
          </View>
          {/* End Lebih Dari Jeruk */}

          {/* Garis */}
          <MainLine />
          {/* End Garis */}

          {/* Kuat-Kuatin */}
          <View
            style={{
              flex: 1,
            }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                marginTop: 5,
              }}>
              <View
                style={{
                  flex: 2.5,
                  marginLeft: 10,
                }}>
                <Text
                  style={{fontSize: 17, fontWeight: '800', color: '#576357'}}>
                  Kuat-Kuatin!
                </Text>
                <Text
                  style={{fontSize: 13, fontWeight: '800', color: '#ACB2AD'}}>
                  Agar sehat terus, kapanpun!
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  flexDirection: 'row',
                }}>
                <SeeAll />
                <Icon
                  name="right"
                  type="AntDesign"
                  style={{fontSize: 15, color: Colors.PRIMARY, paddingTop: 8}}
                />
              </View>
            </View>
            <View>
              <Image
                source={require('../assets/assetsF/card/7.jpg')}
                style={{height: 150, width: '100%', marginTop: 5}}
              />
            </View>
            <View style={{flex: 3, marginTop: 5}}>
              <ScrollView horizontal>
                <MainContent
                  img={require('../assets/assetsF/Kuatin/beraskencur.jpg')}
                  buah="Beras Kencur"
                  bentuk="100 ml"
                  satuan1="pcs"
                  harga="15.000"
                  satuan="1 pcs"
                />
                <MainContent
                  img={require('../assets/assetsF/Kuatin/kunyit.jpg')}
                  buah="Kunyit"
                  bentuk="200"
                  satuan1="gram"
                  harga="20.000"
                  satuan="200 gram"
                />
                <MainContent
                  img={require('../assets/assetsF/Kuatin/sawihijau.jpg')}
                  buah="Sawi Hijau"
                  bentuk="1 Buah"
                  satuan1="kg"
                  harga="25.000"
                  satuan="Kg"
                />
                <MainContent
                  img={require('../assets/assetsF/Kuatin/strawberry.jpg')}
                  buah="Strawberry"
                  bentuk="1 pcs"
                  satuan1="kg"
                  harga="30.000"
                  satuan="kg"
                />
              </ScrollView>
            </View>
          </View>
          {/* End Kuat-Kuatin */}

          {/* Garis */}
          <MainLine />
          {/* End Garis */}

          {/* Banner SayurBox */}
          <MainBanner
            title="#SayurboxYangAntar"
            keterangan="Apresiasi untuk mereka."
            img={require('../assets/assetsF/card/8.jpg')}
          />
          {/* End Banner SayurBox */}

          {/* Garis */}
          <MainLine />
          {/* End Garis */}

          {/* Kita Pilihin*/}
          <View
            style={{
              flex: 1,
            }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                marginTop: 5,
              }}>
              <View
                style={{
                  flex: 2.5,
                  marginLeft: 10,
                }}>
                <Text
                  style={{fontSize: 17, fontWeight: '800', color: '#576357'}}>
                  Kita Pilihin
                </Text>
                <Text
                  style={{fontSize: 13, fontWeight: '800', color: '#ACB2AD'}}>
                  Untuk kamu hanya yang terbaik
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  flexDirection: 'row',
                }}>
                <SeeAll />
                <Icon
                  name="right"
                  type="AntDesign"
                  style={{fontSize: 15, color: Colors.PRIMARY, paddingTop: 8}}
                />
              </View>
            </View>
            <View>
              <Image
                source={require('../assets/assetsF/card/9.jpg')}
                style={{height: 150, width: '100%', marginTop: 5}}
              />
            </View>
            <View style={{flex: 3, marginTop: 5}}>
              <ScrollView horizontal>
                <MainContent
                  img={require('../assets/assetsF/Kitapilihin/baksogigilbasil.jpg')}
                  buah="Bakso"
                  bentuk="285"
                  satuan1="gram"
                  harga="15.000"
                  satuan="1 pcs"
                />
                <MainContent
                  img={require('../assets/assetsF/Kitapilihin/rahsanusantara.jpg')}
                  buah="Rahsa Nusantara"
                  bentuk="1 bottle"
                  satuan1="200 ml"
                  harga="20.000"
                  satuan="1 pcs"
                />
                <MainContent
                  img={require('../assets/assetsF/Kitapilihin/sayurboxtelor.jpg')}
                  buah="Sayur Box Telor"
                  bentuk="1 set"
                  satuan1="pcs"
                  harga="25.000"
                  satuan="1 pcs"
                />
                <MainContent
                  img={require('../assets/assetsF/Kitapilihin/vidabaksodaging.jpg')}
                  buah="Vida Bakso Daging"
                  bentuk="1 pcs"
                  satuan1="285 gram"
                  harga="30.000"
                  satuan="1 pcs"
                />
              </ScrollView>
            </View>
          </View>
          {/* End Kita Pilihin */}

          {/* Garis */}
          <MainLine />
          {/* End Garis */}

          {/* Bikin Empon-Empon */}
          <View
            style={{
              flex: 1,
            }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                marginTop: 5,
              }}>
              <View
                style={{
                  flex: 2.5,
                  marginLeft: 10,
                }}>
                <Text
                  style={{fontSize: 17, fontWeight: '800', color: '#576357'}}>
                  Bikin Empon-Empon
                </Text>
                <Text
                  style={{fontSize: 13, fontWeight: '800', color: '#ACB2AD'}}>
                  Aman menjaga daya tahan tubuh
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  flexDirection: 'row',
                }}>
                <SeeAll />
                <Icon
                  name="right"
                  type="AntDesign"
                  style={{fontSize: 15, color: Colors.PRIMARY, paddingTop: 8}}
                />
              </View>
            </View>
            <View>
              <Image
                source={require('../assets/assetsF/card/10.jpg')}
                style={{height: 150, width: '100%', marginTop: 5}}
              />
            </View>
            <View style={{flex: 3, marginTop: 5}}>
              <ScrollView horizontal>
                <MainContent
                  img={require('../assets/assetsF/BikinEmpon/cincauhitam.jpg')}
                  buah="Cincau Hitam"
                  bentuk="285"
                  satuan1="gram"
                  harga="15.000"
                  satuan="1 pcs"
                />
                <MainContent
                  img={require('../assets/assetsF/Kitapilihin/rahsanusantara.jpg')}
                  buah="Rahsa Nusantara"
                  bentuk="1 bottle"
                  satuan1="200 ml"
                  harga="20.000"
                  satuan="1 pcs"
                />
                <MainContent
                  img={require('../assets/assetsF/Kitapilihin/sayurboxtelor.jpg')}
                  buah="Sayur Box Telor"
                  bentuk="1 set"
                  satuan1="pcs"
                  harga="25.000"
                  satuan="1 pcs"
                />
                <MainContent
                  img={require('../assets/assetsF/Kitapilihin/vidabaksodaging.jpg')}
                  buah="Vida Bakso Daging"
                  bentuk="1 pcs"
                  satuan1="285 gram"
                  harga="30.000"
                  satuan="1 pcs"
                />
              </ScrollView>
            </View>
          </View>
          {/* End Bikin Empon-Empon */}

          {/* Garis */}
          <MainLine />
          {/* End Garis */}

          {/* Banner di rumah lebih aman */}
          <MainBanner
            title="Di Rumah Lebih Aman"
            keterangan="Sudah cukup membantu banyak orang"
            img={require('../assets/assetsF/card/11.jpg')}
          />
          {/* End Banner di rumah lebih aman */}

          {/* Garis */}
          <MainLine />
          {/* End Garis */}

          {/* Cegah Virus */}
          <View
            style={{
              flex: 1,
            }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                marginTop: 5,
              }}>
              <View
                style={{
                  flex: 2.5,
                  marginLeft: 10,
                }}>
                <Text
                  style={{fontSize: 17, fontWeight: '800', color: '#576357'}}>
                  Makanan Ini Cegah V...
                </Text>
                <Text
                  style={{fontSize: 13, fontWeight: '800', color: '#ACB2AD'}}>
                  Jangan Sampai Virus Menyerang
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  flexDirection: 'row',
                }}>
                <SeeAll />
                <Icon
                  name="right"
                  type="AntDesign"
                  style={{fontSize: 15, color: Colors.PRIMARY, paddingTop: 8}}
                />
              </View>
            </View>
            <View>
              <Image
                source={require('../assets/assetsF/card/12.jpg')}
                style={{height: 150, width: '100%', marginTop: 5}}
              />
            </View>
            <View style={{flex: 3, marginTop: 5}}>
              <ScrollView horizontal>
                <MainContent
                  img={require('../assets/assetsF/Jamu/beraskencur.jpg')}
                  buah="Beras Kencur"
                  bentuk="150 ml"
                  satuan1="pcs"
                  harga="15.000"
                  satuan="1 pcs"
                />
                <MainContent
                  img={require('../assets/assetsF/Jamu/jahe.jpg')}
                  buah="Jahe Merah"
                  bentuk="150 ml"
                  satuan1="pcs"
                  harga="15.000"
                  satuan="1 pcs"
                />
                <MainContent
                  img={require('../assets/assetsF/Jamu/jamupresiden.jpg')}
                  buah="Jamu Presiden"
                  bentuk="150 ml"
                  satuan1="pcs"
                  harga="15.000"
                  satuan="1 pcs"
                />
                <MainContent
                  img={require('../assets/assetsF/Jamu/kunyitasam.jpg')}
                  buah="Kunyit Asam"
                  bentuk="150 ml"
                  satuan1="pcs"
                  harga="15.000"
                  satuan="1 pcs"
                />
                <MainContent
                  img={require('../assets/assetsF/Jamu/temulawak.jpg')}
                  buah="Temu Lawan"
                  bentuk="150 ml"
                  satuan1="pcs"
                  harga="15.000"
                  satuan="1 pcs"
                />
              </ScrollView>
            </View>
          </View>
          {/* End Cegah Virus */}

          {/* Garis */}
          <MainLine />
          {/* End Garis */}

          {/* Tanpa Keluar Rumah */}
          <View
            style={{
              flex: 1,
            }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                marginTop: 5,
              }}>
              <View
                style={{
                  flex: 2.5,
                  marginLeft: 10,
                }}>
                <Text
                  style={{fontSize: 17, fontWeight: '800', color: '#576357'}}>
                  Tanpa Keluar Rumah
                </Text>
                <Text
                  style={{fontSize: 13, fontWeight: '800', color: '#ACB2AD'}}>
                  Semua bahan dapur ada disini
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  flexDirection: 'row',
                }}>
                <SeeAll />
                <Icon
                  name="right"
                  type="AntDesign"
                  style={{fontSize: 15, color: Colors.PRIMARY, paddingTop: 8}}
                />
              </View>
            </View>
            <View>
              <Image
                source={require('../assets/assetsF/card/13.jpg')}
                style={{height: 150, width: '100%', marginTop: 5}}
              />
            </View>
            <View style={{flex: 3, marginTop: 5}}>
              <ScrollView horizontal>
                <MainContent
                  img={require('../assets/assetsF/BahanPokok/AgronusantaraBerasLosari5kg.jpg')}
                  buah="Beras Losari"
                  bentuk="Losari"
                  satuan1="3 kg"
                  harga="50.000"
                  satuan="1 pack"
                />
                <MainContent
                  img={require('../assets/assetsF/BahanPokok/AgronusantaraBerasSuperboy.jpg')}
                  buah="Beras Superboy"
                  bentuk="1 pack"
                  satuan1="5kg"
                  harga="15.000"
                  satuan="1 pack"
                />
                <MainContent
                  img={require('../assets/assetsF/BahanPokok/AgronusantaraBerasWanemo.jpg')}
                  buah="Beras Wanemo"
                  bentuk="1 pack"
                  satuan1="5kg"
                  harga="160.000"
                  satuan="1 pack"
                />
                <MainContent
                  img={require('../assets/assetsF/BahanPokok/bawangmerah.jpg')}
                  buah="Bawang Merah"
                  bentuk="1"
                  satuan1="kg"
                  harga="27.000"
                  satuan="1 kg"
                />
                <MainContent
                  img={require('../assets/assetsF/BahanPokok/bawangputih.jpg')}
                  buah="Bawang Putih"
                  bentuk="1"
                  satuan1="kg"
                  harga="30.000"
                  satuan="1 kg"
                  // onPress={() => alert('aku')}
                />
              </ScrollView>
            </View>
          </View>
          {/* End Tanpa Keluar Rumah */}

          {/* Garis */}
          <MainLine />
          {/* End Garis */}

          {/* Banner Jaga Gigi Kamu*/}
          <MainBanner
            title="Jaga Gigi Kamu!"
            keterangan="Buah untuk jaga kesehatan gigi"
            img={require('../assets/assetsF/card/14.jpg')}
          />
          {/* End Banner Jaga Gigi Kamu*/}

          {/* Garis */}
          <MainLine />
          {/* End Garis */}

          {/*  Serba Praktis*/}
          <View
            style={{
              flex: 1,
            }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                marginTop: 5,
              }}>
              <View
                style={{
                  flex: 2.5,
                  marginLeft: 10,
                }}>
                <Text
                  style={{fontSize: 17, fontWeight: '800', color: '#576357'}}>
                  Serba Praktis!
                </Text>
                <Text
                  style={{fontSize: 13, fontWeight: '800', color: '#ACB2AD'}}>
                  Biar cepet dan ringkes!
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  flexDirection: 'row',
                }}>
                <SeeAll />
                <Icon
                  name="right"
                  type="AntDesign"
                  style={{fontSize: 15, color: Colors.PRIMARY, paddingTop: 8}}
                />
              </View>
            </View>
            <View>
              <Image
                source={require('../assets/assetsF/card/15.jpg')}
                style={{height: 150, width: '100%', marginTop: 5}}
              />
            </View>
            <View style={{flex: 3, marginTop: 5}}>
              <ScrollView horizontal>
                <MainContent
                  img={require('../assets/assetsF/SerbaPraktis/kentangbrokoli.jpg')}
                  buah="Kentang Brokoli"
                  bentuk="Losari"
                  satuan1="3 kg"
                  harga="50.000"
                  satuan="1 pack"
                />
                <MainContent
                  img={require('../assets/assetsF/SerbaPraktis/nanaspisangbayem.jpg')}
                  buah="Nanas Pisang Bayem"
                  bentuk="1 pack"
                  satuan1="5kg"
                  harga="15.000"
                  satuan="1 pack"
                />
                <MainContent
                  img={require('../assets/assetsF/SerbaPraktis/SayurBoxJagungBayam.jpg')}
                  buah="Jagung Bayem"
                  bentuk="1 pack"
                  satuan1="5kg"
                  harga="160.000"
                  satuan="1 pack"
                />
                <MainContent
                  img={require('../assets/assetsF/SerbaPraktis/UbiWortelJagung.jpg')}
                  buah="Ubi Wortel Jagung"
                  bentuk="1"
                  satuan1="kg"
                  harga="27.000"
                  satuan="1 kg"
                />
                <MainContent
                  img={require('../assets/assetsF/SerbaPraktis/worteltomatjeruk.jpg')}
                  buah="Wortel Tomat Jeruk"
                  bentuk="1"
                  satuan1="kg"
                  harga="30.000"
                  satuan="1 kg"
                />
              </ScrollView>
            </View>
          </View>
          {/* End  Serba Praktis*/}

          {/* Garis */}
          <MainLine />
          {/* End Garis */}

          {/* Banner Youtube sayur*/}
          <MainBanner
            title="Youtube-nya Sayurb..."
            keterangan="Keseruan video resep, tips disini."
            img={require('../assets/assetsF/card/16.jpg')}
          />
          {/* End Youtube sayur*/}

          {/* Garis */}
          <MainLine />
          {/* End Garis */}

          {/* Banner Kumpulan resep*/}
          <MainBanner
            title="Kumpulan Resep!"
            keterangan="Donwload Kumpulan Resep menarik disini"
            img={require('../assets/assetsF/card/17.jpg')}
          />
          {/* End Kumpulan Resep*/}

          {/* Garis */}
          <View
            style={{
              backgroundColor: '#BABFB9',
              height: 30,
              marginTop: 5,
            }}
          />
          {/* End Garis */}
        </ScrollView>
        {/* <Footers /> */}
        {this.props.cart.data.length === 0 ? null : (
          <Cart navigation={this.props.navigation} />
        )}
        {/* End Slider */}
      </View>
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
    add_item: (pervData, data) => dispatch(add_item(pervData, data)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ShopScreen);
