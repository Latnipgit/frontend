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
import { getcompanyList as ongetcompanyList} from "../../../../store/actions";
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
import { Country, State, City }  from 'country-state-city';

const RegisteredCompanyList = props => {


  const [modal1, setModal1] = useState(false);

  const toggleViewModal = () => setModal1(!modal1);
  const {memberData}  = useSelector(state => 
    ({
      memberData:  state.MemberList.getAllCompanies

    })
    );
  const columns = useMemo(
    () => [
    
     
      {
        Header: "Company Name",
        accessor: "companyName",
        disableFilters: true,
        filterable: false,
        Cell: cellProps => {
          return <CompanyName {...cellProps} />;
        },
      },
      {
        Header: "Mobile No",
        accessor: "customerMobile",
        disableFilters: true,
        filterable: false,
        Cell: cellProps => {
          return <CompanyName {...cellProps} />;
        },
      },
      {
        Header: "GST Number",
        accessor: "gstin",
        disableFilters: true,
        filterable: false,
        Cell: cellProps => {
          return <GstNO {...cellProps} />;
        },
      },
      {
        Header: "PanCard Number",
        accessor: "companyPan",
        disableFilters: true,
        filterable: false,
        Cell: cellProps => {
          return <Pancard {...cellProps} />;
        },
      },
      {
        Header: " Due Amount",
        accessor: "totalAmount",
        disableFilters: true,
        filterable: false,
        Cell: cellProps => {
          return <CompanyName {...cellProps} />;
        },
      },
      {
        Header: "Address",
        accessor: "Status",
        disableFilters: true,
        filterable: false,
        Cell: cellProps => {
          return <div>
            {console.log("cellPropscellPropscellProps",cellProps.cell.row.original)}
            {cellProps.cell.row.original.city}, {cellProps.cell.row.original.state} 
          </div>;
        },
      },
   
    ],
    []
  );

  const dispatch = useDispatch();

    useEffect(() => {
        dispatch(ongetcompanyList());
    }, []);
console.log("memberDatamemberData",memberData)

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
            data={memberData!= undefined ? memberData :[]}
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
