import React, { useEffect, useState, useMemo } from "react";
import PropTypes from "prop-types";
import withRouter from "components/Common/withRouter";
import { isEmpty } from "lodash";
import {Button,Card,CardBody,Row,Col, CardHeader} from "reactstrap";
import CreatePlanModel from "./createPlanmodel";
import { useDispatch ,useSelector } from "react-redux";
import { getSubscriptionPckg } from "store/LatestTransaction/latestTrans.action"
import { getSubscriptionListReducer } from "store/LatestTransaction/latestTans.selecter"

import Moment from 'react-moment';
const data = [
    {
        "service" :"invoice",
         "value":"2000"
    },
    {
        "service" :"Defaulter search" ,
         "value":"100"
    },
    {
        "service" :"Defaulter Reporting",
         "value":"Unlimited"
    },
    {
        "service" :"Multiple Business Registration",
         "value":"5"
    },
    {
        "service" :"Verification of default transaction",
         "value":"100"
    },
    {
        "service" :"Verification of payment transaction",
         "value":"100"
    },
    {
        "service" :"View detailed history of defaulter company transactions",
         "value":"100"
    },
    {
        "service" :"Recovery Services - Online Advertising",
         "value":"10"
    },
    {
        "service" :"Recovery Services - Intense Calling",
         "value":"5 customer"
    },
    {
        "service" :"Recovery Services - Legal Service",
         "value":" 750/- per notice"
    },
    {
        "service" :"Multiple Employee Logins",
         "value":"5"
    },

]
const MemberCard = props => {
    const [modal1, setModal1] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [price, setPrice] = useState('4999/-');
    const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleAdminModal = () => {setIsModalOpen(!isModalOpen);};
  const dispatch = useDispatch();

  const getSubscriptionList = useSelector(getSubscriptionListReducer)
console.log("getSubscriptionListgetSubscriptionList",getSubscriptionList)
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

<br/>
{/* <Row >
    <Col md={4}></Col>
    <Col md={4} className="text-center">
    <div className="btn-group" role="group" aria-label="Basic example">
  <button type="button" className="btn text-light btn-lg"
  onClick={()=>setPrice("4999/-")}
  style={{ background : price == "4999/-"?"#542381":"#2a3042"}}
  >Yearly</button>&nbsp;
  <button type="button" className="btn text-light  btn-lg"
    onClick={()=>setPrice("1000/-")}
    style={{ background : price == "1000/-"?"#542381":"#2a3042"}}

  >Monthly</button>
</div>
    </Col>
    <Col md={4}></Col>

</Row>
<br/>
<br/>

<Row>
    <Col md={6} className=" div-col text-capitalize">
    <div className=" insideCard">
    <div className="card-content">
      <h1 className="card-title text-center">Plan A</h1>
  
      <br/>
     

    {data.map((item)=>{
        return  <Row key={item}>
        <Col md={8}>
            <p>{item.service}</p>
        </Col>
        <Col md={4} className="text-end">
        <p>{item.value!= ""? item.value:"1000/-"}</p>

            </Col>
     </Row>
    })}
      <br/>

   <Row className="">
       

       <span> <b className="price">{price} </b></span>
 
  
   </Row>
     <Row className="mt-2 mb-2">
        <Col md={6}>
            <Button className="btn btn-info">
                Purchase Now
            </Button>
        </Col>
     </Row>
    </div>
  </div>
    </Col>

  
    <Col md={6} className=" div-col text-capitalize">
    <div className=" insideCard">
    <div className="card-content">
      <h1 className="card-title text-center">Plan B</h1>
  
      <br/>
     

    {data.map((item)=>{
        return  <Row key={item}>
        <Col md={8}>
            <p>{item.service}</p>
        </Col>
        <Col md={4} className="text-end">
        <p>{item.value!= ""? item.value:"1000/-"}</p>

            </Col>
     </Row>
    })}
      <br/>

   <Row className="">
       

       <span> <b className="price">{price} </b></span>
 
  
   </Row>
     <Row className="mt-2 mb-2">
        <Col md={6}>
            <Button className="btn btn-info">
                Purchase Now
            </Button>
        </Col>
     </Row>
    </div>
  </div>
    </Col>
</Row> */}
<Row>
   {getSubscriptionList != undefined ? getSubscriptionList.map((item)=>{
    return <Col md={4} key={item}>
    <Card className="shadow-lg">
        <CardBody>
           
           

<h5><strong>Plan Name : {item.subscriptionPkgName}</strong></h5>
<h5><strong>Monthly Amount : {item.monthlyAmt}</strong></h5>
<h5><strong>Yearly Amount : {item.yearlyAmt}</strong></h5>
<h5><strong style={{color: item.subscriptionPkgAPIQuota != undefined && item.subscriptionPkgAPIQuota.length != 0? "#00b300":"#ff6600" }}>{item.subscriptionPkgAPIQuota != undefined && item.subscriptionPkgAPIQuota.length != 0? "Paid":"Free"}</strong></h5>

        </CardBody>
    </Card>
</Col>
   }):""} 
</Row>
<br/>
<br/>

       </CardBody>
      </Card>
    </React.Fragment>
  );
};



export default withRouter(MemberCard);
