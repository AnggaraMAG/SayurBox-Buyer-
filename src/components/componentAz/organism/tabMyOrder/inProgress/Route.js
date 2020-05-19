import {createStackNavigator} from 'react-navigation-stack';

import {createAppContainer} from 'react-navigation';
import MyOrderDetail from './../../../screen/myOrderDetail/myOrderDetail';

const AppNavigator = createStackNavigator({
  MyOrder: {
    screen: MyOrderDetail,
    navigationOptions: {
      header: null,
    },
  },
});

export default createAppContainer(AppNavigator);
