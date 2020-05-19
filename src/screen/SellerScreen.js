import React, { Component } from 'react'
import {StyleSheet, View, Text, Image} from 'react-native';
import {
    Button,
    Tabs,
    Tab,
    TabHeading,
    Icon,
    Container,
    Header,
  } from 'native-base';
  import MainTab from '../components/componentd/MainTab'
  import SellerProfile from '../components/componentd/SellerComponent/SellerProfile'



class SellerScreen extends Component{
    render(){
        return(
        <>
        <SellerProfile />
        <MainTab />



        </>
        )
    }

}

export default SellerScreen;