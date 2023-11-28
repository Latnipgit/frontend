import React, { useEffect, useState, useMemo } from "react"
import PropTypes from "prop-types"
import withRouter from "components/Common/withRouter"
import { isEmpty } from "lodash"
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  CardBody,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Table,
} from "reactstrap"
import { getOrders as onGetOrders } from "store/actions"
import EcommerceOrdersModal from "../Ecommerce/EcommerceOrders/EcommerceOrdersModal"
import InvoiceModal from "./InvoicePopupModal"
import ConfirmModal from "./ConfirmRefertoSeio"
import { latestTransaction } from "../../common/data/dashboard"
import * as moment from "moment";
import { useSelector, useDispatch } from "react-redux"
import { fetchLatestTransStart } from "store/LatestTransaction/latestTrans.action"
import { fetchDashboardAdminDataStart } from "store/DashboardAdminData/dashboardAdminData.action"

import {
  OrderId,
  BillingName,
  DueSince,
  Total,
  PaymentStatus,
  PaymentMethod,
  Status,
} from "./LatestTranactionCol"

import TableContainer from "../../components/Common/TableContainer"

import { selectLatestTansMap } from "store/LatestTransaction/latestTans.selecter"

const LatestTranaction = props => {
  const [showReferModal, setShowReferModal] = useState(false)
  const [showApproveModal, setShowApproveModal] = useState(false)
  const [showInProcessModal, setShowInProcessModal] = useState(false)
  const [modal1, setModal1] = useState(false)
  const [selected, setSelected] = useState('')
  const handleReferClick = () => {
    setShowReferModal(true)
  }
  const handleConfirmRefer = () => {
    if (selectedLevel) {
      // Handle refer logic here
      console.log("Referring to senior with level:", selectedLevel)
      setSelectedLevel("") // Reset the selected level
      setShowReferModal(false)
    }
  }
  const handleCancelRefer = () => {
    setSelectedLevel("") // Reset the selected level
    setShowReferModal(false)
    
  }

  const toggleViewModal = () => setModal1(!modal1)
  const handleApproveClick = () => {
    setShowApproveModal(true)
  }
  const handleInProcessClick = () => {
    setShowInProcessModal(true)
  }
  const handleConfirmApprove = () => {
    setShowApproveModal(false)
  }
  const handleConfirmInProcess = () => {
    setShowInProcessModal(false)
  }
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [selectedLevel, setSelectedLevel] = useState("")
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen)
  }
  const viewModel= (value)=>{
    console.log("VALUE", value)
    setModal1(true)
    setSelected(value.cell.row.original)
  }
  const isReferDisabled = selectedLevel === ""
  var CurrentDate = moment().format('DD-MM-YYYY');
