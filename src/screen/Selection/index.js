import { View, Text , Image , TouchableOpacity } from 'react-native'
import React from 'react'

const Selection = ({navigation}) => {
  return (
    <View style={{flex:1}}>
        <View style={{width:'100%', height:'50%',  justifyContent:'flex-end', alignItems:'center'}}>
            <Image 
            style={{height:110, width:100}}
            source={require("../../assets/Images/logo.png")}
            />
        </View>
        <View style={{width:'100%', height:'60%', justifyContent:'center', alignItems:'center'}}>
        <TouchableOpacity style={{width:'85%', height:50, marginTop:"5%", alignSelf:'center' , borderRadius:5, backgroundColor:'#20AC73', justifyContent:'center', alignItems:'center', elevation:5}}
        onPress={() => navigation.navigate('Login')}
        >
        <Text style={{color:'#ffffff', fontFamily:'Montserrat-Bold', fontSize:18}}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{width:'85%', height:50, marginTop:"5%", alignSelf:'center' , borderRadius:5, borderColor:'black', borderWidth:1.5, justifyContent:'center', alignItems:'center'}}
      onPress={() => navigation.navigate('signup')}
      >
        <Text style={{color:'#000000', fontFamily:'Montserrat-Bold', fontSize:18}}>Register</Text>
      </TouchableOpacity>
        </View>
    </View>
  )
}

export default Selection