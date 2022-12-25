import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  TouchableHighlight,
} from 'react-native';
// import {ICONS, COLORS, wp, IMAGES, hp} from '../../constant';
import {Icon} from '@rneui/themed';
// import Theme from '../../Theme/Theme';
export const NetCheck = props => {
  return (
    <View style={styles.toast}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'flex-end',
          paddingBottom: 5,
          height: 40,
          width: '100%',
          marginBottom: 10,
        }}>
        <Icon
          name="alert"
          type="foundation"
          size={24}
          color={'red'}
        />
        <Text
          style={{
            color: 'black',
            // fontFamily: Theme.fontFamily.semibold,
            fontSize: 17,
            paddingLeft: 10,
            paddingTop: 10,
          }}>
          No Internet
        </Text>
      </View>
      <Text style={styles.message}>Please Check your Internet Connection!</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  toast: {
    top: 20,
    height: 80,
    width: '95%',
    borderLeftColor: 'white',
    backgroundColor: 'white',
    borderRadius: 10,
    // backgroundColor: 'white',
    paddingHorizontal: '4%',
    position: 'absolute',
    marginTop: '10%',
    right: 10,
    zIndex: 2005,
    elevation: 2,
  },

  message: {
    textTransform: 'capitalize',
    // lineHeight: 18,
    // letterSpacing: 0.16,
    color: 'black',
    // fontFamily: Theme.fontFamily.semibold,
    fontSize: 15,
  },
});