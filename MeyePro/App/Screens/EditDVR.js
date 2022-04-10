import { StyleSheet, Text, View,TextInput,
    TouchableOpacity, } from 'react-native'
import React from 'react'

const EditDVR = () => {
  return (
    <View style={styles.body}>
      <View style={styles.myBox}>
        <TextInput
          style={styles.inputStyle}
          placeholder="DVR Name"
          autoCapitalize="none"
          
        />
      </View>
      <View style={styles.myBox}>
        <TextInput
          style={styles.inputStyle}
          placeholder="IP Address"
          autoCapitalize="none"
        /> 
      </View>
      <View style={styles.myBox}>
        <TextInput
          style={styles.inputStyle}
          placeholder="User Name"
          autoCapitalize="none"
        /> 
      </View>
      <View style={styles.myBox}>
        <TextInput
          style={styles.inputStyle}
          placeholder="Password"
          autoCapitalize="none"
        /> 
      </View>
      <View style={styles.myBox}>
        <TextInput
          style={styles.inputStyle}
          placeholder="Max Channel"
          autoCapitalize="none"
        /> 
      </View>
      <TouchableOpacity>
        <Text
          style={styles.Text}>
          Update DVR
        </Text>
      </TouchableOpacity>

    </View>
  )
}



const styles = StyleSheet.create({
    body: {
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
  Text: {
            fontSize: 25,
            color: '#ffffff',
            paddingLeft: 100,
            paddingRight: 100,
            backgroundColor: '#339FFF',
            borderWidth: 2,
            borderRadius: 40,
            margin: 10,
            borderColor: '#339FFF',
  },
})
export default EditDVR;