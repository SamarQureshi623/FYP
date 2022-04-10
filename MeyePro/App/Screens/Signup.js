import React from "react";
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from "react-native"

export default function Signup()
{
    
    return(
        <View style={styles.myBackground}>
        <Image style={{width:100,height:100}}
        source={require('../Assets/Images/cctv.png')}
        />
        <View style={styles.myBox}>
        <Text style={{fontSize:20,color:'#339FFF',fontWeight:'bold'}}>M EYE PRO</Text>
        </View>
        <View style={styles.myBox}>
        <TextInput style={styles.inputStyle}
        placeholder='First Name'
        autoCapitalize='none'
        onChangeText={(fname)=>setName(fname)}
        />
        </View>
        <View style={styles.myBox}>
        <TextInput style={styles.inputStyle}
        placeholder='Last Name'
        autoCapitalize='none'
        onChangeText={(lname)=>setName(lname)}
        />
        </View>
        <View style={styles.myBox}>
        <TextInput style={styles.inputStyle}
        placeholder='Email'
        autoCapitalize='none'
        onChangeText={(email)=>setName(email)}
        />
        </View>
        <View style={styles.myBox}>
        <TextInput style={styles.inputStyle}
        placeholder='Password'
        autoCapitalize='none'
        onChangeText={(password)=>setName(password)}
        />
        </View>
        <View style={styles.myBox}>
        <TextInput style={styles.inputStyle}
        placeholder='Confirm Password'
        autoCapitalize='none'
        onChangeText={(cpassword)=>setName(cpassword)}
        />
        </View>
        <TouchableOpacity onPress={()=>alert(name+password)}>
                <Text style={{fontSize:20,
                fontWeight:'500',
                color:'#ffffff',
                paddingLeft:100,
                paddingRight:100,
                backgroundColor:'#339FFF',
                borderWidth:2,
                borderRadius:40,
                margin:10,
                borderColor:'#339FFF',
                }}>SignUp
                </Text>
            </TouchableOpacity>
        
        </View>
    );
}
const styles=StyleSheet.create({
    myBackground:
    {
        justifyContent:"center",
        flex:1,
        backgroundColor:"#FFFFFF",
        
        alignItems:"center",
    },
    myBox:
    {
        flexDirection:'row',
        height:40,
        marginTop:10,
        marginLeft:35,
        marginRight:35,
        margin:10,
    },
    inputStyle:
    {
        color:'#000000',
        flex:1,
        paddingLeft:15,
        borderWidth:1,
        borderRadius:8,
        borderColor:'#646464',
    },
})