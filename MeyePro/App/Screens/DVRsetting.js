import {StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import React from 'react';

const DVRsetting = ({navigation}) => {
  return (
    <View style={styles.body}>
      <TouchableOpacity onPress={() => navigation.navigate('AddDVR')}>
        <Text style={styles.Text}>Add DVR</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('EditDVR')}>
        <Text style={styles.Text}>Update DVR</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.Text}>Channel Setting</Text>
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
    
  },
});
export default DVRsetting;
