import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  ImageBackground,
  Modal,
  StyleSheet,
  Pressable
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Feather';
import Theme from '../../assets/Theme/Theme';
import { Dropdown } from 'react-native-element-dropdown';
import React,{useState} from 'react';
import {moderateScale} from '../../assets/Theme/Dimensions';



const ListedArticle = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={{flex:1,backgroundColor:"white"}}>
      <ScrollView>
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
            Listed Articles
          </Text>
        </View>
        <View
          style={{width: moderateScale(42), height: moderateScale(42)}}></View>
      </View>
      {/* --------------------------------------------------- */}
      <View
        style={{
          width: '90%',
          alignSelf: 'center',
          marginTop: 30,
          marginVertical:15,
          height: moderateScale(129),
          backgroundColor: 'white',
          elevation: 5,
          borderRadius: 5,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}>
          <TouchableOpacity onPress={() => navigation.navigate('ArticleInformation')}>
        <ImageBackground
          source={require('../../assets/Images/bike.png')}
          style={{
            width: moderateScale(110),
            height: moderateScale(96),
            alignSelf: 'center',
            borderRadius: 20,
            alignItems: 'flex-end',
          }}>
          <View
            style={{
              height: moderateScale(22),
              width: moderateScale(22),
              borderRadius: 50,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#22A275',
              marginRight: 5,
              marginTop: 5,
            }}>
            <Text
              style={{
                fontSize: Theme.fontSizes.medium,
                color: Theme.colors.whiteColor,
              //   fontWeight: '400',
              }}>
              2
            </Text>
          </View>
        </ImageBackground>
        </TouchableOpacity>
        <View
          style={{
            height: '80%',
            width: '55%',
            //  backgroundColor:'#565',
            flexDirection: 'row',
          }}>
          <View
            style={{
              height: '100%',
              width: '85%',
              //  backgroundColor:'#575',
              justifyContent: 'space-evenly',
            }}>
            <Text
              style={{
                fontSize:18,
                color:'black',
                fontFamily:'Montserrat-Bold'
              }}>
              Electric Scooter
            </Text>
            <Text
              style={{
                  fontSize:12,
                  color:'black',
                  fontFamily:'Montserrat-Regular'
              }}>
              12-10-2022
            </Text>
            <Text
              style={{
                  fontSize:18,
                  color:'black',
                  fontFamily:'Montserrat-Medium'
              }}>
              290€
            </Text>
          </View>
          <View
            style={{
              height: '100%',
              width: '20%',
              // backgroundColor: '#375',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <Image source={require('../../assets/Images/option.png')} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View
        style={{
          width: '90%',
          alignSelf: 'center',
          marginVertical:15,
          height: moderateScale(129),
          backgroundColor: 'white',
          elevation: 5,
          borderRadius: 5,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}>
        <ImageBackground
          source={require('../../assets/Images/bike.png')}
          style={{
            width: moderateScale(110),
            height: moderateScale(96),
            alignSelf: 'center',
            borderRadius: 20,
            alignItems: 'flex-end',
          }}>
          <View
            style={{
              height: moderateScale(22),
              width: moderateScale(22),
              borderRadius: 50,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#22A275',
              marginRight: 5,
              marginTop: 5,
            }}>
            <Text
              style={{
                fontSize: Theme.fontSizes.medium,
                color: Theme.colors.whiteColor,
              //   fontWeight: '400',
              }}>
              2
            </Text>
          </View>
        </ImageBackground>
        <View
          style={{
            height: '80%',
            width: '55%',
            //  backgroundColor:'#565',
            flexDirection: 'row',
          }}>
          <View
            style={{
              height: '100%',
              width: '85%',
              //  backgroundColor:'#575',
              justifyContent: 'space-evenly',
            }}>
            <Text
              style={{
                fontSize:18,
                color:'black',
                fontFamily:'Montserrat-Bold'
              }}>
              Electric Scooter
            </Text>
            <Text
              style={{
                  fontSize:12,
                  color:'black',
                  fontFamily:'Montserrat-Regular'
              }}>
              12-10-2022
            </Text>
            <Text
              style={{
                  fontSize:18,
                  color:'black',
                  fontFamily:'Montserrat-Medium'
              }}>
              290€
            </Text>
          </View>
          <View
            style={{
              height: '100%',
              width: '20%',
              // backgroundColor: '#375',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity>
              <Image source={require('../../assets/Images/option.png')} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View
        style={{
          width: '90%',
          alignSelf: 'center',
          marginVertical:15,
          height: moderateScale(129),
          backgroundColor: 'white',
          elevation: 5,
          borderRadius: 5,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}>
        <ImageBackground
          source={require('../../assets/Images/bike.png')}
          style={{
            width: moderateScale(110),
            height: moderateScale(96),
            alignSelf: 'center',
            borderRadius: 20,
            alignItems: 'flex-end',
          }}>
          <View
            style={{
              height: moderateScale(22),
              width: moderateScale(22),
              borderRadius: 50,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#22A275',
              marginRight: 5,
              marginTop: 5,
            }}>
            <Text
              style={{
                fontSize: Theme.fontSizes.medium,
                color: Theme.colors.whiteColor,
              //   fontWeight: '400',
              }}>
              2
            </Text>
          </View>
        </ImageBackground>
        <View
          style={{
            height: '80%',
            width: '55%',
            //  backgroundColor:'#565',
            flexDirection: 'row',
          }}>
          <View
            style={{
              height: '100%',
              width: '85%',
              //  backgroundColor:'#575',
              justifyContent: 'space-evenly',
            }}>
            <Text
              style={{
                fontSize:18,
                color:'black',
                fontFamily:'Montserrat-Bold'
              }}>
              Electric Scooter
            </Text>
            <Text
              style={{
                  fontSize:12,
                  color:'black',
                  fontFamily:'Montserrat-Regular'
              }}>
              12-10-2022
            </Text>
            <Text
              style={{
                  fontSize:18,
                  color:'black',
                  fontFamily:'Montserrat-Medium'
              }}>
              290€
            </Text>
          </View>
          <View
            style={{
              height: '100%',
              width: '20%',
              // backgroundColor: '#375',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity>
              <Image source={require('../../assets/Images/option.png')} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View
        style={{
          width: '90%',
          alignSelf: 'center',
          marginVertical:15,
          height: moderateScale(129),
          backgroundColor: 'white',
          elevation: 5,
          borderRadius: 5,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}>
        <ImageBackground
          source={require('../../assets/Images/bike.png')}
          style={{
            width: moderateScale(110),
            height: moderateScale(96),
            alignSelf: 'center',
            borderRadius: 20,
            alignItems: 'flex-end',
          }}>
          <View
            style={{
              height: moderateScale(22),
              width: moderateScale(22),
              borderRadius: 50,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#22A275',
              marginRight: 5,
              marginTop: 5,
            }}>
            <Text
              style={{
                fontSize: Theme.fontSizes.medium,
                color: Theme.colors.whiteColor,
              //   fontWeight: '400',
              }}>
              2
            </Text>
          </View>
        </ImageBackground>
        <View
          style={{
            height: '80%',
            width: '55%',
            //  backgroundColor:'#565',
            flexDirection: 'row',
          }}>
          <View
            style={{
              height: '100%',
              width: '85%',
              //  backgroundColor:'#575',
              justifyContent: 'space-evenly',
            }}>
            <Text
              style={{
                fontSize:18,
                color:'black',
                fontFamily:'Montserrat-Bold'
              }}>
              Electric Scooter
            </Text>
            <Text
              style={{
                  fontSize:12,
                  color:'black',
                  fontFamily:'Montserrat-Regular'
              }}>
              12-10-2022
            </Text>
            <Text
              style={{
                  fontSize:18,
                  color:'black',
                  fontFamily:'Montserrat-Medium'
              }}>
              290€
            </Text>
          </View>
          <View
            style={{
              height: '100%',
              width: '20%',
              // backgroundColor: '#375',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity>
              <Image source={require('../../assets/Images/option.png')} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      
    </View>
    </ScrollView>
    <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          // Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
                <View style={{width:'90%', alignSelf:'flex-start' ,height:40, flexDirection:'row', marginTop:'3%',justifyContent:'flex-start', alignItems:'center', marginLeft:'10%'}}>
                  <TouchableOpacity style={{flexDirection:'row'}} onPress={()=> navigation.navigate('BootOnboarding')}>
                  <Image 
                  style={{width:25, height:25}}
                  source={require('../../assets/Images/rocket.png')}
                  />
                  
                  <Text style={{fontSize:16, fontFamily:'Montserrat-Medium', color:'#22A275', left:5}}>Boost</Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity style={{flexDirection:'row'}} onPress={() => navigation.navigate("InsertArticle")}>
                <View style={{width:'90%', alignSelf:'flex-start' ,height:40, flexDirection:'row', marginTop:'3%',justifyContent:'flex-start', alignItems:'center', marginLeft:'10%'}}>
                  <Image 
                  style={{width:23, height:23}}
                  source={require('../../assets/Images/edit2.png')}
                  />

                  <Text style={{fontSize:16, fontFamily:'Montserrat-Medium', color:'black', left:7}}>Edit</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection:'row'}}>
                <View style={{width:'90%', alignSelf:'flex-start' ,height:40, flexDirection:'row', marginTop:'3%',justifyContent:'flex-start', alignItems:'center', marginLeft:'10%'}}>
                  <Image 
                  style={{width:20, height:20}}
                  source={require('../../assets/Images/pause.png')}
                  />
                  <Text style={{fontSize:16, fontFamily:'Montserrat-Medium', color:'black', left:8}}>Pause</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection:'row'}}>
                <View style={{width:'90%', alignSelf:'flex-start' ,height:40, flexDirection:'row', marginTop:'3%',justifyContent:'flex-start', alignItems:'center', marginLeft:'10%'}}>
                  <Image 
                  style={{width:15, height:15}}
                  source={require('../../assets/Images/delete.png')}
                  />
                  <Text style={{fontSize:16, fontFamily:'Montserrat-Medium', color:'black', left:11}}>Delete</Text>
                </View>
                </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    // marginTop: 22
  },
  modalView: {
    // margin: 20,
    backgroundColor: "white",
    // borderRadius: 20,
    // padding: 35,
    marginTop:"40%",
    height:180,
    marginLeft:"60%",
    width:120,
    elevation: 5,
    borderRadius:10
  },
});
export default ListedArticle;
