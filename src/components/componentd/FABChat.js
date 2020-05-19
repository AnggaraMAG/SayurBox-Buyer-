import React, {Component} from 'react';
import {Linking, Text} from 'react-native';
import {Container, View, Button, Icon, Fab} from 'native-base';

class FABChat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }

  render() {
    return (
      <Container>
        <View style={{flex: 1}}>
          <Fab
            active={this.state.active}
            direction="up"
            style={{backgroundColor: '#2ecc72'}}
            position="bottomRight"
            onPress={() => this.setState({active: !this.state.active})}>
            <Icon name="call" />
            <Button
              style={{backgroundColor: '#34A34F'}}
              onPress={() =>
                Linking.openURL(
                  'https://api.whatsapp.com/send?phone=+6281210313944&text=Halo%20gan%20mau%20tanya?',
                )
              }>
              <Icon name="logo-whatsapp" />
              <Text
                style={{
                  position: 'absolute',
                  width: 300,
                  fontFamily: 'Roboto',
                  fontWeight: 'bold',
                }}>
                Chat Admin Kami
              </Text>
            </Button>
            <Button
              style={{backgroundColor: '#3B5998'}}
              onPress={() => Linking.openURL(`tel:081210313944`)}>
              <Icon name="call" />
              <Text
                style={{
                  position: 'absolute',
                  width: 400,
                  fontFamily: 'Roboto',
                  fontWeight: 'bold',
                }}>
                Hubungi Call Center Kami
              </Text>
            </Button>
          </Fab>
        </View>
      </Container>
    );
  }
}

export default FABChat;
