import React, {Component} from 'react';
import {Content, Accordion} from 'native-base';

import Colors from './../../color/color';
import Style from './style';
import AddressContent from './accordionContent/addressContent';

const dataArray = [{title: 'Delivery Address'}];
export default class AccordionAddress extends Component {
  _renderContent = item => {
    return <AddressContent />;
  };

  render() {
    return (
      <Content style={Style.accContent}>
        <Accordion
          dataArray={dataArray}
          headerStyle={{backgroundColor: Colors.WHITE, borderWidth: 0}}
          contentStyle={{backgroundColor: Colors.WHITE}}
          renderContent={this._renderContent}
        />
      </Content>
    );
  }
}
