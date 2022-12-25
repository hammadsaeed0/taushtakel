import { View, Text, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import { useValidation } from 'react-native-form-validator';
import React, { useState } from 'react'
import Toast from 'react-native-toast-message';
import { validateEmail } from '../../utils/validation';
import { useDispatch } from 'react-redux';
import { loginAction } from '../../store/actions/authAction';

const Login = ({ navigation }) => {
  const dispatch = useDispatch();
  const [usermail, setUsermail] = useState('');
  const [Password, setPassword] = useState('');
  const handleLogin = () => {
    // // const obj ={}
    // if (!usermail) {
    //   Toast.show({
    //     type: 'error',
    //     text1: 'Error',
    //     text2: 'Please Enter Username',
    //     position: 'top',
    //   });
    // } else if ( !Password) {
    //   Toast.show({
    //     type: 'error',
    //     text1: 'Error',
    //     text2: 'Please Enter Password',
    //     position: 'top',
    //   });
    // }  else if ( Password.length >8) {
    //   Toast.show({
    //     type: 'error',
    //     text1: 'Error',
    //     text2: 'Please Enter Password',
    //     position: 'top',
    //   });
    // } else {
    //  let obj={
    //   username:usermail,
    //   password:Password
    //   }
    // dispatch(loginAction(obj,()=>{
    // navigation.navigate('Interest')
    Toast.show({
      type: 'success',
      text1: 'success',
      text2: 'User Login SuccessFully!',
      position: 'top',
    });
    navigation.navigate('Interest')
    // }));
    // }
  };
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#ffffff', }} contentContainerStyle={{ flexGrow: 1 }}>
      <TouchableOpacity style={{ width: '70%', paddingLeft: 10, justifyContent: 'center' }}
        onPress={() => navigation.navigate('Selection')}
      >
        <Image style={{ width: 42, height: 42, marginTop: 20 }}
          source={require("../../assets/Images/back.png")}
        />
      </TouchableOpacity>
      <View style={{ height: '22%', width: '100%', alignItems: 'center', justifyContent: 'flex-start' }}>
        <Image
          style={{ height: 110, width: 100 }}
          source={require('../../assets/Images/logo.png')}
        />
      </View>
      <View style={{ width: '85%', height: '8%', alignSelf: 'center' }}>
        <Text style={{ fontSize: 16, color: '#000000', fontFamily: 'Montserrat-Bold' }}>Welcome Back</Text>
        <Text style={{ fontFamily: 'Montserrat-Medium', fontSize: 14, color: '#707070', fontWeight: '100', marginTop: '3%' }}>Login back to account</Text>
      </View>
      <View style={{ width: '85%', height: 50, marginTop: "6%", alignSelf: 'center', borderRadius: 5, borderColor: '#22A275', borderWidth: 1.5, flexDirection: 'row' }}>
        <View style={{ width: '15%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
          <Image style={{ width: 16, height: 16 }}
            source={require("../../assets/Images/profile.png")}
          />

        </View>
        <View style={{ width: '85%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
          <TextInput
            style={{ height: 50, margin: 12, width: '95%' }}
            placeholderTextColor="#acacac"
            placeholder="E-Mail"
            value={usermail}
            onChangeText={(text) => setUsermail(text)}
          />
        </View>
      </View>
      <View style={{ width: '85%', height: 50, marginTop: "5%", alignSelf: 'center', borderRadius: 5, borderColor: '#22A275', borderWidth: 1.5, flexDirection: 'row' }}>
        <View style={{ width: '15%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
          {/* <Icon name="user" size={30} color="#22A275" /> */}
          <Image style={{ width: 16, height: 16 }}
            source={require("../../assets/Images/lock.png")}
          />

        </View>
        <View style={{ width: '85%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
          <TextInput
            style={{ height: 50, margin: 12, width: '95%' }}
            placeholderTextColor="#acacac"
            placeholder="Password"
            secureTextEntry={true}
            value={Password}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
      </View>
      <View style={{ width: '85%', height: 30, alignSelf: 'center', alignItems: 'flex-end', justifyContent: 'flex-end' }}>
        <Text style={{ fontFamily: 'Montserrat-Medium', fontSize: 14 }}onPress={()=> navigation.navigate('emailverification')}>Forgot Password?</Text>
      </View>
      <TouchableOpacity style={{ width: '85%', height: 50, marginTop: "10%", alignSelf: 'center', borderRadius: 5, backgroundColor: '#20AC73', justifyContent: 'center', alignItems: 'center', elevation: 5 }} onPress={() => handleLogin()}>
        <Text style={{ color: '#ffffff', fontFamily: 'Montserrat-Bold', fontSize: 18 }}>Login</Text>
      </TouchableOpacity>
      <View style={{ width: '85%', height: 150, flexDirection: 'column', alignItems: 'center', alignSelf: 'center' }}>
        <View style={{ width: '100%', height: '50%', justifyContent: 'center' }}>
          <View style={{ width: '100%', height: 1, backgroundColor: '#acabad' }}></View>
        </View>
        <View style={{ width: '100%', height: '50%', justifyContent: 'flex-end' }}>
          <Text style={{ textAlign: "center", fontSize: 14, fontFamily: 'Montserrat-Medium' }}>
            I do not have an account yet.
          </Text>
          <Text style={{ textAlign: "center", fontSize: 14, fontFamily: 'Montserrat-Medium' }}>
            <TouchableOpacity onPress={() => navigation.replace('signup')}>
              <Text style={{ color: '#20AC73', textDecorationLine: 'underline' }}>Register Now</Text>
            </TouchableOpacity>


          </Text>
        </View>
      </View>

    </ScrollView>
  )
}

export default Login