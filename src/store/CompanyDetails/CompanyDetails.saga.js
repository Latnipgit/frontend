import { takeLatest, call, put, all, fork } from "redux-saga/effects"

import {
  fetchCompanyStateSuccess,
  fetchCompanyStateFailure,
} from "./CompanyDetails.action"

import { FETCH_COMPANY_STATE_START } from "./CompanyDetails.type.js"

import { getCompanyStateAPI } from "../../helpers/fakebackend_helper"

export function* fetchCompanyStateAsync() {
  try {
    const response = yield call(getCompanyStateAPI)
    yield put(fetchCompanyStateSuccess(response.data.response))
  } catch (error) {
    yield put(fetchCompanyStateFailure(error))
  }
}

export function* onFetchCompanyState() {
  yield takeLatest(FETCH_COMPANY_STATE_START, fetchCompanyStateAsync)
}

export function* CompanyDetailsSaga() {
  yield all([fork(onFetchCompanyState)])
}
