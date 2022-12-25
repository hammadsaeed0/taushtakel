import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet, View, Image, TouchableOpacity, Pressable } from 'react-native';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Montserrat-SemiBold',
    color: 'black',
    fontSize: 18,
    marginTop: '15%',
    justifyContent: 'center',
    alignItems: 'center'

  },
  codeFieldRoot: { marginTop: 20 },
  cell: {
    width: 40,
    height: 50,
    margin: 10,
    lineHeight: 38,
    fontSize: 15,
    borderWidth: 2,
    borderColor: '#00000030',
    textAlign: 'center',
    color: '#20AC73'
  },
  focusCell: {
    borderColor: '#20AC73',
  },
});

const CELL_COUNT = 4;

const VerificationCode = ({navigation}) => {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ width: '100%', height: '10%', flexDirection: 'row' }}>
        <TouchableOpacity style={{ width: '20%', height: '100%', justifyContent: 'center', alignItems: 'center' }} onPress={()=> navigation.goBack()}>
          <Image
            style={{ height: 42, width: 42 }}
            source={require('../../assets/Images/back.png')}
          />
        </TouchableOpacity>
        <View style={{ width: '60%', height: '100%' }}>

        </View>
        {/* <View style={{width:'20%', height:'100%'}}></View> */}
      </View>
      <View style={{ width: '90%', alignSelf: 'center' }}>
        <Text style={styles.title}> Enter Verification Code</Text>
        <Text style={{ textAlign: 'justify', fontFamily: 'Montserrat-SemiBold', fontSize: 13, color: '#0000008C', marginTop: 10, marginLeft: 5, lineHeight: 20 }}>We have sent the code varification to you email{"\n"}address <Text style={{ color: '#20AC73' }}>admins@gamil.com</Text></Text>

      </View>
      <View style={{ width: "80%", alignSelf: 'center', justifyContent: 'center', alignItems: 'center' }}>
        <CodeField
          ref={ref}
          {...props}
          // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
          value={value}
          onChangeText={setValue}
          cellCount={CELL_COUNT}
          rootStyle={styles.codeFieldRoot}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={({ index, symbol, isFocused }) => (
            <Text
              key={index}
              style={[styles.cell, isFocused && styles.focusCell]}
              onLayout={getCellOnLayoutHandler(index)}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          )}
        />
        <Text style={{ fontFamily: 'Montserrat-SemiBold' }}>Did'nt recieved Code: <Text style={{ color: 'skyblue', textDecorationLine: 'underline' }}>Resend</Text></Text>
      </View>
      <Pressable onPress={()=> navigation.navigate('forgetPassword')} style={{ height: 50, width: '90%', backgroundColor: "#20AC73", borderRadius: 5, marginHorizontal: "5%", marginTop: 30, alignItems: "center", justifyContent: "center" ,elevation:5}}><Text style={{ fontSize: 18, fontFamily: "Montserrat-SemiBold", color: "white" }}>Verify</Text></Pressable>
    </View>
  );
};

export default VerificationCode;