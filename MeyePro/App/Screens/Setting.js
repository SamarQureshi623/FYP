import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

const Setting = ({navigation}) => {
  return (
    <View style={styles.body}>
      <TouchableOpacity onPress={() => navigation.navigate('RecordingMode')}>
        <Text style={styles.Text}>Recording Mode</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('DVRsetting')}>
        <Text style={styles.Text}>DVR Settings</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.Text}>Face Recognition</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#ffffff',
    //alignItems:'center',
    //justifyContent:'center',
  },
  Text: {
    fontSize: 25,
    color: '#ffffff',
    paddingLeft: 20,
    paddingRight: 100,
    backgroundColor: '#339FFF',
    borderWidth: 2,
    borderRadius: 40,
    margin: 10,
    borderColor: '#339FFF',
    //justifyContent:'center',
  },
});
export default Setting;
