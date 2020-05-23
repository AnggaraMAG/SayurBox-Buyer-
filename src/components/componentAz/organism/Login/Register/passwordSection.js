import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {
  Container,
  Header,
  Button,
  Icon,
  Left,
  Body,
  Right,
  Title,
  Radio
} from 'native-base';

import Colors from '../../../color/color';

export default class passwordSection extends Component {
  constructor() {
    super();
    this.state = {
      showPwd: true,
      isSelected: false
    };
  }

  radioShow = () => {
    this.setState({
      isSelected: !this.state.isSelected,
      showPwd: !this.state.showPwd
    });
  };
  render() {
    return (
      <Container>
        <Header style={styles.header}>
          <Left>
            <Button transparent>
              <Icon name="arrow-back" style={styles.tittleHead1} />
            </Button>
          </Left>
          <Body>
            <Title style={styles.tittleHead}>Daftar</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="menu" />
            </Button>
          </Right>
        </Header>
        <View style={styles.container}>
          <Text>
            Silahkan masukan password anda untuk menyelesaikan proses
            Registrasi. Email anda telah berhasil diverifikasi.
          </Text>
          <Text style={styles.title}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={this.state.showPwd}
          />
          <Text style={styles.title}>Ulangi Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Ulangi Password"
            secureTextEntry={this.state.showPwd}
          />
          <View
              style={{
                marginRight: 'auto',
                flexDirection: 'row',
                marginBottom: 10
              }}>
              <View>
                <Radio
                  selectedColor={Colors.PRIMARY}
                  color={Colors.PRIMARY}
                  onPress={this.radioShow}
                  selected={this.state.isSelected}
                />
              </View>
              <View style={{marginTop: 5, marginLeft: 5}}>
                <Text>Show Password</Text>
              </View>
            </View>
          <Button
            success
            style={{width: '100%', alignSelf: 'center'}}
            onPress={() => this.props.navigation.navigate('Login')}>
            <Text
              style={{
                marginLeft: 'auto',
                marginRight: 'auto',
                fontWeight: 'bold',
                color: 'white',
              }}>
              Daftar Sekarang
            </Text>
          </Button>
        </View>
      </Container>
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
    padding: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: Colors.FONT_SEC,
    borderRadius: 5,
    borderWidth: 1,
    alignSelf: 'center',
    marginBottom: 5,
    backgroundColor: '#fff',
    paddingLeft: 25,
  },
  title: {
    marginBottom: 5,
    fontWeight: 'bold',
    color: Colors.PRIMARY,
    marginTop: 15,
    marginLeft: 5,
  },
});