CurrentDate = moment([CurrentDate])
console.log("current okokok", CurrentDate)

  const columns = useMemo(
    () => [
      {
        Header: "#",
        filterable: false,
        disableFilters: true,
        Cell: cellProps => {
          return <input type="checkbox" className="form-check-input" />
        },
      },
      {
        Header: "Reference No.",
        accessor: "",
        filterable: false,
        disableFilters: true,
        Cell: cellProps => {
          return (
            <div className="d-flex">
             {/* {console.log("HARHSIT", cellProps.cell.row.original.debtor.id)} */}
           
           {cellProps.cell.row.original.debtor != null ?"BAF"+"-" +  cellProps.cell.row.original.debtor.creditorCompanyId.slice(-6).toUpperCase():''}
          </div>
          );
        },
      },
      {
        Header: "Buyer Name",
        accessor: "",
        disableFilters: true,
        filterable: false,
        Cell: cellProps => {
          return (
            <div className="d-flex">
           {cellProps.cell.row.original.debtor.ownerName}
          </div>
          );
        },
      },
      {
        Header: "Seller Name",
        accessor: "",
        disableFilters: true,
        Cell: cellProps => {
          return (
            <div className="d-flex">
             {console.log("HARHSIT", cellProps.cell.row.original)}
           {cellProps.cell.row.original.debtor.companyName}
          </div>
          );
        },
      },
      {
        Header: "Amount",
        accessor: "",
        disableFilters: true,
        filterable: false,
        Cell: cellProps => {
          return (
            <div className="d-flex">
             {/* {console.log("HARHSIT", cellProps.cell.row.original)} */}
           {cellProps.cell.row.original.paymentHistory.amtPaid}
          </div>
          );
        },
      },
      {
        Header: "Due Since",
        accessor: "",
        
        disableFilters: true,
        filterable: false,
        // Cell: cellProps => {
        //   const CreatedDate = moment([cellProps.cell.row.original.debtor.createdAt]).format("DD-MM-YYYY")
        //   return (
        //     <div className=" bg-success text-white text-center" style={{ width:"100px"}}>
        //     <p style={{  margin:'0px'}}>{CurrentDate.diff(CreatedDate, 'days')}</p>

        //     <p style={{  margin:'0px'}}> {moment(cellProps.cell.row.original
        //       .debtor.createdAt).format("DD-MM-YYYY")}</p>
       
        //   </div>
        //   );
        // },
        Cell: cellProps => {
          console.log("cellprops", cellProps.cell.row.original.Invoice.dueDate != undefined ? cellProps.cell.row.original.Invoice.dueDate:'')
          const a = moment(cellProps.cell.row.original.Invoice.dueDate);
          const b =moment()
          const c = moment(a).diff(b)
          const d = moment.duration(c)
          console.log("ABABAB",d.days())
          return (
  
            <div className="" style={{ padding:"5px 5px"}}>
              <div className=" text-center bg-success p-1 rounded text-light">
                <div className="text-capitalize">
                  {
                    d.days()
  
                  } Days </div>
                <div className="text-capitalize" >{moment(cellProps.cell.row.original.debtor.createdAt).format("MM-DD-YY")}</div>
              </div>
            </div>
            )}
      },
    
      {
        Header: "Payment Status",
        accessor: "",
        disableFilters: true,
        filterable: false,
        Cell: cellProps => {
          return (
            <div className="d-flex">
             {/* {console.log("HARHSIT", cellProps.cell.row.original)} */}
           {cellProps.cell.row.original.paymentHistory.status}
          </div>
          );
        },
      },
      {
        Header: "Status",
        accessor: "Status",
        disableFilters: true,
        filterable: false,
        Cell: cellProps => {
          return (
            <div className="d-flex">
             {/* {console.log("HARHSIT", cellProps.cell.row.original)} */}
           {cellProps.cell.row.original.paymentHistory.pendingWith}
          </div>
          );
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
              onClick={()=>viewModel(cellProps)}
            >
              View Details
            </Button>
          )
        },
      },


    ],
    []
  )

  const dispatch = useDispatch()
  const latestTransactiondata = useSelector(selectLatestTansMap )
  // const {latestTransactiondata} = useSelector(state=>{
  //   console.log("latestTransactiondata", state)
  //   // GetAllInvoice: state.DebtorsReducer.getInvoiceList!= undefined ? state.DebtorsReducer.getInvoiceList.response:[],
  // })
  useEffect(() => {
    dispatch(fetchLatestTransStart())
  }, [])
  console.log("latestTransactiondata", latestTransactiondata)

  return (
    <React.Fragment>
      <InvoiceModal isOpen={modal1} toggle={toggleViewModal} selected={selected} />
      {/* <ConfirmModal isOpen={isModalOpen} toggle={toggleModal} /> */}
      <Modal isOpen={showReferModal} toggle={() => setShowReferModal(false)}>
        <ModalHeader toggle={() => setShowReferModal(false)}>
          Confirm Asclation
        </ModalHeader>
        <ModalBody>
          {/* <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
            <DropdownToggle caret>
            {selectedLevel ? selectedLevel : 'Select Level'} <span className="caret"></span>

            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem onClick={() => setSelectedLevel('L1')}>L1</DropdownItem>
              <DropdownItem onClick={() => setSelectedLevel('L2')}>L2</DropdownItem>
              <DropdownItem onClick={() => setSelectedLevel('L3')}>L3</DropdownItem>
            </DropdownMenu>
          </Dropdown> */}
          <p>
            Asclation: Please select the level you want to refer this
            transaction to.
          </p>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={handleCancelRefer}>
            Cancel
          </Button>
          <Button
            color="danger"
            onClick={handleConfirmRefer}
            disabled={isReferDisabled}
          >
            Refer
          </Button>
        </ModalFooter>
      </Modal>

      <Card>
        <CardBody>
          <div className="mb-4 h4 card-title">Latest Reported Transaction</div>
          <TableContainer
            columns={columns}
            data={latestTransactiondata}
            isGlobalFilter={true}
            isAddOptions={false}
            customPageSize={20}
          />
        </CardBody>
      </Card>
      <Modal
        isOpen={showApproveModal}
        toggle={() => setShowApproveModal(false)}
      >
        <ModalHeader toggle={() => setShowApproveModal(false)}>
          Confirm Approval
        </ModalHeader>
        <ModalBody>Are you sure you want to approve this bill?</ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={() => setShowApproveModal(false)}>
            Cancel
          </Button>
          <Button color="success" onClick={handleConfirmApprove}>
            Approve
          </Button>
        </ModalFooter>
      </Modal>
      <Modal
        isOpen={showInProcessModal}
        toggle={() => setShowInProcessModal(false)}
      >
        <ModalHeader toggle={() => setShowInProcessModal(false)}>
          Confirm In Process
        </ModalHeader>
        <ModalBody>Are you sure you want to mark this as in process?</ModalBody>
        <ModalFooter>
          <Button
            color="secondary"
            onClick={() => setShowInProcessModal(false)}
          >
            Cancel
          </Button>
          <Button color="info" onClick={handleConfirmInProcess}>
            In Process
          </Button>
        </ModalFooter>
      </Modal>
    </React.Fragment>
  )
}

LatestTranaction.propTypes = {
  orders: PropTypes.array,
  onGetOrders: PropTypes.func,
}

export default withRouter(LatestTranaction)
