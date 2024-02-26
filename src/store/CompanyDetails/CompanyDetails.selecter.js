import { createSelector } from 'reselect';

const selectCompanyDetailsReducer = (state) => state.CompanyDetailsReducer;


export const selectComapnyState = createSelector(
  [selectCompanyDetailsReducer],
  (disputedTrans) => disputedTrans.companyStateDatails
);

export const selectComapnyStateMap = createSelector(
  [selectComapnyState],
  (disputedTrans) => disputedTrans
);


export const selectComapnyCity = createSelector(
  [selectCompanyDetailsReducer],
  (disputedTrans) => disputedTrans.companyCityDatails
);

export const selectComapnyStateCity = createSelector(
  [selectCompanyDetailsReducer],
  (disputedTrans) => disputedTrans.companyStateCityDatails
);

export const selectDoardAdminDataLoading = createSelector(
  [selectCompanyDetailsReducer],
  (disputedTrans) => disputedTrans.loading
);

