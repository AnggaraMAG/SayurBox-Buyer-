import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, ScrollView} from 'react-native';
import {
  Button,
  Tabs,
  Tab,
  TabHeading,
  Container,
  Header
} from 'native-base';
import { Icon } from 'react-native-elements' 
import ItemList from './SellerComponent/ItemList'

import {withNavigation} from 'react-navigation';

class MainTab extends Component {

    constructor(){
        super()
        this.state = {
            active: ''
        }
    }



  render() {
    return (
        <Container style={{marginTop:-70}}>
        <Tabs tabBarUnderlineStyle={styles.underline} >
          <Tab
            heading={<TabHeading style={{backgroundColor:"white"}}><Icon name="shop" type="entypo" color={this.state.active === 1 ? '#439D46' : '#576357'}/></TabHeading>}
            textStyle={styles.colors}
            activeTextStyle={styles.colors}
            activeTabStyle={styles.tabstyle}
            tabStyle={styles.tabstyle}
            onChangeTab={() => {this.setState({active:1})}}>
            <ScrollView>
            <ItemList />
            </ScrollView>
          </Tab>
          <Tab
            heading={<TabHeading style={{backgroundColor:"white"}}><Icon name="star" type="feather" color={this.state.active === 1 ? '#439D46' : '#576357'}/></TabHeading>}
            textStyle={styles.colors}
            activeTextStyle={styles.colors}
            tabStyle={styles.tabstyle}
            activeTabStyle={styles.tabstyle}>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  colors: {
    color: 'green',
  },
  tabstyle: {
    backgroundColor: 'white',
    color: 'green',
  },
  underline: {
    backgroundColor: 'green',
    borderRadius: 5,
  },
});

export default withNavigation(MainTab);