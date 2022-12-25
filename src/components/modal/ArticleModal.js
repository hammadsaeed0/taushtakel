import {Icon} from '@rneui/themed';
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
// import Theme from '../../Theme/Theme';

const ArticleModal = props => {
  const {visible, onRequestClose, onPress, onYes,buttonPress} = props;
  return (
    <>
      <Modal
        animationType="fade"
        transparent={true}
        visible={visible}
        onRequestClose={onRequestClose}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View
              style={{
                height: '100%',
                width: '100%',
                backgroundColor: 'black',
                position: 'absolute',
                opacity:0.7
              }}
            />
            <View
              style={{
                height: 80,
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                // backgroundColor: Theme.colors.whiteColor,
                marginTop: '45%',
              }}>
              <Icon name="bell" type="fontisto" color={'white'} size={40} />
            </View>
            <Text
              style={{
                color: 'white',
                fontFamily: 'Montserrat-Medium',
                fontSize: 20,
                textAlign: 'center',
                paddingTop: '5%',
                paddingBottom: '15%',
              }}>
              You have not added{`\n`}any articles yet.{`\n`}To be able to swipe
              {`\n`} you must have at{`\n`} least 1 articles.
            </Text>
            <TouchableOpacity
            onPress={buttonPress}
              style={{
                width: '70%',
                height: 45,
                backgroundColor: '#20AC73',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 8,
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 16,
                  fontFamily: 'Montserrat-Medium',
                }}>
                Insert Articles
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 22
    backgroundColor: '#70707070',
  },
  modalView: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    // justifyContent:"center",
    //  backgroundColor: Theme.colors.blackColor,
    // opacity: 0.4,
  },
})
export default ArticleModal