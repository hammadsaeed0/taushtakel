import axios from 'axios';
export const baseURL = 'http://3.75.129.124:3000/';

export const addressLocationKey = 'AIzaSyBlM_5iWxox4tRE0bH0Lv9H-DSxf2mvhR8';
// export const imgURL = 'https://ptappanywhere.herokuapp.com/images/';

export const url = {
  register: 'user-user/register',
  login: 'user-user/login',
  article: 'user-article/new',
  allInterests:'user-interest/allInterests',
  updateLat:'update_user_latitude_longitude.php',
  getRideCategories:"fetch_ride_categories.php",
  getRideCategoryByType:"fetch_ride_category_by_type.php",
  sendRideRequest:"send_rides_to_captains.php",
  cancelRide:"cancel_current_ride.php",
  getHistory:'fetch_user_ride_history.php',
  getRideCategoriesByCity:"fetch_city_ride_categories.php",
  fetchNofication:"accept_user_ride_notification.php",
  getRideNotification:"fetch_user_ride_notification.php",
};

export const httpRequest = axios.create({baseURL: baseURL});
