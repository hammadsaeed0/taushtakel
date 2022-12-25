import AsyncStorage from '@react-native-async-storage/async-storage';
import {httpRequest, url} from '../../config';
import {types} from '../actiontypes';
import {postData,getPublicData} from './actionMethod';

export const registerAction = (data, callback) => dispatch => {
  postData(dispatch, url.register, data, null, types.REGISTER, null, callback);
};

export const loginAction = (data, callback) => async dispatch => {
  postData(
    dispatch,
    url.login,
    data,
    null,
    types.LOGIN,
    null,
    callback,
  );
};

export const GetAllInterests = (callback) => async dispatch => {
    getPublicData(
      dispatch,
      url.allInterests,
      types.GET_ALL_INTERESTS,
      null,
      callback,
    );
  };
//   export const updateLatLongAction = (data, callback) => async dispatch => {
//     postData(
//       dispatch,
//       url.updateLat,
//       data,
//       null,
//       types.UPDATE_LAT_LONG,
//       null,
//       callback,
//     );
//   };
 
// export const logout = callback => async dispatch => {
//   dispatch({type: types.LOGOUT.success});
//   callback && callback();
// };
