import React, { useEffect, useState, useMemo } from "react";
import { Button, Card, CardBody, Row, Col } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import TableContainer from "../../../components/Common/TableContainer";
import { fetchCompanyStateCityStart } from "store/CompanyDetails/CompanyDetails.action";
import { selectComapnyStateCity } from "store/CompanyDetails/CompanyDetails.selecter";


export const MemberStateCityData = ({ selectedState, selectedCity }) => {
    const dispatch = useDispatch();

    const [companyStateData, setCompanyStateData] = useState([])
    const selectComapnyStateCityData = useSelector(selectComapnyStateCity)

    const dummyData = [
        {
            "_id": "65bb90fb387bb5484bdfb4a2",
            "debtor": {
                "_id": "65bb8f29387bb5484bdfb432",
                "companyName": "MOKSH CLOTHING",
                "gstin": "27BB5HR6296F1ZE",
                "companyPan": "SHEKQ12RV",
                "creditorCompanyId": "65bb723e387bb5484bdfa6ed",
                "debtorType": "Business",
                "salutation": "Mr.",
                "firstname": "SHEKHAR",
                "lastname": "YADAV",
                "customerEmail": "info.mokshclothing@gmail.com",
                "customerMobile": "9820940833",
                "address1": "BLDG NO 8HANUMAN NAGAR",
                "address2": "KANDIVALI,MUMBAI 40010",
                "city": "Mumbai",
                "state": "Maharashtra",
                "zipcode": "400101",
                "ratings": [],
                "createdAt": "2024-02-01T12:31:37.309Z",
                "updatedAt": "2024-02-01T12:31:37.309Z",
                "__v": 0
            },
            "creditorCompanyId": "65bb723e387bb5484bdfa6ed",
            "invoices": [
                "65bb90fb387bb5484bdfb4a0"
            ],
            "status": "PENDING",
            "totalAmount": -9950000,
            "createdAt": "2024-02-01T12:39:23.922Z",
            "updatedAt": "2024-02-03T13:51:39.788Z",
            "__v": 0
        },
        {
            "_id": "65c1ea452f1c4005173e85b8",
            "debtor": {
                "_id": "65bfc1dc46e2499b57671e30",
                "companyName": "zobble",
                "gstin": "27MRRTE2599W8Z3",
                "companyPan": "ACIPR1925N",
                "creditorCompanyId": "65972570f69b1ed683b1eefc",
                "debtorType": "Business",
                "salutation": "Mrs.",
                "firstname": "rohan",
                "lastname": "sdfdf",
                "customerEmail": "prem@gmail.com",
                "customerMobile": "9869151229",
                "address1": "jaipur",
                "address2": "jaipur",
                "city": "Mumbai",
                "state": "Maharashtra",
                "zipcode": "400072",
                "ratings": [],
                "createdAt": "2024-02-04T16:57:01.006Z",
                "updatedAt": "2024-02-04T16:57:01.006Z",
                "__v": 0
            },
            "creditorCompanyId": "658c45c62a986850aee382d9",
            "invoices": [
                "65c1ea452f1c4005173e85b6"
            ],
            "status": "PENDING",
            "totalAmount": 5000,
            "createdAt": "2024-02-06T08:13:57.809Z",
            "updatedAt": "2024-02-06T08:13:57.809Z",
            "__v": 0
        },
        {
            "_id": "65c1f21bebd2ee144479aaa8",
            "debtor": {
                "_id": "65bfc1dc46e2499b57671e30",
                "companyName": "zobble",
                "gstin": "27MRRTE2599W8Z3",
                "companyPan": "ACIPR1925N",
                "creditorCompanyId": "65972570f69b1ed683b1eefc",
                "debtorType": "Business",
                "salutation": "Mrs.",
                "firstname": "rohan",
                "lastname": "sdfdf",
                "customerEmail": "prem@gmail.com",
                "customerMobile": "9869151229",
                "address1": "jaipur",
                "address2": "jaipur",
                "city": "Mumbai",
                "state": "Maharashtra",
                "zipcode": "400072",
                "ratings": [],
                "createdAt": "2024-02-04T16:57:01.006Z",
                "updatedAt": "2024-02-04T16:57:01.006Z",
                "__v": 0
            },
            "creditorCompanyId": "65972570f69b1ed683b1eefc",
            "invoices": [
                "65c1f21bebd2ee144479aaa6"
            ],
            "status": "PENDING",
            "totalAmount": 0,
            "createdAt": "2024-02-06T08:47:24.017Z",
            "updatedAt": "2024-02-06T08:47:24.017Z",
            "__v": 0
        },
        {
            "_id": "65c244537a04eef2a89449ab",
            "debtor": {
                "_id": "65bfc1dc46e2499b57671e30",
                "companyName": "zobble",
                "gstin": "27MRRTE2599W8Z3",
                "companyPan": "ACIPR1925N",
                "creditorCompanyId": "65972570f69b1ed683b1eefc",
                "debtorType": "Business",
                "salutation": "Mrs.",
                "firstname": "rohan",
                "lastname": "sdfdf",
                "customerEmail": "prem@gmail.com",
                "customerMobile": "9869151229",
                "address1": "jaipur",
                "address2": "jaipur",
                "city": "Mumbai",
                "state": "Maharashtra",
                "zipcode": "400072",
                "ratings": [],
                "createdAt": "2024-02-04T16:57:01.006Z",
                "updatedAt": "2024-02-04T16:57:01.006Z",
                "__v": 0
            },
            "creditorCompanyId": "65972570f69b1ed683b1eefc",
            "invoices": [
                "65c244537a04eef2a89449a6",
                "65c244537a04eef2a89449a9"
            ],
            "status": "PENDING",
            "totalAmount": 10000,
            "createdAt": "2024-02-06T14:38:11.286Z",
            "updatedAt": "2024-02-06T14:38:11.286Z",
            "__v": 0
        },
        {
            "_id": "65c3634e51900b0a92cd7fb7",
            "debtor": {
                "_id": "65bb92f1387bb5484bdfb504",
                "companyName": "VEERATRA",
                "gstin": "27BB5HR6296CQSCCCA",
                "companyPan": "ABJBCJ666",
                "creditorCompanyId": "65bb723e387bb5484bdfa6ed",
                "debtorType": "Business",
                "salutation": "Mr.",
                "firstname": "SAMEER",
                "lastname": "MORE",
                "customerEmail": "VERRATRA@GMAIL.COM",
                "customerMobile": "9895525",
                "address1": "MA",
                "address2": "XKMLAKMLK AC KJANK ",
                "city": "Mumbai",
                "state": "Maharashtra",
                "zipcode": "400101",
                "ratings": [],
                "createdAt": "2024-02-01T12:47:45.096Z",
                "updatedAt": "2024-02-01T12:47:45.096Z",
                "__v": 0
            },
            "creditorCompanyId": "65bb723e387bb5484bdfa6ed",
            "invoices": [
                "65c3634e51900b0a92cd7fb5"
            ],
            "status": "DRAFT",
            "totalAmount": 200000,
            "createdAt": "2024-02-07T11:02:38.890Z",
            "updatedAt": "2024-02-07T11:02:38.890Z",
            "__v": 0
        },
        {
            "_id": "65c3634f51900b0a92cd7fc0",
            "debtor": {
                "_id": "65bb92f1387bb5484bdfb504",
                "companyName": "VEERATRA",
                "gstin": "27BB5HR6296CQSCCCA",
                "companyPan": "ABJBCJ666",
                "creditorCompanyId": "65bb723e387bb5484bdfa6ed",
                "debtorType": "Business",
                "salutation": "Mr.",
                "firstname": "SAMEER",
                "lastname": "MORE",
                "customerEmail": "VERRATRA@GMAIL.COM",
                "customerMobile": "9895525",
                "address1": "MA",
                "address2": "XKMLAKMLK AC KJANK ",
                "city": "Mumbai",
                "state": "Maharashtra",
                "zipcode": "400101",
                "ratings": [],
                "createdAt": "2024-02-01T12:47:45.096Z",
                "updatedAt": "2024-02-01T12:47:45.096Z",
                "__v": 0
            },
            "creditorCompanyId": "65bb723e387bb5484bdfa6ed",
            "invoices": [
                "65c3634f51900b0a92cd7fbe"
            ],
            "status": "DRAFT",
            "totalAmount": 200000,
            "createdAt": "2024-02-07T11:02:39.974Z",
            "updatedAt": "2024-02-07T11:02:39.974Z",
            "__v": 0
        },
        {
            "_id": "65c3635051900b0a92cd7fc9",
            "debtor": {
                "_id": "65bb92f1387bb5484bdfb504",
                "companyName": "VEERATRA",
                "gstin": "27BB5HR6296CQSCCCA",
                "companyPan": "ABJBCJ666",
                "creditorCompanyId": "65bb723e387bb5484bdfa6ed",
                "debtorType": "Business",
                "salutation": "Mr.",
                "firstname": "SAMEER",
                "lastname": "MORE",
                "customerEmail": "VERRATRA@GMAIL.COM",
                "customerMobile": "9895525",
                "address1": "MA",
                "address2": "XKMLAKMLK AC KJANK ",
                "city": "Mumbai",
                "state": "Maharashtra",
                "zipcode": "400101",
                "ratings": [],
                "createdAt": "2024-02-01T12:47:45.096Z",
                "updatedAt": "2024-02-01T12:47:45.096Z",
                "__v": 0
            },
            "creditorCompanyId": "65bb723e387bb5484bdfa6ed",
            "invoices": [
                "65c3635051900b0a92cd7fc7"
            ],
            "status": "DRAFT",
            "totalAmount": 200000,
            "createdAt": "2024-02-07T11:02:40.664Z",
            "updatedAt": "2024-02-07T11:02:40.664Z",
            "__v": 0
        },
        {
            "_id": "65c3635051900b0a92cd7fd2",
            "debtor": {
                "_id": "65bb92f1387bb5484bdfb504",
                "companyName": "VEERATRA",
                "gstin": "27BB5HR6296CQSCCCA",
                "companyPan": "ABJBCJ666",
                "creditorCompanyId": "65bb723e387bb5484bdfa6ed",
                "debtorType": "Business",
                "salutation": "Mr.",
                "firstname": "SAMEER",
                "lastname": "MORE",
                "customerEmail": "VERRATRA@GMAIL.COM",
                "customerMobile": "9895525",
                "address1": "MA",
                "address2": "XKMLAKMLK AC KJANK ",
                "city": "Mumbai",
                "state": "Maharashtra",
                "zipcode": "400101",
                "ratings": [],
                "createdAt": "2024-02-01T12:47:45.096Z",
                "updatedAt": "2024-02-01T12:47:45.096Z",
                "__v": 0
            },
            "creditorCompanyId": "65bb723e387bb5484bdfa6ed",
            "invoices": [
                "65c3635051900b0a92cd7fd0"
            ],
            "status": "DRAFT",
            "totalAmount": 200000,
            "createdAt": "2024-02-07T11:02:40.763Z",
            "updatedAt": "2024-02-07T11:02:40.763Z",
            "__v": 0
        },
        {
            "_id": "65c3635151900b0a92cd7fdb",
            "debtor": {
                "_id": "65bb92f1387bb5484bdfb504",
                "companyName": "VEERATRA",
                "gstin": "27BB5HR6296CQSCCCA",
                "companyPan": "ABJBCJ666",
                "creditorCompanyId": "65bb723e387bb5484bdfa6ed",
                "debtorType": "Business",
                "salutation": "Mr.",
                "firstname": "SAMEER",
                "lastname": "MORE",
                "customerEmail": "VERRATRA@GMAIL.COM",
                "customerMobile": "9895525",
                "address1": "MA",
                "address2": "XKMLAKMLK AC KJANK ",
                "city": "Mumbai",
                "state": "Maharashtra",
                "zipcode": "400101",
                "ratings": [],
                "createdAt": "2024-02-01T12:47:45.096Z",
                "updatedAt": "2024-02-01T12:47:45.096Z",
                "__v": 0
            },
            "creditorCompanyId": "65bb723e387bb5484bdfa6ed",
            "invoices": [
                "65c3635051900b0a92cd7fd9"
            ],
            "status": "DRAFT",
            "totalAmount": 200000,
            "createdAt": "2024-02-07T11:02:41.005Z",
            "updatedAt": "2024-02-07T11:02:41.005Z",
            "__v": 0
        },
        {
            "_id": "65c3635351900b0a92cd7fe4",
            "debtor": {
                "_id": "65bb92f1387bb5484bdfb504",
                "companyName": "VEERATRA",
                "gstin": "27BB5HR6296CQSCCCA",
                "companyPan": "ABJBCJ666",
                "creditorCompanyId": "65bb723e387bb5484bdfa6ed",
                "debtorType": "Business",
                "salutation": "Mr.",
                "firstname": "SAMEER",
                "lastname": "MORE",
                "customerEmail": "VERRATRA@GMAIL.COM",
                "customerMobile": "9895525",
                "address1": "MA",
                "address2": "XKMLAKMLK AC KJANK ",
                "city": "Mumbai",
                "state": "Maharashtra",
                "zipcode": "400101",
                "ratings": [],
                "createdAt": "2024-02-01T12:47:45.096Z",
                "updatedAt": "2024-02-01T12:47:45.096Z",
                "__v": 0
            },
            "creditorCompanyId": "65bb723e387bb5484bdfa6ed",
            "invoices": [
                "65c3635351900b0a92cd7fe2"
            ],
            "status": "DRAFT",
            "totalAmount": 200000,
            "createdAt": "2024-02-07T11:02:43.081Z",
            "updatedAt": "2024-02-07T11:02:43.081Z",
            "__v": 0
        },
        {
            "_id": "65c3635351900b0a92cd7fed",
            "debtor": {
                "_id": "65bb92f1387bb5484bdfb504",
                "companyName": "VEERATRA",
                "gstin": "27BB5HR6296CQSCCCA",
                "companyPan": "ABJBCJ666",
                "creditorCompanyId": "65bb723e387bb5484bdfa6ed",
                "debtorType": "Business",
                "salutation": "Mr.",
                "firstname": "SAMEER",
                "lastname": "MORE",
                "customerEmail": "VERRATRA@GMAIL.COM",
                "customerMobile": "9895525",
                "address1": "MA",
                "address2": "XKMLAKMLK AC KJANK ",
                "city": "Mumbai",
                "state": "Maharashtra",
                "zipcode": "400101",
                "ratings": [],
                "createdAt": "2024-02-01T12:47:45.096Z",
                "updatedAt": "2024-02-01T12:47:45.096Z",
                "__v": 0
            },
            "creditorCompanyId": "65bb723e387bb5484bdfa6ed",
            "invoices": [
                "65c3635351900b0a92cd7feb"
            ],
            "status": "DRAFT",
            "totalAmount": 200000,
            "createdAt": "2024-02-07T11:02:43.239Z",
            "updatedAt": "2024-02-07T11:02:43.239Z",
            "__v": 0
        },
        {
            "_id": "65c3635351900b0a92cd7ff6",
            "debtor": {
                "_id": "65bb92f1387bb5484bdfb504",
                "companyName": "VEERATRA",
                "gstin": "27BB5HR6296CQSCCCA",
                "companyPan": "ABJBCJ666",
                "creditorCompanyId": "65bb723e387bb5484bdfa6ed",
                "debtorType": "Business",
                "salutation": "Mr.",
                "firstname": "SAMEER",
                "lastname": "MORE",
                "customerEmail": "VERRATRA@GMAIL.COM",
                "customerMobile": "9895525",
                "address1": "MA",
                "address2": "XKMLAKMLK AC KJANK ",
                "city": "Mumbai",
                "state": "Maharashtra",
                "zipcode": "400101",
                "ratings": [],
                "createdAt": "2024-02-01T12:47:45.096Z",
                "updatedAt": "2024-02-01T12:47:45.096Z",
                "__v": 0
            },
            "creditorCompanyId": "65bb723e387bb5484bdfa6ed",
            "invoices": [
                "65c3635351900b0a92cd7ff4"
            ],
            "status": "DRAFT",
            "totalAmount": 200000,
            "createdAt": "2024-02-07T11:02:43.503Z",
            "updatedAt": "2024-02-07T11:02:43.503Z",
            "__v": 0
        },
        {
            "_id": "65c3635351900b0a92cd7fff",
            "debtor": {
                "_id": "65bb92f1387bb5484bdfb504",
                "companyName": "VEERATRA",
                "gstin": "27BB5HR6296CQSCCCA",
                "companyPan": "ABJBCJ666",
                "creditorCompanyId": "65bb723e387bb5484bdfa6ed",
                "debtorType": "Business",
                "salutation": "Mr.",
                "firstname": "SAMEER",
                "lastname": "MORE",
                "customerEmail": "VERRATRA@GMAIL.COM",
                "customerMobile": "9895525",
                "address1": "MA",
                "address2": "XKMLAKMLK AC KJANK ",
                "city": "Mumbai",
                "state": "Maharashtra",
                "zipcode": "400101",
                "ratings": [],
                "createdAt": "2024-02-01T12:47:45.096Z",
                "updatedAt": "2024-02-01T12:47:45.096Z",
                "__v": 0
            },
            "creditorCompanyId": "65bb723e387bb5484bdfa6ed",
            "invoices": [
                "65c3635351900b0a92cd7ffd"
            ],
            "status": "DRAFT",
            "totalAmount": 200000,
            "createdAt": "2024-02-07T11:02:43.605Z",
            "updatedAt": "2024-02-07T11:02:43.605Z",
            "__v": 0
        },
        {
            "_id": "65c3635351900b0a92cd8008",
            "debtor": {
                "_id": "65bb92f1387bb5484bdfb504",
                "companyName": "VEERATRA",
                "gstin": "27BB5HR6296CQSCCCA",
                "companyPan": "ABJBCJ666",
                "creditorCompanyId": "65bb723e387bb5484bdfa6ed",
                "debtorType": "Business",
                "salutation": "Mr.",
                "firstname": "SAMEER",
                "lastname": "MORE",
                "customerEmail": "VERRATRA@GMAIL.COM",
                "customerMobile": "9895525",
                "address1": "MA",
                "address2": "XKMLAKMLK AC KJANK ",
                "city": "Mumbai",
                "state": "Maharashtra",
                "zipcode": "400101",
                "ratings": [],
                "createdAt": "2024-02-01T12:47:45.096Z",
                "updatedAt": "2024-02-01T12:47:45.096Z",
                "__v": 0
            },
            "creditorCompanyId": "65bb723e387bb5484bdfa6ed",
            "invoices": [
                "65c3635351900b0a92cd8006"
            ],
            "status": "DRAFT",
            "totalAmount": 200000,
            "createdAt": "2024-02-07T11:02:43.831Z",
            "updatedAt": "2024-02-07T11:02:43.831Z",
            "__v": 0
        },
        {
            "_id": "65c3635451900b0a92cd8011",
            "debtor": {
                "_id": "65bb92f1387bb5484bdfb504",
                "companyName": "VEERATRA",
                "gstin": "27BB5HR6296CQSCCCA",
                "companyPan": "ABJBCJ666",
                "creditorCompanyId": "65bb723e387bb5484bdfa6ed",
                "debtorType": "Business",
                "salutation": "Mr.",
                "firstname": "SAMEER",
                "lastname": "MORE",
                "customerEmail": "VERRATRA@GMAIL.COM",
                "customerMobile": "9895525",
                "address1": "MA",
                "address2": "XKMLAKMLK AC KJANK ",
                "city": "Mumbai",
                "state": "Maharashtra",
                "zipcode": "400101",
                "ratings": [],
                "createdAt": "2024-02-01T12:47:45.096Z",
                "updatedAt": "2024-02-01T12:47:45.096Z",
                "__v": 0
            },
            "creditorCompanyId": "65bb723e387bb5484bdfa6ed",
            "invoices": [
                "65c3635351900b0a92cd800f"
            ],
            "status": "DRAFT",
            "totalAmount": 200000,
            "createdAt": "2024-02-07T11:02:44.011Z",
            "updatedAt": "2024-02-07T11:02:44.011Z",
            "__v": 0
        },
        {
            "_id": "65c3635451900b0a92cd801a",
            "debtor": {
                "_id": "65bb92f1387bb5484bdfb504",
                "companyName": "VEERATRA",
                "gstin": "27BB5HR6296CQSCCCA",
                "companyPan": "ABJBCJ666",
                "creditorCompanyId": "65bb723e387bb5484bdfa6ed",
                "debtorType": "Business",
                "salutation": "Mr.",
                "firstname": "SAMEER",
                "lastname": "MORE",
                "customerEmail": "VERRATRA@GMAIL.COM",
                "customerMobile": "9895525",
                "address1": "MA",
                "address2": "XKMLAKMLK AC KJANK ",
                "city": "Mumbai",
                "state": "Maharashtra",
                "zipcode": "400101",
                "ratings": [],
                "createdAt": "2024-02-01T12:47:45.096Z",
                "updatedAt": "2024-02-01T12:47:45.096Z",
                "__v": 0
            },
            "creditorCompanyId": "65bb723e387bb5484bdfa6ed",
            "invoices": [
                "65c3635451900b0a92cd8018"
            ],
            "status": "DRAFT",
            "totalAmount": 200000,
            "createdAt": "2024-02-07T11:02:44.229Z",
            "updatedAt": "2024-02-07T11:02:44.229Z",
            "__v": 0
        },
        {
            "_id": "65c3747a51900b0a92cd81bb",
            "debtor": {
                "_id": "65bb92f1387bb5484bdfb504",
                "companyName": "VEERATRA",
                "gstin": "27BB5HR6296CQSCCCA",
                "companyPan": "ABJBCJ666",
                "creditorCompanyId": "65bb723e387bb5484bdfa6ed",
                "debtorType": "Business",
                "salutation": "Mr.",
                "firstname": "SAMEER",
                "lastname": "MORE",
                "customerEmail": "VERRATRA@GMAIL.COM",
                "customerMobile": "9895525",
                "address1": "MA",
                "address2": "XKMLAKMLK AC KJANK ",
                "city": "Mumbai",
                "state": "Maharashtra",
                "zipcode": "400101",
                "ratings": [],
                "createdAt": "2024-02-01T12:47:45.096Z",
                "updatedAt": "2024-02-01T12:47:45.096Z",
                "__v": 0
            },
            "creditorCompanyId": "65bb723e387bb5484bdfa6ed",
            "invoices": [
                "65c3747a51900b0a92cd81b9"
            ],
            "status": "PENDING",
            "totalAmount": 200000,
            "createdAt": "2024-02-07T12:15:54.400Z",
            "updatedAt": "2024-02-07T12:15:54.400Z",
            "__v": 0
        },
        {
            "_id": "65c463cd6ff9b7a5fa487405",
            "debtor": {
                "_id": "65bb4ae1387bb5484bdf9ce8",
                "companyName": "normal",
                "gstin": "27MRRTE1099W8Z3",
                "companyPan": "654654",
                "creditorCompanyId": "65972570f69b1ed683b1eefc",
                "debtorType": "Business",
                "salutation": "Mrs.",
                "firstname": "prem",
                "lastname": "suraj",
                "customerEmail": "prem@gmail.com",
                "customerMobile": "97789558",
                "address1": "jaipur ",
                "address2": "jaipur",
                "city": "Mumbai",
                "state": "Maharashtra",
                "zipcode": "302001",
                "ratings": [],
                "createdAt": "2024-02-01T07:40:17.627Z",
                "updatedAt": "2024-02-01T07:40:17.627Z",
                "__v": 0
            },
            "creditorCompanyId": "65972570f69b1ed683b1eefc",
            "invoices": [
                "65c463cd6ff9b7a5fa4873ff",
                "65c463cd6ff9b7a5fa487403"
            ],
            "status": "PENDING",
            "totalAmount": 60000,
            "createdAt": "2024-02-08T05:17:01.978Z",
            "updatedAt": "2024-02-08T05:17:01.978Z",
            "__v": 0
        },
        {
            "_id": "65c4c1d86ff9b7a5fa48928e",
            "debtor": {
                "_id": "65c4af386ff9b7a5fa488ffa",
                "companyName": "kadam clothing ",
                "gstin": "27AASHR5298F1Zk",
                "companyPan": "BVSPV4135C",
                "creditorCompanyId": "65c4a13b6ff9b7a5fa488ab8",
                "debtorType": "Business",
                "salutation": "Mr.",
                "firstname": "dhanji ",
                "lastname": "kadam",
                "customerEmail": "kadam123@gmail.com",
                "customerMobile": "8767183595",
                "address1": "akcnkajs;k",
                "address2": "kcnak;jsdc;klaj",
                "city": "Mumbai",
                "state": "Maharashtra",
                "zipcode": "400101",
                "ratings": [],
                "createdAt": "2024-02-08T10:38:48.188Z",
                "updatedAt": "2024-02-08T10:38:48.188Z",
                "__v": 0
            },
            "creditorCompanyId": "65c4a13b6ff9b7a5fa488ab8",
            "invoices": [
                "65c4c1d86ff9b7a5fa48928c"
            ],
            "status": "PENDING",
            "totalAmount": 789456,
            "createdAt": "2024-02-08T11:58:16.357Z",
            "updatedAt": "2024-02-08T11:58:16.357Z",
            "__v": 0
        }
    ]

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
                    return <div
                        className="company-name-cell"
                        style={{ cursor: 'pointer' }}
                    >
                        {cellProps.data.length - cellProps.cell.row.index}
                    </div>;
                },
            },
            {
                Header: "Customer Name",
                accessor: "CustomerName",
                disableFilters: true,
                filterable: false,
                Cell: cellProps => {
                    return <span>{cellProps.cell.row.original.debtor.firstname} {cellProps.cell.row.original.debtor.lastname}</span>;
                },
            },
            {
                Header: "Company Name",
                accessor: "CompanyName",
                disableFilters: true,
                filterable: false,
                Cell: cellProps => {
                    return <span>{cellProps.cell.row.original.debtor.companyName}</span>;
                },
            },
            {
                Header: "Address",
                accessor: "Address",
                disableFilters: true,
                filterable: false,
                Cell: cellProps => {
                    return <span>
                        {cellProps.cell.row.original.debtor.address1},
                        <br />
                        {cellProps.cell.row.original.debtor.address2}
                    </span>;
                },
            },
            {
                Header: "Email Address",
                accessor: "EmailID",
                disableFilters: true,
                filterable: false,
                Cell: cellProps => {
                    return <span>{cellProps.cell.row.original.debtor.customerEmail}</span>;
                },
            },
            {
                Header: "Phone Number",
                accessor: "PhoneNumber",
                disableFilters: true,
                filterable: false,
                Cell: cellProps => {
                    return <span>{cellProps.cell.row.original.debtor.customerMobile}</span>;
                },
            },
            {
                Header: "GST Number",
                accessor: "JoinedOn",
                disableFilters: true,
                filterable: false,
                Cell: cellProps => {
                    return <span>{cellProps.cell.row.original.debtor.gstin}</span>;
                },
            },
        ],
        []
    );



    return (
        <React.Fragment>
            {selectComapnyStateCityData && <TableContainer
                columns={columns}
                // data={memberdata!= undefined && memberdata != [] ? memberdata:[]}
                data={dummyData.reverse()}
                isGlobalFilter={true}
                isAddOptions={false}
                customPageSize={10}
            />}
        </React.Fragment>
    );
};


