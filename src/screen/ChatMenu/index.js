import { View, Text, ScrollView , TouchableOpacity , Image , TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import {moderateScale} from '../../assets/Theme/Dimensions';
import React from 'react'

const ChatMenu = ({ navigation }) => {
  return (
    <ScrollView style={{flex: 1, backgroundColor:'#ffffff',}} contentContainerStyle={{flexGrow:1}}>
      <View
        style={{
          width: '90%',
          height: moderateScale(42),
          justifyContent: 'space-between',
          marginTop: '5%',
          flexDirection: 'row',
          alignSelf:'center'
          // backgroundColor: '#898',
        }}>
        <TouchableOpacity >
          <Image
            style={{width: moderateScale(42), height: moderateScale(42)}}
            // source={require('../../assets/Images/back.png')}
          />
        </TouchableOpacity>

        <View
          style={{
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            // backgroundColor: '#7878',
          }}>
          <Text
            style={{
              fontSize: 20,
              color: 'black',
              fontFamily: 'Montserrat-Bold',
            }}>
              Chats
            </Text>
        </View>
        <View
          style={{width: moderateScale(42), height: moderateScale(42)}}></View>
      </View>
      {/* ------------------------------- */}
      <View style={{width:'90%', height:50, marginTop:"6%", alignSelf:'center' , borderRadius:15, borderColor:'background: #0000007D', borderWidth:1, flexDirection:'row'}}>
      <View style={{width:'15%', height:'100%', alignItems:'center', justifyContent:'center'}}>
      <Image style={{width:18, height:18}}
      source={require("../../assets/Images/search.png")}
      />
      
      </View>
      <View style={{width:'85%', height:'100%', alignItems:'center', justifyContent:'center'}}>
      <TextInput
        style={{height: 50, margin: 12 , width:'95%'}}
        placeholderTextColor="#acacac"
        placeholder="Username"
      />
      </View>
      </View>
      {/* ----------------------------------- */}

      <View style={{width:"90%", alignSelf:'center' }}>
      <Text style={{fontSize:18, color:'black', fontFamily:'Montserrat-SemiBold', marginTop:'5%' }}>Message</Text>

      <View style={{width:"100%", height:'35%', flexDirection:'row'}}>
        <TouchableOpacity style={{flexDirection:'row'}} onPress={() => navigation.navigate('Chat')} >
        <View style={{width:"25%", height:'100%', alignItems:'center', justifyContent:'center'}}>
          <Image 
          style={{width:56, height:56, borderRadius:100}}
          source={require('../../assets/Images/bike.png')}
          />
        </View>
        <View style={{width:"55%", height:'100%',  justifyContent:'center'}}>
          <Text style={{fontSize:16, fontFamily:'Montserrat-Bold', color:'black'}}>Cody Fisher</Text>
          <View>
            <Text style={{color:'black'}}>Sticker 😍</Text>
          </View>
        </View>
        <View style={{width:"20%", height:'100%',justifyContent:'center'}}>
        <Text >12min</Text>
        <View style={{width:20, height:20, borderRadius:10, backgroundColor:'#20AC73', marginTop:5, alignItems:'center', justifyContent:'center'}}>
          <Text style={{fontFamily:'Montserrat-Bold', color:'white'}}>1</Text>
        </View>
        </View>
        </TouchableOpacity>
      </View>
      
      {/* ------------ */}
      <View style={{width:"100%", height:'8%', flexDirection:'row'}}>
        <TouchableOpacity style={{flexDirection:'row'}} onPress={() => navigation.navigate('Chat')} >
        <View style={{width:"25%", height:'100%', alignItems:'center', justifyContent:'center'}}>
          <Image 
          style={{width:56, height:56, borderRadius:100}}
          source={require('../../assets/Images/dp.png')}
          />
        </View>
        
        <View style={{width:"55%", height:'100%',  justifyContent:'center'}}>
          <Text style={{fontSize:16, fontFamily:'Montserrat-Bold', color:'black'}}>Ralph Edwards</Text>
          <View>
            <Text style={{color:'black'}}>Typing..</Text>
          </View>
        </View>
        <View style={{width:"20%", height:'100%',justifyContent:'center'}}>
        <Text >12min</Text>
        <View style={{width:20, height:20, borderRadius:10, backgroundColor:'#20AC73', marginTop:5, alignItems:'center', justifyContent:'center'}}>
          <Text style={{fontFamily:'Montserrat-Bold', color:'white'}}>2</Text>
        </View>
        </View>
        </TouchableOpacity>
      </View>
      </View>

    </ScrollView>
  )
}

export default ChatMenu