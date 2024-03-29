import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Alert,
  CardBody,
  Button,
  Label,
  Input,
  FormFeedback,
  Form,
  CardHeader,
} from "reactstrap";

// Formik Validation
import * as Yup from "yup";
import { useFormik } from "formik";

//redux
import { useSelector, useDispatch } from "react-redux";
import withRouter from "components/Common/withRouter";

//Import Breadcrumb
import Breadcrumb from "../../components/Common/Breadcrumb";

import avatar from "../../assets/images/users/avatar-1.jpg";
// actions
import { editProfile, resetProfileFlag } from "../../store/actions";

const UserProfile = () => {

  //meta title
  document.title = "Profile | Bafana - Admin & Dashboard";

  const dispatch = useDispatch();

  const [email, setemail] = useState("");
  const [name, setname] = useState("");
  const [isEdit, setIsEdit] = useState();
  const [image, setImage] = useState();
  const [idx, setidx] = useState(1);
  const [AdminRole, setadminRole] = useState("");

  const { error, success } = useSelector(state => ({
    error: state.Profile.error,
    success: state.Profile.success,
  }));
  useEffect(() => {
    setImage(avatar)
    if (sessionStorage.getItem("Profile") == undefined) {
      if (sessionStorage.getItem("authUser")) {

        const obj = JSON.parse(sessionStorage.getItem("authUser"));
        if (
          process.env.REACT_APP_DEFAULTAUTH === "jwt"
        ) {
          setname(obj.name);
          setemail(obj.userName);
          setidx(obj.id);
          setadminRole(obj.adminRole)
        }
        //   setTimeout(() => {
        //     dispatch(resetProfileFlag());
        //   }, 3000);
      }

    }
    else {
      const profile = JSON.parse(sessionStorage.getItem("Profile"))

      setname(profile.name);
      setemail(profile.userName);
      // setidx(obj.id);
      setadminRole(profile.adminRole)
    }

  }, [dispatch, success]);

  // const validation = useFormik({
  //   // enableReinitialize : use this flag when initial values needs to be changed
  //   enableReinitialize: true,

  //   initialValues: {
  //     username: name || '',
  //     idx: idx || '',
  //   },
  //   validationSchema: Yup.object({
  //     username: Yup.string().required("Please Enter Your UserName"),
  //   }),
  //   onSubmit: (values) => {
  //     dispatch(editProfile(values));
  //   }
  // });
  const handleChange = () => {
    isEdit != undefined && isEdit != false ? setIsEdit(false) : setIsEdit(true)
    return isEdit
  }


  const handlesubmit = () => {
    const payload = {
      name: name,
      // email: email,
      // adminRole: AdminRole,
      idx: idx,
    }
    dispatch(editProfile(payload));
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumb */}
          {/* <Breadcrumb title="Bafana" breadcrumbItem="Profile" /> */}

          <Row>
            <Col lg="12">
              {error && error ? <Alert color="danger">{error}</Alert> : null}
              {success ? <Alert color="success">{success}</Alert> : null}

              <Card>
                <CardHeader className=" align-self-left d-flex " style={{ background: '#FFFFFF' }}>
                  <Breadcrumb title="Bafana" breadcrumbItem="Profile" />



                </CardHeader>
                <CardBody>
                  <div>
                    <div className="ms-3 d-flex">
                      <div>
                        <img
                          src={avatar}
                          alt=""
                          className="avatar-lg img-thumbnail"
                        />

                      </div>
                      <div>
                        <p className="mb-1 ml-3 pl-3 pt-2" style={{ fontSize: '16px' }}>{name}</p>
                        <p className="mb-1 ml-3 pl-3 pt-2" style={{ fontSize: '16px' }}> {AdminRole}</p>

                      </div>
                    </div>

                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              {isEdit == false || isEdit == undefined ?
                <Card className="">
                  <CardHeader style={{ background: '#FFFFFF' }}>
                    <Row >
                      <Col lg={8}>
                        <Breadcrumb title="Bafana" breadcrumbItem="overview" />


                      </Col>
                      <Col lg={4} className="d-flex" style={{ justifyContent: 'end' }}>
                        <button className=" btn btn-info d-flex ml-auto" onClick={() => handleChange()} style={{ background: '', border: 'none', height: '35px', width: '80px', justifyContent: 'center' }}>
                          Edit
                        </button>
                      </Col>

                    </Row>

                  </CardHeader>
                  <CardBody>
                    <div className="flex-grow-1 align-self-center">
                      <div className="text-muted">

                        <Row>
                          <Col lg={4}>
                            <p className="mb-1 ml-3"> Full Name :</p>
                            <p className="mb-1 ml-3">Email Address :</p>
                            {/* <p className="mb-1 ml-3">Id no :</p>  */}
                            <p className="mb-1 ml-3">Role :</p>

                          </Col>
                          <Col lg={4}>
                            <p className="mb-1 ml-3"> {name}</p>
                            <p className="mb-1 ml-3"> {email}</p>
                            {/* <p className="mb-1 ml-3"> #{idx}</p>  */}
                            <p className="mb-1 ml-3"> {AdminRole}</p>



                          </Col>
                        </Row>





                      </div>
                    </div>
                  </CardBody>
                </Card>
                :
                <Card>

                  <CardHeader className=" " style={{ background: '#FFFFFF' }}>
                    <Row >
                      <Col lg={8}>
                        <Breadcrumb title="Bafana" breadcrumbItem="Profile Edit" />


                      </Col>
                      <Col lg={4} className="d-flex" style={{ justifyContent: 'end' }}>
                        <button className=" btn btn-info d-flex ml-auto" onClick={() => handleChange()} style={{ background: '', border: 'none', height: '35px', width: '80px', justifyContent: 'center' }}>
                          close
                        </button>
                      </Col>

                    </Row>

                  </CardHeader>
                  <CardBody>
                    <Row>

                      <Col lg={2}>


                      </Col>
                      <Col lg={8} className=" mx-auto">
                        <br />
                        {/* <button  className=" btn btn-info ml-auto b-1 ml-3 p-2" onClick={()=>handlePhotoChange()} style={{ background:'', border:'none',height:'auto', width:'auto', justifyContent:'center', fontSize:"10px"}}>
  Change image
  </button> */}
                        <form >

                          <label>
                            <span style={{ marginRight: "64px" }}>
                              Name:
                            </span>

                            <input className="p-1" type="text" value={name} disabled style={{ width: '300px' }} />
                          </label>
                          <br />

                          <label>
                            <span style={{ marginRight: "64px" }}>
                              Email:      </span>

                            <input disabled className="p-1" type="text" value={email} style={{ width: '300px' }} />

                          </label>
                          {/* <br/>
      <label>
        <span  style={{ marginRight:"30px"}}>
        ID number :
        </span>
        <input  className="p-1" type="text" value={idx} style={{ width: '300px'}}
       />
        
      </label> */}
                          <br />

                          <label>
                            <span style={{ marginRight: "75px" }}>
                              Role
                            </span>
                            <input className="p-1" type="text" value={AdminRole} style={{ width: '300px' }} onChange={() => {
                              setadminRole(event.target.value)
                            }}
                            />

                          </label>
                          <br />

                          {/* <label>
  <span style={{ marginRight:"75px"}}>
  Profile Photo
    </span>        
 
    <input type="file" accept="image/x-png,image/gif,image/jpeg" onSelect={ (item)=>{
  
      setImage(item.target.value)
    }}/>
  
</label> */}



                        </form>
                        <br />
                        <button className=" btn btn-info " style={{ background: '', border: 'none', justifyContent: 'end' }} onClick={() => handlesubmit()}>
                          submit
                        </button>
                      </Col>
                      <Col lg={2}>

                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              }
            </Col>
          </Row>


        </Container>
      </div>
    </React.Fragment>
  );
};

export default withRouter(UserProfile);
