import {
  FETCH_COMPANY_STATE_START,
  FETCH_COMPANY_STATE_SUCCESS,
  FETCH_COMPANY_STATE_FAILED,
} from "./CompanyDetails.type"
import { createAction } from "reducer/reducer.utils"

export const fetchCompanyStateStart = () =>
  createAction(FETCH_COMPANY_STATE_START)

export const fetchCompanyStateSuccess = CompanyStateArray => {
  return createAction(FETCH_COMPANY_STATE_SUCCESS, CompanyStateArray)
}

export const fetchCompanyStateFailure = error =>
  createAction(FETCH_COMPANY_STATE_FAILED, error)
