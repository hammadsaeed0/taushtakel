import {types} from '../actiontypes';
import {url} from '../../config';
import {authorizedRequestById,} from './actionMethod';
import { store } from '..';

export const getNotifcations = (callback) => dispatch => {
let storeData = store.getState().auth
  // alert("hi")
  // console.log(".....................................",storeData)
  let data ={
    userId:storeData.userAccessKey._id
  }
if(storeData.userAccessKey.trainer){
  data.trainerId=storeData.userAccessKey.trainer._id
}
  authorizedRequestById(
    dispatch,
    url.getnotification,
    data,
    'noid',
    types.GET_NOTIFICATIONS,
    null,
    callback,
  );
};

export const deleteNotifcations = (data, callback) => dispatch => {
  authorizedRequestById(
    dispatch,
    url.deleteNotification,
    data,
    'noid',
    types.DELETE_NOTIFICATIONS,
    null,
    callback,
  );
};

export const createNotifcations = (data, callback) => dispatch => {
  authorizedRequestById(
    dispatch,
    url.createNotification,
    data,
    'noid',
    types.CREATE_NOTIFICATION,
    null,
    callback,
  );
};

export const updateNotifcationStatus = (data, callback) => dispatch => {
  authorizedRequestById(
    dispatch,
    url.updateNotificationStatus,
    data,
    'noid',
    types.UPDATE_NOTIFICATION_STATUS,
    null,
    callback,
  );
};
