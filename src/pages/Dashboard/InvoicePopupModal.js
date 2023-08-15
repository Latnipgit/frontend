import React, { useState } from "react"
import PropTypes from "prop-types"
import {
    Button,
    FormGroup,
    Input,
    Label,
    Modal,
    Card,
    CardBody,
    ModalBody,
    ModalFooter,
    ModalHeader,
    Table,
    Row, Col
} from "reactstrap"



const InvoiceModal = props => {
    const { isOpen, toggle } = props
    const [attachments, setAttachments] = useState([
        { name: 'document.pdf', type: 'application/pdf' },
        { name: 'image.jpg', type: 'image/jpeg' },
        { name: 'document.pdf', type: 'application/pdf' },
        { name: 'document.pdf', type: 'application/pdf' },
        { name: 'document.pdf', type: 'application/pdf' },
        { name: 'document.pdf', type: 'application/pdf' },
        // Add more attachments as needed
    ]);
    const renderStarRating = (rating) => {
        const starCount = 5; // Number of stars
        const fullStarCount = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;
      
        const stars = [];
      
        for (let i = 0; i < fullStarCount; i++) {
          stars.push(<i key={i} className="fas fa-star"></i>);
        }
      
        if (hasHalfStar) {
          stars.push(<i key="half" className="fas fa-star-half-alt"></i>);
        }
      
        const remainingStars = starCount - fullStarCount - (hasHalfStar ? 1 : 0);
        for (let i = 0; i < remainingStars; i++) {
          stars.push(<i key={`empty-${i}`} className="far fa-star"></i>);
        }
      
        return stars;
      };
      const existingReviews = [
        { rating: 4.5, comment: "Great product!" },
        { rating: 3, comment: "Average quality." },
        // ... other review objects
      ];
      
    return (
        <Modal
            isOpen={isOpen}
            role="dialog"
            autoFocus={true}
            centered={true}
            className="invoiceModal modal-lg"
            tabIndex="-1"
            toggle={toggle}
        >
            <div className="modal-content">
                <ModalHeader toggle={toggle}>Invoice Details</ModalHeader>
                <ModalBody>
                    <Row>
                        <Col md="6">
                        <h5>Buyer Information</h5>
                            <Card className="mb-3">
                                <CardBody className="buyer-card-body">
                                   
                                    <p className="mb-2">
                                        Invoice Number: <span className="text-primary">#INV2023</span>
                                    </p>
                                    <p className="mb-4">
                                        Billing Name: <span className="text-primary">John Doe</span>
                                    </p>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="6">
                        <h5>Seller Information</h5>
                            <Card className="mb-3">
                                <CardBody className="seller-card-body">
                                    
                                    <p className="mb-2">
                                        Seller Name: <span className="text-primary">Your Company Name</span>
                                    </p>
                                    <p className="mb-4">
                                        Address: <span className="text-primary">123 Main St, City</span>
                                    </p>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <h5>Invoice Items</h5>
                    <Card className="mb-3">
                        <CardBody className="invoice-items-card-body">

                            <div className="table-responsive">
                                <Table className="table align-middle table-nowrap">
                                    <thead>
                                        <tr>
                                            <th scope="col">Item</th>
                                            <th scope="col">Description</th>
                                            <th scope="col">Quantity</th>
                                            <th scope="col">Unit Price</th>
                                            <th scope="col">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Wireless Headphone (Black)</td>
                                            <td>2</td>
                                            <td>$225</td>
                                            <td>$450</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Hoodie (Blue)</td>
                                            <td>1</td>
                                            <td>$145</td>
                                            <td>$145</td>
                                        </tr>
                                        {/* Add more rows as needed */}
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <td colSpan="4">
                                                <h6 className="m-0 text-right">Sub Total:</h6>
                                            </td>
                                            <td>$595</td>
                                        </tr>
                                        <tr>
                                            <td colSpan="4">
                                                <h6 className="m-0 text-right">Tax (10%):</h6>
                                            </td>
                                            <td>$59.5</td>
                                        </tr>
                                        <tr>
                                            <td colSpan="4">
                                                <h6 className="m-0 text-right">Total:</h6>
                                            </td>
                                            <td>$654.5</td>
                                        </tr>
                                    </tfoot>
                                </Table>
                            </div>
                        </CardBody>
                    </Card>
                    <h5>Attachments</h5>
                    <Row>
                        {attachments.map((file, index) => (
                            <Col md="4" key={index}>
                                <Card className="mb-3">
                                    <CardBody className="attachment-card-body" style={{ background: 'rgba(0, 0, 0, 0.05)' }}>
                                        <div className="attachment-icon">
                                            {file.type === 'application/pdf' ? (
                                                <i className="far fa-file-pdf fa-2x text-danger"></i>
                                            ) : (
                                                <i className="far fa-file-image fa-2x text-primary"></i>
                                            )}
                                        </div>
                                        <div className="attachment-info">
                                            <span>{file.name}</span>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                    <div className="existing-reviews">
  <h5>Existing Reviews</h5>
  {existingReviews.map((review, index) => (
    <div className="review" key={index}>
      <div className="review-rating">
        {renderStarRating(review.rating)} {/* Render star icons based on the rating */}
      </div>
      <p>{review.comment}</p>
    </div>
  ))}
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

InvoiceModal.propTypes = {
    toggle: PropTypes.func,
    isOpen: PropTypes.bool,
}

export default InvoiceModal