import react from 'react';
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Header from '../Components/header';

const LiveStreaming = ({navigation}) => {
  return (
    <ScrollView style={styles.body}>
      <View style={styles.row}>
        <TouchableOpacity
          onPress={() => navigation.navigate('DetailsLiveStreaming')}>
          <View style={styles.view1}>
            <Text style={styles.text}>LT-1</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.view2}>
          <Text style={styles.text}>LT-2</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.view3}>
          <Text style={styles.text}>LT-3</Text>
        </View>
        <View style={styles.view4}>
          <Text style={styles.text}>LT-4</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.view3}>
          <Text style={styles.text}>LT-5</Text>
        </View>
        <View style={styles.view4}>
          <Text style={styles.text}>LT-6</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.view3}>
          <Text style={styles.text}>LT-7</Text>
        </View>
        <View style={styles.view4}>
          <Text style={styles.text}>LT-8</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.view3}>
          <Text style={styles.text}>LT-9</Text>
        </View>
        <View style={styles.view4}>
          <Text style={styles.text}>LT-10</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.view3}>
          <Text style={styles.text}>LT-11</Text>
        </View>
        <View style={styles.view4}>
          <Text style={styles.text}>LT-12</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.view3}>
          <Text style={styles.text}>LT-13</Text>
        </View>
        <View style={styles.view4}>
          <Text style={styles.text}>LT-14</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.view3}>
          <Text style={styles.text}>LT-15</Text>
        </View>
        <View style={styles.view4}>
          <Text style={styles.text}>LT-16</Text>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#ffffff',
    //alignItems:'center',
    //justifyContent:'center',
  },
  row: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view1: {
    height: 150,
    width: 150,
    backgroundColor: '#f0fcfc',
    alignItems: 'flex-end',
    //justifyContent:'center',
    margin: 10,
    borderRadius: 20,
  },
  view2: {
    height: 150,
    width: 150,
    backgroundColor: '#f0fcfc',
    alignItems: 'flex-end',
    //justifyContent:'center',
    margin: 10,
    borderRadius: 20,
  },
  view3: {
    height: 150,
    width: 150,
    backgroundColor: '#f0fcfc',
    alignItems: 'flex-end',
    //justifyContent:'center',
    margin: 10,
    borderRadius: 20,
  },
  view4: {
    height: 150,
    width: 150,
    backgroundColor: '#f0fcfc',
    alignItems: 'flex-end',
    //justifyContent:'center',
    margin: 10,
    borderRadius: 20,
  },
  text: {
    color: '#ffffff',
    fontSize: 20,
    margin: 10,
    backgroundColor: '#000000',
  },
});
export default LiveStreaming;
