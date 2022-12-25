import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity , Image , TextInput , StyleSheet  } from 'react-native'
import { Dropdown } from 'react-native-element-dropdown';
import {moderateScale} from '../../assets/Theme/Dimensions';


const AppDiscription = ({navigation}) => {

      return (
        <View style={{flex: 1, backgroundColor: 'white', alignItems: 'center'}}>
        <View
        style={{
          width: '90%',
          height: moderateScale(42),
          justifyContent: 'space-between',
          marginTop: '5%',
          flexDirection: 'row',
          // backgroundColor: '#898',
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={{width: moderateScale(42), height: moderateScale(42)}}
            source={require('../../assets/Images/back.png')}
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
            App Discription
          </Text>
        </View>
        <View
          style={{width: moderateScale(42), height: moderateScale(42)}}></View>
      </View>
      <View style={{width:'80%', marginTop:20}}>
        <Text style={{fontSize:15 , fontFamily:'Montserrat-Regular', textAlign:'justify' , color:"#6f6f6f"}}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </Text>
      </View>
      </View>
  )
}

export default AppDiscription

