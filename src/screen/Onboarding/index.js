import { View, Text, Image , TouchableOpacity } from 'react-native'
import React from 'react'

const OnBorading = ({navigation}) => {
  return (
    <View style={{flex:1}}>
        <View style={{width:'100%', height:'55%',justifyContent:'flex-end', alignItems:'center'}}>
            <Image style={{width:'70%', height:'70%'}}
            source={require("../../assets/Images/slide1.png")}
            />
        </View>
        <View style={{width:'100%', height:'15%', justifyContent:'flex-end'}}>
            <Text style={{fontFamily:'MazzardH-Black', fontSize:20, alignSelf:'center', color:'black'}}>Exchange old items lying</Text>
            <Text style={{fontFamily:'MazzardH-Black', fontSize:20, alignSelf:'center', color:'black'}}>at your home.</Text>
        </View>
        <View style={{width:'100%', height:'8%', justifyContent:'center'}}>
        <Text style={{fontFamily:'Montserrat-Medium', fontSize:14, alignSelf:'center', color:'black', color:'#acabad'}}>Lorem Ipsum been the industry's</Text>
            <Text style={{fontFamily:'Montserrat-Medium', fontSize:14, alignSelf:'center', color:'#acabad'}}>at your home</Text>
        </View>
        <View style={{width:'100%', height:'15%', justifyContent:'flex-end'}}>
        <TouchableOpacity style={{width:'85%', height:50, marginTop:"5%", alignSelf:'center' , borderRadius:5, backgroundColor:'#20AC73', justifyContent:'center', alignItems:'center', elevation:5}} onPress={() => navigation.navigate('Selection')}>
        <Text style={{color:'#ffffff', fontFamily:'MazzardH-Bold', fontWeight:'800', fontSize:18}}>Get Started</Text>
      </TouchableOpacity>
        </View>
        
    </View>
  )
}

export default OnBorading