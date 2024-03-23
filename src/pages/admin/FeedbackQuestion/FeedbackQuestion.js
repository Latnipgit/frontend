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
import { getFeebBackQuestionList, feedbackquestionDel } from "store/feedbackquestionList/feedbackquestionList.actions";
import { getFeebBackQuestionListSelector } from "store/feedbackquestionList/feedbackquestionList.selecter";

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

    const handleRemove = (index, item) => {
        setDataTable((prevData) => {
            const newData = [...prevData];
            newData.splice(index, 1);
            return newData;
        });
        dispatch(feedbackquestionDel({
            "questionId": item.id
        }))
    };
    useEffect(() => {

    }, [dataTable])


    return (
        <React.Fragment className="text-capitalize">

            <Card className="mt-5">
                <CardBody>
                    <div className="modal-content">
                        <br />
                        <br />
                        <br />
                        <ModalHeader className="ml-3">Add Feedback Question</ModalHeader>
                        <ModalBody style={{ padding: '5px 20px' }}>
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
                                                    <Button className="btn btn-sm btn-danger" onClick={() => handleRemove(index, item)}>
                                                        <i className='bx bx-trash'></i> &nbsp;  Remove
                                                    </Button>
                                                </td>
                                            </tr>
                                        })}
                                        <tr>
                                            <td></td>
                                            <td>
                                                <Button className="btn btn-sm btn-info" onClick={() => handleAddRow()}>
                                                    <i className='bx bx-plus'></i> &nbsp;Add New Question
                                                </Button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
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
                {selectQType === "TEXT" ? (
                <>
                <Input
                    className="form-control text-capitalize"
                    placeholder="Enter Value"
                    type="text"
                    value={addFeedQues.values}
                    onChange={(e) => setDescription({
                        "questionType": "value",
                        "value": e.target.value,
                    })}

                />
                <Button className="btn btn-sm btn-info mt-1 " onClick={() => handleSubmit()}>Submit</Button>
                </>

                ) : selectQType === "TEXT-AREA" ?
                    (<><textarea
                        rows={2}
                        className={`form-control custom-content`}
                        placeholder="Enter Value"
                        value={addFeedQues.values}
                        onChange={(e) => setDescription({
                            "questionType": "value",
                            "value": e.target.value,
                        })}
                    />
                    <Button className="btn btn-sm btn-info mt-1 " onClick={() => handleSubmit()}>Submit</Button>
                    </>
                    ) : selectQType === "RATING" ? (
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
                                                                <Button className="btn btn-sm btn-info mt-1 " onClick={() => handleSubmit()}>Submit</Button>

                            </Col>

                        </div>
                    ) : selectQType === "DROP-DOWN" ? (
                        <>
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
                            <Button className="btn btn-sm btn-info mt-1 " onClick={() => handleSubmit()}>Submit</Button>
                        </>
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

            </td>





        </>
    )
}


export default withRouter(FeedbackQuestionModel);
