import { takeLatest, call, put, all, fork } from "redux-saga/effects"

import {
  fetchLatestTransSuccess,
  fetchLatestTransFailure,
  approveRejectLatestTrans,
  approveRejectLatestTransSuccess,
  approveRejectLatestTransFailure,
  subscribeToPackage,
  subscribeToPackageFailure,
  subscribeToPackageSuccess,
  getSubscriptionPckg,
  getSubscriptionPckgFail,
  getSubscriptionPckgSuccess,
  esclateTransaction,
  esclateTransactionFail,
  esclateTransactionSuccess
} from "./latestTrans.action"

import { FETCH_LATEST_TRANS_START ,APPROVE_REJECT_LATEST_TRANSACTION, SUBSCRIBE_PACKAGE,  GET_SUBSCRIBE_PACKAGE,ESCLATET_TRANSACTION} from "./latestTrans.type"

import { genrateAllTransation ,approveRejectLatestTranApiMethod,subscribePckgAPI,getSubscribtionpckgListAPI,esclatedTransactionAPI} from "../../helpers/fakebackend_helper"

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
    const latestTransArray = yield call(approveRejectLatestTranApiMethod,data.payload)
    yield put(approveRejectLatestTransSuccess(latestTransArray.data.response))
  } catch (error) {
    yield put(approveRejectLatestTransFailure(error))
  }
}
export function* subscribeTopckgSaga(data) {
  console.log("datadatadata",data)
  try {
    const latestTransArray = yield call(subscribePckgAPI,data.payload)
    yield put(subscribeToPackageFailure(latestTransArray.data.response))
  } catch (error) {
    yield put(subscribeToPackageFailure(error))
  }
}

export function* esclateTransactionSaga(data) {
  console.log("datadatadata",data)
  try {
    const latestTransArray = yield call(esclatedTransactionAPI,data.payload)
    yield put(esclateTransactionSuccess(latestTransArray.data.response))
  } catch (error) {
    yield put(esclateTransactionFail(error))
  }
}
export function* getSubscriptionListSaga() {
  
  try {
    const latestTransArray = yield call(getSubscribtionpckgListAPI)
    console.log("latestTransArray",latestTransArray)
    yield put(getSubscriptionPckgSuccess(latestTransArray.data.response))
  } catch (error) {
    yield put(getSubscriptionPckgFail(error))
  }
}


export function* onFetchLatestTrans() {
  yield takeLatest(FETCH_LATEST_TRANS_START, fetchLatestTransAsync)
  yield takeLatest(APPROVE_REJECT_LATEST_TRANSACTION, approvaRejectLatestTransSaga)
  yield takeLatest(SUBSCRIBE_PACKAGE, subscribeTopckgSaga)
  yield takeLatest(GET_SUBSCRIBE_PACKAGE, getSubscriptionListSaga)
  yield takeLatest(ESCLATET_TRANSACTION, esclateTransactionSaga)
}

export function* latestTransSaga() {
  yield all([fork(onFetchLatestTrans)])
}
