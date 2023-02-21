import { View, Text, ScrollView, TouchableOpacity , Image , ImageBackground  } from 'react-native'
import Icon from 'react-native-vector-icons/dist/MaterialIcons';

import React from 'react'

const Setting = ({navigation}) => {

  return (
    <View style={{flex:1, backgroundColor:'white'}}>
        <View style={{width:'100%', height:'8%', justifyContent:'space-between' , marginTop:'5%', flexDirection:'row'}}>
            <View style={{height:'100%', width:'32%', alignItems:'center', justifyContent:'center'}}>
            <TouchableOpacity style={{width:'70%', justifyContent:'center'}}
            // onPress={() => navigation.goBack()}
            >
            <Image style={{width:42, height:42}}
            // source={require("../../assets/Images/back.png")}
            />
            </TouchableOpacity>
            </View>
            <View style={{height:'100%', width:'32%', justifyContent:'center', alignItems:'center'}}>
                <Text style={{fontSize:20, color:'black', fontFamily:"Montserrat-Bold"}}>Settings</Text>
            </View>
            <View style={{height:'100%', width:'32%'}}></View>
        </View>
        {/* --------------------------------------------------- */}
        <View style={{width:'100%', height:'20%', alignItems:'center', justifyContent:'center'}}>
            <TouchableOpacity onPress={()=>navigation.navigate("Profile")}>
        <ImageBackground source={require('../../assets/Images/onboarding3.png')} resizeMode="cover" style={{width:120, height:120, justifyContent:'flex-end', alignItems:'flex-end'}}>
        {/* <Image
        style={{backgroundColor:'white', width:40, height:40, borderRadius:100}}
        source={require('../../assets/Images/edit.png')}
        /> */}
        <View style={{width:40, height:40, elevation:5 ,backgroundColor:'white', borderRadius:100, alignItems:'center', justifyContent:'center'}}>
       
        <Image
        style={{width:'80%', height:"80%"}}
        source={require('../../assets/Images/edit.png')} />
        </View>
        </ImageBackground>
        </TouchableOpacity>
        </View>
        <View style={{width:'100%', height:'5%', alignItems:'center', justifyContent:'center', marginTop:'3%', flexDirection:'row'}}>
            <Text style={{fontSize:20 , fontFamily:'Montserrat-SemiBold', color:'black'}}>William Jones</Text>
            <Image
        style={{width:17, height:17}}
        source={require('../../assets/Images/edit.png')} />
        </View>
        <TouchableOpacity onPress={()=>navigation.navigate("InsertArticle")} style={{height:'5%', width:'100%', flexDirection:'row',marginTop:'2%' , justifyContent:'space-between', paddingHorizontal:"15%" , alignItems:'center'}}>

            <Text style={{fontSize:16 , fontFamily:'Montserrat-Medium' , color:'black'}}>Insert Articles</Text>

            <Icon name="arrow-forward-ios" size={16} color="black" />
        </TouchableOpacity>
        <TouchableOpacity  style={{height:'5%', width:'100%', flexDirection:'row',marginTop:'2%' , justifyContent:'space-between', paddingHorizontal:"15%" , alignItems:'center'}}>

            <Text style={{fontSize:16 , fontFamily:'Montserrat-Medium' , color:'black'}}>Listed Articles</Text>

            <Icon name="arrow-forward-ios" size={16} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate("AppDiscription")} style={{height:'5%', width:'100%', flexDirection:'row',marginTop:'1%' , justifyContent:'space-between', paddingHorizontal:"15%" , alignItems:'center'}}>

            <Text style={{fontSize:16 , fontFamily:'Montserrat-Medium' , color:'black'}}>App Description</Text>

            <Icon name="arrow-forward-ios" size={16} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={{height:'5%', width:'100%', flexDirection:'row',marginTop:'1%' , justifyContent:'space-between', paddingHorizontal:"15%" , alignItems:'center'}}>

            <Text style={{fontSize:16 , fontFamily:'Montserrat-Medium' , color:'black'}}>Change Interests</Text>

            <Icon name="arrow-forward-ios" size={16} color="black" />
        </TouchableOpacity>
        <TouchableOpacity  style={{height:'5%', width:'100%', flexDirection:'row',marginTop:'1%' , justifyContent:'space-between', paddingHorizontal:"15%" , alignItems:'center'}}>

            <Text style={{fontSize:16 , fontFamily:'Montserrat-Medium' , color:'black'}}>Change Password</Text>

            <Icon name="arrow-forward-ios" size={16} color="black" />
        </TouchableOpacity>

        <TouchableOpacity style={{height:'5%', width:'100%', flexDirection:'row',marginTop:'1%' , justifyContent:'space-between', paddingHorizontal:"15%" , alignItems:'center'}}>

            <Text style={{fontSize:16 , fontFamily:'Montserrat-Medium' , color:'black'}}>Delete Account</Text>

            <Icon name="arrow-forward-ios" size={16} color="black" />
        </TouchableOpacity>



        <TouchableOpacity onPress={()=>navigation.navigate("Term")} style={{height:'5%', width:'100%', flexDirection:'row',marginTop:'1%' , justifyContent:'space-between', paddingHorizontal:"15%" , alignItems:'center'}}>

            <Text style={{fontSize:16 , fontFamily:'Montserrat-Medium' , color:'black'}}>Terms of Use</Text>

            <Icon name="arrow-forward-ios" size={16} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate("DataProtection")} style={{height:'5%', width:'100%', flexDirection:'row',marginTop:'1%' , justifyContent:'space-between', paddingHorizontal:"15%" , alignItems:'center'}}>

            <Text style={{fontSize:16 , fontFamily:'Montserrat-Medium' , color:'black'}}>Data Protection</Text>

            <Icon name="arrow-forward-ios" size={16} color="black" />
        </TouchableOpacity>
        
        
        <Text style={{alignSelf:'center', fontSize:16, fontFamily:'Montserrat-SemiBold', marginTop:'3%', color:'#2aa774'}} onPress={()=> navigation.navigate('Login')}>Log Out</Text>
        
    </View>
  )
}

export default Setting