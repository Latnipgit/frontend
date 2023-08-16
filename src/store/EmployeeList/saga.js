import { call, put, takeEvery, all, fork } from "redux-saga/effects";
import { GET_ADMIN_DATA } from "./actionsTypes";
import { AdminApiSuccess, AdminApiFail } from "./actions";
import {getAllAdminData} from "../../helpers/fakebackend_helper";
function* getAllAdminData2() {
    try {
       debugger
        var response = yield call(getAllAdminData);
        

        yield put(AdminApiSuccess(GET_ADMIN_DATA, response));
    } catch (error) {
        yield put(AdminApiFail(GET_ADMIN_DATA, error));
    }
}

export function* watchGetAdminData() {
    yield takeEvery(GET_ADMIN_DATA, getAllAdminData2);
}

function* AdminListSaga() {
    yield all([fork(watchGetAdminData)]);
}

export default AdminListSaga;