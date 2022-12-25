import {moderateScale} from './Dimensions';
import {Platform} from 'react-native';

export default Theme = {
  colors: {
    primaryColor: '#cb0003',
    secondaryColor: '#221f1f',
    bluePColor: '#094994',
    yellowPColor: '#F5ED2F',
    // textColor: '#221f1f',
    whiteColor: '#fff',
    blackColor: '#070202',
    redColor: '#A72E31',
    lightRedColor: '#E84B27',
    grayColor: '#808080',
    lightGrayColor: '#F1F1F1',
    startGColor: '#FFF200',
    endGColor: '#FCBD17',
    backGroundColor: '#F8F0E3 ',
    btnColor:'#e2b4bd',
    inputColor:'#303030',
    offWhiteColor:'#F8F0E3',
    txtColor:'#424b54',
    txtColor2:'#A9A9A9',
    greenColor:'#7CFC00',
    bckColor:'#f8f8f8',
    iconColor:'#93A8AC',
    iconColor2:'#424B54'
    
  
  },
//   fontFamily: {
//     regular: 'Oxygen-Regular',
//     medium: 'Oxygen-Medium',
//     bold: 'Oxygen-Bold',
//     urdu: 'Jami Naseel Noortaleeq Kasheeda',
//   },
  fontSizes: {
    xxbig: moderateScale(34),
    xbig: moderateScale(26),
    big: moderateScale(24),
    xxmedium: moderateScale(19),
    xmedium: moderateScale(17),
    medium: moderateScale(18),
    small: moderateScale(14),
    verySmall: moderateScale(11),
    tinySmall: moderateScale(9),
  },
  
};