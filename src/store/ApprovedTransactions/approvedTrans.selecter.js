import { createSelector } from 'reselect';

const selectApprovedTransReducer = (state) => state.approvedTransReducer;

export const selectApprovedTrans = createSelector(
    [selectApprovedTransReducer],
    (approvedSlice) => approvedSlice.approvedTrans
  );

  export const selectApprovedTransMap = createSelector(
    [selectApprovedTrans],
    (approvedTrans) =>{
        return approvedTrans.map((approvedSlice) => {
            const {id:orderId,  invoiceId:billingName, amtPaid:total, status:Status,} = approvedSlice;
            const methodIcon = "fab fa-cc-paypal";
            const paymentMethod = "Paypal";
            const orderdate =  "07 Oct, 2019";
            const paymentStatus= "Paid";
            return {orderId, billingName, orderdate, total, paymentStatus, methodIcon, Status, paymentMethod};
          })
    }

  );
  export const selectLoading = createSelector(
    [selectApprovedTransReducer],
    (approvedSlice) => approvedSlice.loading
  );

  