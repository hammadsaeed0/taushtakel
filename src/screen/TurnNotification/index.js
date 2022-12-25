import { View, Text, Image , TouchableOpacity } from 'react-native'
import React from 'react'

const Notification = ({navigation}) => {
  return (
    <View style={{flex:1}}>
        <View style={{width:'100%', height:'55%',justifyContent:'flex-end', alignItems:'center'}}>
            <Image style={{width:'70%', height:'70%'}}
            source={require("../../assets/Images/notificationBg.png")}
            />
        </View>
        <View style={{width:'100%', height:'15%'}}>
            <Text style={{fontFamily:'Montserrat-Bold', fontSize:20, alignSelf:'center', color:'black'}}>Enable notification’s</Text>
            <View style={{width:'70%', height:"100%", alignSelf:'center' }}>
            <Text style={{fontFamily:'Montserrat-Regular', fontSize:14, textAlign:'center',marginTop:'5%', alignSelf:'center', color:'#707070'}}>Get push-notification when deals with related applied item.</Text>
            </View>
        </View>
        <View style={{width:'100%', height:'15%', justifyContent:'flex-end'}}>
        <TouchableOpacity style={{width:'85%', height:50, marginTop:"5%", alignSelf:'center' , borderRadius:5, backgroundColor:'#20AC73', justifyContent:'center', alignItems:'center', elevation:5}} onPress={() => navigation.replace('BottomTab')}>
        <Text style={{color:'#ffffff', fontFamily:'MazzardH-Bold', fontWeight:'800', fontSize:18}}>Turn on Notification</Text>
      </TouchableOpacity>
        </View>
      <Text style={{fontFamily:'Montserrat-SemiBold', fontSize:14, alignSelf:'center', color:'black', marginTop:50}} onPress={() => navigation.replace('BottomTab')}>Not Now</Text>
        
        
    </View>
  )
}

export default Notification