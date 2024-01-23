import React, { useEffect, useState, useMemo } from "react";
import PropTypes from "prop-types";
import withRouter from "components/Common/withRouter";
import { isEmpty } from "lodash";

import {
  Button,
  Card,
  CardBody,
} from "reactstrap";
import { getOrders as onGetOrders } from "store/actions";
import { RegisteredCompanyData } from "../../../../common/data/registeredcompanyData";
import { getMemberData as ongetMemberData} from "../../../../store/actions";
import { useDispatch ,useSelector } from "react-redux";
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
  CheckBox,
    SrNo,
    CompanyName,
    GstNO,
    Pancard,
    Status,
    PaymentMethod
} from "./RegCompanyCol";

import TableContainer from "../../../../components/Common/TableContainer";
import RegCompanyViewModal from "./RegCompanyViewModal";

const RegisteredCompanyList = props => {


  const [modal1, setModal1] = useState(false);
  const [memberdata, setMemberData] = useState(undefined);

  const toggleViewModal = () => setModal1(!modal1);
  const {memberData}  = useSelector(state => 
    ({
      memberData:  state.MemberList.memberData

    })
    // console.log("MEMBERDATA selectore", state.MemberList.memberData!= null ? state.MemberList.memberData:'jai shree ram'    )
    );
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
        Header: "Sr No",
        accessor: "SrNo",
        filterable: false,
        disableFilters: true,
        Cell: cellProps => {
          return <SrNo {...cellProps} />;
        },
      },
      {
        Header: "Company Name",
        accessor: "CompanyName",
        disableFilters: true,
        filterable: false,
        Cell: cellProps => {
          return <CompanyName {...cellProps} />;
        },
      },
      {
        Header: "GST Number",
        accessor: "GstNo",
        disableFilters: true,
        filterable: false,
        Cell: cellProps => {
          return <GstNO {...cellProps} />;
        },
      },
      {
        Header: "PanCard Number",
        accessor: "Pancard",
        disableFilters: true,
        filterable: false,
        Cell: cellProps => {
          return <Pancard {...cellProps} />;
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
    //   {
    //     Header: "Payment Method",
    //     accessor: "paymentMethod",
    //     disableFilters: true,
    //     Cell: cellProps => {
    //       return <PaymentMethod {...cellProps} />;
    //     },
    //   },
      // {
      //   Header: "Action",
      //   disableFilters: true,
      //   accessor: "view",
      //   Cell: cellProps => {
      //     return (
      //       <UncontrolledDropdown>
      //                         <DropdownToggle
      //                           href="#"
      //                           className="card-drop"
      //                           tag="a"
      //                         >
      //                           <i className="mdi mdi-dots-horizontal font-size-18" />
      //                         </DropdownToggle>
      //                         <DropdownMenu className="dropdown-menu-end">
      //                         <DropdownItem
      //                             href="#"
      //                             onClick={toggleViewModal}
      //                           >
      //                             <i className="mdi mdi-eye font-size-16 text-primary me-1" />{" "}
      //                             View
      //                           </DropdownItem>
      //                           <DropdownItem
      //                             href="#"
      //                             onClick={() => handleProjectClick(project)}
      //                           >
      //                             <i className="mdi mdi-pencil font-size-16 text-success me-1" />{" "}
      //                             Edit
      //                           </DropdownItem>
      //                           <DropdownItem
      //                             href="#"
      //                             onClick={() => onClickDelete(project)}
      //                           >
      //                             <i className="mdi mdi-trash-can font-size-16 text-danger me-1" />{" "}
      //                             Delete
      //                           </DropdownItem>
      //                         </DropdownMenu>
      //                       </UncontrolledDropdown>
      //     );
      //   },
      // },
    ],
    []
  );

  const dispatch = useDispatch();

    useEffect(() => {
        dispatch(ongetMemberData());
          setMemberData(memberData != undefined && memberData != null ? memberData.data.response:[])      
    }, []);
console.log("memberDatamemberData",memberData, memberdata)
  return (
    <React.Fragment>
      <RegCompanyViewModal isOpen={modal1} toggle={toggleViewModal} />
      <Card>
        <CardBody>
        <Button type="button" color="primary" className="btn-sm btn-rounded float-left-button" onClick={toggleViewModal}>
          <i className="mdi mdi-eye font-size-16 text-primary me-1" />
          View Details
          </Button>
          <div className="mb-4 h4 card-title"></div>
          <div className="mb-4 h4 card-title">Company List</div>
          <TableContainer
            columns={columns}
            data={RegisteredCompanyData}
            isGlobalFilter={true}
            isAddOptions={false}
            customPageSize={20}
          />
        </CardBody>
      </Card>
    </React.Fragment>
  );
};

RegisteredCompanyList.propTypes = {
  orders: PropTypes.array,
  onGetOrders: PropTypes.func,
};

export default withRouter(RegisteredCompanyList);
