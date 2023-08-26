import { call, put, takeEvery, all, fork } from "redux-saga/effects";
import { GET_ADMIN_DATA ,SIGNUP_ADMIN_API_FAIL,SIGNUP_ADMIN_DATA} from "./actionsTypes";
import { AdminApiSuccess, AdminApiFail,adminSignupUserSuccessful, adminSignupFailed} from "./actions";
import {getAllAdminData,registerAdminData} from "../../helpers/fakebackend_helper";
function* getAllAdminData2() {
    try {
      var response = yield call(getAllAdminData);
      yield put(AdminApiSuccess(GET_ADMIN_DATA, response));
    } catch (error) {
        yield put(AdminApiFail(GET_ADMIN_DATA, error));
    }
}
function* signupAdminData(action) {
    try {
              
      const response = yield call(registerAdminData, action.payload.user); 
      yield put(adminSignupUserSuccessful(SIGNUP_ADMIN_DATA, response));
    } catch (error) {
        yield put(adminSignupFailed(SIGNUP_ADMIN_DATA, error));
    }
  }

export function* watchGetAdminData() {
    yield takeEvery(SIGNUP_ADMIN_DATA, signupAdminData);
    yield takeEvery(GET_ADMIN_DATA, getAllAdminData2);
}
// export function* watchSignupAdminData() {
//     yield takeEvery(SIGNUP_ADMIN_DATA, signupAdminData);
//   }
function* AdminListSaga() {
    yield all([fork(watchGetAdminData)]);
}

export default AdminListSaga;