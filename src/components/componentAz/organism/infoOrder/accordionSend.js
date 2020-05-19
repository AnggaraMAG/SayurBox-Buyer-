import React, {Component} from 'react';
import {Container, Header, Content, Accordion} from 'native-base';

import Colors from './../../color/color';
import Style from './style';
import Send from './accordionContent/sendContent';

const dataArray = [{title: 'Tanggal & Waktu Pengiriman'}];
export default class AccordionSend extends Component {
  _renderContent = () => {
    return <Send />;
  };
  render() {
    return (
      <Content style={{flex: 1}}>
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
