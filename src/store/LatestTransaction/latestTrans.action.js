import {
  FETCH_LATEST_TRANS_START,
  FETCH_LATEST_TRANS_SUCCESS,
  FETCH_LATEST_TRANS_FAILED,
  APPROVE_REJECT_LATEST_TRANSACTION,
  APPROVE_REJECT_LATEST_TRANSACTION_FAIL,
  APPROVE_REJECT_LATEST_TRANSACTION_SUCCESS
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
