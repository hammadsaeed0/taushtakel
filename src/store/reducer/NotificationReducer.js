import {types} from '../actiontypes';
const initialState = {
  myNotifications: [],
  create:[],
  isLoading: false,
};

export const notificationReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case types.CREATE_NOTIFICATION.start || types.CREATE_NOTIFICATION.failed :
      return {...state, isLoading: true};
      case types.CREATE_NOTIFICATION.success:
        return {...state,isLoading:false,create:payload}
    case types.GET_NOTIFICATIONS.success:
      return {...state, isLoading: false, myNotifications: payload};
    case types.GET_NOTIFICATIONS.start:
      return {...state, isLoading: true};
    case types.GET_NOTIFICATIONS.failed:
      return {...state, isLoading: false};
    default:
      return state;
  }
};
