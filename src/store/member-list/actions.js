import {MEMBER_API_SUCCESS,MEMBER_API_FAIL,GET_MEMBER_DATA,
} from "./actionsTypes";
//Get Member list  API
export const MemberApiSuccess = (actionType, data) => ({
    type: MEMBER_API_SUCCESS,
    payload: { actionType, data },
});

export const getMemberData = () => ({
    type: GET_MEMBER_DATA
});

export const MemberApiFail = (actionType, error) => ({
    type: MEMBER_API_FAIL,
    payload: { actionType, error },
});

// charts data


  
 

