import React, { useEffect, useState, useMemo } from "react";
import PropTypes from "prop-types";
import withRouter from "components/Common/withRouter";
import {Button,Card,CardBody,Row,Col} from "reactstrap";
import { getMemberData as ongetMemberData} from "../../../store/actions";
import { useDispatch ,useSelector } from "react-redux";
// import _ from 'underscore'
import Moment from 'react-moment';
import {
  SrNo,
  CustomerName,
  CompanyName,
  EmailID,
  Status,
  PhoneNumber,
  JoinedOn,
} from "./memberlist/membersListCol.js";
import TableContainer from "../../../components/Common/TableContainer";
import { City, Country, State } from "country-state-city";
import index from "pages/Dashboard-Blog";


import DatamapsIndia from 'react-datamaps-india'
import Select from 'react-select';
const MemberFilteredData = props => {

  const [memberdata, setMemberData] = useState(undefined);
  
  const [cityData, setCityData] = useState();

  let countryData = Country.getAllCountries();
   const [country, setCountry] = useState(countryData[100]);
   const [selectedState, setSelectedState] = useState(null);
   const [stateData, setStateData] = useState();
   const [selectedCity, setSelectedCity] = useState("")
   const [salutationState, setsalutationState] = useState([])
   const [DataforTable, setDataForTable] = useState([])
   const [salutationCity, setSalutationCity] = useState([])    
 
   useEffect(() => {
     setStateData(State.getStatesOfCountry(country?.isoCode));
   }, [country]);
 
   const colourStyles = {
    menuList: styles => ({
      ...styles,
      background: '#FFFFFF'
    })
  }
 
   useEffect(() => {
     if (stateData) {
       const selectState = stateData.filter((state) => state.name == selectedState.value)
       setCityData(City.getCitiesOfState(country?.isoCode, selectState[0]?.isoCode));
     }
 
   }, [selectedState]);
 
   useEffect(() => {
     if (stateData) {
       const stateDatalist = stateData.map((value, index) => {
         return { label: value.name, value: value.name }
       })
       setsalutationState(stateDatalist)
     }
   }, [stateData]);

   useEffect(() => {
    if (stateData) {
      const stateDatalist = stateData.map((value, index) => {
        return { label: value.name, value: value.name }
      })
      setsalutationState(stateDatalist)
    }
  }, [stateData]);
   
 
   useEffect(() => {
     if (cityData) {
       const stateDatalist = cityData.map((value, index) => {
         return { label: value.name, value: value.name }
       })
       setSalutationCity(stateDatalist)
     }
   }, [cityData]);
   

  function onLocationClick(event) {
    setStateCode(event.target.id);
    setStateName(event.target.getAttribute("name"));
    // console.log(event.target);
    console.log("Id", event.target.id);
    console.log("Name", event.target.getAttribute("name"));
  }
  const {memberData}  = useSelector(state => 
    ({
      memberData:  state.MemberList.memberData

    })
    );
    
  const dispatch = useDispatch();

    useEffect(() => {
        dispatch(ongetMemberData());
          setMemberData(memberData != undefined && memberData != null ?memberData.data.response:[])      
    }, []);

    const columns = useMemo(
      () => [
      
  
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
          accessor: "phoneNumber",
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
            return <span>
              {/* {console.log("SPAN", cellProps.row.original.createdAt)} */}
                <Moment date={cellProps.row.original.createdAt} format="DD/MM/YYYY" />
            </span>
            // <JoinedOn {...cellProps} />;
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


    const columnsState = useMemo(
      () => [
      
  
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
          Header: "Action",
          disableFilters: true,
          accessor: "view",
          Cell: cellProps => {
            return (
              <div className="d-flex">
               
              <div className="d-flex flex-column align-items-center me-3"  style={{ cursor: 'pointer' }}>
                <i className="mdi mdi-play font-size-18 text-success mb-1" data-bs-toggle="tooltip" data-bs-placement="top" title="Activate" />
              </div>
           
             
            </div>
            );
          },
        },
      ],
      []
    );

    

console.log("memberdatamemberdata", salutationState)
  return (
    <React.Fragment>
      <Card className=" mt-3">
        <CardBody className=" mt-3">
        <div className="mb-4 h5 mt-5 card-title ">Report Member</div>

    <Row className="mt-5">
    <Col>
    <h5>Search by state</h5>
    </Col>

                          <Col>
                            <div className="mb-3">
                              <label className="form-label">State*</label>
                              <Select
                                id="primaryContact"
                                className="custom-content"
                                options={salutationState}
                                styles={colourStyles}
                                value={selectedState}
                                onChange={selected => setSelectedState(selected)}
                                placeholder="Select State"
                              />
                          
                            </div>
                          </Col>
                          <Col>
                            <div className="mb-3">
                              <label className="form-label">City*</label>
                              <Select
                                id="primaryContact"
                                className="custom-content"
                                options={salutationCity}
                                styles={colourStyles}
                                value={selectedCity}
                                onChange={selected => setSelectedCity(selected)}
                                placeholder="Select City"
                              />
                           
                            </div>
                          </Col>
                          <Col></Col>
                        </Row>
        {/* <p>{stateName}</p>
      <p>{stateCode}</p>
<div style={{height:"120vh"}}>

<DatamapsIndia 
      regionData={{ Maharashtra: {
        value: 10,
        count:20
      },
      Rajasthan: {
        value: 20,
        count:60

      }, Punjab: {
        value: 5,
        count:10

      },
      Bihar: {
        value: 15,
        count:30

      }
    }}

      hoverComponent={({ value }) => {
        return <span>{value.name} {value.count!= undefined ? value.count + "Members":'0 Members'}</span>
      
      }}

      mapLayout={{
        legendTitle: 'Legend Title',
        startColor: '#FFDAB9',
        endColor: '#FF6347',
        hoverTitle: 'Count',
        noDataColor: '#FAFAFA',
        borderColor: '#8D8D8D',
        hoverBorderColor: '#8D8D8D',
        hoverColor: 'green',
      }}W
    />

</div> */}
 <TableContainer
            columns={columns}
            data={memberdata!= undefined && memberdata != [] ? memberdata:[]}
            isGlobalFilter={true}
            isAddOptions={false}
            customPageSize={20}
          />

<table>
  <tr>
    <th></th>
  </tr>
</table>
        </CardBody>
      </Card>
    </React.Fragment>
  );
};

MemberFilteredData.propTypes = {
  orders: PropTypes.array,
  onGetOrders: PropTypes.func,
};

export default withRouter(MemberFilteredData);
