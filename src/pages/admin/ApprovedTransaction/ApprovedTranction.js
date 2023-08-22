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
  ModalFooter,
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
  const [showReferModal, setShowReferModal] = useState(false);
  const [showApproveModal, setShowApproveModal] = useState(false);
  const [showInProcessModal, setShowInProcessModal] = useState(false);
  const [modal1, setModal1] = useState(false);
  const handleReferClick = () => { setShowReferModal(true) };
  const handleConfirmRefer = () => { setShowReferModal(false) };

  const toggleViewModal = () => setModal1(!modal1);
  const handleApproveClick = () => { setShowApproveModal(true) };
  const handleInProcessClick = () => { setShowInProcessModal(true) };
  const handleConfirmApprove = () => { setShowApproveModal(false) };
  const handleConfirmInProcess = () => { setShowInProcessModal(false) };

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
            <div className="d-flex">
              <div className="d-flex flex-column align-items-center me-3" onClick={toggleViewModal} style={{ cursor: 'pointer' }}>
                <i className="mdi mdi-eye font-size-18 text-primary mb-1" data-bs-toggle="tooltip" data-bs-placement="top" title="View" />
              </div>
              <div className="d-flex flex-column align-items-center me-3" onClick={handleApproveClick} style={{ cursor: 'pointer' }}>
                <i className="mdi mdi-check-circle font-size-18 text-success mb-1" data-bs-toggle="tooltip" data-bs-placement="top" title="Approve" />
              </div>
              <div className="d-flex flex-column align-items-center" onClick={handleInProcessClick} style={{ cursor: 'pointer' }}>
                <i className="mdi mdi-close-circle font-size-18 text-danger mb-1" data-bs-toggle="tooltip" data-bs-placement="top" title="Decline" />
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
      <div className="overflow-hidden mt-lg-4">..</div>

      <ApprovedTranctionModel isOpen={modal1} toggle={toggleViewModal} />
      <Card>
        <div className="overflow-hidden mt-lg-4">..</div>
        <h4 className="mb-sm-0 font-size-18">  Approved Transactions</h4>
        <CardBody>
          <TableContainer
            columns={columns}
            data={ApprovedTranctionData}
            isGlobalFilter={true}
            isAddOptions={false}
            customPageSize={6}
          />
        </CardBody>
      </Card>
      <Modal isOpen={showReferModal} toggle={() => setShowReferModal(false)}>
        <ModalHeader toggle={() => setShowReferModal(false)}>Confirm Refer to Senior</ModalHeader>
        <ModalBody>
          Are you sure you want to refer this project to a senior?
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={() => setShowReferModal(false)}>Cancel</Button>
          <Button color="danger" onClick={handleConfirmRefer}>Refer</Button>
        </ModalFooter>
      </Modal>
      <Modal isOpen={showApproveModal} toggle={() => setShowApproveModal(false)}>
        <ModalHeader toggle={() => setShowApproveModal(false)}>Confirm Approval</ModalHeader>
        <ModalBody>
          Are you sure you want to approve this transaction?
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={() => setShowApproveModal(false)}>Cancel</Button>
          <Button color="success" onClick={handleConfirmApprove}>Approve</Button>
        </ModalFooter>
      </Modal>
      <Modal isOpen={showInProcessModal} toggle={() => setShowInProcessModal(false)}>
        <ModalHeader toggle={() => setShowInProcessModal(false)}>Confirm In Process</ModalHeader>
        <ModalBody>
          Are you sure you want to mark this as decline ?
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={() => setShowInProcessModal(false)}>Cancel</Button>
          <Button color="danger" onClick={handleConfirmInProcess}>Decline</Button>

        </ModalFooter>
      </Modal>
    </React.Fragment>
  );
};

ApprovedTranction.propTypes = {
  orders: PropTypes.array,
  onGetOrders: PropTypes.func,
};

export default withRouter(ApprovedTranction);
