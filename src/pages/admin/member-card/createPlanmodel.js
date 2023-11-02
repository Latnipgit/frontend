import React, { useEffect, useState, useMemo } from "react"
import PropTypes from "prop-types"
import {
    Button,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
    Table,
    Label,
    Input,
    Row,
    Col,

} from "reactstrap"
import "../../admin/Common.scss"
// import { count } from "console"
var data = [
    {
        "service" :"invoice",
         "value":""
    },
    {
        "service" :"Defaulter search" ,
         "value":""
    },
    {
        "service" :"Defaulter Reporting",
         "value":""
    },
    {
        "service" :"Multiple Business Registration",
         "value":""
    },
    {
        "service" :"Verification of default transaction",
         "value":""
    },
    {
        "service" :"Verification of payment transaction",
         "value":""
    },
    {
        "service" :"View detailed history of defaulter company transactions",
         "value":""
    },
    {
        "service" :"Recovery Services - Online Advertising",
         "value":""
    },
    {
        "service" :"Recovery Services - Legal Service",
         "value":""
    },
    {
        "service" :"Multiple Employee Logins",
         "value":""
    },

]

const CreatePlanModel = props => {
    const [addCount, setaddCount] = useState(10)
    const [individual, setIndividual] = useState(false)
    console.log("addCount", addCount)

    const { isOpen, toggle } = props
  
     const dummyRow =[
       { "service":"",
        "value":""}
     ]
     const handleAddRow =()=>{
         data.push(...dummyRow)

     }
     const handleRemove= ()=>{
        data.pop()
     }
   
     console.log("data", data,dummyRow)
useEffect(()=>{

},[data])
    
    return (
        <Modal
            isOpen={isOpen}
            role="dialog"
            autoFocus={true}
            centered={true}
            className="exampleModal"
            tabIndex="-1"
            toggle={toggle}
            size="lg"
        >
            <div className="modal-content">
                <ModalHeader toggle={toggle}>Create A Plan</ModalHeader>
                <ModalBody>

                    <form>
                        <Row>
                            <Col md={2} className="p-2">
                                <Label className="form-label"><b>Plan Name</b></Label>
                            </Col>
                            <Col md={6}>
                                <Input
                                    className="form-control"
                                    placeholder="Enter Plan Name"
                                    type="text"

                                />
                            </Col>
                            <Col md={4}></Col>
                        </Row>
                    </form>
                    <Row className="mt-5" style={{ padding:'5px 10px'}}>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    {/* <th scope="col">#</th> */}
                                    <th scope="col">Services</th>
                                    <th scope="col">Values</th>
                                </tr>
                            </thead>
                            <tbody>
                               {data.map((item)=>{
                                return  <tr key={item}>
                                <td>
                                    {item.service != ''? item.service:<>
                                    <Input
                                        className="form-control"
                                        placeholder= "Enter Service Name"
                                        type="text"

                                    />
                                    </>}
                                </td>
                                <td>
                                    <Input
                                        className="form-control"
                                        placeholder= {item.service != ''? item.service:"Enter values"}
                                        type="text"

                                    />
                                </td>
                            </tr>
                               })}
                               
                              
                             <tr>
                                <td>
                                    <Button className="btn btn-sm btn-info" onClick={()=>handleAddRow()}>
                                        +Add New Service
                                    </Button>
                                </td>
                                <td>
                                    <Button className="btn btn-sm btn-info" onClick={()=>handleRemove()}>
                                       Remove
                                    </Button>
                                </td>
                             </tr>

                            </tbody>
                        </table>
                    </Row>
                    <Row style={{ padding:'5px 10px'}} >
                        <Col md={12}>

                       
                    <Row className="text-center p-2" style={{ background:'#f0f5f5' }}>
                    <Col md={3}></Col>

                        <Col md={3}><b>Yearly Price</b></Col>
                        <Col md={3}>4999/-</Col>
                        <Col md={3}></Col>

                    </Row>
                    <Row className="text-center p-2" style={{ background:'#f0f5f5'}}>
                    <Col md={3}></Col>

<Col md={3}><b>Monthly Price</b></Col>
<Col md={3}>1000/-</Col>
<Col md={3}></Col>
                      
                    </Row>
                    </Col>
                    </Row>
                    <div className="radio p-3"> 

                 
                    <Row  className="btn-group d-flex">
                        <Col md={2}></Col>
                        <Col md={4}>
                            <Label>
                                <Input type="radio" name="allMember" id="allMember" onChange={()=>setIndividual(false)}/>
                                &nbsp;&nbsp;
                                Plan For All Members
                            </Label>
                        </Col>
                        <Col md={4}>
                        <Label>
                                <Input type="radio" name="allMember" id="individual" onChange={()=>setIndividual(true)}/>
                                &nbsp;&nbsp;
                                Plan For Individual Member
                            </Label>

                        </Col>
                        <Col md={2}></Col>

                    </Row>
                    </div>
                    {individual == true ?
                    <Row>
                    <Col md={4}></Col>

                        <Col md={4}>
                        <Input type="email" placeholder="Enter Email id"/>

                        </Col>
                        <Col md={4}></Col>

                    </Row>
                     :""}
                    <Row className="mt-3">
                        <Col md={4}></Col>
                        <Col md={4} className="text-center">
                            <Button className="btn btn-info">
                            Purchase now
                            </Button>
                        </Col>
                        <Col md={4}></Col>
                    </Row>
                   

                    <Row>

                   
         
                    </Row>



                </ModalBody>
                <ModalFooter>
                    <Button type="button" color="secondary" onClick={toggle}>
                        Close
                    </Button>
                </ModalFooter>
            </div>
        </Modal>
    )
}

CreatePlanModel.propTypes = {
    toggle: PropTypes.func,
    isOpen: PropTypes.bool,
}

export default CreatePlanModel
