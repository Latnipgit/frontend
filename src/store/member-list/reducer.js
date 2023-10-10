import { MEMBER_API_SUCCESS, MEMBER_API_FAIL,GET_MEMBER_DATA } from "./actionsTypes";

const INIT_STATE = {
  memberData: null,
  loading: false,
  user:null
};


  const MemberList = (state = INIT_STATE, action) => {
    switch (action.type) {
      case  GET_MEMBER_DATA:
        return {
          ...state,
          loading: true,
          memberData: action.payload,

          
        };
      case MEMBER_API_FAIL:
        return {
          ...state,
          loading: false,
          memberData: null,
        };
      case MEMBER_API_SUCCESS:
 console.log("reducer",action)

        return {
          ...state,
          loading: false,
          memberData: action.payload.data,
        };
      
      default:
        return state; 
    }
  };
  
  

export default MemberList;
