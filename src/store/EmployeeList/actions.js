import {ADMIN_API_SUCCESS,ADMIN_API_FAIL,GET_ADMIN_DATA} from "./actionsTypes";

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