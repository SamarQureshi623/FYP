import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const DetailsLiveStreaming = () => {
  return (
    <View style={styles.body}>
    <View style={styles.view1}>
</View>
<View style={styles.view2}>
<Text style={styles.text} >
      Lecture Theater 1
    </Text>
</View>
</View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view1: {
    height: 250,
    width: '90%',
    backgroundColor: '#f0fcfc',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    borderRadius: 20,
  },
  view2: {
    height: 400,
    width: '85%',
    //backgroundColor: '#f0fcfc',
    //alignItems: 'center',
   // justifyContent: 'center',
    margin: 10,
    borderRadius: 20,
  },
  text: {
    color: '#000000',
    fontSize: 20,
    margin: 5 ,
  },
});
export default DetailsLiveStreaming;
