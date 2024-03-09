import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import moment from 'moment'
/* import CurrencyFormat from 'react-currency-format'; */

import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  InputGroup,
  Input,
  Label,

  Table,
  Row, Col
} from "reactstrap"

import fileImg2 from '../../assets/images/pdf.png'
import fileImg1 from '../../assets/images/png-file-.png'

export const numberFormat = (value) =>
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR'
  }).format(value);

export const SellerDocViewModule = props => {
  const { isOpen, toggle, item } = props

  return (
    <Modal
      isOpen={isOpen}
      role="dialog"
      size="xl"
      autoFocus={true}
      centered={true}
      className="exampleModal"
      tabIndex="-1"
      toggle={toggle}
    >
      <div className="modal-content">
        <ModalHeader toggle={toggle}>Documents Files</ModalHeader>

        <ModalBody>

          <Row className="bg-light p-3 mt-2">
            <Row>
              <Col md={3}><strong>Invoice Number : {item.invoiceNumber}</strong></Col>
              <Col md={3}><strong>Due Date : {moment(item.dueDate).format("DD-MM-YYYY")}</strong></Col>
              <Col md={4}><strong className="d-flex">Due Amount : {numberFormat(item.remainingAmount)}</strong></Col>
              <Col md={2}>

              </Col>

            </Row>


            <Row className="mt-4">
              {
                item.invoiceDocument !== null ? <Col md={3} className="text-center">
                  <a href={item.invoiceDocument != null ? item.invoiceDocument.url : ''} rel='noreferrer' target='_blank'>
                    {/* <i className='bx bxs-file mt-2 fileSizing'></i> */}
                    <i className="far fa-file-pdf fa-2x text-danger"></i>


                  </a>
                  <br />
                  <b>Invoice Documnet</b>
                </Col>
                  :
                  ""
              }


              {item.challanDocument !== null ?

                <Col md={3} className="text-center">
                  <a href={item.challanDocument != null ? item.challanDocument.url : ""} rel='noreferrer' target='_blank' className="">
                    {/* <i className='bx bxs-file mt-2 fileSizing'></i> */}
                    <i className="far fa-file-pdf fa-2x text-danger"></i>


                  </a>
                  <br />
                  <b>Challan Documnet</b>
                </Col>
                : ""

              }

              {item.transportationDocument !== null ?
                <Col md={3} className="text-center">
                  <a href={item.transportationDocument != null ? item.transportationDocument.url : ''} rel='noreferrer' target='_blank'>
                    {/* <i className='bx bxs-file mt-2 fileSizing'></i> */}
                    <i className="far fa-file-pdf fa-2x text-danger"></i>


                  </a>
                  <br />
                  <b>Transportation Documnet</b>
                </Col>
                : ""

              }
              {item.purchaseOrderDocument !== null ?
                <Col md={3} className="text-center">
                  <a href={item.purchaseOrderDocument != null ? item.purchaseOrderDocument.url : ''} rel='noreferrer' target='_blank'>
                    {/* <i className='bx bxs-file mt-2 fileSizing'></i> */}
                    <i className="far fa-file-pdf fa-2x text-danger"></i>
                  </a>
                  <br />
                  <b>Purchase Order</b>
                </Col>
                : ""
              }
            </Row>
          </Row>
        </ModalBody>
      </div>
    </Modal>
  )
}


