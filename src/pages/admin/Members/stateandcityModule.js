import React, { useEffect, useState, useMemo } from "react";
import { Button, Card, CardBody, Row, Col } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import TableContainer from "../../../components/Common/TableContainer";
import { fetchCompanyStateCityStart } from "store/CompanyDetails/CompanyDetails.action";
import { selectComapnyStateCity } from "store/CompanyDetails/CompanyDetails.selecter";


export const MemberStateCityData = ({ selectedState, selectedCity }) => {
    debugger
    const dispatch = useDispatch();

    const [companyStateData, setCompanyStateData] = useState([])
    const selectComapnyStateCityData = useSelector(selectComapnyStateCity)

    useEffect(() => {
        dispatch(fetchCompanyStateCityStart({
            "state": "Maharashtra",
            "city": "Mumbai"
        }))
    }, [selectedCity]);


    const columns = useMemo(
        () => [
            {
                Header: "Sr No",
                accessor: "SrNo",
                filterable: false,
                disableFilters: true,
                Cell: cellProps => {
                    return <span>{cellProps.cell.row.original.state}</span>;
                },
            },
            {
                Header: "Customer Name",
                accessor: "CustomerName",
                disableFilters: true,
                filterable: false,
                Cell: cellProps => {
                    return <span>{cellProps.cell.row.original.state}</span>;
                },
            },
            {
                Header: "Company Name",
                accessor: "CompanyName",
                disableFilters: true,
                filterable: false,
                Cell: cellProps => {
                    return <span>{cellProps.cell.row.original.state}</span>;
                },
            },
            {
                Header: "Email Address",
                accessor: "EmailID",
                disableFilters: true,
                filterable: false,
                Cell: cellProps => {
                    return <span>{cellProps.cell.row.original.state}</span>;
                },
            },
            {
                Header: "Phone Number",
                accessor: "PhoneNumber",
                disableFilters: true,
                filterable: false,
                Cell: cellProps => {
                    return <span>{cellProps.cell.row.original.state}</span>;
                },
            },
            {
                Header: "Joined On",
                accessor: "JoinedOn",
                disableFilters: true,
                filterable: false,
                Cell: cellProps => {
                    return <span>{cellProps.cell.row.original.state}</span>;
                },
            },
            {
                Header: "Status",
                accessor: "Status",
                disableFilters: true,
                filterable: false,
                Cell: cellProps => {
                    return <span>{cellProps.cell.row.original.state}</span>;
                },
            },
        ],
        []
    );



    return (
        <React.Fragment>
            <Card className=" mt-3">
                <CardBody className=" mt-3">
                    <div className="mb-4 h5 mt-5 card-title ">Report Member</div>
                    {selectComapnyStateCityData && <TableContainer
                        columns={columns}
                        // data={memberdata!= undefined && memberdata != [] ? memberdata:[]}
                        data={selectComapnyStateCityData.reverse()}
                        isGlobalFilter={true}
                        isAddOptions={false}
                        customPageSize={10}
                    />}


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


