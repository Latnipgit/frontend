import {
  FETCH_COMPANY_STATE_START,
  FETCH_COMPANY_STATE_SUCCESS,
  FETCH_COMPANY_STATE_FAILED,
  FETCH_COMPANY_CITY_START,
  FETCH_COMPANY_CITY_SUCCESS,
  FETCH_COMPANY_CITY_FAILED,
  FETCH_COMPANY_STATE_CITY_START,
  FETCH_COMPANY_STATE_CITY_SUCCESS,
  FETCH_COMPANY_STATE_CITY_FAILED,
} from "./CompanyDetails.type.js"

export const COMPANY_STATE_INITIAL_STATE = {
  companyStateDatails: [],
  companyCityDatails: [],
  companyStateCityDatails: [],
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


    case FETCH_COMPANY_CITY_START:
      return { ...state, loading: true }
    case FETCH_COMPANY_CITY_SUCCESS:
      return { ...state, loading: false, companyCityDatails: payload }
    case FETCH_COMPANY_CITY_FAILED:
      return { ...state, loading: false, error: payload }

    case FETCH_COMPANY_STATE_CITY_START:
      return { ...state, loading: true }
    case FETCH_COMPANY_STATE_CITY_SUCCESS:
      return { ...state, loading: false, companyStateCityDatails: payload }
    case FETCH_COMPANY_STATE_CITY_FAILED:
      return { ...state, loading: false, error: payload }
    default:
      return state
  }
}
