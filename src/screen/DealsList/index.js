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
  import React from 'react';
  import {moderateScale} from '../../assets/Theme/Dimensions';
  
  
  
  const ListedDeals = ({navigation}) => {
    return (
      <View>
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
          <TouchableOpacity onPress={() => navigation.navigate('Selection')}>
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
            height: moderateScale(129),
            backgroundColor: 'white',
            elevation: 8,
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
            marginTop: 30,
            height: moderateScale(129),
            backgroundColor: 'white',
            elevation: 8,
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
            marginTop: 30,
            height: moderateScale(129),
            backgroundColor: 'white',
            elevation: 8,
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
            marginTop: 30,
            height: moderateScale(129),
            backgroundColor: 'white',
            elevation: 8,
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
      </View>
    );
  };
  
  export default ListedDeals;
  