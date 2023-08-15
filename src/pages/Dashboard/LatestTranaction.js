import React, { useEffect, useState, useMemo } from "react";
import PropTypes from "prop-types";
import withRouter from "components/Common/withRouter";
import { isEmpty } from "lodash";

import {
  Button,
  Card,
  CardBody,
} from "reactstrap";
import { getOrders as onGetOrders } from "store/actions";

import EcommerceOrdersModal from "../Ecommerce/EcommerceOrders/EcommerceOrdersModal";
import InvoiceModal from "./InvoicePopupModal";

import { latestTransaction } from "../../common/data/dashboard";

import {
  OrderId,
  BillingName,
  Date,
  Total,
  PaymentStatus,
  PaymentMethod,
} from "./LatestTranactionCol";

import TableContainer from "../../components/Common/TableContainer";

const LatestTranaction = props => {


  const [modal1, setModal1] = useState(false);

  const toggleViewModal = () => setModal1(!modal1);

  const columns = useMemo(
    () => [
      {
        Header: "#",
        filterable: false,
        disableFilters: true,
        Cell: cellProps => {
          return <input type="checkbox" className="form-check-input" />;
        },
      },
      {
        Header: "Invoice No",
        accessor: "orderId",
        filterable: false,
        disableFilters: true,
        Cell: cellProps => {
          return <OrderId {...cellProps} />;
        },
      },
      {
        Header: "Buyer Name",
        accessor: "billingName",
        disableFilters: true,
        filterable: false,
        Cell: cellProps => {
          return <BillingName {...cellProps} />;
        },
      },
      {
        Header: "Seller Name",
        accessor: "paymentMethod",
        disableFilters: true,
        Cell: cellProps => {
          return <PaymentMethod {...cellProps} />;
        },
      },
      {
        Header: "Amount",
        accessor: "total",
        disableFilters: true,
        filterable: false,
        Cell: cellProps => {
          return <Total {...cellProps} />;
        },
      },
      {
        Header: "Date",
        accessor: "orderdate",
        disableFilters: true,
        filterable: false,
        Cell: cellProps => {
          return <Date {...cellProps} />;
        },
      },
      
      {
        Header: "Payment Status",
        accessor: "paymentStatus",
        disableFilters: true,
        filterable: false,
        Cell: cellProps => {
          return <PaymentStatus {...cellProps} />;
        },
      },
    
      {
        Header: "View Details",
        disableFilters: true,
        accessor: "view",
        Cell: cellProps => {
          return (
            <Button
              type="button"
              color="primary"
              className="btn-sm btn-rounded"
              onClick={toggleViewModal}
            >
              View Details
            </Button>
          );
        },
      },
     
      {
        Header: "Action",
        disableFilters: true,
        accessor: "project",
        Cell: cellProps => {
          return (
            <div className="d-flex">
            <div className="d-flex flex-column align-items-center me-3" onClick={toggleViewModal} style={{ cursor: 'pointer' }}>
              <i className="mdi mdi-eye font-size-18 text-primary mb-1" data-bs-toggle="tooltip" data-bs-placement="top" title="Approve" />
            </div>
            <div className="d-flex flex-column align-items-center me-3" onClick={() => handleProjectClick(project)} style={{ cursor: 'pointer' }}>
              <i className="mdi mdi-pencil font-size-18 text-success mb-1" data-bs-toggle="tooltip" data-bs-placement="top" title="In Process" />
            </div>
            <div className="d-flex flex-column align-items-center" onClick={() => onClickDelete(project)} style={{ cursor: 'pointer' }}>
              <i className="mdi mdi-alert-octagon font-size-18 text-warning mb-1" data-bs-toggle="tooltip" data-bs-placement="top" title="Refer to Senior" />
            </div>
          </div>
          
          );
        },
      },
    ],
    []
  );


  return (
    <React.Fragment>
      <InvoiceModal isOpen={modal1} toggle={toggleViewModal} />
      <Card>
        <CardBody>
          <div className="mb-4 h4 card-title">Latest Transaction</div>
          <TableContainer
            columns={columns}
            data={latestTransaction}
            isGlobalFilter={true}
            isAddOptions={false}
            customPageSize={6}
          />
        </CardBody>
      </Card>
    </React.Fragment>
  );
};

LatestTranaction.propTypes = {
  orders: PropTypes.array,
  onGetOrders: PropTypes.func,
};

export default withRouter(LatestTranaction);
