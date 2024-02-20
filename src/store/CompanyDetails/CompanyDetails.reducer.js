import {
  FETCH_COMPANY_STATE_START,
  FETCH_COMPANY_STATE_SUCCESS,
  FETCH_COMPANY_STATE_FAILED,
} from "./CompanyDetails.type.js"

export const COMPANY_STATE_INITIAL_STATE = {
  companyStateDatails: [],
  loading: false,
  error: null,
}

export const CompanyDetailsReducer = (
  state = COMPANY_STATE_INITIAL_STATE,
  action = {}
) => {
  const { type, payload } = action
  switch (type) {
    case FETCH_COMPANY_STATE_START:
      return { ...state, loading: true }
    case FETCH_COMPANY_STATE_SUCCESS:
      return { ...state, loading: false, companyStateDatails: payload }
    case FETCH_COMPANY_STATE_FAILED:
      return { ...state, loading: false, error: payload }
    default:
      return state
  }
}
