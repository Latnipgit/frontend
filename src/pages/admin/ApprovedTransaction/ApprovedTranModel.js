import React from "react"
import PropTypes from "prop-types"
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Table,
} from "reactstrap"


const ApprovedTranctionModel = props => {
  const { isOpen, toggle } = props
  return (
<Modal
  isOpen={isOpen}
  role="dialog"
  autoFocus={true}
  centered={true}
  className="exampleModal"
  tabIndex="-1"
  toggle={toggle}
>
  <div className="modal-content">
    <ModalHeader toggle={toggle}>Approved Transaction</ModalHeader>
    <ModalBody>
      <div className="row">
        <div className="col-md-6">
          <p className="mb-2">
            <strong>Reference No. :</strong> #74108520
          </p>
        </div>
        <div className="col-md-6">
          <p className="mb-2">
            <strong>Buyer Name :</strong> ABC Corp
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <p className="mb-2">
            <strong>Seller Name :</strong> Neal Matthews
          </p>
        </div>
        <div className="col-md-6">
          <p className="mb-2">
            <strong>Amount :</strong> ₹ 50000.00
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <p className="mb-2">
            <strong>Due Since :</strong> 2023-08-28
          </p>
        </div>
        <div className="col-md-6">
          <p className="mb-2">
            <strong>Payment Status :</strong>{' '}
            <span className={`badge ${"Paid" === "Paid" ? "bg-success text-white" : "bg-danger text-white"}`} style={{ fontSize: "14px", borderRadius: "8px", padding: "5px 10px" }}>
            Paid
</span>
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <p className="mb-0">
            <strong>Status:</strong> <span className={`badge ${"Active" === "Active" ? "bg-success text-white" : "bg-danger text-white"}`} style={{ fontSize: "14px", borderRadius: "8px", padding: "5px 10px" }}>
            Active
</span>
          </p>
        </div>
      </div>
    </ModalBody>
    <ModalFooter>
      <Button type="button" color="secondary" onClick={toggle}>
        Close
      </Button>
    </ModalFooter>
  </div>
</Modal>


  )
}

ApprovedTranctionModel.propTypes = {
  toggle: PropTypes.func,
  isOpen: PropTypes.bool,
}

export default ApprovedTranctionModel
