import { takeLatest, call, put, all, fork } from "redux-saga/effects"

import {
  fetchLatestTransSuccess,
  fetchLatestTransFailure,
} from "./latestTrans.action"

import { FETCH_LATEST_TRANS_START } from "./latestTrans.type"

import { genrateAllTransation } from "../../helpers/fakebackend_helper"

export function* fetchLatestTransAsync() {
  try {
    const latestTransArray = yield call(genrateAllTransation)
    yield put(fetchLatestTransSuccess(latestTransArray.data.response))
  } catch (error) {
    yield put(fetchLatestTransFailure(error))
  }
}

export function* onFetchLatestTrans() {
  yield takeLatest(FETCH_LATEST_TRANS_START, fetchLatestTransAsync)
}

export function* latestTransSaga() {
  yield all([fork(onFetchLatestTrans)])
}
