import { View, Text, Pressable, Image } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Theme from '../assets/Theme/Theme';
import Setting from '../screen/Setting'
import Deal from '../screen/Deal'
import Chat from '../screen/ChatMenu';
import ListedArticle from '../screen/Listed Article';
// import ListedDeals from '../screen/DealsList';
import DealsOnbording from '../screen/DealsOnbording';
// import Articles from '../screen/Deal'
// import  Deal from '../screen/Deal'
import { moderateScale } from '../assets/Theme/Dimensions';

const Tab = createBottomTabNavigator();

const CustomButton = ({ children, onPress }) => (
  <Pressable
    style={{
      top: -30,
      height: 60,
      width: 60,
      borderRadius: 100,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      elevation: 5
    }}
    onPress={onPress}>
    <View
      style={{
        width: 50,
        height: 50,
        borderRadius: 35,
        // backgroundColor:'#e2b4bd'
      }}>
      {children}
    </View>
  </Pressable>
);
const BottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: Theme.colors.whiteColor,
          position: 'absolute',
          // height
          // bottom: 10,
          // left: 10,
          // right: 10,
          // elevation: 5,
          // borderRadius: 15,
          height: 60,
        },
      }}>
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Image
                style={{ height: 21, width: 21, resizeMode: 'contain' }}
                source={require('../assets/Images/setting.png')}
              />
              <Text style={{
                fontSize: 12,
                fontWeight: '400',
                color: '#00000'
              }}>Setting</Text>
            </View>
          ),
        }}

      />
      <Tab.Screen
        name="Deals"
        component={DealsOnbording}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Image
                style={{ height: 28, width: 28, resizeMode: 'contain' }}
                source={require('../assets/Images/1.jpeg')}
              />
              <Text style={{
                fontSize: 12,
                fontWeight: '400',
                color: '#00000094'
              }}>Deals</Text>
            </View>
          ),
        }}

      />
      <Tab.Screen
        name="Home"
        component={Deal}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Image
                style={{ height: 50, width: 50, resizeMode: 'contain' }}
                source={require('../assets/Images/logo.png')}
              />
            </View>
          ),
          tabBarButton: props => <CustomButton {...props} />,
        }}
      />
      <Tab.Screen
        name="Articles"
        component={ListedArticle}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Image
                style={{ height: 21, width: 21, resizeMode: 'contain' }}
                source={require('../assets/Images/article.png')}
              />
              <Text style={{
                fontSize: 12,
                fontWeight: '400',
                color: '#00000094'
              }}>Articles</Text>
            </View>
          ),
        }}

      />
      <Tab.Screen
        name="Chats"
        component={Chat}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Image
                style={{ height: 21, width: 21, resizeMode: 'contain' }}
                source={require('../assets/Images/chat.png')}
              />
              <Text style={{
                fontSize: 12,
                fontWeight: '400',
                color: '#00000094'
              }}>Chats</Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;