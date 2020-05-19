import React, {Component} from 'react'
import { Container, Header, Content, Card, CardItem, Body, Text, View } from 'native-base';
import { Image, Button, TouchableOpacity } from 'react-native'
import FilterButton from './molecules/FilterButton'

export default class ItemList extends Component {
    render(){
        return(
            <>
            <FilterButton />
            <Text style={{fontWeight:'bold',fontSize:20, left:5}}>Produk Unggulan</Text>
            <View style={{flex:1, flexDirection:'row'}}>
        <TouchableOpacity>
          <Card style={{width:140, left:10, height:200,marginTop:10, borderRadius:7}}>
            <CardItem>
              <Body>
                <Image source={require('../../../assets/images/tomat.jpg')} style={{width:100, height: 80}} />
                <Text style={{fontSize:13 , fontFamily:'Roboto', marginTop:10}}> Buah Tomat 1kg</Text>
                <Text style={{fontSize:13 , fontFamily:'Roboto', width:100,marginLeft:3}}>Promo Ramadhan</Text>
                <Text style={{fontSize:13 , fontFamily:'Roboto', fontWeight:'bold', marginTop:10}}> RP. 50000</Text>

              </Body>
            </CardItem>
          </Card>
          </TouchableOpacity>
          <TouchableOpacity>
          <Card style={{width:140, left:10, height:200,marginTop:10, borderRadius:7, marginLeft:10}}>
            <CardItem>
              <Body>
                <Image source={require('../../../assets/images/tomat.jpg')} style={{width:100, height: 80}} />
                <Text style={{fontSize:13 , fontFamily:'Roboto', marginTop:10}}> Buah Tomat 1kg</Text>
                <Text style={{fontSize:13 , fontFamily:'Roboto', width:100,marginLeft:3}}>Promo Ramadhan</Text>
                <Text style={{fontSize:13 , fontFamily:'Roboto', fontWeight:'bold', marginTop:10}}> RP. 50000</Text>

              </Body>
            </CardItem>
          </Card>
          </TouchableOpacity>
          </View>
            </>
        )
    }
}