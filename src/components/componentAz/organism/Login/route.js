import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import LoginForm from './loginForm/loginForm';
import Register from './Register/emailSection';

const AuthStack = createStackNavigator(
  {
    Login: LoginForm,
    Register: Register,
  },
  {
    headerMode: 'none',
  },
);

export default AuthStack;
