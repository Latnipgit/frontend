import React, { useEffect, useState, useMemo } from "react";
import PropTypes from "prop-types";
import withRouter from "components/Common/withRouter";
import { isEmpty } from "lodash";
import {Button,Card,CardBody,} from "reactstrap";
import { MemberData } from "../../../../common/data/members";
import { getMemberData as ongetMemberData} from "../../../../store/actions";
import { useDispatch ,useSelector } from "react-redux";
// import _ from 'underscore'

import {
  SrNo,
  CustomerName,
  CompanyName,
  EmailID,
  Status,
  PhoneNumber,
  JoinedOn,
} from "./membersListCol.js";


import TableContainer from "../../../../components/Common/TableContainer";
import MembersViewModal from "./MembersViewModal.js";
import index from "pages/Dashboard-Blog";

const MembersList = props => {

  const [memberdata, setMemberData] = useState(undefined);
  const [isChange, setisChange] = useState(false);
  const [modal1, setModal1] = useState(false);

  const toggleViewModal = () => setModal1(!modal1);



  const memberData  = useSelector(state => 
    ([
     state.MemberList.memberData
    ]))
 
  
  const dispatch = useDispatch();

    useEffect(() => {
      if(isChange == false){
        dispatch(ongetMemberData());
        setisChange(true)
      
        if(memberData!=undefined && memberData!=null){
          setMemberData(memberData[0] != null && memberData[0] != undefined ?memberData[0].data.response:[]);
        }
      } 
    }, [memberdata]);
    console.log("MEMBERDATA hs", memberData[0] != null && memberData[0] != undefined ?memberData[0].data.response:[])
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
      //   Header: "Sr No",
      //   accessor: "SrNo",
      //   filterable: false,
      //   disableFilters: true,
      //   Cell: cellProps => {
      //     return   <SrNo {...cellProps} />; 
      //   },
      // },
      {
        Header: "Customer Name",
        accessor: "name",
        disableFilters: true,
        filterable: false,
        Cell: cellProps => {
          return <CustomerName {...cellProps} />;
        },
      },
      {
        Header: "Company Name",
        accessor: "userName",
        disableFilters: true,
        filterable: false,
        Cell: cellProps => {
          return <CompanyName {...cellProps} />;
        },
      },
      {
        Header: "Email Address",
        accessor: "emailId",
        disableFilters: true,
        filterable: false,
        Cell: cellProps => {
          return <EmailID {...cellProps} />;
        },
      },
      {
        Header: "Phone Number",
        accessor: "PhoneNumber",
        disableFilters: true,
        filterable: false,
        Cell: cellProps => {
          return <PhoneNumber {...cellProps} />;
        },
      },
      {
        Header: "Joined On",
        accessor: "createdAt",
        disableFilters: true,
        filterable: false,
        Cell: cellProps => {
          return <JoinedOn {...cellProps} />;
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
            <div className="d-flex">
              <div className="d-flex flex-column align-items-center me-3" onClick={toggleViewModal} style={{ cursor: 'pointer' }}>
                <i className="mdi mdi-eye font-size-16 text-primary me-1" data-bs-toggle="tooltip" data-bs-placement="top" title="Approve" />
              </div>
            <div className="d-flex flex-column align-items-center me-3"  style={{ cursor: 'pointer' }}>
              <i className="mdi mdi-play font-size-18 text-success mb-1" data-bs-toggle="tooltip" data-bs-placement="top" title="Activate" />
            </div>
            <div className="d-flex flex-column align-items-center me-3" onClick={() => handleProjectClick(project)} style={{ cursor: 'pointer' }}>
              <i className="mdi mdi-pause font-size-18 text-success mb-1" data-bs-toggle="tooltip" data-bs-placement="top" title="Suspend" />
            </div>
           
          </div>
          );
        },
      },
    ],
    []
  );


  return (
    <React.Fragment>
      <MembersViewModal isOpen={modal1} toggle={toggleViewModal} />
      <Card>
        <CardBody>
        <div className="mb-4 h4 card-title mt-lg-1">Member List</div>
          <div className="mb-4 h4 card-title mt-lg-5">Member List</div>
          <TableContainer
            columns={columns}
            data={memberdata!= undefined ? memberdata : []}
            isGlobalFilter={true}
            isAddOptions={false}
            customPageSize={20}
          />
        </CardBody>
      </Card>
    </React.Fragment>
  );
};

MembersList.propTypes = {
  orders: PropTypes.array,
  onGetOrders: PropTypes.func,
};

export default withRouter(MembersList);
