import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Header = props => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>Dashboard</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  view: {
    width: '100%',
    height: 50,
    backgroundColor: '#09689e',
    //justifyContent:'center',
    //alignItems:'center',
    margin: 10,
    padding: 7,
    paddingLeft: 30,
  },
  text: {
    fontSize: 25,
    color: '#00000089',
  },
});
export default Header;
