import {httpRequest} from '../../config';
import {store} from '../index';
import Toast from 'react-native-toast-message';

export const getPublicData = async (
  dispatch,
  url,
  types,
  successMsg,
  callback,
) => {
  try {
    dispatch({type: types.start});
    let response = await httpRequest(url);
    response = response.data;
    //  console.log("RES-------", url, typeof response ,response)
    if (response.status && response.status === 'fail') {
      {
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: result.message,
          position: 'top',
        });
      }
    } else {
      dispatch({type: types.success, payload: response});
      callback && callback(response);
      // dispatch(setToast('success', response.message || successMsg));
    }
  } catch (error) {
    // console.log("Error: action  getPublicData from url",url, error)
    dispatch({type: types.failed});
    if (error.message.toLowerCase() === 'network error') {
      getPublicData(dispatch, url, types, successMsg, callback);
    } else {
      error.message && Toast.show({
        type: 'error',
        text1: 'oops!',
        text2: 'Something went wrong',
        position: 'top',
      });
    }
  }
};

export const postData = async (
  dispatch,
  url,
  data,
  header,
  types,
  successMsg,
  callback,
  successNotifyStatus = 'success',
) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    if (typeof url !== 'string') return alert(url.toString());
    dispatch({type: types.start});
    console.log('cccccccccccccccccccccccccc', data, url, config);



    const response = await httpRequest.post(url, data, config);


    
    const result = response.data;
    // let temp= data // the reason to save data in temp is because it becomes undefined once twe get the result

    console.log(
      'POST DATA.............................................',
      result,
    );
    if (result.error) throw result.error;
    if (result.result && result.result === 'Please enter correct password')
      throw result.result;
    if (result.status === 'fail') {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: result.message,
        position: 'top',
      });
    } else {
      // console.log('data',temp)

      // let data = url==='login'?{...result,username:temp.username }:result
      // alert(result.message)

      dispatch({type: types.success, payload: result.data});
      callback && callback(result.data);
      // Toast.show({
      //   type: 'success',
      //   text1: 'success',
      //   text2: result?.message,
      //   position: 'top',
      // });
    }
  } catch (error) {
    console.log(
      'Error from action  --------------------------------',
      url,
      types,
      error,
      // error.message,
      typeof error === 'string',
    );
    dispatch({type: types.failed});
    error.message ||
      (error &&
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: typeof error === 'string' ? error : error?.message,
          position: 'top',
        }));
  }
};
