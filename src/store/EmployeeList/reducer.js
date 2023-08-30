import { ADMIN_API_SUCCESS, ADMIN_API_FAIL, GET_ADMIN_DATA,
SIGNUP_ADMIN_API_FAIL, SIGNUP_ADMIN_API_SUCCESS,SIGNUP_ADMIN_DATA } from "./actionsTypes";

const INIT_STATE = {
  adminData: null,
  loading: false,
  registrationError:false,
  user:null
};


  const AdminList = (state = INIT_STATE, action) => {
            
    switch (action.type) {
      case GET_ADMIN_DATA:
        return {
          ...state,
          loading: true,
        };
      case ADMIN_API_FAIL:
        return {
          ...state,
          loading: false,
          adminData: null,
        };
      case ADMIN_API_SUCCESS:
        return {
          ...state,
          loading: false,
          adminData: action.payload,
        };
      case SIGNUP_ADMIN_DATA:
        return {
          ...state,
          loading: true,
          registrationError: null,
        };
      case SIGNUP_ADMIN_API_SUCCESS:
        return {
          ...state,
          loading: false,
          user: action.payload,
          registrationError: null,
        };
      case SIGNUP_ADMIN_API_FAIL:
        return {
          ...state,
          user: null,
          loading: false,
          registrationError: action.payload,
        };
      default:
        return state; 
    }
  };
  
  

export default AdminList;
