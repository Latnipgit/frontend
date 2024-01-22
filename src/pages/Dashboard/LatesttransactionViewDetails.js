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
import { toast ,ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useLocation } from 'react-router-dom';

function LatesttransactionViewDetails (props){
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

    const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
    const toggleModal = () => setModalOpen(!modalOpen);

    const handleLevelSelection = (level) => {
        setSelectedLevel(level);
        toggleModal();
    };
    const isReferDisabled = selectedLevel === '';
    const existingReviews = [
        { rating: 3.5, comment: "I have been using this product for a while now, and I am incredibly impressed with its features and performance. From the moment I started using it, I could tell that the team behind this product is dedicated to delivering top-notch quality.!" },
        // { rating: 3, comment: "Average quality." },
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
  const handleActionSelect =()=>{
    if(selectedOption.value=="Approved"){
        toast.success("Transaction Approved")
    }
    if(selectedOption.value=="Disputed"){
        toast.success("Transaction Disputed")
    }
    if(selectedOption.value=="Esclate"){
        toast.success("Transaction Esclate to Next Level")
    }
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


console.log("selectedselected",selected)
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
                                                    Reference No. : <span className="text-primary">{selected!= "" && selected.debtor != undefined? selected.debtor.id:'BAF-236525'}</span>
                                                </h5>
                                            </div>
                                            <div className="col-md-4">
                                                <h5 className="text-right">
                                                    Date: <span className="text-primary">{selected!= "" && selected.debtor != undefined? moment(selected.debtor.createdAt).format("DD-MM-YYYY"):'10-02-2020'}</span>
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
                                        Seller Name: <span className="text-primary">{selected!= "" && selected.debtor != undefined? selected.debtor.ownerName:'Rohan'}</span>
                                    </p>
                                    <p className="mb-2">
                                        Company name : <span className="text-primary">{selected!= "" && selected.debtor != undefined? selected.debtor.companyName:'TATA'}</span>
                                    </p>
                                    <p className="mb-2">
                                        GST Number : <span className="text-primary">{selected!= "" && selected.debtor != undefined? selected.debtor.gstin:'OPIO5652YY'}</span>
                                    </p>
                                    <p className="mb-2">
                                        Contact Number : <span className="text-primary">{selected!= "" && selected.debtor != undefined? selected.debtor.ownerMobile:'89896589'}</span>
                                    </p>
                                    <p className="mb-2">
                                        City : <span className="text-primary">{selected!= "" && selected.debtor != undefined? selected.debtor.ownerMobile:'Jaipur'}</span>
                                    </p>
                                    <p className="mb-2">
                                        State : <span className="text-primary">{selected!= "" && selected.debtor != undefined? selected.debtor.ownerMobile:'Rajasthan'}</span>
                                    </p>

                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="6" className="mt-4">
                            <h4>Buyer Information</h4>
                            <Card className="mb-3 shadow">
                                <CardBody className="seller-card-body">


                                    <p className="mb-2">
                                        Buyer Name: <span className="text-primary">{selected!= "" && selected.debtor != undefined? selected.debtor.ownerName:'Harshit sharma'}</span>
                                    </p>
                                    <p className="mb-2">
                                        Company name : <span className="text-primary">{selected!= "" && selected.debtor != undefined? selected.debtor.companyName:'Latnip It'}</span>
                                    </p>
                                    <p className="mb-2">
                                        GST Number : <span className="text-primary">{selected!= ""&& selected.debtor != undefined? selected.debtor.gstin:'JDYDN5655II'}</span>
                                    </p>
                                    <p className="mb-2">
                                        Contact Number : <span className="text-primary">{selected!= "" && selected.debtor != undefined? selected.debtor.ownerMobile:'9928047388'}</span>
                                    </p>
                                    <p className="mb-2">
                                        City : <span className="text-primary">{selected!= "" && selected.debtor != undefined? selected.debtor.ownerMobile:'Jaipur'}</span>
                                    </p>
                                    <p className="mb-2">
                                        State : <span className="text-primary">{selected!= "" && selected.debtor != undefined? selected.debtor.ownerMobile:'Rajasthan'}</span>
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
    <Col md={4}><b>Invoice # : BAF-98658  </b></Col>
    <Col md={4}><b>Date : 12-05-2020  </b></Col>
    <Col md={4}><b>Amount : 50,000  </b></Col>
</Row>
                    
<Row className="mt-4">
                        {attachments.map((file, index) => (
                            <Col md="4" key={index}>
                                <Card className="mb-3 shadow-xl">
                                    <CardBody className="attachment-card-body" style={{ background: 'rgba(0, 0, 0, 0.05)' , height:"100px"}}>
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
                  <h4 className="mt-4">Seller Rating</h4>
                    <div className="existing-reviews d-flex flex-wrap justify-content-between align-items-center mt-4">
                        {existingReviews.map((review, index) => (
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
                                                {review.comment}
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
                                <Row className="mt-4">
                        {sellerattachments.map((file, index) => (
                            <Col md="4" key={index}>
                                <Card className="mb-3">
                                    <CardBody className="attachment-card-body" style={{ background: 'rgba(0, 0, 0, 0.05)', height:"100px" }}>
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
                    <div className="d-flex justify-content-between mt-2">
                        <h4 className="mt-2">Buyer Payment History</h4>
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
</CardBody>
</Card>
<h4 className="mt-2">Buyer Notes</h4>
<p>I have been using this product for a while now, and I am incredibly impressed with its features and performance.</p>




                        </CardBody>
                    </Card>
                </Col>
            </Row>



            <Row className="mt-4">
                <Col md="4" className="mt-3" ><h3>Action</h3></Col>
                <Col md="4" className="mt-3" >
                    <div className="col-sm-auto">
                        <label className="visually-hidden" htmlFor="autoSizingSelect">Preference</label>
                        {/* <select defaultValue="0" className="form-select" >
                                    <option value="0">Select from here...</option>
                                    <option value="Approved" onChange={(value)=>handleSelection(value)}>Approved</option>
                                    <option value="Disputed" onChange={(value)=>handleSelection(value)}>Disputed</option>
                                    <option value="Esclate" onChange={(value)=>handleSelection(value)}>Esclate To Next Level</option>
                                    <option value="RequestToAddiyional " onChange={(value)=>handleSelection(value)}>Request For Additional Document</option>
                                    <option value="RequestForCA"onChange={(value)=>handleSelection(value)}>Request For CA Certificate</option>
                                  
                                </select> */}

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
                            <Button  className="btn btn-info" onClick={()=>handleActionSelect()}>Submit</Button>

                        </Col>

                    </Row>
                    {console.log("selected.value",selectedOption)}
               {selectedOption != null && selectedOption.value == "Requesttoadditionaldocumnet"?  
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
    <Input type="checkbox" style={checkboxStyle}/>&nbsp; CA Certificate 
</Label></Col>
<Col md={6}>
<Label> 
    <Input type="checkbox" style={checkboxStyle}/>&nbsp; Purchase Order Document 
</Label>
</Col>
<Col md={6}><Label> 
    <Input type="checkbox" style={checkboxStyle}/>&nbsp; Transportation Document 
</Label> </Col>
<Col md={6}><Label> 
    <Input type="checkbox" style={checkboxStyle}/>&nbsp; Payment Record Document 
</Label></Col>
                  
                    </Row>

                    <Row className="mt-3">
                        {/* <Col md={3}></Col> */}
                        <Col md={6} className="text-left">
                        <Label>
                            Enter Additional Required Information <br/> <br/>
    <Input type="textarea" placeholder="Requried Documents From Seller..." style={{ width:"380px", height:"80px"}}/>
</Label>

                        </Col>
                        <Col md={3}></Col>
                    </Row>
                    <Row>
                        {/* <Col md={5}></Col> */}
                        <Col md={4}>
                            <Button className="btn btn-info">Request Document</Button>
                        </Col>
                        <Col md={5}></Col>
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
    <Input type="checkbox" style={checkboxStyle}/>&nbsp; CA Certificate 
</Label></Col>
<Col md={6}>
<Label> 
    <Input type="checkbox" style={checkboxStyle}/>&nbsp; Purchase Order Document 
</Label>
</Col>
<Col md={6}><Label> 
    <Input type="checkbox" style={checkboxStyle}/>&nbsp; Transportation Document 
</Label> </Col>
<Col md={6}><Label> 
    <Input type="checkbox" style={checkboxStyle}/>&nbsp; Payment Record Document 
</Label></Col>
                  
                    </Row>

                    <Row className="mt-3">
                        {/* <Col md={3}></Col> */}
                        <Col md={6} className="text-left">
                        <Label>
                            Enter Additional Required Information <br/> <br/>
    <Input type="textarea" placeholder="Requried Documents From Seller/Buyer..." style={{ width:"380px", height:"80px"}}/>
</Label>

                        </Col>
                        <Col md={3}></Col>
                    </Row>
                    <Row>
                        {/* <Col md={5}></Col> */}
                        <Col md={4}>
                            <Button className="btn btn-info">Request Document</Button>
                        </Col>
                        <Col md={5}></Col>
                    </Row>
                </CardBody>
              </Card>
                </Col>
            </Row>
                  </div>
                  :
                  
                  <div className="mb-5 h-50vh">
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    </div>}
            
                    <ToastContainer />
    </div>
  )
}

export default LatesttransactionViewDetails
