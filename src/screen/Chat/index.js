import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Entypo';
import Theme from '../../assets/Theme/Theme';
import { Dropdown } from 'react-native-element-dropdown';
import React, {useState, useEffect, useCallback} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Bubble, GiftedChat, Send} from 'react-native-gifted-chat';




const Chat = ({navigation}) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ])
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])

  const renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: '#20AC73',
          },
          left: {
            // backgroundColor: '#20AC73',

          }
        }}
        textStyle={{
          right: {
            color: '#fff',
          },
        }}
      />
    );
  };

  const renderSend = (props) => {
    return (
      <Send {...props}>
        <View>
          <MaterialCommunityIcons
            name="send-circle"
            style={{marginBottom: 5, marginRight: 5}}
            size={32}
            color="#20AC73"
          />
        </View>
      </Send>
    );
  };
  return (
    <View style={{backgroundColor:"white" , flex:1}}>
        <View style={{width:"90%", height:'15%', alignSelf:'center', flexDirection:'row'}}>
              <View style={{width:'20%', height:'100%', alignItems:'flex-start', justifyContent:'center'}}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                      <Image 
                      style={{height:42, width:42}}
                      source={require('../../assets/Images/back.png')}
                      />
                    </TouchableOpacity>
              </View>
              <View style={{width:'60%', height:'100%', flexDirection:'row'}}>
                    <View style={{width:'30%', height:'100%', justifyContent:'center', alignItems:'center'}}>
                    <Image 
                      style={{height:47, width:47}}
                      source={require('../../assets/Images/dp.png')}
                      />
                    </View>
                    <View style={{width:'70%', height:'100%'}}>
                          <View style={{width:"100%", height:'50%', justifyContent:'flex-end'}}>
                                <Text style={{fontSize:16, color:'black', fontFamily:'Montserrat-Medium'}}>Hammad Saeed</Text>
                          </View>
                          <View style={{width:"80%",height:'25%', flexDirection:'row', alignItems:'center'}}>
                               <View style={{height:'100%',width:"15%",alignItems:"center",justifyContent:"center"}}><View style={{backgroundColor:"#20AC73",height:8,width:8,borderRadius:5}}/></View> 
                                <Text style={{fontSize:12, color:'#20AC73', fontFamily:'Montserrat-Medium',marginRight:"50%",width:"90%"}}>Online</Text>
                          </View>
                    </View>

              </View>
              <View style={{width:'20%', height:'100%', alignItems:'flex-end', justifyContent:'center'}}>
                   <TouchableOpacity style={{width:48, height:48, borderColor:'#acacac', borderWidth:1, borderRadius:10, justifyContent:'center', alignItems:'center'}}>
                   <Icon name="dots-three-vertical" size={20} color="black" />
                    </TouchableOpacity>
              </View>
        </View>
        <View style={{width:'100%', height:'85%'}}>
        <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
      renderSend={renderSend}
      renderBubble={renderBubble}
      alwaysShowSend
    />
     {/* <View style={{height:100}}></View> */}
        </View>
       
    </View>
  );
};

export default Chat;
