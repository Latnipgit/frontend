import React, { useEffect, useState, useMemo } from "react";
import PropTypes from "prop-types";
import withRouter from "components/Common/withRouter";
import { isEmpty } from "lodash";

import {
  Button,
  Card,
  CardBody,
} from "reactstrap";
import { ApprovedTranctionData } from "../../../common/data/approvedTransactions";
import {
    Badge,
    Col,
    Container,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Row,
    Table,
    UncontrolledDropdown,
    UncontrolledTooltip,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    Input,
    FormFeedback,
    Label,
  } from "reactstrap";
import {
  CheckBox,
  SrNo,
  Debtor,
  Creditor,
  DueAmount,
  InvoiceNo,
} from "./ApprovedTransactionCol";

import TableContainer from "../../../components/Common/TableContainer";
import ApprovedTranctionModel from "./ApprovedTranModel";
import Breadcrumbs from "../../../components/Common/Breadcrumb";
const ApprovedTranction = props => {


  const [modal1, setModal1] = useState(false);

  const toggleViewModal = () => setModal1(!modal1);

  const columns = useMemo(
    () => [
      {
        Header: "Sr No",
        accessor: "SrNo",
        filterable: false,
        disableFilters: true,
        Cell: cellProps => {
          return <SrNo {...cellProps} />;
        },
      },
      {
        Header: "Debtor",
        accessor: "Debtor",
        disableFilters: true,
        filterable: false,
        Cell: cellProps => {
          return <Debtor {...cellProps} />;
        },
      },
      {
        Header: "Creditor",
        accessor: "Creditor",
        disableFilters: true,
        filterable: false,
        Cell: cellProps => {
          return <Creditor {...cellProps} />;
        },
      },
      {
        Header: "Due Amount",
        accessor: "DueAmount",
        disableFilters: true,
        filterable: false,
        Cell: cellProps => {
          return <DueAmount {...cellProps} />;
        },
      },
      {
        Header: "InvoiceNo",
        accessor: "InvoiceNo",
        disableFilters: true,
        filterable: false,
        Cell: cellProps => {
          return <InvoiceNo {...cellProps} />;
        },
      },
      {
        Header: "Action",
        disableFilters: true,
        accessor: "view",
        Cell: cellProps => {
          return (
            <UncontrolledDropdown>
                              <DropdownToggle
                                href="#"
                                className="card-drop"
                                tag="a"
                              >
                                <i className="mdi mdi-dots-horizontal font-size-18" />
                              </DropdownToggle>
                              <DropdownMenu className="dropdown-menu-end">
                              <DropdownItem
                                  href="#"
                                  onClick={toggleViewModal}
                                >
                                  <i className="mdi mdi-eye font-size-16 text-primary me-1" />{" "}
                                  View
                                </DropdownItem>
                                <DropdownItem
                                  href="#"
                                  onClick={() => handleProjectClick(project)}
                                >
                                  <i className="mdi mdi-pencil font-size-16 text-success me-1" />{" "}
                                  Approve
                                </DropdownItem>
                                <DropdownItem
                                  href="#"
                                  onClick={() => onClickDelete(project)}
                                >
                                  <i className="mdi mdi-trash-can font-size-16 text-danger me-1" />{" "}
                                  Decline
                                </DropdownItem>
                              </DropdownMenu>
                            </UncontrolledDropdown>
          );
        },
      },
    ],
    []
  );


  return (
    <React.Fragment>
      <h4 className="mb-sm-0 font-size-18">Approved Transactions</h4>
      <ApprovedTranctionModel isOpen={modal1} toggle={toggleViewModal} />
      <Card>
        <CardBody>
        <Button type="button" color="primary" className="btn-sm btn-rounded float-left-button" onClick={toggleViewModal}>
          <i className="mdi mdi-eye font-size-16 text-primary me-1" />
          View Details
          </Button>
          <div className="mb-4 h4 card-title"></div>
          <div className="mb-4 h4 card-title">Approved Tranction List</div>
          <TableContainer
            columns={columns}
            data={ApprovedTranctionData}
            isGlobalFilter={false}
            isAddOptions={false}
            customPageSize={6}
          />
        </CardBody>
      </Card>
    </React.Fragment>
  );
};

ApprovedTranction.propTypes = {
  orders: PropTypes.array,
  onGetOrders: PropTypes.func,
};

export default withRouter(ApprovedTranction);
