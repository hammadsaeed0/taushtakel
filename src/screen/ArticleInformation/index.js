import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';

import Icons from 'react-native-vector-icons/dist/FontAwesome';
import Icon1 from 'react-native-vector-icons/dist/EvilIcons';
import Icon2 from 'react-native-vector-icons/dist/Ionicons';
import Theme from '../../assets/Theme/Theme';
import { Dropdown } from 'react-native-element-dropdown';
import React from 'react';
import {moderateScale} from '../../assets/Theme/Dimensions';



const ArticleInfomation = ({navigation}) => {
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
              color: '#93BF1E',
              fontFamily: 'Montserrat-Bold',
            }}>
            Electric Scooter
          </Text>
        </View>
        <View
          style={{width: moderateScale(42), height: moderateScale(42)}}></View>
      </View>
      {/* --------------------------------------------------- */}
      <View style={{width:'100%', height:"100%"}}>
        <ImageBackground style={{width:377, height:220, alignSelf:'center', marginTop:'3%'}} imageStyle={{borderRadius:10}} source={require("../../assets/Images/bike.png")}>
              <View style={{width:'12%', height:'12%', backgroundColor: 'rgba(225,225,225,0.5)', alignSelf:'flex-end', marginRight:10, marginTop:10, borderRadius:50 , justifyContent:'center' , alignItems:'center'}}>
                <Text style={{fontFamily:'Montserrat-Bold', color:'white'}}>1/4</Text>
              </View>
        </ImageBackground>
        <View style={{width:'95%', height:'20%', alignSelf:'center'}}>
          <View style={{width:'100%', height:'20%',  flexDirection:'row' , marginTop:'5%'}}>
                
          <View style={{width:'50%', height:'100%',   flexDirection:'row' , alignItems:'center'}}>
                  <Icon2 name="pricetag-outline" size={20} color="black"  />
                  <Text style={{fontFamily:'Montserrat-Medium' , fontSize:16 , color:'black', marginLeft:10}}>Price </Text>
                  
          </View>
          <View style={{width:'50%', height:'100%', marginLeft:'20%'}}>
            <Text style={{fontSize:24, fontFamily:'Montserrat-Medium' , alignSelf:'flex-start' , color:'#000000C9'}}>290€</Text>
          </View>
          </View>
          <View style={{width:'100%', height:'20%',  flexDirection:'row' , marginTop:'3%'}}>
                
          <View style={{width:'50%', height:'100%',   flexDirection:'row' , alignItems:'center'}}>
                  <Icon1 name="location" size={20} color="black"  />
                  <Text style={{fontFamily:'Montserrat-Medium' , fontSize:16 , color:'black', marginLeft:10}}>Distance </Text>
                  
          </View>
          <View style={{width:'50%', marginLeft:'20%',height:'100%'}}>
            <Text style={{fontSize:17,  fontFamily:'Montserrat-Medium' , alignSelf:'flex-start', color:"#000000C9"}}>5 KM</Text>
          </View>
          </View>
          <View style={{width:'100%', height:'20%',  flexDirection:'row' , marginTop:'3%'}}>
                
          <View style={{width:'50%', height:'100%',   flexDirection:'row' }}>
                  {/* <Icon2 name="pricetag-outline" size={18} color="black"  /> */}
                  <Image 
                  style={{width:20, height:20}}
                  source={require('../../assets/Images/vfx.png')}
                  />
                  <Text style={{fontFamily:'Montserrat-Medium' , fontSize:16 , color:'black', marginLeft:10}}>Condition </Text>
                  
          </View>
          <View style={{width:'50%', height:'100%' ,marginLeft:'20%'}}>
            <Text style={{fontSize:17, fontFamily:'Montserrat-Medium' , alignSelf:'flex-start', color:'#000000C9'}}>Gebraucht</Text>
          </View>
          </View>
          <Text style={{fontSize:19, fontFamily:'Montserrat-SemiBold', color:'#000000C9', marginTop:'2%'}}>Discription</Text>
          <Text style={{fontSize:14, fontFamily:'Montserrat-Regular', lineHeight:24, color:'#000000C9', marginTop:'2%'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
        <TouchableOpacity style={{width:'30%', height:'25%', alignItems:'center', justifyContent:'center', marginTop:'3%',backgroundColor:'#20AC73' , borderRadius:10, alignSelf:'center'}} onPress={() => navigation.navigate('Report')}>
          <Text style={{fontSize:18, color:'white', fontFamily:'Montserrat-SemiBold'}}>Report</Text>
        </TouchableOpacity>
            
        </View>
      </View>
      
    </View>

  );
};

export default ArticleInfomation;
