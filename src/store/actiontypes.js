const manageActionType = type => {
  return {
    start: type + '_Start',
    success: type + '_Success',
    failed: type + '_Failed',
  };
};

export const types = {
  // +++++++++ AUTH ACTION TYPES +++++++++++++ //
  REGISTER: manageActionType('REGISTER'),
  LOGIN: manageActionType('LOGIN'),
  UPDATE_PROFILE: manageActionType('UPDATE_PROFILE'),
  UPDATE_LAT_LONG: manageActionType('UPDATE_LAT_LONG'),
  // ++++++++++INTERESTS ACTION TYPES +++++++++++ //
GET_ALL_INTERESTS:manageActionType('GET_ALL_INTERESTS'),
  // +++++++++ NOTIFICATION ACTION TYPES ++++++++ //
  ACCEPT_NOTIFICATION: manageActionType('ACCEPT_NOTIFICATION'),
  GET_RIDE_NOTIFICATIONS: manageActionType('GET_RIDE_NOTIFICATIONS'),
};
