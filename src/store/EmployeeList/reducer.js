import { ADMIN_API_SUCCESS, ADMIN_API_FAIL, GET_ADMIN_DATA } from "./actionsTypes";

const INIT_STATE = {
  adminData: null,
  loading: false,
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
    default:
      return state; // Make sure to return the previous state for unknown action types
  }
};

export default AdminList;
