import React, {Component} from 'react';
import {StyleSheet, Text} from 'react-native';
import {Footer, FooterTab, Button} from 'native-base';

import {Icon} from 'react-native-elements';

import {withNavigation} from 'react-navigation';

class Footers extends Component {
  state = {
    active: null,
  };

  componentDidMount() {
    this.setState({
      active: 1,
    });
  }
  render() {
    return (
      <Footer style={styles.bawahcuk}>
        <FooterTab style={styles.bgputih}>
          <Button
            vertical
            onPress={() => {
              this.setState({
                active: 1,
              });
              this.props.navigation.navigate('ShopScreen');
            }}>
            <Icon
              color={this.state.active === 1 ? '#439D46' : '#576357'}
              name="shopping-basket"
              type="font-awesome"
              size={23}
            />
            <Text style={styles.text}>Shop</Text>
          </Button>
          <Button
            vertical
            onPress={() => {
              this.setState({
                active: 2,
              });
              this.props.navigation.navigate('OrderScreen');
            }}>
            <Icon
              name="receipt"
              type="material-icons"
              color={this.state.active === 2 ? '#439D46' : '#576357'}
              size={23}
            />

            <Text style={styles.text}>My Order</Text>
          </Button>
          <Button
            vertical
            onPress={() => {
              this.setState({
                active: 3,
              });
              this.props.navigation.navigate('InboxScreen');
            }}>
            <Icon
              name="mail"
              type="feather"
              color={this.state.active === 3 ? '#439D46' : '#576357'}
              size={23}
            />
            <Text style={styles.text}>Inbox</Text>
          </Button>
          <Button
            vertical
            onPress={() => {
              this.setState({
                active: 4,
              });
              this.props.navigation.navigate('ChatScreen');
            }}>
            <Icon
              name="chat"
              type="material-icons"
              color={this.state.active === 4 ? '#439D46' : '#576357'}
              size={23}
            />
            <Text style={styles.text}>Chat</Text>
          </Button>
          <Button
            vertical
            onPress={() => {
              this.setState({
                active: 5,
              });
              this.props.navigation.navigate('LoginScreen');
            }}>
            <Icon
              name="user"
              type="feather"
              color={this.state.active === 5 ? '#439D46' : '#576357'}
              size={23}
            />
            <Text style={styles.text}>Login</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}

const styles = StyleSheet.create({
  bgputih: {
    backgroundColor: 'white',
    color: 'white',
  },
  iconColor: {
    backgroundColor: 'white',
  },
  text: {
    fontSize: 10,
  },
});

export default withNavigation(Footers);
