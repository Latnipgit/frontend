import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader, Form, FormGroup, Label, Input } from "reactstrap";
import { getAdminData as ongetAdminData, adminregister as Onadminregister } from "../../../store/actions";
import { useDispatch } from "react-redux";
const AdminRegistrationModal = ({ isOpen, toggle }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [apiStatus, setApiStatus] = useState('idle'); 
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const handleMobileValidation = (mobile) => {
    const numericMobile = mobile.replace(/\D/g, '');
    if (numericMobile.length !== 10) {
      return false;
    }
   return true;
  };

  const handleEmailValidation = (email) => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };


const handleSubmit = () => {
    debugger
    const { name, email, mobile } = formData;
  
    if (!handleMobileValidation(mobile)) {
      window.alert('Please enter a valid mobile number.');
      return; 
    }
  
    if (!handleEmailValidation(email)) {
      window.alert('Please enter a valid email address.');
      return; 
    }
    dispatch(Onadminregister(formData));
  
    // try {
    //   setLoading(true);
    //   setApiStatus('loading');
  
    //   const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbkRldGFpbHMiOnsiaWQiOiI2NGQxNGE5NDhhNzRhYjc5YjVjZTYyNDYiLCJlbWFpbElkIjoicm9oYW5zaGFybWE5OTYwMzRAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmEkMTAkZzZEL2RJWFl3MnNxNkFpTUsuRXdadUVuV05raWxxS2JhZmpyeDlEM2F1a1Rlcms4ekZ3a1MifSwiaWF0IjoxNjkyNDU5NDIxLCJleHAiOjE2OTI0NjY2MjF9.mhNVsxkxxTYadbYOjz5fek-O1cegQn83Cbsi_C3gQF8'; // Replace with your actual access token
  
    //   const response = await fetch('https://bafana-backend.azurewebsites.net/api/admin/add', {
    //     method: 'POST',
    //     body: JSON.stringify({ name, email }),
    //     headers: {
    //       'Content-Type': 'application/json',
    //       'x-token-access': token, // Adding the x-token-access header
    //     },
    //   });
  
    //   if (response.ok) {
    //     setApiStatus('success');
    //     toggle();
    //   } else {
    //     setApiStatus('error');
    //     console.error('API error:', response.statusText);
    //   }
    // } catch (error) {
    //   setApiStatus('error');
    //   console.error('API error:', error);
    // } finally {
    //   setLoading(false);
    // }

  
    console.log("Registering admin:", formData);
    // Close the modal
    toggle();
  };
  const handleModalClose = () => {
    setFormData(initialFormData);
    toggle();
  };
  return (
    <Modal isOpen={isOpen} role="dialog" autoFocus centered className="exampleModal" tabIndex="-1" toggle={toggle}>
      <div className="modal-content">
        <ModalHeader toggle={toggle}>Admin Registration</ModalHeader>
        <ModalBody>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input type="text" name="name" id="name" value={formData.name} onChange={handleChange} />
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input type="email" name="email" id="email" value={formData.email} onChange={handleChange} />
            </FormGroup>
            <FormGroup>
              <Label for="mobile">Mobile Number</Label>
              <Input type="text" name="mobile" id="mobile" value={formData.mobile} onChange={handleChange} />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button type="button" color="secondary" onClick={handleModalClose}>
            Close
          </Button>
          <Button type="button" color="primary" onClick={handleSubmit}>
            Register
          </Button>
        </ModalFooter>
      </div>
    </Modal>
  );
};


AdminRegistrationModal.propTypes = {
    toggle: PropTypes.func,
    isOpen: PropTypes.bool,
  };
  
export default AdminRegistrationModal;
