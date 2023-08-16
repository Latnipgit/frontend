import {ADMIN_API_SUCCESS,ADMIN_API_FAIL,GET_ADMIN_DATA} from "./actionsTypes";

const INIT_STATE = {
    adminData: null,
    isLoading: false,
};

const AdminList = (state = INIT_STATE, action) => {
    debugger
    switch (action.type) {
        case GET_ADMIN_DATA:
        
        return {
            ...state,
            isLoading: true,
        };
        case ADMIN_API_FAIL:
        
        return {
            ...state,
            isLoading: false,
        };

            
        case ADMIN_API_SUCCESS:
            return {
                ...state,
                isLoading: false,
            };
        default:
            return state;
    }
}


export default AdminList;