import React, { Component } from 'react'
import { View, TouchableOpacity,Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

export default class FilterButton extends Component {
    render(){
        return(
            <>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={{flex:1, flexDirection: 'row'}}>
            <TouchableOpacity style={{borderRadius:10, borderWidth:2, width:100,marginTop:10, marginLeft:10, borderColor:'green'}}>
            <Text style={{textAlign:'center', color:'gray'}}>Sayuran</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{borderRadius:10, borderWidth:2, width:100,marginTop:10, marginLeft:10, borderColor:'green'}}>
            <Text style={{textAlign:'center', color:'gray'}}>Buah</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{borderRadius:10, borderWidth:2, width:100,marginTop:10, marginLeft:10, borderColor:'green'}}>
            <Text style={{textAlign:'center', color:'gray'}}>Promo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{borderRadius:10, borderWidth:2, width:100,marginTop:10, marginLeft:10, borderColor:'green'}}>
            <Text style={{textAlign:'center', color:'gray'}}>Sayuran</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{borderRadius:10, borderWidth:2, width:100,marginTop:10, marginLeft:10, borderColor:'green'}}>
            <Text style={{textAlign:'center', color:'gray'}}>Sayuran</Text>
            </TouchableOpacity>
            </View>
            </ScrollView>
        </>
        )
    }
}