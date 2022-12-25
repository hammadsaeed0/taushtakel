import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    Image,
    ImageBackground,
  } from 'react-native';
  import Icon from 'react-native-vector-icons/dist/MaterialIcons';
  import Theme from '../../assets/Theme/Theme';
  import { Dropdown } from 'react-native-element-dropdown';
  import React,{useState} from 'react';
  import {moderateScale} from '../../assets/Theme/Dimensions';
  
  const data = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },
    { label: 'Item 6', value: '6' },
    { label: 'Item 7', value: '7' },
    { label: 'Item 8', value: '8' },
  ];
  
    
  
  const DealsOnbording = ({navigation}) => {
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
  
    const renderLabel = () => {
      if (value || isFocus) {
        return (
          <Text style={[styles.label, isFocus && { color: 'blue' }]}>
            Dropdown label
          </Text>
        );
      }
      return null;
    };
    return (
      
        <ScrollView style={{backgroundColor:"white",flex:1}}>
      <View style={{flex: 1, backgroundColor: 'white', alignItems: 'center'}}>
        <View
          style={{
            width: '90%',
            height: moderateScale(40),
            justifyContent: 'space-between',
            marginTop: '5%',
            // marginVertical:10,
            flexDirection: 'row',
            // backgroundColor:"red"
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
              Your deals
            </Text>
          </View>
          <View
            style={{width: moderateScale(42), height: moderateScale(42)}}></View>
        </View>
        {/* --------------------------------------------------- */}
        <View
          style={{
            width: '90%',
            elevation:5,
            alignSelf: 'center',
            marginTop: 30,
            marginVertical:15,
            height: moderateScale(150),
            backgroundColor: 'white',
            borderRadius: 5,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}>
            <View style={{width:"40%", height:'100%', justifyContent:'space-around' , alignItems:'center'}}>
                <Image 
                style={{width:moderateScale(60) , height:moderateScale(60) , borderRadius:100 }}
                source={require('../../assets/Images/bike.png')}
                />
                <Image 
                style={{width:moderateScale(60) , height:moderateScale(60) , borderRadius:100 }}
                source={require('../../assets/Images/bike.png')}
                />
            </View>
            <View style={{width:"60%", height:'100%'}}>
                <View style={{width:'100%', height:'50%',alignItems:'center', justifyContent:'flex-end'}}>
                    <Text style={{fontFamily:'Montserrat-Medium' , fontSize: 16 , color:'black'}}>Electric Scooter</Text>
                    <Image source={require('../../assets/Images/Vector.png')}/>
                    <Text style={{fontFamily:'Montserrat-Medium' , fontSize: 16 , color:'black'}}>Washing Machine </Text>
                </View>
                <View style={{width:'70%', alignSelf:'center' ,height:'50%', justifyContent:'space-around', alignItems:'center', flexDirection:'row'}}>
                    <View style={{width:'30%', height:'100%', borderRadius:8, alignItems:'center', justifyContent:'center'}}>
                        <View style={{width:'80%', height:'60%', backgroundColor:'#20AC73' , borderRadius:8, alignItems:'center', justifyContent:'center'}}>
                            <Text style={{fontSize:24, color:'white', fontFamily:'Montserrat-Bold'}}>1</Text>
                        </View>
                        <Text style={{fontSize:14, fontFamily:'Montserrat-Medium', marginTop:5, color:'black'}}>Day</Text>
                    </View>


                    <View style={{width:'30%', height:'100%', borderRadius:8, alignItems:'center', justifyContent:'center'}}>
                    <View style={{width:'80%', height:'60%', backgroundColor:'#20AC73' , borderRadius:8, alignItems:'center', justifyContent:'center'}}>
                            <Text style={{fontSize:24, color:'white', fontFamily:'Montserrat-Bold'}}>10</Text>
                        </View>
                        <Text style={{fontSize:14, fontFamily:'Montserrat-Medium', marginTop:5, color:'black'}}>Hr</Text>
                    </View>


                    <View style={{width:'30%', height:'100%', borderRadius:8, alignItems:'center', justifyContent:'center'}}>
                    <View style={{width:'80%', height:'60%', backgroundColor:'#20AC73' , borderRadius:8, alignItems:'center', justifyContent:'center'}}>
                            <Text style={{fontSize:24, color:'white', fontFamily:'Montserrat-Bold'}}>11</Text>
                        </View>
                        <Text style={{fontSize:14, fontFamily:'Montserrat-Medium', marginTop:5, color:'black'}}>Min</Text>
                    </View>


                </View>
            </View>
        </View>
        
        
      </View>
      <View style={{flex: 1, backgroundColor: 'white', alignItems: 'center'}}>
        <View
          style={{
            width: '90%',
            alignSelf: 'center',
            marginVertical:15, height: moderateScale(153),
            backgroundColor: 'white',
            elevation: 5,
            borderRadius: 5,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}>
            <View style={{width:"40%", height:'100%', justifyContent:'space-around' , alignItems:'center'}}>
                <Image 
                style={{width:moderateScale(60) , height:moderateScale(60) , borderRadius:100 }}
                source={require('../../assets/Images/bike.png')}
                />
                <Image 
                style={{width:moderateScale(60) , height:moderateScale(60) , borderRadius:100 }}
                source={require('../../assets/Images/bike.png')}
                />
            </View>
            <View style={{width:"60%", height:'100%'}}>
                <View style={{width:'100%', height:'50%',alignItems:'center', justifyContent:'flex-end'}}>
                    <Text style={{fontFamily:'Montserrat-Medium' , fontSize: 16 , color:'black'}}>Electric Scooter</Text>
                    <Image source={require('../../assets/Images/Vector.png')}/>
                    <Text style={{fontFamily:'Montserrat-Medium' , fontSize: 16 , color:'black'}}>Washing Machine </Text>
                </View>
                <View style={{width:'70%', alignSelf:'center' ,height:'35%' , alignItems:'center', flexDirection:'row'}}>
                    <View style={{width:'100%', height:'70%', backgroundColor:'#EB7304F0', borderRadius:8, justifyContent:'center', alignItems:'center' , flexDirection:'row'}}>
                        {/* <Text style={{fontFamily:'Montserrat-Medium', color:'white', fontSize:18}}>Pending</Text> */}
                        <Image 
                         style={{width:moderateScale(15) , height:moderateScale(15), marginRight:'5%'}}
                          source={require('../../assets/Images/write.png')}
                          />
                        <Text style={{fontFamily:'Montserrat-Medium', color:'white', fontSize:18}}>Pending</Text>
                    </View>
                </View>
            </View>
        </View>
        
        
      </View>
      <View style={{flex: 1, backgroundColor: 'white', alignItems: 'center'}}>
        <View
          style={{
            width: '90%',
            alignSelf: 'center',
            // marginTop: 30,
            marginVertical:15,
            height: moderateScale(153),
            backgroundColor: 'white',
            elevation: 5,
            borderRadius: 5,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}>
            <View style={{width:"40%", height:'100%', justifyContent:'space-around' , alignItems:'center'}}>
                <Image 
                style={{width:moderateScale(60) , height:moderateScale(60) , borderRadius:100 }}
                source={require('../../assets/Images/bike.png')}
                />
                <Image 
                style={{width:moderateScale(60) , height:moderateScale(60) , borderRadius:100 }}
                source={require('../../assets/Images/bike.png')}
                />
            </View>
            <View style={{width:"60%", height:'100%'}}>
                <View style={{width:'100%', height:'50%',alignItems:'center', justifyContent:'flex-end'}}>
                    <Text style={{fontFamily:'Montserrat-Medium' , fontSize: 16 , color:'black'}}>Electric Scooter</Text>
                    <Image source={require('../../assets/Images/Vector.png')}/>
                    <Text style={{fontFamily:'Montserrat-Medium' , fontSize: 16 , color:'black'}}>Washing Machine </Text>
                </View>
                <View style={{width:'70%', alignSelf:'center' ,height:'35%' , alignItems:'center', flexDirection:'row'}}>
                    <View style={{width:'100%', height:'70%', backgroundColor:'#FF2416AB', borderRadius:8, flexDirection:'row' ,justifyContent:'center', alignItems:'center'}}>
                    <Image 
                         style={{width:moderateScale(15) , height:moderateScale(15), marginRight:'5%'}}
                          source={require('../../assets/Images/stop.png')}
                          />
                        <Text style={{fontFamily:'Montserrat-Medium', color:'white', fontSize:18}}>Expired</Text>
                    </View>
                </View>
            </View>
        </View>
        
        
      </View>
      </ScrollView>
      
    );
  };
  
  export default DealsOnbording;
  