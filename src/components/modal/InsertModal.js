import Icon from 'react-native-vector-icons/dist/AntDesign';
import Icons from 'react-native-vector-icons/dist/FontAwesome';
import Icon1 from 'react-native-vector-icons/dist/EvilIcons';
import Icon2 from 'react-native-vector-icons/dist/Ionicons';
import React, {useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';
// import Theme from '../../../Theme/Theme';

const InsertModal = props => {
  const {visible, onRequestClose, onPress, onYes,iconPress} = props;
  return (
    <>
      <Modal
        animationType="fade"
        transparent={true}
        visible={visible}
        onRequestClose={onRequestClose}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={{width:'100%', height:'30%', alignItems:'center', justifyContent:'center'}}>
              {/* <TouchableOpacity onPress={() => setexitVisible(!exitVisible)}> */}
              <Icon name="checkcircle" size={50} color="#20AC73"/>
              {/* </TouchableOpacity> */}
              <Text style={{fontFamily:'Montserrat-Regular', fontSize:19, textAlign:'center', color:'black', marginTop:5}}>Congratulations you {'\n'}
                    have a deal with James.</Text>
            </View>
            <View style={{width:'60%', height:'20%', flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                  <Image
                  style={{width:72 , height:72 , borderRadius:100}}
                  source={require('../../assets/Images/dp.png')}
                   />
                  <Icons name="exchange" size={22} color="black"  />
                  <Image
                  style={{width:72 , height:72 , borderRadius:100}}
                  source={require('../../assets/Images/dp.png')}
                   />

            </View>
            <View style={{width:'100%', height:'15%'}}>
                  <View style={{width:'100%', height:'50%', flexDirection:'row' , alignItems:'center', justifyContent:'center'}}>
                  <Icon1 name="location" size={22} color="gray"  />
                  <Text style={{fontFamily:'Montserrat-Regular' , fontSize:17 , color:'black'}}>22 Km </Text>
                  </View>
                  <View style={{width:'100%', height:'50%',   flexDirection:'row' , alignItems:'center', justifyContent:'center'}}>
                  <Icon2 name="pricetag-outline" size={22} color="black"  />
                  <Text style={{fontFamily:'Montserrat-Regular' , fontSize:17 , color:'black'}}>20€ surcharge </Text>
                  </View>
                  {/* ----------------------------------- */}
                  <View style={{width:"70%", height:150 , alignSelf:'center'}}>
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
             {/* <View style={{width:'70%', height:'40%', backgroundColor:'red'}}></View> */}
             <TouchableOpacity style={{width:'70%', height:'35%', backgroundColor:'#20AC73', alignSelf:'center', borderRadius:10, justifyContent:'center', alignItems:'center'}}>
                  <Text style={{fontSize:18, color:'white', fontFamily:'Montserrat-SemiBold'}}>Contact</Text>
             </TouchableOpacity>

            </View>
             
            



            </View>
          
          
           
          </View>
          
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    width:'100%',
    height:'100%',
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 22
    backgroundColor: '#70707070',
  },
  modalView: {
    height: '60%',
    width: '80%',
    alignItems: 'center',
    // justifyContent:"center",
     backgroundColor: 'white',
     borderRadius: 10
    // opacity: 0.4,
  },
});

export default InsertModal;
