import {ADMIN_API_SUCCESS,ADMIN_API_FAIL,GET_ADMIN_DATA,
SIGNUP_ADMIN_API_SUCCESS,SIGNUP_ADMIN_API_FAIL,SIGNUP_ADMIN_DATA,
CHANGE_PASSWORD_WITH_OLD_PASSWORD,
CHANGE_PASSWORD_WITH_OLD_PASSWORD_SUCCESS,
CHANGE_PASSWORD_WITH_OLD_PASSWORD_FAIL
} from "./actionsTypes";
//Get Admin API
export const AdminApiSuccess = (actionType, data) => ({
    type: ADMIN_API_SUCCESS,
    payload: { actionType, data },
});

export const AdminApiFail = (actionType, error) => ({
    type: ADMIN_API_FAIL,
    payload: { actionType, error },
});

// charts data
export const getAdminData = () => ({
    type: GET_ADMIN_DATA
});

//Admin SignUP
export const adminregister = user => {
          
    return {
      type: SIGNUP_ADMIN_DATA,
      payload: { user },
    }
  }
  
  export const adminSignupUserSuccessful = user => {
    return {
      type: SIGNUP_ADMIN_API_SUCCESS,
      payload: user,
    }
  }
  
  export const adminSignupFailed = user => {
    return {
      type: SIGNUP_ADMIN_API_FAIL,
      payload: user,
    }
}

//CHNAGE PASS ACTIONS DEFINED ACCORDING TO API RESPONSE
export const changePasswordUsingOldPass = data => {
  
  return {
    type: CHANGE_PASSWORD_WITH_OLD_PASSWORD,
    payload: data,
  }
}
export const changePasswordUsingOldPassSuccessful = (actionType, data) => ({
  type: CHANGE_PASSWORD_WITH_OLD_PASSWORD_SUCCESS,
  payload: { actionType, data },
});

export const changePasswordUsingOldPassfail = (actionType, error) => ({
  type: CHANGE_PASSWORD_WITH_OLD_PASSWORD_FAIL,
  payload: { actionType, error },
});
