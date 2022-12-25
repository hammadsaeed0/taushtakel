import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity , Image , TextInput , StyleSheet  } from 'react-native'
import { Dropdown } from 'react-native-element-dropdown';
import {moderateScale} from '../../assets/Theme/Dimensions';


const InsertArticle = ({navigation}) => {
  const [value, setValue] = useState(null);

    const renderItem = (item) => {
      return (
        <View style={styles.item}>
          <Text style={styles.textItem}>{item.label}</Text>
        </View>
      );
    };
    const countries = ["Egypt", "Canada", "Australia", "Ireland"]
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
  
  return (
    <View style={{backgroundColor:'#fff'}}>
      <ScrollView contentContainerStyle={{flexGrow:1}}>
    <View style={{flex:1, backgroundColor:'white' ,alignItems: 'center'}}>
      <View
        style={{
          width: '90%',
          height: moderateScale(42),
          justifyContent: 'space-between',
          marginTop: '5%',
          flexDirection: 'row',
          // backgroundColor: '#898',
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
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
            New Articles
          </Text>
        </View>
        <View
          style={{width: moderateScale(42), height: moderateScale(42)}}></View>
      </View>
        {/* --------------------------------------------------- */}
        
       <View style={{width:'90%' , height:'30%', justifyContent:'center', alignItems:'center' }}>
            <Image
            resizeMode='contain'
            style={{width:'100%', height:262}}
            source={require('../../assets/Images/newArticle.png')}
            />
       </View>
       <View style={{width:'100%', height:'10%'}}>
           <Text style={{fontSize:20 , color:'#6f6f6f', fontFamily:'Montserrat-Regular', alignSelf:'center'}}>Upload Photos</Text>
           <Text style={{fontSize:13 , color:'#acabad', fontFamily:'Montserrat-Regular', alignSelf:'center'}}>Max 5 photos can be inserted</Text>
       </View>
       <View style={{width:'90%', alignSelf:'center'}}>
        <TextInput
        placeholder="Product Name"
        placeholderTextColor="#acacac"
        style={{height: 50,margin: 12,borderWidth: 1,padding: 10, borderRadius:10, borderColor:'#acabad'}}
      />
      <Text style={{alignSelf:'flex-end' , fontFamily:'Montserrat-Regular', paddingRight:15, fontSize:14, color:'#acabad',     lineHeight: 15,
        }}>Upto 20 letters</Text>
        <TextInput
        placeholder="Description"
        placeholderTextColor="#acacac"
        multiline={true}
        style={{textAlignVertical: "top" , height: 150,margin: 12,borderWidth: 1,padding:10, borderRadius:10, borderColor:'#acabad'}}
      />
      <TextInput
        placeholder="Zip Code"
        placeholderTextColor="#acacac"
        style={{height: 50,margin: 12,borderWidth: 1,padding: 10, borderRadius:10, borderColor:'#acabad'}}
      />
      <TextInput
        placeholder="Asking Price"
        placeholderTextColor="#acacac"
        style={{height: 50,margin: 12,borderWidth: 1,padding: 10, borderRadius:10, borderColor:'#acabad'}}
      />

<Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        // inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        // search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Category"
        // searchPlaceholder="Search..."
        value={value}
        onChange={item => {
          setValue(item.value);
        }}
        // renderLeftIcon={() => (
        //   // <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
        // )}
        renderItem={renderItem}
      />
      {/* <View style={{height:50}}></View> */}
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        // inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        // search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Condition"
        // searchPlaceholder="Search..."
        value={value}
        onChange={item => {
          setValue(item.value);
        }}
        // renderLeftIcon={() => (
        //   // <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
        // )}
        renderItem={renderItem}
      />
      <View style={{height:100}}></View>
    </View>

    </View>
    
    <TouchableOpacity style={{width:'85%', height:50, marginTop:"5%", marginBottom:15 , alignSelf:'center' , borderRadius:5, backgroundColor:'#20AC73', justifyContent:'center', alignItems:'center', elevation:5}}
      onPress={() => navigation.goBack()}
      >
        <Text style={{color:'#ffffff', fontFamily:'MazzardH-Bold', fontWeight:'800', fontSize:18}}>Post Article</Text>
      </TouchableOpacity>
    </ScrollView>

    </View>
  )
}

export default InsertArticle

const styles = StyleSheet.create({
  dropdown: {
    margin: 12,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 10,
    borderColor:'#acabad',
    padding: 10,
    borderWidth:1
  },
  icon: {
    marginRight: 5,
  },
  item: {
    padding: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textItem: {
    flex: 1,
    fontSize: 16,
  },
  placeholderStyle: {
    fontSize: 16,
    color:'#acabad'
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});