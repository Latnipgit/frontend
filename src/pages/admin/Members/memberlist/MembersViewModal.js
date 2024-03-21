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
import moment from "moment";

const MembersViewModal = props => {
  const { isOpen, toggle, data } = props
  console.log("MembersViewModalMembersViewModal",data)
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
    <ModalHeader toggle={toggle}>Member Details</ModalHeader>
    <ModalBody>
      <div className="row">
        <div className="col-md-12">
          <p className="mb-2">
            <strong>Customer Name:</strong> {data != undefined? data.name:""}
          </p>
        </div>
        <div className="col-md-12">
          <p className="mb-2">
            <strong>Company Name:</strong> { data != undefined? data.userName :''}
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <p className="mb-2">
            <strong>Email Address:</strong>{ data != undefined? data.emailId:''}
          </p>
        </div>
       
      </div>
      <div className="row">
        <div className="col-md-12">
          <p className="mb-2">
            <strong>Joined On:</strong> {data != undefined? moment(data.updateAt).format("DD-MM-YYYY"):""}
          </p>
        </div>
        {/* <div className="col-md-6">
          <p className="mb-2">
            <strong>Status:</strong>{' '}
            <span className={`badge ${"Active" === "Active" ? "bg-success text-white" : "bg-danger text-white"}`} style={{ fontSize: "14px", borderRadius: "8px", padding: "5px 10px" }}>
            Active
</span>
          </p>
        </div> */}
      </div>
      {/* <div className="row">
        <div className="col-md-6">
          <p className="mb-0">
            <strong>GST Number:</strong> GST123456789
          </p>
        </div>
      </div> */}
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

MembersViewModal.propTypes = {
  toggle: PropTypes.func,
  isOpen: PropTypes.bool,
}

export default MembersViewModal
