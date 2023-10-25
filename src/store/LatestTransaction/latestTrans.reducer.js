import {
  FETCH_LATEST_TRANS_START,
  FETCH_LATEST_TRANS_SUCCESS,
  FETCH_LATEST_TRANS_FAILED,
} from "./latestTrans.type"

export const LATEST_TRANS_INITIAL_STATE = {
  latestTrans: [],
  loading: false,
  error: null,
}

export const latestTransReducer = (
  state = LATEST_TRANS_INITIAL_STATE,
  action = {}
) => {
  const { type, payload } = action
  switch (type) {
    case FETCH_LATEST_TRANS_START:
      return { ...state, loading: true }
    case FETCH_LATEST_TRANS_SUCCESS:
      return { ...state, loading: false, latestTrans: payload }
    case FETCH_LATEST_TRANS_FAILED:
      return { ...state, loading: false, error: payload }
    default:
      return state
  }
}
