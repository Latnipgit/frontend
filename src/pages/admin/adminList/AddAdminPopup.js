import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader, Form, FormGroup, Label, Input } from "reactstrap";

const AdminRegistrationModal = ({ isOpen, toggle }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call your API to register the admin using formData
    console.log("Registering admin:", formData);
    // Close the modal
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
              <Label for="password">Password</Label>
              <Input type="password" name="password" id="password" value={formData.password} onChange={handleChange} />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button type="button" color="secondary" onClick={toggle}>
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
