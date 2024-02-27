import React, { useEffect, useState, useMemo } from "react";
import PropTypes from "prop-types";
import withRouter from "components/Common/withRouter";
import { isEmpty } from "lodash";
import { useSelector, useDispatch } from "react-redux"
import { Button, Card, CardBody, } from "reactstrap";
import { getOrders as onGetOrders } from "store/actions";
import { Disputeddata } from "../../../common/data/disputedData";
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
  ModalFooter,
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
  Status
} from "./disputedCol";

import TableContainer from "../../../components/Common/TableContainer";
import DisputedViewModal from "../DisputedBillings/DisputedViewModal";
import { fetchDisputedTransStart } from "store/DisputedTransactions/disputedTrans.action"
import { selectdisputedTransMap } from "store/DisputedTransactions/disputedTrans.action.selecter";

const DiputedBillings = props => {
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
      // {
      //   Header: "#",
      //   filterable: false,
      //   disableFilters: true,
      //   Cell: cellProps => {
      //     return <input type="checkbox" className="form-check-input" />;
      //   },
      // },
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
        Header: "Buyer",
        accessor: "Debtor",
        disableFilters: true,
        filterable: false,
        Cell: cellProps => {
          return <Debtor {...cellProps} />;
        },
      },
      {
        Header: "Seller",
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
          return (
            <InvoiceNo {...cellProps} />
          );
        },
      },
      {
        Header: "Status",
        accessor: "Status",
        disableFilters: true,
        filterable: false,
        Cell: cellProps => {
          return <Status {...cellProps} />;
        },
      },

      {
        Header: "Action",
        disableFilters: true,
        accessor: "view",
        Cell: cellProps => {
          return (
            <div className="d-flex">

              <div className="d-flex flex-column align-items-center me-3" onClick={handleApproveClick} style={{ cursor: 'pointer' }}>
                <i className="mdi mdi-check-circle font-size-18 text-success mb-1" data-bs-toggle="tooltip" data-bs-placement="top" title="Approve" />
              </div>
              <div className="d-flex flex-column align-items-center" onClick={handleInProcessClick} style={{ cursor: 'pointer' }}>
                <i className="mdi mdi-close-circle font-size-18 text-danger mb-1" data-bs-toggle="tooltip" data-bs-placement="top" title="Reject" />
              </div>
            </div>
          );
        },
      },
    ],
    []
  );
  const dispatch = useDispatch()
  const disputedTransactiondata = useSelector(selectdisputedTransMap)
  useEffect(() => {
    dispatch(fetchDisputedTransStart())
  }, [])

  return (
    <React.Fragment>
      <DisputedViewModal isOpen={modal1} toggle={toggleViewModal} />
      <Card>
        <CardBody>
          <Button type="button" color="primary" className="btn-sm btn-rounded float-left-button" onClick={toggleViewModal}>
            <i className="mdi mdi-eye font-size-16 text-primary me-1" />
            View Details
          </Button>
          <div className="mb-4 h4 card-title"></div>
          <div className="mb-4 h4 card-title">Disputed Billing</div>
          <TableContainer
            columns={columns}
            data={disputedTransactiondata}
            isGlobalFilter={true}
            isAddOptions={false}
            customPageSize={20}
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
          Are you sure you want to approve this disputed bill?
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={() => setShowApproveModal(false)}>Cancel</Button>
          <Button color="success" onClick={handleConfirmApprove}>Approve</Button>
        </ModalFooter>
      </Modal>
      <Modal isOpen={showInProcessModal} toggle={() => setShowInProcessModal(false)}>
        <ModalHeader toggle={() => setShowInProcessModal(false)}>Confirm In Process</ModalHeader>
        <ModalBody>
          Are you sure you want to mark this bill as decline ?
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={() => setShowInProcessModal(false)}>Cancel</Button>
          <Button color="danger" onClick={handleConfirmInProcess}>Decline</Button>

        </ModalFooter>
      </Modal>
    </React.Fragment>
  );
};

DiputedBillings.propTypes = {
  orders: PropTypes.array,
  onGetOrders: PropTypes.func,
};

export default withRouter(DiputedBillings);
