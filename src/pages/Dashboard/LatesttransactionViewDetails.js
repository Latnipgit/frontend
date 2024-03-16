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
    Row, Col, CardHeader
} from "reactstrap"
import { Link } from 'react-router-dom';
import moment from 'moment'
import Select from 'react-select';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { approveRejectLatestTrans, esclateTransaction, requestForAdditionalDoc } from "store/LatestTransaction/latestTrans.action"
import { selectLatestTansMap } from "store/LatestTransaction/latestTans.selecter"
import { useSelector, useDispatch } from "react-redux"

import { useLocation } from 'react-router-dom';
import { select } from "redux-saga/effects";

function LatesttransactionViewDetails(props) {
    const location = useLocation();
    const { isOpen, toggle } = props
    const selected = location.state.selected
    console.log("InvoiceModal", location
    )
    const colourStyles = {
        menuList: styles => ({
            ...styles,
            background: '#FFFFFF'
        })

    }
    const customStyles = {

        control: (provided, state) => ({
            ...provided,
            background: "#FAFAFA",
            width: "300px",
            // match with the menu
            borderRadius: state.isFocused ? "3px 3px 0 0" : 3,
            // Overwrittes the different states of border
            borderColor: state.isFocused ? " #4da6ff" : " #80d4ff",
            // Removes weird border around container  
            boxShadow: state.isFocused ? null : null,
            "&:hover": {
                // Overwrittes the different states of border
                borderColor: state.isFocused ? " #4da6ff" : " #80d4ff"
            }
        }),
        option: (provided, state) => ({

            // Your custom option styles here
            backgroundColor: state.isFocused ? '#80bfff' : '#FAFAFA',
            ':hover': {
                backgroundColor: '#80bfff', // Change background color on hover
            },


            menu: base => ({
                ...base,
                // override border radius to match the box
                borderRadius: 0,
                // kill the gap
                marginTop: 2
            }),
            menuList: base => ({
                ...base,
                // kill the white space on first and last option
                padding: 2,
                margin: 2
            })
        }),
        // Add more styles as needed for other parts of the Select component
    };
    const checkboxStyle = {
        border: '2px solid #ff0000',  // Set the border color to red (#ff0000)
        // Add any other styles you need
    };
    const [attachments, setAttachments] = useState([
        { name: 'Invoice Document', type: 'application/pdf' },
        { name: 'challan Document', type: 'image/jpeg' },
        { name: 'Transportation Document', type: 'application/pdf' },
        { name: 'Purchase Order Document', type: 'application/pdf' },
        { name: 'CA Certificate', type: 'application/pdf' },
        // Add more attachments as needed
    ]);
    const [attachmentss, setAttachmentss] = useState([
        { name: 'Invoice', type: 'application/pdf' },
        { name: 'Challan', type: 'image/jpeg' },
        { name: 'Purchase Order', type: 'application/pdf' },

        { name: 'Transportation ', type: 'application/pdf' },

        // Add more attachments as needed
    ]);
    const [sellerattachments, setSellerattachments] = useState([
        // { name: 'Invoice Document', type: 'application/pdf' },
        { name: 'Payment Record Document', type: 'image/jpeg' },
        { name: 'CA Certificate', type: 'application/pdf' },

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
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedLevel, setSelectedLevel] = useState(null);
    const [notesSeller, setnotesSeller] = useState('');
    const [notesBuyer, setnotesBuyer] = useState('');

    const [itemsSeller, setItemsSeller] = useState([]);
    const [itemsBuyer, setItemsBuyer] = useState([]);

    const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
    const toggleModal = () => setModalOpen(!modalOpen);

    const handleLevelSelection = (level) => {
        setSelectedLevel(level);
        toggleModal();
    };
    const isReferDisabled = selectedLevel === '';
    const existingReviews = [
        { rating: 3.5, comment: "I have been using this product for a while now, and I am incredibly impressed with its features and performance. From the moment I started using it, I could tell that the team behind this product is dedicated to delivering top-notch quality.!" },
        { rating: 3, comment: "Average quality." },
        // ... other review objects
    ];

    const [selectedOption, setSelectedOption] = useState(null);
    // const [selectedOption, setSelectedOption] = useState(null);
    const options = [
        { value: 'Approved', label: 'Approved' },
        { value: 'Disputed', label: 'Disputed' },
        { value: 'Esclate', label: 'Esclate to Next Level' },
        { value: 'Requesttoadditionaldocumnet', label: 'Request to additional document' },
        // { value: 'RequesttoCA', label: 'Request to CA Certificate' },
    ];
    const handleChange = (selected) => {
        setSelectedOption(selected);

        // console.log("EsclateEsclate",selected)
    };

    const handleCheckboxChanges = (e) => {
        const { value, checked } = e.target;

        if (checked) {
            // Add item to the array
            setItemsSeller(prevItems => [...prevItems, value]);
        } else {
            // Remove item from the array
            setItemsSeller(prevItems => prevItems.filter(item => item !== value));
        }
    };


    const handleCheckboxChangeBuyer = (e) => {
        const { value, checked } = e.target;

        if (checked) {
            // Add item to the array
            setItemsBuyer(prevItems => [...prevItems, value]);
        } else {
            // Remove item from the array
            setItemsBuyer(prevItems => prevItems.filter(item => item !== value));
        }
    };
    const dispatch = useDispatch()

    const handleActionSelect = () => {
        console.log("selectedselected", selectedOption)

        if (selectedOption.value == "Approved") {

            const payload = {
                "approve": true,
                "paymentId": selected.id,
                "amtPaid": selected.amtPaid
            }
            dispatch(approveRejectLatestTrans(payload))
            toast.success("Transaction Approved")
        }
        if (selectedOption.value == "Disputed") {
            const payload = {
                "approve": false,
                "paymentId": selected.id,
                "amtPaid": selected.amtPaid
            }
            dispatch(approveRejectLatestTrans(payload))
            toast.success("Transaction Disputed")
        }
        if (selectedOption.value == "Esclate") {
            const payload = {
                "paymentId": selected.id
            }
            dispatch(esclateTransaction(payload))
            toast.success("Transaction Esclate to Next Level")
        }
        if (selectedOption.value == "Requesttoadditionaldocumnet") {

        }
    }
    const handleRequestedDoc = () => {
        const payload = {
            "paymentId": selected.id,
            "documentsRequiredFromCreditor": itemsSeller,
            "documentsRequiredFromDebtor": itemsBuyer,
            "isDocumentsRequiredByCreditor": itemsSeller.length != 0 ? "true" : "false",
            "adminRemarksForDebtor": notesBuyer,
            "adminRemarksForCreditor": notesSeller
        }
        console.log("payloadpayload", payload)

        dispatch(requestForAdditionalDoc(payload))
    }
    const [isChecked1, setIsChecked1] = useState(false);
    const [isChecked2, setIsChecked2] = useState(false);

    const handleCheckboxChange = (checkboxNumber) => {
        if (checkboxNumber === 1) {
            setIsChecked1(true);
            setIsChecked2(false);
        } else if (checkboxNumber === 2) {
            setIsChecked1(false);
            setIsChecked2(true);
        }
    };

    const viewDocuments = (value) => {
        console.log("valuee", value)
    }
    console.log("selectedselected ll", itemsSeller)

    return (
        <div className="mt-5 p-5">
            <Row>
                <Col md="12">
                    <Card className="mb-1 shadow-sm">
                        <CardBody className="buyer-card-body">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-8">
                                        <h5>
                                            Reference No. : <span className="text-primary">{selected != "" && selected.defaulterEntry != undefined ? "BAF" + "-" + selected.defaulterEntry.debtor._id.slice(-6).toUpperCase() : ''}</span>
                                        </h5>
                                    </div>
                                    <div className="col-md-4">
                                        <h5 className="text-right">
                                            Date: <span className="text-primary">{selected != "" && selected.defaulterEntry != undefined ? moment(selected.defaulterEntry.debtor.createdAt).format("DD-MM-YYYY") : ''}</span>
                                        </h5>
                                    </div>
                                </div>
                            </div>

                        </CardBody>
                    </Card>
                </Col>
                <Col md="6" className="mt-4">
                    <h4>Seller Information</h4>
                    <Card className="mb-3 shadow">
                        <CardBody className="buyer-card-body">

                            <p className="mb-2">
                                Seller Name: <span className="text-primary">{selected != "" && selected.defaulterEntry != undefined ? <>{selected.defaulterEntry.debtor.firstname} {selected.defaulterEntry.debtor.lastname} </> : ''}</span>
                            </p>
                            <p className="mb-2">
                                Company name : <span className="text-primary">{selected != "" && selected.defaulterEntry.debtor != undefined ? selected.defaulterEntry.debtor.companyName : ''}</span>
                            </p>
                            <p className="mb-2">
                                GST Number : <span className="text-primary">{selected != "" && selected.defaulterEntry.debtor != undefined ? selected.defaulterEntry.debtor.gstin : ''}</span>
                            </p>
                            <p className="mb-2">
                                Contact Number : <span className="text-primary">{selected != "" && selected.defaulterEntry.debtor != undefined ? selected.defaulterEntry.debtor.customerMobile : ''}</span>
                            </p>
                            <p className="mb-2">
                                City : <span className="text-primary">{selected != "" && selected.defaulterEntry.debtor != undefined ? selected.defaulterEntry.debtor.city : ''}</span>
                            </p>
                            <p className="mb-2">
                                State : <span className="text-primary">{selected != "" && selected.defaulterEntry.debtor != undefined ? selected.defaulterEntry.debtor.state : ''}</span>
                            </p>

                        </CardBody>
                    </Card>
                </Col>
                <Col md="6" className="mt-4">
                    <h4>Buyer Information</h4>
                    <Card className="mb-3 shadow">
                        <CardBody className="seller-card-body">


                            <p className="mb-2">
                                Buyer Name: <span className="text-primary">{selected != "" && selected.defaulterEntry.creditor != undefined ? selected.defaulterEntry.creditor.companyName : ''}</span>
                            </p>
                            <p className="mb-2">
                                Company name : <span className="text-primary">{selected != "" && selected.defaulterEntry.creditor != undefined ? selected.defaulterEntry.creditor.companyName : ''}</span>
                            </p>
                            <p className="mb-2">
                                GST Number : <span className="text-primary">{selected != "" && selected.defaulterEntry.creditor != undefined ? selected.defaulterEntry.creditor.gstin : ''}</span>
                            </p>
                            <p className="mb-2">
                                Contact Number : <span className="text-primary">{selected != "" && selected.defaulterEntry.creditor != undefined ? selected.defaulterEntry.creditor.ownerMobile : ''}</span>
                            </p>
                            <p className="mb-2">
                                City : <span className="text-primary">{selected != "" && selected.defaulterEntry.creditor != undefined ? selected.defaulterEntry.creditor.city : ''}</span>
                            </p>
                            <p className="mb-2">
                                State : <span className="text-primary">{selected != "" && selected.defaulterEntry.creditor != undefined ? selected.defaulterEntry.creditor.state : ''}</span>
                            </p>

                        </CardBody>
                    </Card>
                </Col>
            </Row>



            <Row>

                <Col md="6" className="mt-4">
                    <h4>Seller Attachments</h4>
                    <Card className="mb-3 shadow">
                        <CardBody className="buyer-card-body">

                            <Row>
                                <Table className="table align-middle table-nowrap">
                                    <thead>
                                        <tr>
                                            <th>Invoice# </th>

                                            <th>Date</th>
                                            <th>Amount</th>
                                            <th>Action</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {selected.defaulterEntry.invoices.map((item) => {
                                            return <tr key={item} >
                                                <td>{item.invoiceNumber}</td>

                                                <td>{moment(item.dueDate).format("DD-MM-YYYY")}</td>
                                                <td>{item.subTotal}</td>
                                                <td><Button className="btn btn-sm btn-info" onClick={() => { viewDocuments(item) }}> View Document</Button></td>
                                            </tr>
                                        })}



                                        {/* Add more rows as needed */}
                                    </tbody>
                                </Table>
                            </Row>



                            <Row>
                                <h4 className="mt-4">Seller Rating</h4>
                                <div className="existing-reviews d-flex flex-wrap justify-content-between align-items-center mt-4">
                                    {selected.defaulterEntry.debtor.ratings.map((review, index) => (
                                        <div className="review" key={index}>
                                            <div className="review-rating d-flex align-items-center " style={{ color: 'goldenrod', fontSize: '18px' }}>
                                                {renderStarRating(review.rating)}
                                                <h5
                                                    className="ml-2 mb-1 mt-2 mx-2"
                                                    style={{ color: 'goldenrod', fontSize: '18px' }} // Inline CSS
                                                >
                                                    {review.rating}
                                                </h5>
                                            </div>
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col">
                                                        <p className="text-justify">
                                                            {review.questionId} {review.response}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </Row>

                        </CardBody>
                    </Card>
                </Col>
                <Col md="6" className="mt-4">
                    <h4>Buyer Attachments</h4>
                    <Card className="mb-3 shadow">
                        <CardBody className="seller-card-body">

                            <div className="d-flex justify-content-between mt-2">
                                {/* <div className="mr-auto mt-2">
                            <Link to="/company-history" className="btn btn-primary">View Buyer history</Link>
                        </div> */}
                            </div>
                            <Card className="mb-3 mt-1">

                                <CardBody>
                                    <div className="table-responsive">
                                        <Table className="table align-middle table-nowrap">
                                            <thead>
                                                <tr>
                                                    <th>Date</th>
                                                    {/* <th>Type</th> */}
                                                    <th>Amount</th>
                                                    <th>Payment Method</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>2023-08-01</td>
                                                    {/* <td>Bank Deposit</td> */}
                                                    <td>50000</td>
                                                    <td>Bank Transfer</td>
                                                </tr>
                                                <tr>
                                                    <td>2023-08-05</td>
                                                    {/* <td>IGST Payment</td> */}
                                                    <td>10000</td>
                                                    <td>Cash</td>
                                                </tr>
                                                {/* Add more rows as needed */}
                                            </tbody>
                                        </Table>
                                    </div>
                                    <Row className="mt-4">
                                        {sellerattachments.map((file, index) => (
                                            <Col md="6" key={index}>
                                                <Card className="mb-3">
                                                    <CardBody className="attachment-card-body" style={{ background: 'rgba(0, 0, 0, 0.05)', height: "80px" }}>
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
                                </CardBody>
                            </Card>
                            <h4 className="mt-2">Buyer Notes</h4>
                            <p>I have been using this product for a while now, and I am incredibly impressed with its features and performance.</p>




                        </CardBody>
                    </Card>
                </Col>
            </Row>

<Row>
    <Col md={6}>
       
        <h4>Seller Logs</h4>
        <Card className="mb-3 shadow">
        <CardBody className="seller-card-body">
            <Row  className="bg-light p-2">
            <div className="d-flex">
            <i className='bx bxs-user-circle' style={{ fontSize:'35px'}}></i> 
  <span className="mt-2 text-capitalize "> {JSON.parse(localStorage.getItem("authUser")).name}</span>

 
            </div>
            <div className=""> <span>You Requested For Supporting Document.</span>
            <br/>
  <span>13-03-2024</span></div>
                       </Row>
                       <Row  className=" mt-1 p-2" style={{ background:"#fff2e6"}}>
            <div className="d-flex">
            <i className='bx bxs-user-circle' style={{ fontSize:'35px'}}></i> 
  {/* <span className="mt-2 text-capitalize "> {JSON.parse(localStorage.getItem("authUser")).name}</span> */}
  <span className="mt-2 text-capitalize "> Harshit Sharma</span>

 
            </div>
            <div className=""> <span>User Uploaded Document.</span>
            <br/>
  <span>13-03-2024</span></div>
                       </Row>
                       <Row  className="bg-light p-2 mt-1">
            <div className="d-flex">
            <i className='bx bxs-user-circle' style={{ fontSize:'35px'}}></i> 
  <span className="mt-2 text-capitalize "> {JSON.parse(localStorage.getItem("authUser")).name}</span>

 
            </div>
            <div className=""> <span>You Requested For Supporting Document.</span>
            <br/>
  <span>13-03-2024</span></div>
                       </Row>
            </CardBody>

        </Card>
    </Col>
    <Col md={6}>
       
       <h4>Buyer Logs</h4>
       <Card className="mb-3 shadow">
       <CardBody className="seller-card-body">
           <Row  className="bg-light p-2">
           <div className="d-flex">
           <i className='bx bxs-user-circle' style={{ fontSize:'35px'}}></i> 
 <span className="mt-2 text-capitalize "> {JSON.parse(localStorage.getItem("authUser")).name}</span>


           </div>
           <div className=""> <span>You Requested For Supporting Document.</span>
           <br/>
 <span>13-03-2024</span></div>
                      </Row>
                      <Row  className=" mt-1 p-2" style={{ background:"#fff2e6"}}>
           <div className="d-flex">
           <i className='bx bxs-user-circle' style={{ fontSize:'35px'}}></i> 
 {/* <span className="mt-2 text-capitalize "> {JSON.parse(localStorage.getItem("authUser")).name}</span> */}
 <span className="mt-2 text-capitalize "> Harshit Sharma</span>


           </div>
           <div className=""> <span>User Uploaded Document.</span>
           <br/>
 <span>13-03-2024</span></div>
                      </Row>
                      <Row  className="bg-light p-2 mt-1">
           <div className="d-flex">
           <i className='bx bxs-user-circle' style={{ fontSize:'35px'}}></i> 
 <span className="mt-2 text-capitalize "> {JSON.parse(localStorage.getItem("authUser")).name}</span>


           </div>
           <div className=""> <span>You Requested For Supporting Document.</span>
           <br/>
 <span>13-03-2024</span></div>
                      </Row>
           </CardBody>

       </Card>
   </Col>
</Row>

            <Row className="mt-4">
                <Col md="4" className="mt-3" ><h3>Action</h3></Col>
                <Col md="4" className="mt-3" >
                    <div className="col-sm-auto">
                        <label className="visually-hidden" htmlFor="autoSizingSelect">Preference</label>


                        <Select
                            options={options}
                            value={selectedOption}
                            onChange={handleChange}
                            placeholder="Select an option"
                            styles={colourStyles}


                        />
                    </div>
                </Col>
                <Col md="2">
                </Col>
                <Col md="2" className="mt-3" >
                    <Button className="btn btn-info" onClick={() => handleActionSelect()}>Submit</Button>

                </Col>

            </Row>
            {console.log("selected.value", selectedOption)}
            {selectedOption != null && selectedOption.value == "Requesttoadditionaldocumnet" ?
                <div className="mb-5">

                    <Row className="mt-4">
                        <Col md={6}>
                            <Card className="shadow-sm">
                                <CardHeader className="bg-white">
                                    <h5 className="">Seller</h5>

                                </CardHeader>
                                <CardBody>
                                    <Row>
                                        <h5 className="">Request A Document</h5>

                                        <Col md={6}><Label>
                                            <Input type="checkbox" style={checkboxStyle}
                                                value="cacertificate"
                                                onChange={handleCheckboxChanges}
                                                checked={itemsSeller.includes("cacertificate")}
                                            />&nbsp; CA Certificate
                                        </Label></Col>
                                        <Col md={6}>
                                            <Label>
                                                <Input type="checkbox" style={checkboxStyle}
                                                    value="purchaseOrderDocument"
                                                    onChange={handleCheckboxChanges}
                                                    checked={itemsSeller.includes("purchaseOrderDocument")}

                                                />&nbsp; Purchase Order Document
                                            </Label>
                                        </Col>
                                        <Col md={6}><Label>
                                            <Input type="checkbox" style={checkboxStyle}
                                                value="transportationDocument"
                                                onChange={handleCheckboxChanges}
                                                checked={itemsSeller.includes("transportationDocument")}
                                            />&nbsp; Transportation Document
                                        </Label> </Col>
                                        <Col md={6}><Label>
                                            <Input type="checkbox" style={checkboxStyle}
                                                value="PaymentSeller"
                                                onChange={handleCheckboxChanges}
                                                checked={itemsSeller.includes("PaymentSeller")}
                                            />&nbsp; Payment Record Document
                                        </Label></Col>

                                    </Row>

                                    <Row className="mt-3">
                                        {/* <Col md={3}></Col> */}
                                        <Col md={6} className="text-left">
                                            <Label>
                                                Enter Additional Required Information <br /> <br />
                                                <Input type="textarea" placeholder="Requried Documents From Seller..." style={{ width: "380px", height: "80px" }}

                                                    onChange={(e) => setnotesSeller(e.target.value)}
                                                />
                                            </Label>

                                        </Col>
                                        <Col md={3}></Col>
                                    </Row>

                                </CardBody>
                            </Card>
                        </Col>

                        <Col md={6}>
                            <Card className="shadow-sm">
                                <CardHeader className="bg-white">
                                    <h5 className="">Buyer</h5>

                                </CardHeader>
                                <CardBody>
                                    <Row>
                                        <h5 className="">Request A Document</h5>

                                        <Col md={6}><Label>
                                            <Input type="checkbox" style={checkboxStyle}
                                                value="cacertificate"
                                                onChange={handleCheckboxChangeBuyer}
                                                checked={itemsBuyer.includes("cacertificate")}
                                            />&nbsp; CA Certificate
                                        </Label></Col>
                                        {/* <Col md={6}>
{/* <Label> 
    <Input type="checkbox" style={checkboxStyle}/>&nbsp; Purchase Order Document 
</Label> */}
                                        {/* </Col>
<Col md={6}><Label> 
    <Input type="checkbox" style={checkboxStyle}/>&nbsp; Transportation Document 
</Label> </Col> */}
                                        <Col md={6}><Label>
                                            <Input type="checkbox" style={checkboxStyle}
                                                value="PaymentRecord"
                                                onChange={handleCheckboxChangeBuyer}
                                                checked={itemsBuyer.includes("PaymentRecord")}

                                            />&nbsp; Payment Record Document
                                        </Label></Col>

                                    </Row>

                                    <Row className="mt-5">
                                        {/* <Col md={3}></Col> */}
                                        <Col md={6} className="text-left">
                                            <Label>
                                                Enter Additional Required Information <br /> <br />
                                                <Input type="textarea" placeholder="Requried Documents From Seller/Buyer..." style={{ width: "380px", height: "80px" }}
                                                    onChange={(e) => setnotesBuyer(e.target.value)}
                                                />
                                            </Label>

                                        </Col>
                                        <Col md={3}></Col>
                                    </Row>


                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        {/* <Col md={5}></Col> */}
                        <Col md={4}>
                            <Button className="btn btn-info" onClick={() => handleRequestedDoc()}>Request Document</Button>
                        </Col>
                        <Col md={5}></Col>
                    </Row>
                </div>
                :

                <div className="mb-5 h-50vh">
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                </div>}

            <ToastContainer />
        </div>
    )
}

export default LatesttransactionViewDetails
