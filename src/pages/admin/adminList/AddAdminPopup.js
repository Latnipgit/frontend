import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader, Form, FormGroup, Label, Input, FormFeedback } from "reactstrap";
import { useDispatch } from "react-redux";
import * as Yup from 'yup'; // Import Yup for validation
import { useFormik } from 'formik'; // Import useFormik for form handling
import "../../../pages/admin/Common.scss";
import { adminregister as onadminregister } from "../../../store/actions";

const AdminRegistrationModal = ({ isOpen, toggle }) => {
  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    mobile: Yup.string().matches(/^\d{10}$/, "Invalid mobile number").required("Mobile number is required"),
    password: Yup.string().required("Password is required"),
    role: Yup.string().required("Role is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      mobile: "",
      password: "",
      role: "",
    },
    validationSchema,
    onSubmit: (values) => {
      dispatch(onadminregister(values));
      toggle();
    },
  });

  return (
    <Modal isOpen={isOpen} role="dialog" autoFocus centered className="exampleModal" tabIndex="-1" toggle={toggle}>
      <div className="modal-content">
        <ModalHeader toggle={toggle}>Employee Registration</ModalHeader>
        <ModalBody>
          <Form onSubmit={formik.handleSubmit}>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                type="text"
                name="name"
                id="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                //invalid={formik.touched.name && formik.errors.name}
                required
              />
              {formik.touched.name && formik.errors.name && (
                <FormFeedback invalid>{formik.errors.name}</FormFeedback>
              )}
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                //invalid={formik.touched.email && formik.errors.email}
                required
              />
              {formik.touched.email && formik.errors.email && (
                <FormFeedback invalid>{formik.errors.email}</FormFeedback>
              )}
            </FormGroup>
            <FormGroup>
              <Label for="mobile">Mobile Number</Label>
              <Input
                type="text"
                name="mobile"
                id="mobile"
                value={formik.values.mobile}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                //invalid={formik.touched.mobile && formik.errors.mobile}
                required
              />
              {formik.touched.mobile && formik.errors.mobile && (
                <FormFeedback invalid>{formik.errors.mobile}</FormFeedback>
              )}
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                type="password"
                name="password"
                id="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                //invalid={formik.touched.password && formik.errors.password}
                required
              />
              {formik.touched.password && formik.errors.password && (
                <FormFeedback invalid>{formik.errors.password}</FormFeedback>
              )}
            </FormGroup>
            <FormGroup>
              <Label for="role">Role</Label>
              <div className="col-sm-auto">
                <select
                  name="role"
                  id="role"
                  className="form-select custom-content"
                  value={formik.values.role}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  //invalid={formik.touched.role && formik.errors.role}
                  required
                >
                  <option value="">Select from here...</option>
                  <option value="L1-Support">L1-Support</option>
                  <option value="L2-Support">L2-Support</option>
                  <option value="L3-Support">L3-Support</option>
                </select>
                {formik.touched.role && formik.errors.role && (
                  <FormFeedback invalid>{formik.errors.role}</FormFeedback>
                )}
              </div>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button type="button" color="secondary" onClick={toggle}>
            Close
          </Button>
          <Button type="button" color="primary" onClick={formik.handleSubmit} disabled={!formik.isValid}>
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
