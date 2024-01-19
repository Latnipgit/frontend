import React, { useEffect, useState, useMemo } from "react";
import PropTypes from "prop-types";
import withRouter from "components/Common/withRouter";
import { isEmpty } from "lodash";
import {
    Button, Card, CardBody, Row, Col, CardHeader,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
    Table,
    Label,
    Input,
} from "reactstrap";
import CreatePlanModel from "./createPlanmodel";
import { useDispatch, useSelector } from "react-redux";
import Moment from 'react-moment';
import './FeedbackQuestion.css'
import {


} from "reactstrap"
import "../../admin/Common.scss"
import Select from "react-select"
const data = [
    {
        "service": "invoice",
        "value": ""
    },
    {
        "service": "Defaulter search",
        "value": ""
    },
    {
        "service": "Defaulter Reporting",
        "value": ""
    },
    {
        "service": "Multiple Business Registration",
        "value": ""
    },
    {
        "service": "Verification of default transaction",
        "value": ""
    },
    {
        "service": "Verification of payment transaction",
        "value": ""
    },
    {
        "service": "View detailed history of defaulter company transactions",
        "value": ""
    },
    {
        "service": "Recovery Services - Online Advertising",
        "value": ""
    },
    {
        "service": "Recovery Services - Legal Service",
        "value": ""
    },
    {
        "service": "Multiple Employee Logins",
        "value": ""
    },

]

const opationList = [
    { label: "TEXT", value: "TEXT" },
    { label: "TEXT-AREA", value: "TEXT-AREA" },
    { label: "DROP-DOWN", value: "DROP-DOWN" },
    { label: "RATING", value: "RATING" },
]

const colourStyles = {
    menuList: styles => ({
        ...styles,
        background: '#FFFFFF'
    })

}

const FeedbackQuestionModel = props => {
    const [modal1, setModal1] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [price, setPrice] = useState('4999/-');
    const [isModalOpen, setIsModalOpen] = useState(false);


    const [individual, setIndividual] = useState(false)
    const { isOpen, toggle } = props
    const [dataTable, setDataTable] = useState(data)

    const toggleAdminModal = () => { setIsModalOpen(!isModalOpen); };
    const dispatch = useDispatch();

    useEffect(() => {

    }, []);


    const dummyRow = [
        {
            "service": "",
            "value": ""
        }
    ]

    const handleAddRow = () => {
        setDataTable((prevData) => [...prevData, ...dummyRow]);
    }

    const handleRemove = (index) => {
        setDataTable((prevData) => {
            const newData = [...prevData];
            newData.splice(index, 1);
            return newData;
        });
    };
    useEffect(() => {

    }, [dataTable])

    console.log("DATATA", dataTable)
    return (
        <React.Fragment className="text-capitalize">
            <CreatePlanModel isOpen={isModalOpen} toggle={toggleAdminModal} />

            <Card className="mt-5">
                <CardBody>
                    <div className="modal-content">
                        <br />
                        <br />
                        <br />
                        <ModalHeader toggle={toggle}>Add Question</ModalHeader>
                        <ModalBody style={{ padding: '5px 80px' }}>

                            {/*                             <form>
                                <Row className="mt-3">
                                    <Col md={2} className="pt-2">
                                        <Label className="form-label"><b className="h5">Plan Name</b></Label>
                                    </Col>
                                    <Col md={6}>
                                        <Input
                                            className="form-control text-capitalize"
                                            placeholder="Enter Plan Name"
                                            type="text"

                                        />
                                    </Col>
                                    <Col md={4}></Col>
                                </Row>
                            </form> */}
                            <Row className="mt-3" style={{ padding: '5px 10px' }}>
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Questions</th>
                                            <th scope="col">Question Type</th>
                                            <th scope="col">Value</th>
                                            <th scope="col">Action</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {dataTable.map((item, index) => {
                                            return <tr key={item}>
                                                <td style={{ width: '2%' }}>
                                                    #{index + 1}
                                                </td>
                                                <td style={{ width: '50%' }} className="text-capitalize">
                                                    {item.service != '' ? item.service : <>
                                                        <Input
                                                            className="form-control text-capitalize"
                                                            placeholder="Enter Service Name"
                                                            type="text"

                                                        />
                                                    </>}
                                                </td>
                                                <QuestionSelecter />
                                                <td>
                                                    <Button className="btn btn-sm btn-danger" onClick={() => handleRemove(index)}>
                                                        <i className='bx bx-trash'></i> &nbsp;  Remove
                                                    </Button>
                                                </td>
                                            </tr>
                                        })}


                                        <tr>
                                            <td></td>
                                            <td>
                                                <Button className="btn btn-sm btn-info" onClick={() => handleAddRow()}>
                                                    <i className='bx bx-plus'></i> &nbsp;Add New Service
                                                </Button>
                                            </td>

                                        </tr>

                                    </tbody>
                                </table>
                            </Row>
                            <Row style={{ padding: '5px 10px' }} >
                                <Col md={12}>


                                    <Row className=" p-2" style={{ background: '#f0f5f5' }}>

                                        <Col md={2} className="pt-2"><b>Yearly Price</b></Col>
                                        <Col md={3}>
                                            <Input
                                                className="form-control"
                                                placeholder="Enter Yearly Price"
                                                type="number"

                                            />
                                        </Col>
                                        <Col md={7}></Col>

                                    </Row>
                                    <Row className=" p-2" style={{ background: '#f0f5f5' }}>

                                        <Col md={2} className="pt-2"><b>Monthly Price</b></Col>
                                        <Col md={3}>
                                            <Input
                                                className="form-control"
                                                placeholder="Enter Monthly Price"
                                                type="number"

                                            />
                                        </Col>
                                        <Col md={7}></Col>

                                    </Row>
                                </Col>
                            </Row>
                            <div className="radio p-3">


                                <Row className="btn-group d-flex">
                                    <Col md={4}>
                                        <Label>
                                            <Input type="radio" name="allMember" className="border border-dark" id="allMember" onChange={() => setIndividual(false)} />
                                            &nbsp;&nbsp;
                                            Plan For All Members
                                        </Label>
                                        <br />
                                        <Label>
                                            <Input type="radio" name="allMember" id="individual" className="border border-dark" onChange={() => setIndividual(true)} />
                                            &nbsp;&nbsp;
                                            Plan For Individual Member
                                        </Label>
                                    </Col>
                                    <Col md={4} className="pt-3">
                                        {individual == true ?



                                            <Input type="email" placeholder="Enter Email id" />




                                            : ""}

                                    </Col>
                                    <Col md={4}>
                                    </Col>

                                </Row>
                            </div>

                            <Row className="mt-3 mb-3">
                                <Col md={4} className="">
                                    <Button className="btn btn-info">
                                        Create Plan
                                    </Button>
                                </Col>
                                <Col md={4}></Col>
                            </Row>
                        </ModalBody>
                    </div>
                </CardBody>
            </Card>
        </React.Fragment>
    );
};


