import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
export default function Login({navigation}) {
  const [name, setName] = useState('');
  const [Password, setPassword] = useState('');
  return (
    <View style={styles.myBackground}>
      <Image
        style={{width: 100, height: 100}}
        source={require('../Assets/Images/cctv.png')}
      />
      <View style={styles.myBox}>
        <Text style={{fontSize: 20, color: '#339FFF', fontWeight: 'bold'}}>
          M EYE PRO
        </Text>
      </View>
      <View style={styles.myBox}>
        <TextInput
          style={styles.inputStyle}
          placeholder="Email"
          autoCapitalize="none"
          onChangeText={name => setName(name)}
        />
      </View>
      <View style={styles.myBox}>
        <TextInput
          style={styles.inputStyle}
          placeholder="Password"
          autoCapitalize="none"
          //   secureTextEntry
          //   isSecure={true}
          secureTextEntry={true}
          onChangeText={password => setPassword(password)}
        />
      </View>
      <TouchableOpacity>
        <Text
          onPress={() => navigation.navigate('Dashboard')}
          style={{
            fontSize: 25,
            color: '#ffffff',
            paddingLeft: 100,
            paddingRight: 100,
            backgroundColor: '#339FFF',
            borderWidth: 2,
            borderRadius: 40,
            margin: 10,
            borderColor: '#339FFF',
          }}>
          Login
        </Text>
      </TouchableOpacity>
      <Text style={styles.txt}>Don't have an Account?</Text>
      <Text style={styles.sign} 
      onPress={() => navigation.navigate('Signup')}>SignUp</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  myBackground: {
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#FFFFFF',

    alignItems: 'center',
  },
  myBox: {
    flexDirection: 'row',
    height: 40,
    marginTop: 10,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  inputStyle: {
    color: '#000000',
    flex: 1,
    paddingLeft: 15,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#646464',
  },
  txt: {
    fontWeight: '400',
    fontSize: 12,
  },
  sign: {
    color: '#339FFF',
    fontWeight: 'bold',
    fontSize: 15,
  },
});
