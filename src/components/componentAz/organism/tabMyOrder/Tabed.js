import React, {Component} from 'react';
import {Container, Tab, Tabs} from 'native-base';
import {StyleSheet, ScrollView, View} from 'react-native';
import {withNavigation} from 'react-navigation';

// import InProgress from './inProgress/inProgress';
import InProgressValued from './inProgress/inProgressValued';
// import Completed from './completed/completed';
import CompletedValued from './completed/completedValued';

// import jsonData from './../json/json inProgress/inProgress.json';

class Tabed extends Component {
  constructor() {
    super();
    this.state = {
      data: null,
    };
  }

  render() {
    return (
      <Container style={{flex: 1}}>
        <Tabs tabBarUnderlineStyle={styles.underline}>
          <Tab
            heading="In Progress"
            textStyle={styles.colors}
            activeTextStyle={styles.colors}
            activeTabStyle={styles.tabstyle}
            tabStyle={styles.tabstyle}>
            <ScrollView>
              <InProgressValued
                toChat={() => this.props.navigation.navigate('ChatScreen')}
                toDetail={() => this.props.navigation.navigate('DetailOrder')}
              />
            </ScrollView>
          </Tab>
          <Tab
            heading="Completed"
            textStyle={styles.colors}
            activeTextStyle={styles.colors}
            tabStyle={styles.tabstyle}
            activeTabStyle={styles.tabstyle}>
            <CompletedValued
              toDetail={() => this.props.navigation.navigate('DetailOrder')}
            />
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

export default withNavigation(Tabed);
