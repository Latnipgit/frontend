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
import { useDispatch, useSelector } from "react-redux";
import Moment from 'react-moment';
import './FeedbackQuestion.css'
import {


} from "reactstrap"
import "../../admin/Common.scss"
import Select from "react-select"

import { addFeedbackQuestionStart } from "store/addFeedbackQuestion/addFeedbackQuestion.action";
import { getFeebBackQuestionList } from "store/feedbackquestionList/feedbackquestionList.actions";
import { getFeebBackQuestionListSelector } from "store/feedbackquestionList/feedbackquestionList.selecter";



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
    const [individual, setIndividual] = useState(false)
    const dispatch = useDispatch();

    const getFeebBackQuestion = useSelector(getFeebBackQuestionListSelector)
    const [dataTable, setDataTable] = useState(getFeebBackQuestion)

    console.log('getFeebBackQuestion', getFeebBackQuestion);

    useEffect(() => {
        dispatch(getFeebBackQuestionList())
    }, []);


    const dummyRow = [
        {
            "questionDesc": "",
            "questionType": "",
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

            <Card className="mt-5">
                <CardBody>
                    <div className="modal-content">
                        <br />
                        <br />
                        <br />
                        <ModalHeader>Add Question</ModalHeader>
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
                                                <QuestionSelecter item={item} index={index} dispatch={dispatch} addFeedbackQuestionStart={addFeedbackQuestionStart} />
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


const QuestionText = ({ setTextVAlue, questionText }) => {
    return (
        <Input
            className="form-control text-capitalize"
            placeholder="Enter Question"
            type="text"
            value={questionText}
            onChange={(e) => setTextVAlue(e.target.value,)}
        />
    )
}


const QuestionSelecter = ({ item, dispatch, addFeedbackQuestionStart }) => {
    const [selectQType, setSelectQType] = useState("")
    const [Integrity, setIntegrity] = useState(0)
    const [addFeedQues, setAddFeedQues] = useState({
        "questionDesc": "",
        "questionType": "",
        "values": ""
    })
    const [questionText, setquestionText] = useState('')
    const setTextVAlue = (value) => {
        setquestionText(value)
        setAddFeedQues({ ...addFeedQues, questionDesc: value })

    }

    const handlefinancialdifficult = (selected) => {
        setDescription(selected)
        setSelectQType(selected.value)
    }

    const setDescription = (value) => {
        if (value.questionType === "selectType") {
            setAddFeedQues({ ...addFeedQues, questionType: value.value })
        }

        if (value.questionType === "value") {
            if (selectQType === "DROP-DOWN") {
                const valuesArray = value.value.split(',');
                setAddFeedQues({ ...addFeedQues, values: valuesArray })
            } else {
                setAddFeedQues({ ...addFeedQues, values: value.value })
            }
        }

        if (selectQType === "RATING") {
            setAddFeedQues({ ...addFeedQues, values: "" })
        }
    }

    const handleSubmit = () => {
        dispatch(addFeedbackQuestionStart(addFeedQues))
    };
    return (
        <>
            <td style={{ width: '50%' }} className="text-capitalize">
                {item.questionDesc != '' ? item.questionDesc : <>
                    <QuestionText setTextVAlue={setTextVAlue} questionText={questionText} />
                </>}
            </td>
            <td>
                <Select
                    id="primaryContact"
                    className="custom-content"
                    options={opationList}
                    styles={colourStyles}
                    placeholder="Select Opation"
                    onChange={(selected) => handlefinancialdifficult({
                        "questionType": "selectType",
                        "value": selected.value
                    })}
                />
            </td>
            <td>
                {selectQType === "TEXT" ? (<Input
                    className="form-control text-capitalize"
                    placeholder="Enter Value"
                    type="text"
                    value={addFeedQues.values}
                    onChange={(e) => setDescription({
                        "questionType": "value",
                        "value": e.target.value,
                    })}

                />

                ) : selectQType === "TEXT-AREA" ? (<textarea
                    rows={5}
                    className={`form-control custom-content`}
                    placeholder="Enter Value"
                    value={addFeedQues.values}
                    onChange={(e) => setDescription({
                        "questionType": "value",
                        "value": e.target.value,
                    })}
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
                ) : selectQType === "DROP-DOWN" ? (
                    <Input
                        className="form-control text-capitalize"
                        placeholder="e.g., value1, value2, value3"
                        type="text"
                        value={addFeedQues.values}
                        onChange={(e) => setDescription({
                            "questionType": "value",
                            "value": e.target.value,
                        })}
                    />
                ) : selectQType === "" ? (<Input
                    className="form-control text-capitalize"
                    placeholder="Enter Value"
                    type="text"
                    value={addFeedQues.values}
                    onChange={(e) => setDescription({
                        "questionType": "value",
                        "value": e.target.value,
                    })}
                />) : ""
                }
                <>
                    <Button className="btn btn-sm btn-info mt-1 " onClick={() => handleSubmit()}>Submit</Button>
                </>
            </td>





        </>
    )
}


export default withRouter(FeedbackQuestionModel);
