import React, {Component} from 'react';
import {Content, Accordion} from 'native-base';

import Colors from './../../color/color';
import Style from './style';
import AccorOrder from './accordionContent/orderContent';

const dataArray = [{title: 'Order Summary'}];
export default class AccordionOrder extends Component {
  _renderContent = () => {
    return <AccorOrder />;
  };

  render() {
    return (
      <Content style={Style.accContent1}>
        <Accordion
          dataArray={dataArray}
          headerStyle={{backgroundColor: Colors.WHITE, borderWidth: 0}}
          contentStyle={{backgroundColor: Colors.WHITE}}
          // renderHeader={this._renderContent}
          renderContent={this._renderContent}
        />
      </Content>
    );
  }
}
