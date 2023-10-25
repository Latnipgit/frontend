import {
  FETCH_APPROVED_TRANSACTIONS_START,
  FETCH_APPROVED_TRANSACTIONS_SUCCESS,
  FETCH_APPROVED_TRANSACTIONS_FAILED,
} from "./approvedTrans.type"
import { createAction } from "reducer/reducer.utils"

export const fetchApprovedTransStart = () =>
  createAction(FETCH_APPROVED_TRANSACTIONS_START)

export const fetchApprovedTransSuccess = approvedTransArray => {
  return createAction(FETCH_APPROVED_TRANSACTIONS_SUCCESS, approvedTransArray)
}

export const fetchApprovedTransFailure = error =>
  createAction(FETCH_APPROVED_TRANSACTIONS_FAILED, error)
