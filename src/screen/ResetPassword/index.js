import { View, Text, ScrollView , TouchableOpacity , Image , TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import { useValidation } from 'react-native-form-validator';
import React, {useState} from 'react'

const resetPassword = ({ navigation }) => {
  const [usermail , setUsermail] = useState('');
  const [Password , setPassword] = useState('');
  const inputData = () =>{
    console.log(usermail , Password);

    
  }
  return (
    <ScrollView style={{flex: 1, backgroundColor:'#ffffff',}} contentContainerStyle={{flexGrow:1}}>
      <View style={{width:"100%", flexDirection:'row'}}>
      <TouchableOpacity style={{width:'30%',paddingLeft:10, justifyContent:'center',}}
      onPress={() => navigation.navigate('Selection')}
      >
      <Image style={{width:42, height:42, marginTop:20}}
      source={require("../../assets/Images/back.png")}
      />
      </TouchableOpacity>
      <TouchableOpacity style={{width:'50%', justifyContent:'center', alignItems:'center'}}>
      <Text style={{fontSize:18, fontFamily:'Montserrat-Bold', marginTop:20, color:'black'}}>Reset Password</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{width:'30%',paddingLeft:10, justifyContent:'center'}}>
    
      </TouchableOpacity>
      

      </View>
    
      <View style={{width:'85%', height:50, marginTop:"20%", alignSelf:'center' , borderRadius:5, borderColor:'#22A275', borderWidth:1.5, flexDirection:'row'}}>
      <View style={{width:'15%', height:'100%', alignItems:'center', justifyContent:'center'}}>
      <Image style={{width:16, height:16}}
      source={require("../../assets/Images/profile.png")}
      />
      
      </View>
      <View style={{width:'85%', height:'100%', alignItems:'center', justifyContent:'center'}}>
      <TextInput
        style={{height: 50, margin: 12 , width:'95%'}}
        placeholderTextColor="#acacac"
        placeholder="Username"
        value={usermail}
        onChangeText= {(text)=> setUsermail(text)}
      />
      </View>
      </View>
      <View style={{width:'85%', height:50, marginTop:"5%", alignSelf:'center' , borderRadius:5, borderColor:'#22A275', borderWidth:1.5, flexDirection:'row'}}>
      <View style={{width:'15%', height:'100%', alignItems:'center', justifyContent:'center'}}>
      {/* <Icon name="user" size={30} color="#22A275" /> */}
      <Image style={{width:16, height:16}}
      source={require("../../assets/Images/lock.png")}
      />
      
      </View>
      <View style={{width:'85%', height:'100%', alignItems:'center', justifyContent:'center'}}>
      <TextInput
        style={{height: 50, margin: 12 , width:'95%'}}
        placeholderTextColor="#acacac"
        placeholder="Email"
        secureTextEntry={true}
        value={Password}
        onChangeText= {(text)=> setPassword(text)}
      />
      </View>
      </View>
      <TouchableOpacity style={{width:'85%', height:50, marginTop:"30%", alignSelf:'center' , borderRadius:5, backgroundColor:'#20AC73', justifyContent:'center', alignItems:'center', elevation:5}} onPress={()=> inputData()}>
        <Text style={{color:'#ffffff', fontFamily:'Montserrat-Bold', fontSize:18}}>Send OTP</Text>
      </TouchableOpacity>
      
    </ScrollView>
  )
}

export default resetPassword