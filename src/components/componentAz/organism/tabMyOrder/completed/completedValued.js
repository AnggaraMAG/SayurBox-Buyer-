import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {CardItem} from 'native-base';
import {Icon} from 'react-native-elements';

class inProgressValued extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPosition: 0,
    };
  }

  render() {
    return (
      <>
        <CardItem button style={styles.card} onPress={this.props.toDetail}>
          <View style={styles.section1}>
            <View>
              <Text style={styles.sectionIn1}>Order Number</Text>
              <Text>#PG-FHJTLVY2ZAN1T-NR</Text>
            </View>
            <View>
              <Text style={styles.sectionIn2}>Delivery Data</Text>
              <Text>Monday, 20 April 2020</Text>
            </View>
          </View>
          <View style={styles.section2}>
            <View>
              <Text style={styles.sectionIn1}>Last Status</Text>
              <Text>Pesanan telah dibuat</Text>
            </View>
            <View>
              <Text style={styles.sectionIn2}>Bill Total</Text>
              <Text>Rp 23.500</Text>
            </View>
          </View>
        </CardItem>
      </>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    width: '96%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 10,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    flexDirection: 'column',
    marginBottom: 10,
  },
  section1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  sectionIn1: {
    fontSize: 13,
    color: '#5F7D5F',
    marginBottom: 5,
  },
  sectionIn2: {
    fontSize: 13,
    color: '#5F7D5F',
    textAlign: 'right',
    marginBottom: 3,
  },
  section2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 10,
  },
  line: {
    marginTop: 10,
    borderWidth: 0.3,
    borderColor: '#ABB2AB',
    width: '105%',
  },
  progress: {
    flexDirection: 'row',
  },
  timeLine: {
    marginLeft: 'auto',
    flex: 2,
    marginTop: 15,
  },
  button: {
    marginTop: 10,
    height: 30,
    marginRight: 'auto',
    flex: 1,
    flexDirection: 'column',
  },
});

export default inProgressValued;
