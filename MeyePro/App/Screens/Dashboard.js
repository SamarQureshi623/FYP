import React from 'react';
import {TouchableOpacity, StyleSheet, View, Text, Image} from 'react-native';
import Header from '../Components/header';

const Dashboard = ({navigation}) => {
  return (
    <View style={styles.body}>
      <TouchableOpacity
        style={styles.view1}
        onPress={() => navigation.navigate('Live')}>
        <View style={styles.view1}>
          <Image
            style={{width: 100, height: 100}}
            source={require('../Assets/Images/live.png')}
          />
          <Text style={styles.text}>Live Streaming</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.view2}
        onPress={() => navigation.navigate('List')}>
        <View style={styles.view2}>
          <Image
            style={{width: 100, height: 100}}
            source={require('../Assets/Images/loupe.png')}
          />
          <Text style={styles.text}>Search</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.view3}
        onPress={() => navigation.navigate('Recorded')}>
        <View style={styles.view3}>
          <Image
            style={{width: 100, height: 100}}
            source={require('../Assets/Images/download.png')}
          />
          <Text style={styles.text}>Recorded Videos</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.view4}
        onPress={() => navigation.navigate('Setting')}>
        <View style={styles.view4}>
          <Image
            style={{width: 100, height: 100}}
            source={require('../Assets/Images/settings.png')}
          />
          <Text style={styles.text}>Settings</Text>
        </View>
      </TouchableOpacity>
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
    height: 150,
    width: '85%',
    backgroundColor: '#f0fcfc',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    borderRadius: 20,
  },
  view2: {
    height: 150,
    width: '85%',
    backgroundColor: '#f0fcfc',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    borderRadius: 20,
  },
  view3: {
    height: 150,
    width: '85%',
    backgroundColor: '#f0fcfc',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    borderRadius: 20,
  },
  view4: {
    height: 150,
    width: '85%',
    backgroundColor: '#f0fcfc',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    borderRadius: 20,
  },
  text: {
    color: '#000000',
    fontSize: 20,
    margin: 5,
  },
});
export default Dashboard;
