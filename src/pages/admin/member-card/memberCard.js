import React, { useEffect, useState, useMemo } from "react";
import PropTypes from "prop-types";
import withRouter from "components/Common/withRouter";
import { isEmpty } from "lodash";
import { Button, Card, CardBody, Row, Col, CardHeader } from "reactstrap";
import CreatePlanModel from "./createPlanmodel";
import { useDispatch, useSelector } from "react-redux";
import { getSubscriptionPckg } from "store/LatestTransaction/latestTrans.action"
import { getSubscriptionListReducer } from "store/LatestTransaction/latestTans.selecter"

import Moment from 'react-moment';
const data = [
    {
        "service": "invoice",
        "value": "2000"
    },
    {
        "service": "Defaulter search",
        "value": "100"
    },
    {
        "service": "Defaulter Reporting",
        "value": "Unlimited"
    },
    {
        "service": "Multiple Business Registration",
        "value": "5"
    },
    {
        "service": "Verification of default transaction",
        "value": "100"
    },
    {
        "service": "Verification of payment transaction",
        "value": "100"
    },
    {
        "service": "View detailed history of defaulter company transactions",
        "value": "100"
    },
    {
        "service": "Recovery Services - Online Advertising",
        "value": "10"
    },
    {
        "service": "Recovery Services - Intense Calling",
        "value": "5 customer"
    },
    {
        "service": "Recovery Services - Legal Service",
        "value": " 750/- per notice"
    },
    {
        "service": "Multiple Employee Logins",
        "value": "5"
    },

]
const MemberCard = props => {
    const [modal1, setModal1] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleAdminModal = () => { setIsModalOpen(!isModalOpen); };
    const dispatch = useDispatch();

    const getSubscriptionList = useSelector(getSubscriptionListReducer)

    useEffect(() => {
        dispatch(getSubscriptionPckg())

    }, []);


    return (
        <React.Fragment className="text-capitalize">
            <CreatePlanModel isOpen={isModalOpen} toggle={toggleAdminModal} />

            <Card className="mt-5">
                <CardBody className="mt-5">
                    <Row>
                        <Col md={10}>
                            <h5 className="text-capitalize">
                                subscription Plans
                            </h5>
                        </Col>
                        <Col md={2}>
                            <Button onClick={toggleAdminModal} className="btn btn-info">
                                Create A Plan
                            </Button>
                        </Col>
                    </Row>

                    <br />

                    <Row  className="" style={{padding:"0px 50px 0px 50px"}}>
                        {getSubscriptionList != undefined ? getSubscriptionList.map((item) => {
                            return <Col md={4} key={item} className="">
                                <Card className="shadow-lg text-center">
                                  
                                        <div  style={{background:"#AF90E1"}} className="text-light p-3">
                                          
                                            <h5><strong>{item.subscriptionPkgName}</strong></h5>

                                          
                                        </div>
                                        <div className="pt-3 pb-3">
                                        <h5 className="text-dark"><strong>Monthly Amount : {item.monthlyAmt}</strong></h5>
                                        <h5 className="text-dark"><strong>Yearly Amount : {item.yearlyAmt}</strong></h5>
                                        <h5><strong style={{ color: item.subscriptionPkgAPIQuota != undefined && item.subscriptionPkgAPIQuota.length != 0 ? "#00b300" : "#ff6600" }}><span className="text-dark">Status :</span> {item.subscriptionPkgAPIQuota != undefined && item.subscriptionPkgAPIQuota.length != 0 ? "Paid" : "Free"}</strong></h5>

                                  
                                        </div>



                                       
                                </Card>
                            </Col>
                        }) : ""}
                    </Row>


                    <br />
                    <br />

                </CardBody>
            </Card>
        </React.Fragment>
    );
};



export default withRouter(MemberCard);
