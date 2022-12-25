import { View, Text , Image, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import {registerAction} from '../../store/actions/authAction';
import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import Toast from 'react-native-toast-message';
import { validateEmail } from '../../utils/validation';
const Signup = ({ navigation }) => {
  const dispatch = useDispatch();
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSignup = () => {
    // // const obj ={}
    // if (!username) {
    //   Toast.show({
    //     type: 'error',
    //     text1: 'Error',
    //     text2: 'Please Enter First Name',
    //     position: 'top',
    //   });
    // } else if (email && !validateEmail(email)) {
    //   Toast.show({
    //     type: 'error',
    //     text1: 'Error',
    //     text2: 'Please Enter Proper email',
    //     position: 'top',
    //   });
    // }  else if (!email) {
    //   Toast.show({
    //     type: 'error',
    //     text1: 'Error',
    //     text2: 'Please Enter Email',
    //     position: 'top',
    //   });
    // } else if (!password ) {
    //   Toast.show({
    //     type: 'error',
    //     text1: 'Error',
    //     text2: 'Please Enter Password',
    //     position: 'top',
    //   });
    // }else if (password.length>8) {
    //   Toast.show({
    //     type: 'error',
    //     text1: 'Error',
    //     text2: 'Please Enter Correct Password',
    //     position: 'top',
    //   });
    // }else {
    //  let obj={
    //     email:email,
    //     username:username,
    //     password:password,
    //   }
    //   dispatch(registerAction(obj,()=>{
    //     // navigation.navigate('Interest')
     
    //   }));
    Toast.show({  type: 'success',
        text1: 'success',
        text2: 'A verification code has been sent your email!',
        position: 'top',
      });
      navigation.navigate('Login')
    // }
  };


  return (
    <Formik>
      <ScrollView style={{flex: 1, backgroundColor:'#ffffff'}} contentContainerStyle={{flexGrow:1}}>
      <TouchableOpacity style={{width:'70%',paddingLeft:10, justifyContent:'center'}}
      onPress={() => navigation.navigate('Selection')}
      >
      <Image style={{width:42, height:42, marginTop:20}}
      source={require("../../assets/Images/back.png")}
      />
      </TouchableOpacity>
      <View style={{height: '22%' , width:'100%', alignItems:'center',  justifyContent:'flex-start'}}>
      <Image
        style={{height:110, width:100}}
        source={require('../../assets/Images/logo.png')}
      />
      </View>
      <View style={{width:'85%', height:'8%', alignSelf:'center' }}> 
      <Text style={{fontSize:16, color:'#000000',fontFamily:'Montserrat-Bold'}}>Creating New Account</Text>
      <Text style={{fontFamily:'Montserrat-Medium',  fontSize:14, color:'#707070', fontWeight:'100', marginTop:'3%'}}>Enter following details</Text>
      </View>
      <View style={{width:'85%', height:50, marginTop:"6%", alignSelf:'center' , borderRadius:5, borderColor:'#22A275', borderWidth:1.5, flexDirection:'row'}}>
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
        value={username}
        onChangeText={val => setUserName(val)}
      />
      </View>
      </View>
      <View style={{width:'85%', height:50, marginTop:"5%", alignSelf:'center' , borderRadius:5, borderColor:'#22A275', borderWidth:1.5, flexDirection:'row'}}>
      <View style={{width:'15%', height:'100%', alignItems:'center', justifyContent:'center'}}>
      <Icon name="email-outline" size={18} color="#22A275" />
      {/* <Image style={{width:28, height:21}}
      source={require("../../assets/Images/email.png")}
      /> */}
      
      </View>
      <View style={{width:'85%', height:'100%', alignItems:'center', justifyContent:'center'}}>
      <TextInput
        style={{height: 50, margin: 12 , width:'95%'}}
        placeholderTextColor="#acacac"
        placeholder="Email Address"
        value={email}
        onChangeText={val => setEmail(val)}
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
        placeholder="Password"
        value={password}
        onChangeText={val => setPassword(val)}
      />
      </View>
      </View>
      <TouchableOpacity style={{width:'85%', height:50, marginTop:"5%", alignSelf:'center' , borderRadius:5, backgroundColor:'#20AC73', justifyContent:'center', alignItems:'center', elevation:5}}
      onPress={()=> handleSignup()}
      >
        <Text style={{color:'#ffffff', fontFamily:'MazzardH-Bold', fontWeight:'800', fontSize:18}}>Register</Text>
      </TouchableOpacity>
      <View style={{width:'85%', height:150 ,flexDirection:'column',  alignItems:'center' , alignSelf:'center'}}>
        <View style={{width:'100%', height:'50%', justifyContent:'center'}}>
        <View style={{width:'100%', height:1, backgroundColor:'#acabad'}}></View>
        </View>
        <View style={{width:'100%', height:'50%', justifyContent:'flex-end'}}>
            <Text style={{textAlign:"center", fontSize:14, fontFamily:'Montserrat-Medium', color:'acacac'}}>
                <Text style={{color:'#20AC73', textDecorationLine: 'underline'}}>Our teams of use apply</Text> information about
            </Text>
            <Text style={{textAlign:"center", fontSize:14, fontFamily:'Montserrat-Medium', color:'acacac'}}>
            the processing of your data can be found
            </Text>
            <Text style={{textAlign:"center", fontSize:14, fontFamily:'Montserrat-Medium', color:'acacac'}}>
            in our <Text style={{color:'#20AC73', textDecorationLine: 'underline'}}>Data Protection Policty.</Text>
            </Text>
        </View>
      </View>
      
    </ScrollView>
    </Formik>
  )
}

export default Signup