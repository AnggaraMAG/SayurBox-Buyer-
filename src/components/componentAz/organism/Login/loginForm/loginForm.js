import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {
  Body,
  Header,
  Title,
  Icon,
  Left,
  Button,
  Container,
  Right,
  Radio,
} from 'native-base';

import Colors from './../../../color/color';

export default class loginForm extends Component {
  constructor() {
    super();
    this.state = {
      isSelected: false,
    };
  }

  handleSelect = () => {
    this.setState({
      isSelected: !this.state.isSelected,
    });
  };

  render() {
    return (
      <>
        <Container>
          <Header style={styles.header}>
            <Left>
              <Button
                transparent
                onPress={() => this.props.navigation.navigate('LoginScreen')}>
                <Icon name="arrow-back" style={styles.tittleHead1} />
              </Button>
            </Left>
            <Body>
              <Title style={styles.tittleHead}>Login</Title>
            </Body>
            <Right>
              <Button transparent>
                <Icon name="menu" />
              </Button>
            </Right>
          </Header>
          <View style={styles.container}>
            <Text style={styles.title}>Email</Text>
            <TextInput style={styles.input} placeholder="me@email.com" />
            <Text style={styles.title}>Password</Text>
            <TextInput style={styles.input} secureTextEntry={true} />
            <View
              style={{
                marginRight: 'auto',
                flexDirection: 'row',
                marginTop: -10,
                marginLeft: 25,
              }}>
              <View>
                <Radio
                  selectedColor={Colors.PRIMARY}
                  color={Colors.PRIMARY}
                  onPress={this.handleSelect}
                  selected={this.state.isSelected}
                />
              </View>
              <View style={{marginTop: 5, marginLeft: 5}}>
                <Text>Show Password</Text>
              </View>
            </View>
            <Button
              success
              style={{width: '90%', alignSelf: 'center', marginTop: 10}}>
              <Text
                style={{
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  fontWeight: 'bold',
                  color: 'white',
                }}>
                Masuk Sekarang
              </Text>
            </Button>
            <View
              style={{
                marginLeft: 'auto',
                marginRight: 'auto',
                flexDirection: 'row',
              }}>
              <Text
                style={{fontSize: 12, color: Colors.FONT_PRIM, marginTop: 10}}>
                Lupa password ?
              </Text>
              <Text
                style={{
                  marginTop: 10,
                  marginLeft: 3,
                  fontSize: 12,
                  color: Colors.PRIMARY,
                  textDecorationLine: 'underline',
                }}>
                Ketuk Disini
              </Text>
            </View>
            <View style={{marginLeft: 25, marginTop: 20, flexDirection: 'row'}}>
              <Text style={{color: Colors.FONT_PRIM, marginTop: 5}}>
                Belum Punya Akun ?
              </Text>
              <Button
                bordered
                success
                onPress={() =>
                  this.props.navigation.navigate('ToRegisterEmailForm')
                }
                style={{
                  marginLeft: 'auto',
                  marginRight: 20,
                  width: 80,
                  height: 30,
                }}>
                <Text
                  style={{
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    color: Colors.PRIMARY,
                    fontWeight: 'bold',
                  }}>
                  Daftar
                </Text>
              </Button>
            </View>
          </View>
        </Container>
      </>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
  },
  tittleHead1: {
    color: Colors.PRIMARY,
  },
  tittleHead: {
    color: Colors.PRIMARY,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.BACKGROUND,
    paddingTop: 20,
  },
  input: {
    width: '90%',
    height: 40,
    borderColor: Colors.FONT_SEC,
    borderRadius: 5,
    borderWidth: 1,
    alignSelf: 'center',
    marginBottom: 15,
    backgroundColor: '#fff',
    paddingLeft: 20,
  },
  title: {
    marginLeft: 25,
    marginBottom: 5,
    fontWeight: 'bold',
    color: Colors.PRIMARY,
  },
});
