import { View, Text, ScrollView, TouchableOpacity , Image , ImageBackground  } from 'react-native'
import Icon from 'react-native-vector-icons/dist/MaterialIcons';

import React from 'react'

const Profile = ({navigation}) => {

  return (
    <View style={{flex:1, backgroundColor:'white'}}>
        <View style={{width:'100%', height:'8%', justifyContent:'space-between' , marginTop:'5%', flexDirection:'row'}}>
            <View style={{height:'100%', width:'32%', alignItems:'center', justifyContent:'center'}}>
            <TouchableOpacity style={{width:'70%', justifyContent:'center'}}
            onPress={() => navigation.goBack()}
            >
            <Image style={{width:42, height:42}}
            source={require("../../assets/Images/back.png")}
            />
            </TouchableOpacity>
            </View>
            <View style={{height:'100%', justifyContent:'center', alignItems:'center'}}>
                <Text style={{fontSize:20, color:'black', fontFamily:"Montserrat-Bold"}}>William Jones</Text>
            </View>
            <View style={{height:'100%', width:'32%'}}></View>
        </View>
        {/* --------------------------------------------------- */}
        <View style={{width:'100%', height:'20%', alignItems:'center', justifyContent:'center'}}>
        <ImageBackground source={require('../../assets/Images/onboarding3.png')} resizeMode="cover" style={{width:120, height:120, justifyContent:'flex-end', alignItems:'flex-end'}}>
        </ImageBackground>
        </View>
        <View style={{width:'100%' ,height:'7%', alignItems:'center', justifyContent:'space-between', marginTop:'10%'}}>
            <Text style={{fontSize:16 , fontFamily:'Montserrat-Regular', color:'black'}}>3 Ads Online</Text>
            <Text style={{fontSize:16 , fontFamily:'Montserrat-Regular', color:'black'}}>Member since 09/1922</Text>
        </View>
        <View style={{width:'100%', height:'50%', justifyContent:'center'}}>
                <TouchableOpacity style={{width:203, height:59, marginTop:"5%", alignSelf:'center' , borderRadius:5, backgroundColor:'#20AC73', justifyContent:'center', alignItems:'center', elevation:5}}
                    onPress={() => navigation.navigate('BottomTab')}
                >
                <Text style={{color:'#ffffff', fontFamily:'MazzardH-Bold', fontSize:18}}>Contact</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width:134, height:39, marginTop:"8%", alignSelf:'center' , borderRadius:5, backgroundColor:'#20AC73', justifyContent:'center', alignItems:'center', elevation:5}}
                    onPress={() => navigation.navigate('Report')}
                >
                <Text style={{color:'#ffffff', fontFamily:'MazzardH-Bold', fontSize:18}}>Report</Text>
                </TouchableOpacity>
        </View>
    </View>
  )
}

export default Profile