import { View, Text, ScrollView, ImageBackground, Image, Dimensions, Touchable, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/dist/Feather';
const { height, width } = Dimensions.get('screen')
import InsertModal from '../../components/modal/InsertModal'
import React, { useState } from 'react'
import ArticleModal from '../../components/modal/ArticleModal';
import AsyncStorage from '@react-native-async-storage/async-storage';
const index = ({ navigation }) => {
  // const [exitVisible, setexitVisible] = useState(false)
  const [showGuide, setShowGuide] = useState(false);
  async function fetchData() {
    console.log('movinf-----');
    const appData = await AsyncStorage.getItem('isAppFirstLaunched');
    if (appData == null) {
      setShowGuide(true);
      AsyncStorage.setItem('isAppFirstLaunched', 'false');
      navigation.navigate('InsertArticle');
    }
    
  }

  React.useEffect(() => {
    fetchData();
  }, []);
  return (
<>
<ArticleModal buttonPress={()=> navigation.navigate('InsertArticle')} isVisible={showGuide} closeModal={()=> setShowGuide(false)} onPress={()=> setShowGuide(false)}/>
    <ScrollView showsVerticalScrollIndicator={false} snapToInterval={height / 100 * 100} snapToAlignment={'start'} decelerationRate={'fast'} style={{ height: height / 100 * 100 }}>
     
      <View style={{ width: width, height: height / 100 * 94, alignItems: 'flex-start', justifyContent: 'flex-start' }}>
        <ImageBackground source={require('../../assets/Images/bikedp.png')} style={{ width: '100%', height: height/100*94 }}>
          <View style={{ width: '100%', height: '20%', backgroundColor: 'rgba(0,0,0,0.5)', bottom: 0, position: 'absolute', justifyContent: 'flex-start', alignItems: 'center' }}>
            <Text style={{ fontFamily: 'MazzardH-Bold', fontSize: 32, color: '#93BF1E' }}>Electric Scooter</Text>
            <Text style={{ fontFamily: 'MazzardH-Bold', fontSize: 16, color: 'white', lineHeight: 15 }}>Electric Scooter</Text>
          </View>


          <View style={{ width: '30%', height: '15%', alignItems: 'center', justifyContent: 'flex-end'}}>
            <View style={{ width: "70%", height: 40, borderRadius: 10, backgroundColor: 'rgba(255,255,255,0.5)', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
              <Icon name="info" size={20} color="white" />
              <Text style={{ marginLeft: 5, color: 'white', fontFamily: 'MazzardH-Bold' }}>22KM</Text>
            </View>
            <View style={{ width: "60%", height: 44, marginTop: 3, justifyContent: 'center', alignItems: 'center' }}>
              <TouchableOpacity onPress={() => navigation.navigate('ArticleInformation')}><Icon name="info" size={30} color="white" /></TouchableOpacity>
            </View>
          </View>
          <View style={{ width: '100%', height: '45%', justifyContent: 'flex-end', alignItems: 'center' }}>
            <View style={{ width: 103, height: 103, borderRadius: 100, backgroundColor: 'rgba(225,225,225,0.3)', justifyContent: 'center', alignItems: 'center' }}>
              <Image
                style={{ width: 69, height: 52 }}
                source={require('../../assets/Images/handshak.png')}
              />
            </View>
          </View>
          <View style={{ width: '100%', height: "20%", alignItems: 'flex-end' }}>
            <TouchableOpacity onPress={() => setexitVisible(!exitVisible)}>
              {/* <Image 
                                          source={require('../../Preischild.png')}
                                          />
                                          <Text>Hi</Text> */}
              <ImageBackground
                style={{ height: '100%', width: '100%', backgroundColor: 'red' }}
                source={require('../../Preischild.png')}
              />
            </TouchableOpacity>

          </View>

        </ImageBackground>
        {/* <ImageBackground source={require('../../assets/Images/bikedp.png')} resizeMode="contain" style={{width:'100%', height:'100%'}}>
                      <View style={{width:'100%', height:'20%', backgroundColor: 'rgba(0,0,0,0.5)', bottom:0 , position:'absolute', justifyContent:'flex-start', alignItems:'center'}}>
                                  <Text style={{ fontFamily:'MazzardH-Bold', fontSize:32, color:'#93BF1E'}}>Electric Scooter</Text>
                                  <Text style={{ fontFamily:'MazzardH-Bold', fontSize:16, color:'white' , lineHeight:15}}>Electric Scooter</Text>
                      </View>


                                  <View style={{width:'30%', height:'25%', alignItems:'center', justifyContent:'flex-end'}}>
                                    <View style={{width:"70%", height:40, borderRadius:10, backgroundColor: 'rgba(255,255,255,0.5)', justifyContent:'center', alignItems:'center', flexDirection:'row'}}>
                                    <Icon name="info" size={20} color="white" />
                                    <Text style={{marginLeft:5, color:'white', fontFamily:'MazzardH-Bold'}}>22KM</Text>
                                    </View>
                                    <View style={{width:"60%", height:44, marginTop:3, justifyContent:'center', alignItems:'center'}}>
                                    <Icon name="info" size={30} color="white" />
                                    </View>
                                  </View>
                                  <View style={{width:'100%', height:'45%',justifyContent:'flex-end', alignItems:'center'}}>
                                        <View style={{width:103, height:103, borderRadius:100, backgroundColor: 'rgba(225,225,225,0.3)', justifyContent:'center', alignItems:'center'}}>
                                          <Image 
                                          style={{width:69, height:52}}
                                          source={require('../../assets/Images/handshak.png')}
                                          />
                                        </View>
                                  </View>
                                  <View style={{width:'100%', height:"20%",alignItems:'flex-end'}}>
                                          <Image 
                                          source={require('../../Preischild.png')}
                                          />
                                  </View>

                      </ImageBackground> */}
      </View>
      <View style={{ width: width, height: height / 100 * 100, alignItems: 'flex-start', justifyContent: 'flex-start' }}>
        <ImageBackground source={require('../../assets/Images/bikedp.png')} style={{ width: '100%', height: height/100*100 }}>
          <View style={{ width: '100%', height: '20%', backgroundColor: 'rgba(0,0,0,0.5)', bottom: 0, position: 'absolute', justifyContent: 'flex-start', alignItems: 'center' }}>
            <Text style={{ fontFamily: 'MazzardH-Bold', fontSize: 32, color: '#93BF1E' }}>Electric Scooter</Text>
            <Text style={{ fontFamily: 'MazzardH-Bold', fontSize: 16, color: 'white', lineHeight: 15 }}>Electric Scooter</Text>
          </View>


          <View style={{ width: '30%', height: '20%', alignItems: 'center', justifyContent: 'flex-end' }}>
            <View style={{ width: "70%", height: 40, borderRadius: 10, backgroundColor: 'rgba(255,255,255,0.5)', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
              <Icon name="info" size={20} color="white" />
              <Text style={{ marginLeft: 5, color: 'white', fontFamily: 'MazzardH-Bold' }}>22KM</Text>
            </View>
            <View style={{ width: "60%", height: 44, marginTop: 3, justifyContent: 'center', alignItems: 'center' }}>
              <TouchableOpacity onPress={() => setexitVisible(!exitVisible)}><Icon name="info" size={30} color="white" /></TouchableOpacity>
            </View>
          </View>
          <View style={{ width: '100%', height: '45%', justifyContent: 'flex-end', alignItems: 'center' }}>
            <View style={{ width: 103, height: 103, borderRadius: 100, backgroundColor: 'rgba(225,225,225,0.3)', justifyContent: 'center', alignItems: 'center' }}>
              <Image
                style={{ width: 69, height: 52 }}
                source={require('../../assets/Images/handshak.png')}
              />
            </View>
          </View>
          <View style={{ width: '100%', height: "20%", alignItems: 'flex-end' }}>
            <TouchableOpacity onPress={() => setexitVisible(!exitVisible)}>
              {/* <Image 
                                          source={require('../../Preischild.png')}
                                          />
                                          <Text>Hi</Text> */}
              <ImageBackground
                style={{ height: '100%', width: '100%', backgroundColor: 'red' }}
                source={require('../../Preischild.png')}
              />
            </TouchableOpacity>

          </View>

        </ImageBackground>
        {/* <ImageBackground source={require('../../assets/Images/bikedp.png')} resizeMode="contain" style={{width:'100%', height:'100%'}}>
                      <View style={{width:'100%', height:'20%', backgroundColor: 'rgba(0,0,0,0.5)', bottom:0 , position:'absolute', justifyContent:'flex-start', alignItems:'center'}}>
                                  <Text style={{ fontFamily:'MazzardH-Bold', fontSize:32, color:'#93BF1E'}}>Electric Scooter</Text>
                                  <Text style={{ fontFamily:'MazzardH-Bold', fontSize:16, color:'white' , lineHeight:15}}>Electric Scooter</Text>
                      </View>


                                  <View style={{width:'30%', height:'25%', alignItems:'center', justifyContent:'flex-end'}}>
                                    <View style={{width:"70%", height:40, borderRadius:10, backgroundColor: 'rgba(255,255,255,0.5)', justifyContent:'center', alignItems:'center', flexDirection:'row'}}>
                                    <Icon name="info" size={20} color="white" />
                                    <Text style={{marginLeft:5, color:'white', fontFamily:'MazzardH-Bold'}}>22KM</Text>
                                    </View>
                                    <View style={{width:"60%", height:44, marginTop:3, justifyContent:'center', alignItems:'center'}}>
                                    <Icon name="info" size={30} color="white" />
                                    </View>
                                  </View>
                                  <View style={{width:'100%', height:'45%',justifyContent:'flex-end', alignItems:'center'}}>
                                        <View style={{width:103, height:103, borderRadius:100, backgroundColor: 'rgba(225,225,225,0.3)', justifyContent:'center', alignItems:'center'}}>
                                          <Image 
                                          style={{width:69, height:52}}
                                          source={require('../../assets/Images/handshak.png')}
                                          />
                                        </View>
                                  </View>
                                  <View style={{width:'100%', height:"20%",alignItems:'flex-end'}}>
                                          <Image 
                                          source={require('../../Preischild.png')}
                                          />
                                  </View>

                      </ImageBackground> */}
      </View>
      <View style={{ width: width, height: height / 100 * 95, alignItems: 'flex-start', justifyContent: 'flex-start' }}>
        <ImageBackground source={require('../../assets/Images/bikedp.png')} style={{ width: '100%', height: height/100*95 }}>
          <View style={{ width: '100%', height: '20%', backgroundColor: 'rgba(0,0,0,0.5)', bottom: 0, position: 'absolute', justifyContent: 'flex-start', alignItems: 'center' }}>
            <Text style={{ fontFamily: 'MazzardH-Bold', fontSize: 32, color: '#93BF1E' }}>Electric Scooter</Text>
            <Text style={{ fontFamily: 'MazzardH-Bold', fontSize: 16, color: 'white', lineHeight: 15 }}>Electric Scooter</Text>
          </View>


          <View style={{ width: '30%', height: '15%', alignItems: 'center', justifyContent: 'flex-end' }}>
            <View style={{ width: "70%", height: 40, borderRadius: 10, backgroundColor: 'rgba(255,255,255,0.5)', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
              <Icon name="info" size={20} color="white" />
              <Text style={{ marginLeft: 5, color: 'white', fontFamily: 'MazzardH-Bold' }}>22KM</Text>
            </View>
            <View style={{ width: "60%", height: 44, marginTop: 3, justifyContent: 'center', alignItems: 'center' }}>
              <TouchableOpacity onPress={() => setexitVisible(!exitVisible)}><Icon name="info" size={30} color="white" /></TouchableOpacity>
            </View>
          </View>
          <View style={{ width: '100%', height: '45%', justifyContent: 'flex-end', alignItems: 'center' }}>
            <View style={{ width: 103, height: 103, borderRadius: 100, backgroundColor: 'rgba(225,225,225,0.3)', justifyContent: 'center', alignItems: 'center' }}>
              <Image
                style={{ width: 69, height: 52 }}
                source={require('../../assets/Images/handshak.png')}
              />
            </View>
          </View>
          <View style={{ width: '100%', height: "20%", alignItems: 'flex-end' }}>
            <TouchableOpacity onPress={() => setexitVisible(!exitVisible)}>
              {/* <Image 
                                          source={require('../../Preischild.png')}
                                          />
                                          <Text>Hi</Text> */}
              <ImageBackground
                style={{ height: '100%', width: '100%', backgroundColor: 'red' }}
                source={require('../../Preischild.png')}
              />
            </TouchableOpacity>

          </View>

        </ImageBackground>
        {/* <ImageBackground source={require('../../assets/Images/bikedp.png')} resizeMode="contain" style={{width:'100%', height:'100%'}}>
                      <View style={{width:'100%', height:'20%', backgroundColor: 'rgba(0,0,0,0.5)', bottom:0 , position:'absolute', justifyContent:'flex-start', alignItems:'center'}}>
                                  <Text style={{ fontFamily:'MazzardH-Bold', fontSize:32, color:'#93BF1E'}}>Electric Scooter</Text>
                                  <Text style={{ fontFamily:'MazzardH-Bold', fontSize:16, color:'white' , lineHeight:15}}>Electric Scooter</Text>
                      </View>


                                  <View style={{width:'30%', height:'25%', alignItems:'center', justifyContent:'flex-end'}}>
                                    <View style={{width:"70%", height:40, borderRadius:10, backgroundColor: 'rgba(255,255,255,0.5)', justifyContent:'center', alignItems:'center', flexDirection:'row'}}>
                                    <Icon name="info" size={20} color="white" />
                                    <Text style={{marginLeft:5, color:'white', fontFamily:'MazzardH-Bold'}}>22KM</Text>
                                    </View>
                                    <View style={{width:"60%", height:44, marginTop:3, justifyContent:'center', alignItems:'center'}}>
                                    <Icon name="info" size={30} color="white" />
                                    </View>
                                  </View>
                                  <View style={{width:'100%', height:'45%',justifyContent:'flex-end', alignItems:'center'}}>
                                        <View style={{width:103, height:103, borderRadius:100, backgroundColor: 'rgba(225,225,225,0.3)', justifyContent:'center', alignItems:'center'}}>
                                          <Image 
                                          style={{width:69, height:52}}
                                          source={require('../../assets/Images/handshak.png')}
                                          />
                                        </View>
                                  </View>
                                  <View style={{width:'100%', height:"20%",alignItems:'flex-end'}}>
                                          <Image 
                                          source={require('../../Preischild.png')}
                                          />
                                  </View>

                      </ImageBackground> */}
      </View>
    </ScrollView>
    </>
  )
}

export default index