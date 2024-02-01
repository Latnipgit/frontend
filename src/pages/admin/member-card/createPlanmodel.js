import React, { useEffect, useState, useMemo } from "react"
import './member.css'
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

const data = [
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
    const [individual, setIndividual] = useState(false)
    const { isOpen, toggle } = props
    const [ dataTable, setDataTable ] = useState(data)
     const dummyRow =[
       { "service":"",
        "value":""}
     ]

     const handleAddRow =()=>{
 setDataTable((prevData) => [...prevData, ...dummyRow]); 
     }
   
     const handleRemove = (index) => {
        setDataTable((prevData) => {
            const newData = [...prevData];
            newData.splice(index, 1);
            return newData;
        });
    };
    const [ name, setName ] = useState()
    const [ monthlyAmt, setmonthlyAmt ] = useState()
    const [ yearlyAmt, setyearlyAmt ] = useState()
    const [ monthlyDiscount, setmonthlyDiscount ] = useState()
    const [ yearlyDiscount, setyearlyDiscount ] = useState()

useEffect(()=>{
   
},[dataTable])

console.log("DATATA", dataTable)

const submitCreatePlan =()=>{
    const payload ={
        "subscriptionPkgName": name,
        "monthlyAmt": monthlyAmt,
        "yearlyAmt": yearlyAmt,
        "monthlyDiscount":monthlyDiscount,
        "yearlylyDiscount": yearlyDiscount,
        "subscriptionFor": dataTable
    }
}

    
    return (
        <Modal
            isOpen={isOpen}
            role="dialog"
            autoFocus={true}
            centered={true}
            className="exampleModal"
            tabIndex="-1"
            toggle={toggle}
            size="xl"
        >
            <div className="modal-content">
                <ModalHeader toggle={toggle}>Create A Plan</ModalHeader>
                <ModalBody style={{ padding:'5px 80px'}}>

                    <form>
                        <Row className="mt-3">
                            <Col md={2} className="pt-2">
                                <Label className="form-label"><b className="h5">Plan Name</b></Label>
                            </Col>
                            <Col md={6}>
                                <Input
                                    className="form-control text-capitalize"
                                    placeholder="Enter Plan Name"
                                    type="text"
                                    onChange={()=>setName(e.target.value)}

                                />
                            </Col>
                            <Col md={4}></Col>
                        </Row>
                    </form>
                    <Row className="mt-3" style={{ padding:'5px 10px'}}>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Services</th>
                                    <th scope="col">Values</th>
                                    <th scope="col">Action</th>

                                </tr>
                            </thead>
                            <tbody>
                               {dataTable.map((item, index)=>{
                                return  <tr key={item}>
                                    <td style={{ width:'2%'}}>
                                        #{index+1}
                                    </td>
                                <td style={{ width:'60%'}} className="text-capitalize">
                                    {item.service != ''? item.service:<>
                                    <Input
                                        className="form-control text-capitalize"
                                        placeholder= "Enter Service Name"
                                        type="text"

                                    />
                                    </>}
                                </td>
                                <td>
                                    <Input
                                        className="form-control text-capitalize"
                                        placeholder= "Enter Value"
                                        type="text"

                                    />
                                </td>
                                <td>
                                <Button className="btn btn-sm btn-danger" onClick={()=>handleRemove(index)}>
                                <i className='bx bx-trash'></i> &nbsp;  Remove
                                    </Button>
                                </td>
                            </tr>
                               })}
                               
                              
                             <tr>
                                <td></td>
                                <td>
                                    <Button className="btn btn-sm btn-info" onClick={()=>handleAddRow()}>
                                    <i className='bx bx-plus'></i> &nbsp;Add New Service
                                    </Button>
                                </td>
                               
                             </tr>

                            </tbody>
                        </table>
                    </Row>
                    <Row style={{ padding:'5px 10px'}} >
                        <Col md={12}>

                       
                    <Row className=" p-2" style={{ background:'#f0f5f5' }}>

                        <Col md={2} className="pt-2"><b>Yearly Price</b></Col>
                        <Col md={3}>
                        <Input
                                        className="form-control"
                                        placeholder= "Enter Yearly Price"
                                        type="number"     
                                                                       onChange={()=>setyearlyAmt(e.target.value)}


                                    />
                        </Col>
                        <Col md={7}></Col>

                    </Row>
                    <Row className=" p-2" style={{ background:'#f0f5f5'}}>
                  
                    <Col md={2} className="pt-2"><b>Monthly Price</b></Col>
                        <Col md={3}>
                        <Input
                                        className="form-control"
                                        placeholder= "Enter Monthly Price"
                                        type="number"
                                        onChange={()=>setmonthlyAmt(e.target.value)}


                                    />
                        </Col>
                        <Col md={7}></Col>

                    </Row>
                    </Col>
                    </Row>
                    <div className="radio p-3"> 

                 
                    <Row  className="btn-group d-flex">
                        <Col md={4}>
                            <Label>
                                <Input type="radio" name="allMember" className="border border-dark" id="allMember" onChange={()=>setIndividual(false)}/>
                                &nbsp;&nbsp;
                                Plan For All Members
                            </Label>
                            <br/>
                            <Label>
                                <Input type="radio" name="allMember" id="individual" className="border border-dark" onChange={()=>setIndividual(true)}/>
                                &nbsp;&nbsp;
                                Plan For Individual Member
                            </Label>
                        </Col>
                        <Col md={4} className="pt-3">
                        {individual == true ?
               

                       
                        <Input type="email" placeholder="Enter Email id"/>

                      

         
                     :""}

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
