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
    ModalHeader, Dropdown, DropdownToggle, DropdownMenu, DropdownItem,
    Table,
    Row, Col
} from "reactstrap"
import { Link } from 'react-router-dom';


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
    const [sellerattachments, setSellerattachments] = useState([
        { name: 'document.pdf', type: 'application/pdf' },
        { name: 'image.jpg', type: 'image/jpeg' },
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
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [selectedLevel, setSelectedLevel] = useState('');
    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };
    const isReferDisabled = selectedLevel === '';
    const existingReviews = [
        { rating: 4.5, comment: "I have been using this product for a while now, and I am incredibly impressed with its features and performance. From the moment I started using it, I could tell that the team behind this product is dedicated to delivering top-notch quality.!" },
        // { rating: 3, comment: "Average quality." },
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
                <ModalHeader toggle={toggle}>
                    <div className="modal-header-title me-auto">Invoice Details</div>
                </ModalHeader>
                <ModalBody>
                    <Row>
                        <Col md="12">
                            <Card className="mb-1">
                                <CardBody className="buyer-card-body">
                                    <h4>
                                        Reference No.  : <span className="text-primary"> #123456</span>
                                    </h4>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="6">
                            <h5>Seller Information</h5>
                            <Card className="mb-3">
                                <CardBody className="buyer-card-body">

                                    <p className="mb-2">
                                        Billing Name: <span className="text-primary">Ramakant Saraswat</span>
                                    </p>
                                    <p className="mb-2">
                                        Company name : <span className="text-primary">Latnip IT Solution</span>
                                    </p>
                                    <p className="mb-2">
                                        GST Number : <span className="text-primary">LKJHGFHGDHGFB</span>
                                    </p>
                                    <p className="mb-2">
                                        Contact Number : <span className="text-primary">(+91)-9876543210</span>
                                    </p>

                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="6">
                            <h5>Buyer Information</h5>
                            <Card className="mb-3">
                                <CardBody className="seller-card-body">


                                    <p className="mb-2">
                                        Billing Name: <span className="text-primary">Ramakant Saraswat</span>
                                    </p>
                                    <p className="mb-2">
                                        Company name : <span className="text-primary">Latnip IT Solution</span>
                                    </p>
                                    <p className="mb-2">
                                        GST Number : <span className="text-primary">LKJHGFHGDHGFB</span>
                                    </p>
                                    <p className="mb-2">
                                        Contact Number : <span className="text-primary">(+91)-9876543210</span>
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
                    <h5>Seller Attachments</h5>
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
                    <Row>

                    </Row>
                    <h5>Seller Rating</h5>
                    <div className="existing-reviews d-flex flex-wrap justify-content-between align-items-center">
                        {existingReviews.map((review, index) => (
                            <div className="review" key={index}>
                                <div className="review-rating d-flex align-items-center " style={{ color: 'goldenrod', fontSize: '18px' }}>
                                    {renderStarRating(review.rating)}
                                    <h5
                                        className="ml-2 mb-1"
                                        style={{ color: 'goldenrod', fontSize: '18px' }} // Inline CSS
                                    >
                                        {review.rating}
                                    </h5>
                                </div>
                                <p>{review.comment}</p>
                            </div>
                        ))}
                    </div>







                    <div className="d-flex justify-content-between">
                        <h5 className="mt-2">Buyer Payment History</h5>
                        <div className="ml-auto">
                            <Link to="/company-history" className="btn btn-primary">View Buyer Company history</Link>
                        </div>
                    </div>
                    <Card className="mb-3">

                        <CardBody>
                            <div className="table-responsive">
                                <Table className="table align-middle table-nowrap">
                                    <thead>
                                        <tr>
                                            <th>Date</th>
                                            <th>Type</th>
                                            <th>Amount</th>
                                            <th>Payment Method</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>2023-08-01</td>
                                            <td>Bank Deposit</td>
                                            <td>$500</td>
                                            <td>Bank Transfer</td>
                                        </tr>
                                        <tr>
                                            <td>2023-08-05</td>
                                            <td>IGST Payment</td>
                                            <td>$100</td>
                                            <td>Credit Card</td>
                                        </tr>
                                        {/* Add more rows as needed */}
                                    </tbody>
                                </Table>
                            </div>
                        </CardBody>
                    </Card>
                    <h5>Buyer Attachments</h5>
                    <Row>
                        {sellerattachments.map((file, index) => (
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
                    <Row>
                        <Col md="4"><h5>Action</h5></Col>
                        <Col md="4">
                            <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown} className="mr-2">
                                <DropdownToggle caret>
                                    {selectedLevel ? selectedLevel : 'Select Level of invoice'}
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem onClick={() => setSelectedLevel('Approved')}>Approved</DropdownItem>
                                    <DropdownItem onClick={() => setSelectedLevel('Rejected')}>Rejected</DropdownItem>
                                    <DropdownItem onClick={() => setSelectedLevel('L1')}>L1</DropdownItem>
                                    <DropdownItem onClick={() => setSelectedLevel('L2')}>L2</DropdownItem>
                                    <DropdownItem onClick={() => setSelectedLevel('L3')}>L3</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </Col>

                        <Col md="4"><Link type="button" className="btn btn-primary">Submit</Link>
                        </Col>

                    </Row>


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
