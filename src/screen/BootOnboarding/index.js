import { View, Text, ScrollView, TouchableOpacity , Image , ImageBackground   } from 'react-native'
import Icon from 'react-native-vector-icons/dist/AntDesign';

import React from 'react'

const BootOnboarding = ({navigation}) => {

  return (
    <View style={{flex:1, backgroundColor:'white'}}>
        <View style={{width:'100%', height:'8%', justifyContent:'space-between' , marginTop:'5%', flexDirection:'row'}}>
            <View style={{height:'100%', width:'25%' , alignItems:'center', justifyContent:'center'}}>
            <TouchableOpacity style={{width:'70%', justifyContent:'center'}}
            onPress={() => navigation.goBack()}
            >
            <Image style={{width:42, height:42}}
            source={require("../../assets/Images/back.png")}
            />
            </TouchableOpacity>
            </View>
            <View style={{height:'100%', justifyContent:'center', alignItems:'center'}}>
                <Text style={{fontSize:20, color:'black', fontFamily:"Montserrat-Bold"}}>Buy the one booster</Text>
            </View>
            <View style={{height:'100%', width:'32%'}}></View>
        </View>
        {/* --------------------------------------------------- */}
        <View style={{width:'90%' , alignSelf:'center', marginTop:'8%' , height:129, backgroundColor:'white', elevation:5, borderRadius:10, flexDirection:'row', alignItems:'center'}}>
        <View style={{width:'25%', height:'100%', alignItems:'center', justifyContent:'center'}}>
          <Image
          style={{width:'80%', height:'80%'}}
          source={require('../../assets/Images/booster.png')}
          />
        </View>
        <View style={{width:'75%', height:'90%', justifyContent:'space-around'}}>
        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
        <Text style={{fontSize:16 , fontFamily:'Montserrat-SemiBold', color:'black'}}>300% Range Boost</Text>
        <Text style={{fontSize:16 , fontFamily:'Montserrat-Medium', color:'#20AC73', marginRight:'5%'}}>2,90€</Text>
        </View>
        <Text style={{fontSize:14 , fontFamily:'Montserrat-Medium'}}>Your anteige is displayed 3 times more than normal</Text>
        <View style={{width:132, height:35, backgroundColor:'#20AC73' , justifyContent:'space-around', marginRight:10 ,alignItems:'center' ,alignSelf:'flex-end', borderRadius:10}}>
        <View style={{width:'65%',  flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
          <Icon name="clockcircleo" size={18} color="white"/>
          <Text style={{fontSize:18,fontFamily:'Montserrat-SemiBold', color:'white'}}>3 Days</Text>
          </View>
        </View>
        </View>
        
        </View>
        <View style={{width:'90%' , alignSelf:'center', marginTop:'8%' , height:129, backgroundColor:'white', elevation:5, borderRadius:10, flexDirection:'row', alignItems:'center'}}>
        <View style={{width:'25%', height:'100%', alignItems:'center', justifyContent:'center'}}>
          <Image
          style={{width:'80%', height:'80%'}}
          source={require('../../assets/Images/booster.png')}
          />
        </View>
        <View style={{width:'75%', height:'90%', justifyContent:'space-around'}}>
        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
        <Text style={{fontSize:16 , fontFamily:'Montserrat-SemiBold', color:'black'}}>300% Range Boost</Text>
        <Text style={{fontSize:16 , fontFamily:'Montserrat-Medium', color:'#20AC73', marginRight:'5%'}}>2,90€</Text>
        </View>
        <Text style={{fontSize:14 , fontFamily:'Montserrat-Medium'}}>Your anteige is displayed 3 times more than normal</Text>
        <View style={{width:132, height:35, backgroundColor:'#20AC73' , justifyContent:'space-around', marginRight:10 ,alignItems:'center' ,alignSelf:'flex-end', borderRadius:10}}>
        <View style={{width:'65%',  flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
          <Icon name="clockcircleo" size={18} color="white"/>
          <Text style={{fontSize:18,fontFamily:'Montserrat-SemiBold', color:'white'}}>3 Days</Text>
          </View>
        </View>
        </View>
        
        </View>
    </View>
  )
}

export default BootOnboarding