import React, { useEffect, useState, useMemo } from "react";
import PropTypes from "prop-types";
import withRouter from "components/Common/withRouter";
import { isEmpty } from "lodash";
//import action
import { getAdminData as ongetAdminData } from "../../store/actions";

import {Button,Card,CardBody,} from "reactstrap";
import { UserData } from "../../common/data/registration";
import {
    Badge,
    Col,
    Container,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Row,
    Table,
    UncontrolledDropdown,
    UncontrolledTooltip,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    Input,
    FormFeedback,
    Label,
  } from "reactstrap";
import {
  UserId,
  UserName,
  Date,
  EmailAddress,
  Status,
  PaymentMethod,
} from "./registrationCol";

import TableContainer from "../../components/Common/TableContainer";
import UserViewModal from "./UserViewModal";
import { useDispatch ,useSelector } from "react-redux";

const UserList = props => {

  const { adminData } = useSelector(state => ({
    adminData: state.AdminList.adminData
  }));
 

  const [modal1, setModal1] = useState(false);

  // const [adminData1, setAdminData] = useState([]);
  const toggleViewModal = () => setModal1(!modal1);
  const dispatch = useDispatch();
    // useEffect(() => {
    // setAdminData(adminData);
    // }, [adminData]);
    useEffect(() => {
    debugger
    dispatch(ongetAdminData());
    }, [dispatch]);
  
  const columns = useMemo(
    () => [
      {
        Header: "#",
        filterable: false,
        disableFilters: true,
        Cell: cellProps => {
          return <input type="checkbox" className="form-check-input" />;
        },
      },
      {
        Header: "User ID",
        accessor: "UserId",
        filterable: false,
        disableFilters: true,
        Cell: cellProps => {
          return <UserId {...cellProps} />;
        },
      },
      {
        Header: "User Name",
        accessor: "UserName",
        disableFilters: true,
        filterable: false,
        Cell: cellProps => {
          return <UserName {...cellProps} />;
        },
      },
      {
        Header: "Email Address",
        accessor: "EmailAddress",
        disableFilters: true,
        filterable: false,
        Cell: cellProps => {
          return <EmailAddress {...cellProps} />;
        },
      },
      {
        Header: "Created Date",
        accessor: "Createddate",
        disableFilters: true,
        filterable: false,
        Cell: cellProps => {
          return <Date {...cellProps} />;
        },
      },
      {
        Header: "Updated Date",
        accessor: "Updateddate",
        disableFilters: true,
        filterable: false,
        Cell: cellProps => {
          return <Date {...cellProps} />;
        },
      },
      {
        Header: "Status",
        accessor: "Status",
        disableFilters: true,
        filterable: false,
        Cell: cellProps => {
          return <Status {...cellProps} />;
        },
      },
      {
        Header: "Action",
        disableFilters: true,
        accessor: "view",
        Cell: cellProps => {
          return (
            <UncontrolledDropdown>
                              <DropdownToggle
                                href="#"
                                className="card-drop"
                                tag="a"
                              >
                                <i className="mdi mdi-dots-horizontal font-size-18" />
                              </DropdownToggle>
                              <DropdownMenu className="dropdown-menu-end">
                              <DropdownItem
                                  href="#"
                                  onClick={toggleViewModal}
                                >
                                  <i className="mdi mdi-eye font-size-16 text-primary me-1" />{" "}
                                  View
                                </DropdownItem>
                                <DropdownItem
                                  href="#"
                                  onClick={() => handleProjectClick(project)}
                                >
                                  <i className="mdi mdi-pencil font-size-16 text-success me-1" />{" "}
                                  Edit
                                </DropdownItem>
                                <DropdownItem
                                  href="#"
                                  onClick={() => onClickDelete(project)}
                                >
                                  <i className="mdi mdi-trash-can font-size-16 text-danger me-1" />{" "}
                                  Delete
                                </DropdownItem>
                              </DropdownMenu>
                            </UncontrolledDropdown>
          );
        },
      },
    ],
    []
  );


  return (
    <React.Fragment>
       <div className="mb-4 h4 card-title mt-lg-5">..</div>
          {/* <div className="mb-4 h4 card-title mt-lg-5"> Employee List</div> */}
      <div className="container">
      <h4 className="mb-0 mt-sm-0 mb-sm-2 font-size-18">Employee List</h4>
      </div>
      <UserViewModal isOpen={modal1} toggle={toggleViewModal} />
      <Card>
        <CardBody>   
          <TableContainer
            columns={columns}
            data={UserData}
            isGlobalFilter={true}
            isAddOptions={false}
            customPageSize={6}
          />
        </CardBody>
      </Card>
    </React.Fragment>
  );
};

UserList.propTypes = {
  orders: PropTypes.array,
  onGetOrders: PropTypes.func,
};

export default withRouter(UserList);
