import { View, Text, Image, TouchableOpacity, ScrollView, FlatList,Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/dist/AntDesign';
import React,{useEffect, useState} from 'react';
import {GetAllInterests} from '../../store/actions'
const {height,width} = Dimensions.get('screen');
import { useSelector,useDispatch } from 'react-redux';
const Interest = ({ navigation }) => {
  const AllInterestsData = useSelector(state => state.auth.allinterests);
  console.log('all Intersets Data ------', AllInterestsData);
  const dispatch = useDispatch();
  useEffect(()=>{
dispatch(GetAllInterests())
  },[])
const [Data,setData]=useState([{ key: 1, value: "Vehicles", select: false }, { key: 2, value: "Services", select: false }, { key: 3, value: "Clothing", select: false }, { key: 4, value: "Jewelery", select: false }, { key: 5, value: "Sport", select: false }, { key: 6, value: "Tools", select: false }, { key: 7, value: "Household", select: false }, { key: 8, value: "Electronics", select: false }, { key: 10, value: "Books", select: false }, { key: 10, value: "Baby Items", select: false }, { key: 11, value: "Animal Items", select: false }, { key: 12, value: "Games", select: false }, { key: 13, value: "Animal Items", select: false }, { key: 14, value: "Other", select: false }])
  // const Data = ;

const handlecategoryColor = (val,index)=>{
  // console.log('====================================');
  // console.log(val,index);
  // console.log('====================================');
  let temp = Data.slice(0);
temp[index].select = val ===false ? true :false;
setData(temp)
// SVGMetadataElement(temp)
}
  return (
    <View style={{ flex: 1 ,backgroundColor:"white"}}>
      <View style={{ width: '100%', height: '20%', alignItems: 'center', justifyContent: 'center' }}>
        <Image style={{ width: 90, height: 90 }}
          source={require("../../assets/Images/logo.png")}
        />
      </View>
      <View style={{ width: '100%', alignItems: 'center' }}>
        <Text style={{ fontFamily: 'MazzardH-Bold', fontSize: 26, color: '#20AC73', marginBottom: 5 }}>Your Interests</Text>
      </View>
      <View style={{ width: '100%', alignItems: 'center' , marginBottom:20}}>
        <Text style={{ fontFamily: 'Montserrat-Medium', fontSize: 16, color: '#707070' }}>Choose atleast 2 categories from the</Text>
        <Text style={{ fontFamily: 'Montserrat-Medium', fontSize: 16, color: '#707070' }}>following lists</Text>
      </View>
      <FlatList data={Data} style={{width:width/100*90,alignSelf:'center'}} showsVerticalScrollIndicator={false} renderItem={(item) => {
        // console.log('====================================');
        // console.log(item);
        // console.log('====================================');
        return (
          <TouchableOpacity style={{ width: '48%', height: 45, flexDirection: 'row', borderColor:item.item.select === true ?'white': "#707070", borderWidth: 1, borderRadius: 9, 
          marginBottom:10,justifyContent: 'center', alignItems: 'center', backgroundColor:item.item.select===true ? "#22A275" : 'white' }} onPress={()=>handlecategoryColor(item.item.select,item.index)}>
            {/* <Text style={{fontFamily:'Montserrat-Medium', fontSize:14}}>Vehicles</Text> */}
            <View style={{ width: '70%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ fontFamily: 'Montserrat-Medium', fontSize: 14,color:item.item.select===true ? 'white':"#707070" }}>{item.item.value}</Text>
            </View>
            {item.item.select === true 
            ?  <View style={{ width: '30%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
              <Icon name="checkcircle" size={25} color="white" />
            </View>:null}
          
          </TouchableOpacity>
        )
      }}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
      />
      {/* <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{ width: "85%", alignSelf: 'center', flexDirection: 'row', justifyContent: 'space-around' }}>
          <TouchableOpacity style={{ width: 140, height: 45, flexDirection: 'row', borderColor: "#707070", borderWidth: 1, borderRadius: 15, justifyContent: 'center', alignItems: 'center' }}>
        
            <View style={{ width: '70%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ fontFamily: 'Montserrat-Medium', fontSize: 14 }}>Vehicles</Text>
            </View>
            <View style={{ width: '30%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
              <Icon name="checkcircle" size={25} color="#22A275" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{ width: 140, height: 45, borderColor: "#707070", borderWidth: 1, borderRadius: 15, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontFamily: 'Montserrat-Medium', fontSize: 14 }}>Vehicles</Text>
          </TouchableOpacity>
        </View>
      </ScrollView> */}
      <TouchableOpacity style={{ width: '85%', height: 50, marginTop: "15%", alignSelf: 'center', borderRadius: 5, backgroundColor: '#20AC73', justifyContent: 'center', alignItems: 'center', elevation: 5, marginBottom: 15 }} onPress={() => navigation.navigate('Notification')}>
        <Text style={{ color: '#ffffff', fontFamily: 'MazzardH-Bold', fontWeight: '800', fontSize: 18 }}>Start</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Interest