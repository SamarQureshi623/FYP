import { StyleSheet, Text, View,ScrollView,TouchableOpacity } from 'react-native'
import React from 'react'


const RecordedVideos = ({navigation}) => {
  return (
    <ScrollView style={styles.body}>

<View style={styles.row}>
<TouchableOpacity  onPress={() => navigation.navigate('DetailsRecordedVideos')}>
  <View style={styles.view1}>
  <Text style={styles.text}>Video 1</Text>
  </View>
  </TouchableOpacity>
  <View style={styles.view1}>
  <Text style={styles.text}>Video 2</Text>
  </View>
  </View>
  <View style={styles.row}>
  <View style={styles.view1}>
  <Text style={styles.text}>Video 3</Text>
  </View>
  <View style={styles.view1}>
  <Text style={styles.text}>Video 4</Text>
  </View>
  </View><View style={styles.row}>
  <View style={styles.view1}>
  <Text style={styles.text}>Video 5</Text>
  </View>
  <View style={styles.view1}>
  <Text style={styles.text}>Video 6</Text>
  </View>
  </View><View style={styles.row}>
  <View style={styles.view1}>
  <Text style={styles.text}>Video 7</Text>
  </View>
  <View style={styles.view1}>
  <Text style={styles.text}>Video 8</Text>
  </View>
  </View>
  </ScrollView>
  );
};
const styles = StyleSheet.create({
    body:{
        flex:1,
        backgroundColor:'#ffffff',
        //alignItems:'center',
        //justifyContent:'center',
        
       },
       row:{
        flexDirection:'row',
        backgroundColor:'#ffffff',
        alignItems:'center',
        justifyContent:'center',
      
       },
       view1:{
        height:150,
        width:150,
      backgroundColor:'#f0fcfc',
      alignItems:'stretch',
      justifyContent:'flex-end',
      margin:10,
      borderRadius:20,
      },
      
       text:
       {
        color:'#ffffff',
        fontSize:20,
        //margin:10,
        backgroundColor:'#000000',
        alignItems:'center'
      
       }, 
})
export default RecordedVideos;