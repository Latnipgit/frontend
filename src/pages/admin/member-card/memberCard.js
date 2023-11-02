import React, { useEffect, useState, useMemo } from "react";
import PropTypes from "prop-types";
import withRouter from "components/Common/withRouter";
import { isEmpty } from "lodash";
import {Button,Card,CardBody,Row,Col} from "reactstrap";
import CreatePlanModel from "./createPlanmodel";
import { useDispatch ,useSelector } from "react-redux";

import Moment from 'react-moment';

const MemberCard = props => {
    const [modal1, setModal1] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleAdminModal = () => {setIsModalOpen(!isModalOpen);};
  const dispatch = useDispatch();

    useEffect(() => {

    }, []);


  return (
    <React.Fragment>
               <CreatePlanModel isOpen={isModalOpen} toggle={toggleAdminModal} />

      <Card className="mt-5">
       <CardBody className="mt-5">
<Row>
    <Col md={10}>
        <h5>
            Subscription Plans
        </h5>
    </Col>
    <Col md={2}>
<Button onClick={toggleAdminModal} className="btn btn-info">
create a plan
</Button>
    </Col>
</Row>
       </CardBody>
      </Card>
    </React.Fragment>
  );
};



export default withRouter(MemberCard);