const QuestionSelecter = () => {
    const [selectQType, setSelectQType] = useState("")
    const [Integrity, setIntegrity] = useState(0)

    const handlefinancialdifficult = (selected) => {
        setSelectQType(selected)
    }

    return (
        <>
            <td>
                <Select
                    id="primaryContact"
                    className="custom-content"
                    options={opationList}
                    styles={colourStyles}
                    placeholder="Select Opation"
                    onChange={(selected) => handlefinancialdifficult(selected.value)}
                />
            </td>
            <td>
                {selectQType === "TEXT" ? (<Input
                    className="form-control text-capitalize"
                    placeholder="Enter Value"
                    type="text"
                />

                ) : selectQType === "TEXT-AREA" ? (<textarea
                    rows={5}
                    className={`form-control custom-content`}
                    placeholder="Enter Value"
                /*           onChange={(e) => handlefinancialdifficult({
                              "questionDesc": "Enter Value",
                              "questionType": "Enter Value",
                              "values": e.target.value
                          })} */
                />) : selectQType === "RATING" ? (
                    <div className="mb-1">
                        <Col md={6}>
                            <span>
                                <i className='bx bxs-star'
                                    //   onClick={()=>{
                                    //     setIntegrity(1)
                                    //  }} 
                                    onClick={(selected) => {
                                        /*                           handlefinancialdifficult({
                                                                      "questionDesc": "RATING",
                                                                      "questionType": "RATING",
                                                                      "values": 1
                                                                  }) */
                                        setIntegrity(1)
                                    }
                                    }
                                    style={{ color: Integrity != 0 ? '  #ffdb4d' : 'gray', fontSize: '18px' }}
                                ></i></span>
                            <span>
                                <i className='bx bxs-star'
                                    onClick={(selected) => {
                                        /*                                     handlefinancialdifficult({
                                                                                "questionDesc": "RATING",
                                                                                "questionType": "RATING",
                                                                                "values": 2
                                                                            }) */
                                        setIntegrity(2)
                                    }
                                    }
                                    style={{ color: Integrity != 0 && Integrity > 1 ? '  #ffdb4d' : 'gray', fontSize: '18px' }}
                                ></i></span>
                            <span>
                                <i className='bx bxs-star'
                                    onClick={(selected) => {
                                        /*                                  handlefinancialdifficult({
                                                                             "questionDesc": "RATING",
                                                                             "questionType": "RATING",
                                                                             "values": 3
                                                                         }) */
                                        setIntegrity(3)
                                    }
                                    }
                                    style={{ color: Integrity != 0 && Integrity > 2 ? '  #ffdb4d' : 'gray', fontSize: '18px' }}
                                ></i></span>
                            <span>
                                <i className='bx bxs-star'
                                    onClick={(selected) => {
                                        /*                                     handlefinancialdifficult({
                                                                                "questionDesc": "RATING",
                                                                                "questionType": "RATING",
                                                                                "values": 4
                                                                            }) */
                                        setIntegrity(4)
                                    }
                                    }
                                    style={{ color: Integrity != 0 && Integrity > 3 ? '  #ffdb4d' : 'gray', fontSize: '18px' }}
                                ></i></span>
                            <span>
                                <i className='bx bxs-star'
                                    onClick={(selected) => {
                                        /*                                     handlefinancialdifficult({
                                                                                "questionDesc": "RATING",
                                                                                "questionType": "RATING",
                                                                                "values": 5
                                                                            }) */
                                        setIntegrity(5)
                                    }
                                    }
                                    style={{ color: Integrity != 0 && Integrity > 4 ? '  #ffdb4d' : 'gray', fontSize: '18px' }}
                                ></i></span>
                        </Col>

                    </div>
                ) : selectQType === "DROP-DOWN" ? (<Input
                    className="form-control text-capitalize"
                    placeholder="Enter Drop down Value"
                    type="text"
                />) : selectQType === "" ? (<Input
                    className="form-control text-capitalize"
                    placeholder="Enter Value"
                    type="text"
                />) : ""
                }
            </td>

        </>
    )
}


export default withRouter(FeedbackQuestionModel);