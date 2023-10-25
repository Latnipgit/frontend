import {
  FETCH_LATEST_TRANS_START,
  FETCH_LATEST_TRANS_SUCCESS,
  FETCH_LATEST_TRANS_FAILED,
} from "./latestTrans.type"
import { createAction } from "reducer/reducer.utils"

export const fetchLatestTransStart = () =>
  createAction(FETCH_LATEST_TRANS_START)

export const fetchLatestTransSuccess = latestTransArray => {
  return createAction(FETCH_LATEST_TRANS_SUCCESS, latestTransArray)
}

export const fetchLatestTransFailure = error =>
  createAction(FETCH_LATEST_TRANS_FAILED, error)
