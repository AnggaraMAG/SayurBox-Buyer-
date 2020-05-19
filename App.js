import React from 'react';
import 'react-native-gesture-handler';

import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

import Footers from './src/components/Footers';
import ChatScreen from './src/screen/ChatScreen';
import InboxScreen from './src/screen/InboxScreen';
import LoginScreen from './src/screen/LoginScreen';
import OrderScreen from './src/screen/OrderScreen';
import ShopScreen from './src/screen/ShopScreen';
import SearchScreen from './src/screen/SearchScreen';
import ToLoginForm from './src/components/componentAz/organism/Login/loginForm/loginForm';
import ToRegisterEmailForm from './src/components/componentAz/organism/Login/Register/emailSection';
import ToRegisterVerifForm from './src/components/componentAz/organism/Login/Register/verificationSection';
import ToRegisterPassForm from './src/components/componentAz/organism/Login/Register/passwordSection';
import DetailOrder from './src/components/componentAz/screen/myOrderDetail/myOrderDetail';
import DetailProduct from './src/components/DetailProduct';
import All from './src/components/CekAll';
import SellerScreen from './src/screen/SellerScreen';

const ShopScreenStack = createStackNavigator(
  {
    ShopScreen: {
      screen: ShopScreen,
    },
    DetailProduct: {
      screen: DetailProduct,
    },
    All: {
      screen: All,
    },
    SearchScreen: {
      screen: SearchScreen,
    },
  },
  {
    headerMode: 'none,',
  },
);

const OrderScreenStack = createStackNavigator(
  {
    OrderScreen: {
      screen: OrderScreen,
    },
    DetailOrder: {
      screen: DetailOrder,
    },
  },
  {
    headerMode: 'none,',
  },
);

const InboxScreenStack = createStackNavigator(
  {
    InboxScreen: {
      screen: InboxScreen,
    },
  },
  {
    headerMode: 'none,',
  },
);

const ChatScreenStack = createStackNavigator(
  {
    ChatScreen: {
      screen: ChatScreen,
    },
  },
  {
    headerMode: 'none,',
  },
);

const LoginScreenStack = createStackNavigator(
  {
    LoginScreen: {
      screen: LoginScreen,
    },
    ToLoginForm: {
      screen: ToLoginForm,
    },
    ToRegisterEmailForm: {
      screen: ToRegisterEmailForm,
    },
    ToRegisterVerifForm: {
      screen: ToRegisterVerifForm,
    },
    ToRegisterPassForm: {
      screen: ToRegisterPassForm,
    },
    Login: {
      screen: ShopScreen,
    },
  },
  {
    headerMode: 'none,',
    initialRouteName: 'LoginScreen',
  },
);

const SellerScreenStack = createStackNavigator(
  {
    SellerScreen: {
      screen: SellerScreen,
    },
  },
  {
    headerMode: 'none,',
  },
);

const Router = createBottomTabNavigator(
  {
    ShopScreen: ShopScreenStack,
    OrderScreen: OrderScreenStack,
    InboxScreen: InboxScreenStack,
    ChatScreen: ChatScreenStack,
    LoginScreen: LoginScreenStack,
    SellerScreen: SellerScreenStack,
  },
  {
    swipeEnabled: true,
    tabBarComponent: props => {
      return <Footers navigation={props.navigation} />;
    },
  },
  {initialRouteName: 'ShopScreen'},
);

export default createAppContainer(Router);
