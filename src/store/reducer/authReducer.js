import {types} from '../actiontypes';

const inititalState = {
  isLoading: false,
  userAccessKey: {},
  userData: {},
  profileData: {},
  latlong:{},
  allinterests:{},
};
export const authReducer = (state = inititalState, {type, payload}) => {
  switch (type) {
    // REGISTER
    case types.REGISTER.start:
      return {...state, isLoading: true};
    case types.REGISTER.failed:
      return {...state, isLoading: false};
    case types.REGISTER.success:
      return {...state, isLoading: false, userAccessKey: payload};

    // LOGIN
    case types.LOGIN.start:
      return {...state, isLoading: true};
    case types.LOGIN.failed:
      return {...state, isLoading: false};
    case types.LOGIN.success:
      return {...state, isLoading: false, userData: payload};

    //   UPDATE PROFILE
    case types.GET_ALL_INTERESTS.start:
      return {...state, isLoading: true};
    case types.GET_ALL_INTERESTS.failed:
      return {...state, isLoading: false};
    case types.GET_ALL_INTERESTS.success:
      return {...state, isLoading: false, allinterests: payload};

    //   UPDATE LATITUDE AND LONGITUDE
    case types.UPDATE_LAT_LONG.start:
      return {...state, isLoading: true};
    case types.UPDATE_LAT_LONG.failed:
      return {...state, isLoading: false};
    case types.UPDATE_LAT_LONG.success:
      return {...state, isLoading: false, latlong: payload};

    default:
      return state;
  }
};
