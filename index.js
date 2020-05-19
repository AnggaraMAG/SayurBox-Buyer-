/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {Provider} from 'react-redux';
import store from './src/_redux/store';
import React from 'react';
// import Detail from './src/components/DetailProduct';
// import Cek from './src/components/CekAll';
// import Login from './src/components/componentAz/organism/Login/loginForm/loginForm';
// import EmailSectionReg from './src/components/componentAz/organism/Login/Register/emailSection';
// import VerifSectionReg from './src/components/componentAz/organism/Login/Register/verificationSection';
// import PassSectionReg from './src/components/componentAz/organism/Login/Register/passwordSection';

import {name as appName} from './app.json';

const RNRedux = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => RNRedux);
