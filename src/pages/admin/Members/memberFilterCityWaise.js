import React, { useEffect, useState, useMemo } from "react";
import { Button, Card, CardBody, Row, Col } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import TableContainer from "../../../components/Common/TableContainer";
import { fetchCompanyCityStart } from "store/CompanyDetails/CompanyDetails.action";
import { selectComapnyCity } from "store/CompanyDetails/CompanyDetails.selecter";


export const MemberFilteredCityData = ({ cityData, selectedState, setCityOpen, setSelectedCity, setallViewOpen, cityOpen, allViewOpen }) => {

    const dispatch = useDispatch();

    const [companyStateData, setCompanyStateData] = useState([])
    const selectComapnyCityData = useSelector(selectComapnyCity)

    useEffect(() => {
        dispatch(fetchCompanyCityStart({ "state": "Maharashtra" }))
    }, []);


    useEffect(() => {
        if (selectComapnyCityData) {
            debugger
            const companyStateList = cityData.map((values, index) => {
                for (let i = 0; i < selectComapnyCityData.length; i++) {
                    if (values.name == selectComapnyCityData[i]._id) {
                        return { state: values.name, statecount: selectComapnyCityData[i].totalCompanies }
                    }
                }
                return { state: values.name, statecount: 0 }
            })
            setCompanyStateData(companyStateList)
        }
    }, [selectComapnyCityData])


    function checkSelectData(city) {
        setCityOpen(!cityOpen)
        setSelectedCity(city)
        setallViewOpen(!allViewOpen)
    }


    const columnsState = useMemo(
        () => [
            {
                Header: "Sr No",
                accessor: "SrNo",
                filterable: false,
                disableFilters: true,
                Cell: cellProps => {
                    return <div
                        className="company-name-cell"
                    >
                        {cellProps.data.length - cellProps.cell.row.index}
                    </div>;
                },
            },
            {
                Header: "State Name",
                accessor: "state",
                disableFilters: true,
                filterable: false,
                /*   Cell: cellProps => {
                      return <span>{cellProps.cell.row.original.state}</span>;
                  }, */
            },
            {
                Header: "Reported member",
                accessor: "lael",
                disableFilters: true,
                filterable: false,
                Cell: cellProps => {
                    return <span>{cellProps.cell.row.original.statecount}</span>;
                },
            },



            {
                Header: "Action",
                disableFilters: true,
                accessor: "view",
                Cell: cellProps => {
                    return (
                        <div className="d-flex">

                            <Button onClick={() => checkSelectData(cellProps.cell.row.original)} className="btn btn-sm btn-info">view Details</Button>

                        </div>
                    );
                },
            },
        ],
        []
    );

    return (
        <React.Fragment>
            <TableContainer
                columns={columnsState}
                // data={memberdata!= undefined && memberdata != [] ? memberdata:[]}
                data={companyStateData.reverse()}
                isGlobalFilter={true}
                isAddOptions={false}
                customPageSize={10}
            />
        </React.Fragment>
    );
};


