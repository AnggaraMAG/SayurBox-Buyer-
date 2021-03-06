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
  Form
} from 'native-base';
import axios from 'axios';
import Colors from '../../../color/color';
import { colors } from 'react-native-elements';

export default class register extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: 'Abc',
      email: '',
      password: 'default',
      role: 'user'
    };
  }

  onChangeName = (e) => {
    this.setState({ name: e.target.value});
  }

  onChangeEmail = (e) => {
    this.setState({ email: e.target.value});
  }

  onSubmit = (e) => {
    console.log("testSucess");
    this.props.navigation.navigate('ToRegisterVerifForm');
    console.log(this.state.name);
    // axios.post( "web",{
    //   name: this.state.name,
    //   email:this.state.email,
    //   password: this.state.password,
    //   role: this.state.role
    // })
    // .then(res => {
    //   console.log("successfully registered");
    // })
  }

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
          
          <Text style={styles.mbottom}>
            Buat akun di Sayurbox untuk kemudahan memesan dan memantau order
            Anda
          </Text>
          <View>
            <Text style={styles.title}>Nama</Text>
            <TextInput style={styles.input} placeholder="John Doe" value={this.state.name} onChange={this.onChangeName} />
          </View>
          <View>
            <Text style={styles.title}>No Telepon</Text>
            <TextInput keyboardType={"numeric"} style={styles.input} placeholder="+62" />
          </View>
          <View>
            <Text style={styles.title}>Email</Text>
            <TextInput style={styles.input} placeholder="johndoe@email.com" value={this.state.email} onChange={this.onChangeEmail} />
          </View>
          <View>
            <Text style={styles.title}>Alamat</Text>
            <TextInput multiline style={styles.input2} placeholder="Jalan Keluarga RT/RW" />
          </View>
          <Button
            success
            type="submit"
            style={{width: '100%', alignSelf: 'center'}}
            onPress={
              this.onSubmit
              // () =>
              // this.props.navigation.navigate('ToRegisterVerifForm')
            }>
            <Text
              style={{
                marginLeft: 'auto',
                marginRight: 'auto',
                fontWeight: 'bold',
                color: 'white',
              }}>
              Selanjutnya
            </Text>
          </Button>
          <View style={{marginLeft:  5, marginTop: 20, flexDirection: 'row'}}>
              <Text style={{color: Colors.FONT_PRIM, marginTop: 5}}>
                Sudah Punya Akun ?
              </Text>
              <Button
              
                bordered
                success
                onPress={() =>
                  this.props.navigation.navigate('ToLoginForm')
                }
                style={{
                  marginLeft: 'auto',
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
                  Masuk
                </Text>
              </Button>
            </View>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  mbottom: {
    marginBottom: 10,
  },
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
    marginLeft: 5,
  },
  title2: {
    marginBottom: 5,
    fontWeight: 'bold',
    color: Colors.PRIMARY,
    marginLeft: 5,
    justifyContent: 'center'
  },
  input2: {
    width: '100%',
    height: 55,
    borderColor: Colors.FONT_SEC,
    borderRadius: 5,
    borderWidth: 1,
    alignSelf: 'center',
    marginBottom: 15,
    backgroundColor: '#fff',
    paddingLeft: 25,
  }
});
