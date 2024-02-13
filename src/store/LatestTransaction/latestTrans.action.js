import {
  FETCH_LATEST_TRANS_START,
  FETCH_LATEST_TRANS_SUCCESS,
  FETCH_LATEST_TRANS_FAILED,
  APPROVE_REJECT_LATEST_TRANSACTION,
  APPROVE_REJECT_LATEST_TRANSACTION_FAIL,
  APPROVE_REJECT_LATEST_TRANSACTION_SUCCESS,
  SUBSCRIBE_PACKAGE_FAIL,
  SUBSCRIBE_PACKAGE_SUCCESS,
  SUBSCRIBE_PACKAGE,
  GET_SUBSCRIBE_PACKAGE_FAIL,
  GET_SUBSCRIBE_PACKAGE_SUCCESS,
  GET_SUBSCRIBE_PACKAGE

} from "./latestTrans.type"
import { createAction } from "reducer/reducer.utils"

export const fetchLatestTransStart = () =>
  createAction(FETCH_LATEST_TRANS_START)

export const fetchLatestTransSuccess = latestTransArray => {
  return createAction(FETCH_LATEST_TRANS_SUCCESS, latestTransArray)
}

export const fetchLatestTransFailure = error =>
  createAction(FETCH_LATEST_TRANS_FAILED, error)

  export const approveRejectLatestTrans = () =>
  createAction(APPROVE_REJECT_LATEST_TRANSACTION)

export const approveRejectLatestTransSuccess = latestTransArray => {
  return createAction(APPROVE_REJECT_LATEST_TRANSACTION_SUCCESS, latestTransArray)
}

export const approveRejectLatestTransFailure = error =>
  createAction(APPROVE_REJECT_LATEST_TRANSACTION_FAIL, error)

  export const subscribeToPackage = (data) =>
  createAction(SUBSCRIBE_PACKAGE,data)

export const subscribeToPackageSuccess = latestTransArray => {
  return createAction(SUBSCRIBE_PACKAGE_SUCCESS, latestTransArray)
}

export const subscribeToPackageFailure = error =>
  createAction(SUBSCRIBE_PACKAGE_FAIL, error)

  export const getSubscriptionPckg = () =>
  createAction(GET_SUBSCRIBE_PACKAGE)

  export const getSubscriptionPckgSuccess = (latestTransArray) =>
  createAction(GET_SUBSCRIBE_PACKAGE_SUCCESS,latestTransArray)

export const getSubscriptionPckgFail = error => {
  createAction(SUBSCRIBE_PACKAGE_FAIL, error)}