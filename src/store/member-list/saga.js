import { call, put, takeEvery, all, fork } from "redux-saga/effects";
import { GET_MEMBER_DATA} from "./actionsTypes";
import { MemberApiSuccess, MemberApiFail} from "./actions";
import {getAllMemberData} from "../../helpers/fakebackend_helper";
function* getAllMemberData2() {
    try {
      debugger
      var response = yield call(getAllMemberData);
      yield put(MemberApiSuccess(GET_MEMBER_DATA, response));
    } catch (error) {
        yield put(MemberApiFail(GET_MEMBER_DATA, error));
    }
}

export function* watchGetMemberData() {
    yield takeEvery(GET_MEMBER_DATA, getAllMemberData2);
}

function* MemberListSaga() {
    yield all([fork(watchGetMemberData)]);
}

export default MemberListSaga;