import {StyleSheet} from 'react-native';

import Colors from './../../color/color';

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
    shadowColor: 'grey',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
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
  },
  info: {
    backgroundColor: Colors.WHITE,
    marginTop: 1,
    padding: 20,
  },
  title: {
    fontSize: 15,
    color: Colors.FONT_SEC,
    marginBottom: 2,
  },
  subtitle: {
    fontSize: 16,
    color: Colors.FONT_PRIM,
    marginBottom: 15,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 30,
    marginTop: 3,
    fontWeight: 'bold',
    color: Colors.FONT_PRIM,
  },
  status: {
    backgroundColor: Colors.WHITE,
    marginTop: 10,
    padding: 20,
  },
  timeline: {
    padding: 15,
    alignSelf: 'center',
  },
  statOrder: {
    paddingTop: 5,
    alignSelf: 'center',
  },
  footer: {
    width: '95%',
    paddingTop: 10,
    paddingBottom: 10,
    alignSelf: 'center',
  },
  buttonChat: {
    backgroundColor: Colors.WHITE,
  },
  button: {
    elevation: 0,
    marginRight: 'auto',
    justifyContent: 'center',
  },
  accContent: {
    marginBottom: 10,
  },
  accContent1: {
    marginTop: 10,
    marginBottom: 10,
  },
  accorOrder: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    paddingTop: 15,
    paddingBottom: 10,
  },
  accorOrderIn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    paddingTop: 10,
  },
  accorOrderInLast: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
  discount: {
    marginRight: 30,
    color: 'red',
    fontStyle: 'italic',
    fontWeight: '800',
  },
  delivFee: {
    marginRight: 30,
  },
  unique: {
    marginRight: 30,
    color: 'red',
    fontStyle: 'italic',
    fontWeight: '800',
  },
  total: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
  space: {
    paddingRight: 20,
    lineHeight: 25,
  },
});

export default styles;
