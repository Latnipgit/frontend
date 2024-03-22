import { createSelector } from 'reselect';

const selectLatestTansReducer = (state) => state.latestTransReducer;

export const selectLatestTans = createSelector(
  [selectLatestTansReducer],
  (TansecationSlice) => TansecationSlice.latestTrans
);

export const selectLatestTansMap = createSelector(
  [selectLatestTans],
  (latestTans) => {
    return latestTans
    // return latestTans.map((latestTans) => {
    //     const { Invoice :{billDate : orderdate, id : orderId}, debtor:{ownerName : billingName}, paymentHistory:{amtPaid: total, status: paymentStatus, pendingWith: Status,} } = latestTans;
    //     const methodIcon = "fab fa-cc-paypal";
    //     const paymentMethod = "Akshay";
    //     return {orderId, billingName, orderdate, total, paymentStatus, methodIcon, Status, paymentMethod};
    //   })
  }

);
export const selectIsLoading = createSelector(
  [selectLatestTansReducer],
  (categoriesSlice) => categoriesSlice.loading
);

export const getSubscriptionListReducer = createSelector(
  [selectLatestTansReducer],
  (TansecationSlice) => TansecationSlice.getSubscribePackage
);

export const getlogsSelector = createSelector(
  [selectLatestTansReducer],
  (TansecationSlice) => TansecationSlice.getAllLogs
);
