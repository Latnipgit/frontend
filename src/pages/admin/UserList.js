import React, { useEffect, useState, useMemo } from "react";
import PropTypes from "prop-types";
import withRouter from "components/Common/withRouter";
import { isEmpty } from "lodash";
import AdminRegistrationModal from '../admin/adminList/AddAdminPopup';
//import action
import { getAdminData as ongetAdminData } from "../../store/actions";
import { Link } from "react-router-dom";

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
  SrNo,
  PaymentMethod,
} from "./registrationCol";

import TableContainer from "../../components/Common/TableContainer";
import UserViewModal from "./UserViewModal";
import { useDispatch ,useSelector } from "react-redux";
import index from "pages/Dashboard-Blog";
import { useHistory, Routes, Route, useNavigate } from "react-router-dom";
const UserList = props => {

  const [modal1, setModal1] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [admindata, setAdminData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleAdminModal = () => {setIsModalOpen(!isModalOpen);};
  const navigate = useNavigate();

  const { adminData } = useSelector(state => ({
    adminData: state.AdminList.adminData
  }));

  
  
  const dispatch = useDispatch();

    useEffect(() => {
        dispatch(ongetAdminData());
        if(adminData!=undefined && adminData!=null && adminData.data != undefined){
                
          setAdminData(adminData.data.data.response);
        }
          
    }, []);
    console.log("CHECKDATA", adminData, admindata)

  const handleEdit =(project)=>{
    console.log("HARshit handle edit", project)
sessionStorage.setItem("Profile",JSON.stringify(project))
// window.location = "/profile";
// history.push("/profile");


  }
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
      // {
      //   Header: "Sr.No",
      //   // accessor: srno,
    
      //   Cell: (cellProps) => {
      //     return cellProps.row.index+1;
      //   },
      //   },
      
      {
        Header: "Employee ID",
        accessor: "id",
        filterable: false,
        disableFilters: true,
      
        Cell: cellProps => {
          return <UserId {...cellProps} />;
        },
      },
      {
        Header: "User Name",
        accessor: "name",
        disableFilters: true,
        filterable: false,
        Cell: cellProps => {
          return <UserName {...cellProps} />;
        },
      },
      {
        Header: "Email Address",
        accessor: "emailId",
        disableFilters: true,
        filterable: false,
        Cell: cellProps => {
          return <EmailAddress {...cellProps} />;
        },
      },
      {
        Header: "Created Date",
        accessor: "createdAt",
        disableFilters: true,
        filterable: false,
        Cell: cellProps => {
          return <Date {...cellProps} />;
        },
      },
      {
        Header: "Role",
        accessor: "adminRole",
        disableFilters: true,
        filterable: false,
        Cell: cellProps => {
          return <Date {...cellProps} />;
        },
      },
      // {
      //   Header: "Status",
      //   accessor: "Status",
      //   disableFilters: true,
      //   filterable: false,
      //   Cell: cellProps => {
      //     return <Status {...cellProps} />;
      //   },
      // },
      {
        Header: "Action",
        disableFilters: true,
        accessor: "view",
        Cell: cellProps => {
          const project = cellProps.row.original;
          return (
            <div className="d-flex">
                 <Link to="/profile"
      
      >
        <div className="d-flex flex-column align-items-center me-3"  style={{ cursor: 'pointer' }} onClick={()=>handleEdit(project)}>
       
                    <i 
                     className="mdi mdi-pencil font-size-18 text-success mb-1"  data-bs-toggle="tooltip" data-bs-placement="top" title="Edit" />
            </div>
            </Link>

            <div className="d-flex flex-column align-items-center" onClick={() => onClickDelete(project)} style={{ cursor: 'pointer' }}>
            <i className="mdi mdi-trash-can font-size-16 text-danger me-1" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete" />
            </div>
            </div>
          );
        },
      },
    ],
    []
  );

console.log("admindata",adminData)
  return (
    <React.Fragment>
       <div className="mb-4 h4 card-title mt-lg-4">..</div>
          {/* <div className="mb-4 h4 card-title mt-lg-5"> Employee List</div> */}
      <div className="container">
      
      </div>
      {/* <UserViewModal isOpen={modal1} toggle={toggleViewModal} /> */}
       <AdminRegistrationModal isOpen={isModalOpen} toggle={toggleAdminModal} />
      <Card>
        <CardBody>   
        <h4 className="mb-0 mt-sm-0 mb-sm-2 font-size-18 mt-2">Add a Employee</h4>
        <div className="d-flex justify-content-end align-items-center mb-3">
        <Button type="button" color="primary" className="btn-sm btn-rounded" onClick={toggleAdminModal}>
         Add A Employee
        </Button>
</div>

          <TableContainer
            columns={columns}
            data={adminData != undefined && adminData.data != undefined ? adminData.data.data.response:[]}
            isGlobalFilter={true}
            isAddOptions={false}
            customPageSize={20}
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
