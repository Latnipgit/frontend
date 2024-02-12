import { takeLatest, call, put, all, fork } from "redux-saga/effects"

import {
  fetchLatestTransSuccess,
  fetchLatestTransFailure,
  approveRejectLatestTrans,
  approveRejectLatestTransSuccess,
  approveRejectLatestTransFailure
} from "./latestTrans.action"

import { FETCH_LATEST_TRANS_START ,APPROVE_REJECT_LATEST_TRANSACTION} from "./latestTrans.type"

import { genrateAllTransation ,approveRejectLatestTranApiMethod} from "../../helpers/fakebackend_helper"

export function* fetchLatestTransAsync() {
  try {
    const latestTransArray = yield call(genrateAllTransation)
    yield put(fetchLatestTransSuccess(latestTransArray.data.response))
  } catch (error) {
    yield put(fetchLatestTransFailure(error))
  }
}

export function* approvaRejectLatestTransSaga(data) {
  try {
    const latestTransArray = yield call(approveRejectLatestTranApiMethod,data)
    yield put(approveRejectLatestTransSuccess(latestTransArray.data.response))
  } catch (error) {
    yield put(approveRejectLatestTransFailure(error))
  }
}

export function* onFetchLatestTrans() {
  yield takeLatest(FETCH_LATEST_TRANS_START, fetchLatestTransAsync)
  yield takeLatest(APPROVE_REJECT_LATEST_TRANSACTION, approvaRejectLatestTransSaga)
}

export function* latestTransSaga() {
  yield all([fork(onFetchLatestTrans)])
}
