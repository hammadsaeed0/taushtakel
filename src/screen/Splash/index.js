import { View, Text , Button , Image,} from 'react-native'
import React , {useEffect,useState } from 'react'
import { NetCheck } from '../../components/modal/Netinfo';
import NetInfo from '@react-native-community/netinfo';
import { useSelector } from 'react-redux';
const SplashScreen = ({navigation}) => {
  const [netInfo, setNetinfo] = useState('');
  const AuthSelector = useSelector(state => state.auth?.userData);
  // useEffect(() => {
  //   setTimeout(() => {
  //     navigation.replace('OnBorading');
  //   }, 3000);
  // }, []);
  useEffect(() => {
    const data = NetInfo.addEventListener(state => {
      setNetinfo(state);
    });
    return () => {
      data();
    };
  }, []);

  if (netInfo.isConnected === true) {
    // if (AuthSelector?.user?.uid) {
    //   setTimeout(() => {
    //     navigation.replace('drawer');
    //   }, 3000);
    // } else {
      setTimeout(() => {
        navigation.replace('OnBorading');
      }, 3000);
    // }
  } else {
    null;
  }
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          {netInfo.isConnected === false ? <NetCheck /> : null}
        <Image style={{ width:249 , height:179 }}
        source={require('../../assets/Images/ExtraLange.png')}
      />
      </View>
      );
}

export default SplashScreen;