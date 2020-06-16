import React, {Component} from 'react';
import {TouchableOpacity, Text, Linking} from 'react-native';
import {ListItem} from 'react-native-elements';
import {Container, View, Button, Icon, Fab} from 'native-base';

import FABChat from '../components/componentd/FABChat';
class ChatScreen extends Component {
  render() {
    const list = [
      {
        name: 'Tukang Telor',
        avatar_url:
          'https://ecs7.tokopedia.net/img/cache/700/product-1/2018/10/18/4406127/4406127_cd1de980-3354-4666-9019-d1bb1a90341f_300_300.jpg',
        subtitle: 'Halo mau pesan berapa kilo?',
        time: '3.43',
      },
      {
        name: 'Tukang Sayur',
        avatar_url:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSRHhA1kDka472131NYrz1dD6EDyQhv2oyDuP4gAvDOHEPDc3Ki&usqp=CAU',
        subtitle: 'jadi pesan kubisnya kak?',
        time: '5.00',
      },
    ];

    return (
      <>
        <View style={{
          flex: 1, 
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white'
        }}>
          {/* {list.map((l, i) => (
            <TouchableOpacity
              key={i}
              onPress={() => this.props.navigation.navigate('SellerScreen')}>
              <ListItem
                leftAvatar={{source: {uri: l.avatar_url}}}
                title={l.name}
                subtitle={l.subtitle}
                bottomDivider
                rightElement={l.time}
              />
            </TouchableOpacity>
          ))} */}
          <Text style={{fontSize:20, marginHorizontal: 50, textAlign: 'center', paddingBottom: 30, fontWeight: '800', color: '#576357'}}>
          Silahkan hubungi kami via Whatsapp melalui tombol dibawah ini.
        </Text>
        <Button success rounded large
              onPress={() =>
                Linking.openURL(
                  'https://api.whatsapp.com/send?phone=+6281210313944',
                )
              }>
              <Icon name="logo-whatsapp" style={{fontSize:30}} />
            </Button>
        </View>
        {/* <FABChat /> */}
      </>
    );
  }
}

export default ChatScreen;
