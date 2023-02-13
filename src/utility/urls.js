const BASE_URL = "http://localhost:8000/api/v1/";
// const BASE_URL = "";

// AUTH
export const AUTH_URL = BASE_URL + "/auth";
export const SEND_PHONE_NUMBER = AUTH_URL + "send-phone-number";
export const VERIFY_OTP = AUTH_URL + "verifyOTP";

export const SIGNUP_ADMIN = AUTH_URL + "signup-admin";
export const SIGNUP_CUSTOMER = AUTH_URL + "signup-customer";
export const SIGNUP_DRIVER = AUTH_URL + "signup-driver";

export const LOGIN_ADMIN = AUTH_URL + "login-admin";
export const LOGIN_CUSTOMER = AUTH_URL + "login-customer";
export const LOGIN_DRIVER = AUTH_URL + "login-driver";

export const REQUEST_CHANGE = AUTH_URL + "requestChange";
export const CHANGE_PHONE = AUTH_URL + "changePhone";
export const CHANGE_PASSWORD = AUTH_URL + "changePassword";

export const ALL_USER = AUTH_URL + "all-user";
export const ALL_ADMIN = AUTH_URL + "all-admin";
export const ALL_CUSTOMER = AUTH_URL + "all-customer";
export const ALL_DRIVER = AUTH_URL + "all-driver";

// PROMO
export const PROMO = BASE_URL + "promo";
export const CREATE_PROMO = PROMO + "/create-promo";
export const UPDATE_PROMO = PROMO + "/update-promo";
export const DELETE_PROMO = PROMO + "/delete-promo";
export const FETCH_SINGPE_PROMO = PROMO + "/fetch-promo";
export const FETCH_ALL_PROMO = PROMO + "/fetch-all-promo";
export const ALL_USER_PROMO = PROMO + "/promo-all-user";
export const PROMO_BY_DATE = PROMO + "/promo-by-date";
export const PROMO_BY_ORGANIZATION = PROMO + "/promo-by-organization";
export const PROMO_BY_CEREMONY = PROMO + "/promo-by-ceremony";

// ADDRESS
export const ADDRESS = BASE_URL + "address";
export const CREATE_ADDRESS = ADDRESS + "/create-address";
export const UPDATE_ADDRESS = ADDRESS + "/update-address";
export const DELETE_ADDRESS = ADDRESS + "/delete-address";
export const GET_ALL_ADDRESSES_FOR_A_CUSTOMER = ADDRESS + "/get-all-address";
export const GET_ALL_ADDRESSES = ADDRESS + "/all-address";

// VEHICLE TYPE
export const VEHICLE_TYPE = BASE_URL + "vehicle";
export const ADD_VEHICLE_TYPE = VEHICLE_TYPE + "/create";
export const UPDATE_VEHICLE_TYPE = VEHICLE_TYPE + "/update";
export const DEACTIVATE_VEHICLE_TYPE = VEHICLE_TYPE + "/deactivate";
export const ACTIVATE_VEHICLE_TYPE = VEHICLE_TYPE + "/activate";
export const GET_ALL_VEHICLE_TYPE = VEHICLE_TYPE + "/list";
export const GET_VEHICLE_TYPE_BY_ID = VEHICLE_TYPE + "/single";

// VEHICLE
export const VEHICLE = BASE_URL + "vehicle";
export const ADD_VEHICLE = VEHICLE + "/create";
export const UPDATE_VEHICLE = VEHICLE + "/update";
export const DEACTIVATE_VEHICLE = VEHICLE + "/deactivate";
export const ACTIVATE_VEHICLE = VEHICLE + "/activate";
export const GET_ALL_VEHICLE = VEHICLE + "/list";
export const GET_VEHICLE_BY_ID = VEHICLE + "/single";

// TRIP
export const TRIP = BASE_URL + "trip";
export const ADD_TRIP = TRIP + "/create-trip-request";
export const ADD_CUSTOMER_BERGAIN = TRIP + "/customer-bergain";
export const ADD_DRIVER_BERGAIN = TRIP + "/driver-bergain";
export const GET_CUSTOMER_BERGAIN_FARE = TRIP + "/get_customer_bergain_fare";
export const GET_DRIVER_BERGAIN_FARE = TRIP + "/get_driver_bergain_fare";
export const CUSTOMER_ACCEPT_BERGAIN = TRIP + "/customer-accept-bergain";
export const DRIVER_ACCEPT_BERGAIN = TRIP + "/driver-accept-bergain";
export const CANCEL_BERGAIN = TRIP + "/customer-cancel-bergain";
export const ADD_INCOMPLETE_TRIP_BY_DRIVER =
  TRIP + "/create-incomplete-trip-by-driver";
export const ADD_INCOMPLETE_TRIP_BY_PASSENGER =
  TRIP + "/create-incomplete-trip-by-passenger";
export const ADD_DRIVER_ARRIVAL = TRIP + "/driver-arrive-request";
export const ADD_TRIP_START_REQUEST = TRIP + "/trip-start-request";
export const ADD_COMPLETE_TRIP = TRIP + "/create-complete-trip";
export const GET_ALL_TRIP = TRIP + "/get-all-trip-request";
export const GET_ALL_COMPLETED_TRIP = TRIP + "/get-all-completed-trip";
export const GET_ALL_INCOMPLETE_TRIP = TRIP + "/get-all-incompleted-trip";
