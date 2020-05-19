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
} from 'native-base';

import Colors from '../../../color/color';

export default class verificationSection extends Component {
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
            Sayurbox telah mengirimkan email ke [ Azizaqibs@gmail.com ],
            Silahkan masukan kode verifikasi yang ada di dalam email
          </Text>
          <Text style={styles.title}>Masukan Kode Verifikasi</Text>
          <TextInput style={styles.input} placeholder="Verification Code" />
          <Button
            success
            style={{width: '100%', alignSelf: 'center'}}
            onPress={() =>
              this.props.navigation.navigate('ToRegisterPassForm')
            }>
            <Text
              style={{
                marginLeft: 'auto',
                marginRight: 'auto',
                fontWeight: 'bold',
                color: 'white',
              }}>
              Verifikasi
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
    marginBottom: 15,
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
